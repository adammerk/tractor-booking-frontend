import listActions from 'src/modules/mobilePhoneStatus/list/mobilePhoneStatusListActions';
import MobilePhoneStatusService from 'src/modules/mobilePhoneStatus/mobilePhoneStatusService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'MOBILEPHONESTATUS_DESTROY';

const mobilePhoneStatusDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: mobilePhoneStatusDestroyActions.DESTROY_STARTED,
      });

      await MobilePhoneStatusService.destroyAll([id]);

      dispatch({
        type: mobilePhoneStatusDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.mobilePhoneStatus.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/mobile-phone-status');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: mobilePhoneStatusDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: mobilePhoneStatusDestroyActions.DESTROY_ALL_STARTED,
      });

      await MobilePhoneStatusService.destroyAll(ids);

      dispatch({
        type: mobilePhoneStatusDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.mobilePhoneStatus.destroyAll.success'),
      );

      getHistory().push('/mobile-phone-status');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: mobilePhoneStatusDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default mobilePhoneStatusDestroyActions;
