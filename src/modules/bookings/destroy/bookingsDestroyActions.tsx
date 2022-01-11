import listActions from 'src/modules/bookings/list/bookingsListActions';
import BookingsService from 'src/modules/bookings/bookingsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'BOOKINGS_DESTROY';

const bookingsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: bookingsDestroyActions.DESTROY_STARTED,
      });

      await BookingsService.destroyAll([id]);

      dispatch({
        type: bookingsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.bookings.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/bookings');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: bookingsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: bookingsDestroyActions.DESTROY_ALL_STARTED,
      });

      await BookingsService.destroyAll(ids);

      dispatch({
        type: bookingsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.bookings.destroyAll.success'),
      );

      getHistory().push('/bookings');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: bookingsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default bookingsDestroyActions;
