import MachineTypesService from 'src/modules/machineTypes/machineTypesService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'MACHINETYPES_FORM';

const machineTypesFormActions = {
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
        type: machineTypesFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await MachineTypesService.find(id);
      }

      dispatch({
        type: machineTypesFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: machineTypesFormActions.INIT_ERROR,
      });

      getHistory().push('/machine-types');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: machineTypesFormActions.CREATE_STARTED,
      });

      await MachineTypesService.create(values);

      dispatch({
        type: machineTypesFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.machineTypes.create.success'),
      );

      getHistory().push('/machine-types');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: machineTypesFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: machineTypesFormActions.UPDATE_STARTED,
      });

      await MachineTypesService.update(id, values);

      dispatch({
        type: machineTypesFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.machineTypes.update.success'),
      );

      getHistory().push('/machine-types');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: machineTypesFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default machineTypesFormActions;
