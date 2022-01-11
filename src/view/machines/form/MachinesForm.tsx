import { Button, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import MachineTypesAutocompleteFormItem from 'src/view/machineTypes/autocomplete/MachineTypesAutocompleteFormItem';
import LocationsAutocompleteFormItem from 'src/view/locations/autocomplete/LocationsAutocompleteFormItem';

const schema = yup.object().shape({
  machineType: yupFormSchemas.relationToOne(
    i18n('entities.machines.fields.machineType'),
    {
      "required": true
    },
  ),
  location: yupFormSchemas.relationToOne(
    i18n('entities.machines.fields.location'),
    {
      "required": true
    },
  ),
  name: yupFormSchemas.string(
    i18n('entities.machines.fields.name'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.machines.fields.description'),
    {
      "max": 21845
    },
  ),
  bookable: yupFormSchemas.boolean(
    i18n('entities.machines.fields.bookable'),
    {},
  ),
  unitPrice: yupFormSchemas.decimal(
    i18n('entities.machines.fields.unitPrice'),
    {
      "required": true,
      "scale": 2,
      "min": 0.01,
      "max": 99999
    },
  ),
  photos: yupFormSchemas.images(
    i18n('entities.machines.fields.photos'),
    {
      "max": 3
    },
  ),
});

function MachinesForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      machineType: record.machineType,
      location: record.location,
      name: record.name,
      description: record.description,
      bookable: record.bookable,
      unitPrice: record.unitPrice,
      photos: record.photos || [],
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { saveLoading, modal } = props;

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <MachineTypesAutocompleteFormItem  
                name="machineType"
                label={i18n('entities.machines.fields.machineType')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <LocationsAutocompleteFormItem  
                name="location"
                label={i18n('entities.machines.fields.location')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="name"
                label={i18n('entities.machines.fields.name')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <TextAreaFormItem
                name="description"
                label={i18n('entities.machines.fields.description')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="bookable"
                label={i18n('entities.machines.fields.bookable')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="unitPrice"
                label={i18n('entities.machines.fields.unitPrice')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ImagesFormItem
                name="photos"
                label={i18n('entities.machines.fields.photos')}
                required={false}
                storage={Storage.values.machinesPhotos}
                max={3}
              />
            </Grid>
          </Grid>
          <FormButtons
            style={{
              flexDirection: modal
                ? 'row-reverse'
                : undefined,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
              startIcon={<SaveIcon />}
              size="small"
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              type="button"
              startIcon={<UndoIcon />}
              size="small"
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel ? (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                type="button"
                startIcon={<CloseIcon />}
                size="small"
              >
                {i18n('common.cancel')}
              </Button>
            ) : null}
          </FormButtons>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default MachinesForm;
