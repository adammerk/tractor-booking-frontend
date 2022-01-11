import MobilePhoneStatusService from 'src/modules/mobilePhoneStatus/mobilePhoneStatusService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'MOBILEPHONESTATUS_VIEW';

const mobilePhoneStatusViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: mobilePhoneStatusViewActions.FIND_STARTED,
      });

      const record = await MobilePhoneStatusService.find(id);

      dispatch({
        type: mobilePhoneStatusViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: mobilePhoneStatusViewActions.FIND_ERROR,
      });

      getHistory().push('/mobile-phone-status');
    }
  },
};

export default mobilePhoneStatusViewActions;
