import { createSelector } from 'reselect';

const selectRaw = (state) => state.machineTypes.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const machineTypesDestroySelectors = {
  selectLoading,
};

export default machineTypesDestroySelectors;
