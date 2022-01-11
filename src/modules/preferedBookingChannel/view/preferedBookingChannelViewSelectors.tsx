import { createSelector } from 'reselect';

const selectRaw = (state) => state.preferedBookingChannel.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const preferedBookingChannelViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default preferedBookingChannelViewSelectors;
