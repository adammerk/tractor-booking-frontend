import { createSelector } from 'reselect';

const selectRaw = (state) => state.mobilePhoneStatus.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const mobilePhoneStatusDestroySelectors = {
  selectLoading,
};

export default mobilePhoneStatusDestroySelectors;
