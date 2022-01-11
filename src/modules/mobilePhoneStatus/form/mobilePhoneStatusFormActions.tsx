import MobilePhoneStatusService from 'src/modules/mobilePhoneStatus/mobilePhoneStatusService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'MOBILEPHONESTATUS_FORM';

const mobilePhoneStatusFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: mobilePhoneStatusFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await MobilePhoneStatusService.find(id);
      }

      dispatch({
        type: mobilePhoneStatusFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: mobilePhoneStatusFormActions.INIT_ERROR,
      });

      getHistory().push('/mobile-phone-status');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: mobilePhoneStatusFormActions.CREATE_STARTED,
      });

      await MobilePhoneStatusService.create(values);

      dispatch({
        type: mobilePhoneStatusFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.mobilePhoneStatus.create.success'),
      );

      getHistory().push('/mobile-phone-status');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: mobilePhoneStatusFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: mobilePhoneStatusFormActions.UPDATE_STARTED,
      });

      await MobilePhoneStatusService.update(id, values);

      dispatch({
        type: mobilePhoneStatusFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.mobilePhoneStatus.update.success'),
      );

      getHistory().push('/mobile-phone-status');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: mobilePhoneStatusFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default mobilePhoneStatusFormActions;
