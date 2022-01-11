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
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import MobilePhoneStatusAutocompleteFormItem from 'src/view/mobilePhoneStatus/autocomplete/MobilePhoneStatusAutocompleteFormItem';
import PreferedBookingChannelAutocompleteFormItem from 'src/view/preferedBookingChannel/autocomplete/PreferedBookingChannelAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.customer.fields.name'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  birthdate: yupFormSchemas.date(
    i18n('entities.customer.fields.birthdate'),
    {},
  ),
  addressLine1: yupFormSchemas.string(
    i18n('entities.customer.fields.addressLine1'),
    {},
  ),
  addressLine2: yupFormSchemas.string(
    i18n('entities.customer.fields.addressLine2'),
    {},
  ),
  geoLocation: yupFormSchemas.string(
    i18n('entities.customer.fields.geoLocation'),
    {},
  ),
  mobilePhoneNumber: yupFormSchemas.string(
    i18n('entities.customer.fields.mobilePhoneNumber'),
    {},
  ),
  mobilePhoneStatus: yupFormSchemas.relationToOne(
    i18n('entities.customer.fields.mobilePhoneStatus'),
    {},
  ),
  preferedBookingChannel: yupFormSchemas.relationToOne(
    i18n('entities.customer.fields.preferedBookingChannel'),
    {},
  ),
});

function CustomerForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      birthdate: record.birthdate ? moment(record.birthdate, 'YYYY-MM-DD') : null,
      addressLine1: record.addressLine1,
      addressLine2: record.addressLine2,
      geoLocation: record.geoLocation,
      mobilePhoneNumber: record.mobilePhoneNumber,
      mobilePhoneStatus: record.mobilePhoneStatus,
      preferedBookingChannel: record.preferedBookingChannel,
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
                name="name"
                label={i18n('entities.customer.fields.name')}  
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="birthdate"
                label={i18n('entities.customer.fields.birthdate')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="addressLine1"
                label={i18n('entities.customer.fields.addressLine1')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="addressLine2"
                label={i18n('entities.customer.fields.addressLine2')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="geoLocation"
                label={i18n('entities.customer.fields.geoLocation')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="mobilePhoneNumber"
                label={i18n('entities.customer.fields.mobilePhoneNumber')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <MobilePhoneStatusAutocompleteFormItem  
                name="mobilePhoneStatus"
                label={i18n('entities.customer.fields.mobilePhoneStatus')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <PreferedBookingChannelAutocompleteFormItem  
                name="preferedBookingChannel"
                label={i18n('entities.customer.fields.preferedBookingChannel')}
                required={false}
                showCreate={!props.modal}
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

export default CustomerForm;
