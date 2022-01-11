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
import actions from 'src/modules/locations/list/locationsListActions';
import selectors from 'src/modules/locations/list/locationsListSelectors';
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

const schema = yup.object().shape({
  locationName: yupFilterSchemas.string(
    i18n('entities.locations.fields.locationName'),
  ),
  addressLine1: yupFilterSchemas.string(
    i18n('entities.locations.fields.addressLine1'),
  ),
  addressLine2: yupFilterSchemas.string(
    i18n('entities.locations.fields.addressLine2'),
  ),
  contactPhone: yupFilterSchemas.string(
    i18n('entities.locations.fields.contactPhone'),
  ),
  contactEmail: yupFilterSchemas.string(
    i18n('entities.locations.fields.contactEmail'),
  ),
  geoLocation: yupFilterSchemas.string(
    i18n('entities.locations.fields.geoLocation'),
  ),
});

const emptyValues = {
  locationName: null,
  addressLine1: null,
  addressLine2: null,
  contactPhone: null,
  contactEmail: null,
  geoLocation: null,
}

const previewRenders = {
  locationName: {
    label: i18n('entities.locations.fields.locationName'),
    render: filterRenders.generic(),
  },
  addressLine1: {
    label: i18n('entities.locations.fields.addressLine1'),
    render: filterRenders.generic(),
  },
  addressLine2: {
    label: i18n('entities.locations.fields.addressLine2'),
    render: filterRenders.generic(),
  },
  contactPhone: {
    label: i18n('entities.locations.fields.contactPhone'),
    render: filterRenders.generic(),
  },
  contactEmail: {
    label: i18n('entities.locations.fields.contactEmail'),
    render: filterRenders.generic(),
  },
  geoLocation: {
    label: i18n('entities.locations.fields.geoLocation'),
    render: filterRenders.generic(),
  },
}

function LocationsListFilter(props) {
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
                    name="locationName"
                    label={i18n('entities.locations.fields.locationName')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="addressLine1"
                    label={i18n('entities.locations.fields.addressLine1')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="addressLine2"
                    label={i18n('entities.locations.fields.addressLine2')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="contactPhone"
                    label={i18n('entities.locations.fields.contactPhone')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="contactEmail"
                    label={i18n('entities.locations.fields.contactEmail')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="geoLocation"
                    label={i18n('entities.locations.fields.geoLocation')}      
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

export default LocationsListFilter;