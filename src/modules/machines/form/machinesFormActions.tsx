import MachinesService from 'src/modules/machines/machinesService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'MACHINES_FORM';

const machinesFormActions = {
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
        type: machinesFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await MachinesService.find(id);
      }

      dispatch({
        type: machinesFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: machinesFormActions.INIT_ERROR,
      });

      getHistory().push('/machines');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: machinesFormActions.CREATE_STARTED,
      });

      await MachinesService.create(values);

      dispatch({
        type: machinesFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.machines.create.success'),
      );

      getHistory().push('/machines');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: machinesFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: machinesFormActions.UPDATE_STARTED,
      });

      await MachinesService.update(id, values);

      dispatch({
        type: machinesFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.machines.update.success'),
      );

      getHistory().push('/machines');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: machinesFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default machinesFormActions;
