import { createSelector } from 'reselect';

const selectRaw = (state) => state.machines.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const machinesViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default machinesViewSelectors;
