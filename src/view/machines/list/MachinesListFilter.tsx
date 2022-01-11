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
import actions from 'src/modules/machines/list/machinesListActions';
import selectors from 'src/modules/machines/list/machinesListSelectors';
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
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import MachineTypesAutocompleteFormItem from 'src/view/machineTypes/autocomplete/MachineTypesAutocompleteFormItem';
import LocationsAutocompleteFormItem from 'src/view/locations/autocomplete/LocationsAutocompleteFormItem';

const schema = yup.object().shape({
  machineType: yupFilterSchemas.relationToOne(
    i18n('entities.machines.fields.machineType'),
  ),
  location: yupFilterSchemas.relationToOne(
    i18n('entities.machines.fields.location'),
  ),
  name: yupFilterSchemas.string(
    i18n('entities.machines.fields.name'),
  ),
  bookable: yupFilterSchemas.boolean(
    i18n('entities.machines.fields.bookable'),
  ),
  unitPriceRange: yupFilterSchemas.decimalRange(
    i18n('entities.machines.fields.unitPriceRange'),
  ),
});

const emptyValues = {
  machineType: null,
  location: null,
  name: null,
  bookable: null,
  unitPriceRange: [],
}

const previewRenders = {
  machineType: {
      label: i18n('entities.machines.fields.machineType'),
      render: filterRenders.relationToOne(),
    },
  location: {
      label: i18n('entities.machines.fields.location'),
      render: filterRenders.relationToOne(),
    },
  name: {
    label: i18n('entities.machines.fields.name'),
    render: filterRenders.generic(),
  },
  bookable: {
    label: i18n('entities.machines.fields.bookable'),
    render: filterRenders.boolean(),
  },
  unitPriceRange: {
    label: i18n('entities.machines.fields.unitPriceRange'),
    render: filterRenders.decimalRange(2),
  },
}

function MachinesListFilter(props) {
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
                  <MachineTypesAutocompleteFormItem  
                    name="machineType"
                    label={i18n('entities.machines.fields.machineType')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <LocationsAutocompleteFormItem  
                    name="location"
                    label={i18n('entities.machines.fields.location')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="name"
                    label={i18n('entities.machines.fields.name')}      
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="bookable"
                    label={i18n('entities.machines.fields.bookable')}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="unitPriceRange"
                    label={i18n('entities.machines.fields.unitPriceRange')}      
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

export default MachinesListFilter;