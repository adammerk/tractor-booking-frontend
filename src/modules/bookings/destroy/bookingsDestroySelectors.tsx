import { createSelector } from 'reselect';

const selectRaw = (state) => state.bookings.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const bookingsDestroySelectors = {
  selectLoading,
};

export default bookingsDestroySelectors;
