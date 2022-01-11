import { createSelector } from 'reselect';

const selectRaw = (state) => state.machines.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const machinesDestroySelectors = {
  selectLoading,
};

export default machinesDestroySelectors;
