import { createSelector } from 'reselect';

const selectRaw = (state) => state.bookings.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const bookingsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default bookingsViewSelectors;
