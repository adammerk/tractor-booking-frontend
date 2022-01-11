import { createSelector } from 'reselect';

const selectRaw = (state) => state.machineTypes.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const machineTypesViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default machineTypesViewSelectors;
