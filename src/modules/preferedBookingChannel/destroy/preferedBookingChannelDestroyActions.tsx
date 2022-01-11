import listActions from 'src/modules/preferedBookingChannel/list/preferedBookingChannelListActions';
import PreferedBookingChannelService from 'src/modules/preferedBookingChannel/preferedBookingChannelService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PREFEREDBOOKINGCHANNEL_DESTROY';

const preferedBookingChannelDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: preferedBookingChannelDestroyActions.DESTROY_STARTED,
      });

      await PreferedBookingChannelService.destroyAll([id]);

      dispatch({
        type: preferedBookingChannelDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.preferedBookingChannel.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/prefered-booking-channel');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: preferedBookingChannelDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: preferedBookingChannelDestroyActions.DESTROY_ALL_STARTED,
      });

      await PreferedBookingChannelService.destroyAll(ids);

      dispatch({
        type: preferedBookingChannelDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.preferedBookingChannel.destroyAll.success'),
      );

      getHistory().push('/prefered-booking-channel');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: preferedBookingChannelDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default preferedBookingChannelDestroyActions;
