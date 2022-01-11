import BookingsService from 'src/modules/bookings/bookingsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'BOOKINGS_VIEW';

const bookingsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: bookingsViewActions.FIND_STARTED,
      });

      const record = await BookingsService.find(id);

      dispatch({
        type: bookingsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: bookingsViewActions.FIND_ERROR,
      });

      getHistory().push('/bookings');
    }
  },
};

export default bookingsViewActions;
