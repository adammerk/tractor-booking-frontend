import { createSelector } from 'reselect';

const selectRaw = (state) => state.mobilePhoneStatus.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const mobilePhoneStatusViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default mobilePhoneStatusViewSelectors;
