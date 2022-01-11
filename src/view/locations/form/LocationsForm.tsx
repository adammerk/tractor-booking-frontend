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

const schema = yup.object().shape({
  locationName: yupFormSchemas.string(
    i18n('entities.locations.fields.locationName'),
    {
      "required": true
    },
  ),
  addressLine1: yupFormSchemas.string(
    i18n('entities.locations.fields.addressLine1'),
    {
      "required": true
    },
  ),
  addressLine2: yupFormSchemas.string(
    i18n('entities.locations.fields.addressLine2'),
    {},
  ),
  contactPhone: yupFormSchemas.string(
    i18n('entities.locations.fields.contactPhone'),
    {},
  ),
  contactEmail: yupFormSchemas.string(
    i18n('entities.locations.fields.contactEmail'),
    {},
  ),
  geoLocation: yupFormSchemas.string(
    i18n('entities.locations.fields.geoLocation'),
    {},
  ),
});

function LocationsForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      locationName: record.locationName,
      addressLine1: record.addressLine1,
      addressLine2: record.addressLine2,
      contactPhone: record.contactPhone,
      contactEmail: record.contactEmail,
      geoLocation: record.geoLocation,
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
              <InputFormItem
                name="locationName"
                label={i18n('entities.locations.fields.locationName')}  
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="addressLine1"
                label={i18n('entities.locations.fields.addressLine1')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="addressLine2"
                label={i18n('entities.locations.fields.addressLine2')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="contactPhone"
                label={i18n('entities.locations.fields.contactPhone')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="contactEmail"
                label={i18n('entities.locations.fields.contactEmail')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="geoLocation"
                label={i18n('entities.locations.fields.geoLocation')}  
                required={false}
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

export default LocationsForm;
