import { createSelector } from 'reselect';

const selectRaw = (state) => state.preferedBookingChannel.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const preferedBookingChannelDestroySelectors = {
  selectLoading,
};

export default preferedBookingChannelDestroySelectors;
