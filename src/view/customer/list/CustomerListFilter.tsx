import {
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/customer/list/customerListActions';
import selectors from 'src/modules/customer/list/customerListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import FilterAccordion from 'src/view/shared/filter/FilterAccordion';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import MobilePhoneStatusAutocompleteFormItem from 'src/view/mobilePhoneStatus/autocomplete/MobilePhoneStatusAutocompleteFormItem';
import PreferedBookingChannelAutocompleteFormItem from 'src/view/preferedBookingChannel/autocomplete/PreferedBookingChannelAutocompleteFormItem';

const schema = yup.object().shape({
  name: yupFilterSchemas.string(
    i18n('entities.customer.fields.name'),
  ),
  birthdateRange: yupFilterSchemas.dateRange(
    i18n('entities.customer.fields.birthdateRange'),
  ),
  addressLine1: yupFilterSchemas.string(
    i18n('entities.customer.fields.addressLine1'),
  ),
  addressLine2: yupFilterSchemas.string(
    i18n('entities.customer.fields.addressLine2'),
  ),
  geoLocation: yupFilterSchemas.string(
    i18n('entities.customer.fields.geoLocation'),
  ),
  mobilePhoneNumber: yupFilterSchemas.string(
    i18n('entities.customer.fields.mobilePhoneNumber'),
  ),
  mobilePhoneStatus: yupFilterSchemas.relationToOne(
    i18n('entities.customer.fields.mobilePhoneStatus'),
  ),
  preferedBookingChannel: yupFilterSchemas.relationToOne(
    i18n('entities.customer.fields.preferedBookingChannel'),
  ),
});

const emptyValues = {
  name: null,
  birthdateRange: [],
  addressLine1: null,
  addressLine2: null,
  geoLocation: null,
  mobilePhoneNumber: null,
  mobilePhoneStatus: null,
  preferedBookingChannel: null,
}

const previewRenders = {
  name: {
    label: i18n('entities.customer.fields.name'),
    render: filterRenders.generic(),
  },
  birthdateRange: {
    label: i18n('entities.customer.fields.birthdateRange'),
    render: filterRenders.dateRange(),
  },
  addressLine1: {
    label: i18n('entities.customer.fields.addressLine1'),
    render: filterRenders.generic(),
  },
  addressLine2: {
    label: i18n('entities.customer.fields.addressLine2'),
    render: filterRenders.generic(),
  },
  geoLocation: {
    label: i18n('entities.customer.fields.geoLocation'),
    render: filterRenders.generic(),
  },
  mobilePhoneNumber: {
    label: i18n('entities.customer.fields.mobilePhoneNumber'),
    render: filterRenders.generic(),
  },
  mobilePhoneStatus: {
      label: i18n('entities.customer.fields.mobilePhoneStatus'),
      render: filterRenders.relationToOne(),
    },
  preferedBookingChannel: {
      label: i18n('entities.customer.fields.preferedBookingChannel'),
      render: filterRenders.relationToOne(),
    },
}

function CustomerListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  return (
    <FilterWrapper>
      <FilterAccordion
        expanded={expanded}
        onChange={(event, isExpanded) =>
          setExpanded(isExpanded)
        }
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FilterPreview
            values={rawFilter}
            renders={previewRenders}
            expanded={expanded}
            onRemove={onRemove}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="name"
                    label={i18n('entities.customer.fields.name')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="birthdateRange"
                    label={i18n('entities.customer.fields.birthdateRange')}    
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="addressLine1"
                    label={i18n('entities.customer.fields.addressLine1')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="addressLine2"
                    label={i18n('entities.customer.fields.addressLine2')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="geoLocation"
                    label={i18n('entities.customer.fields.geoLocation')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="mobilePhoneNumber"
                    label={i18n('entities.customer.fields.mobilePhoneNumber')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <MobilePhoneStatusAutocompleteFormItem  
                    name="mobilePhoneStatus"
                    label={i18n('entities.customer.fields.mobilePhoneStatus')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <PreferedBookingChannelAutocompleteFormItem  
                    name="preferedBookingChannel"
                    label={i18n('entities.customer.fields.preferedBookingChannel')}        
                  />
                </Grid>
              </Grid>

              <FilterButtons>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={props.loading}
                  startIcon={<SearchIcon />}
                  size="small"
                >
                  {i18n('common.search')}
                </Button>

                <Button
                  type="button"
                  onClick={onReset}
                  disabled={props.loading}
                  startIcon={<UndoIcon />}
                  size="small"
                >
                  {i18n('common.reset')}
                </Button>
              </FilterButtons>
            </form>
          </FormProvider>
        </AccordionDetails>
      </FilterAccordion>
    </FilterWrapper>
  );
}

export default CustomerListFilter;