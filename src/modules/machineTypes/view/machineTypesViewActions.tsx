import MachineTypesService from 'src/modules/machineTypes/machineTypesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'MACHINETYPES_VIEW';

const machineTypesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: machineTypesViewActions.FIND_STARTED,
      });

      const record = await MachineTypesService.find(id);

      dispatch({
        type: machineTypesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: machineTypesViewActions.FIND_ERROR,
      });

      getHistory().push('/machine-types');
    }
  },
};

export default machineTypesViewActions;
