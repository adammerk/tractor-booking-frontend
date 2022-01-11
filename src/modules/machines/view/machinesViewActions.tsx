import MachinesService from 'src/modules/machines/machinesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'MACHINES_VIEW';

const machinesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: machinesViewActions.FIND_STARTED,
      });

      const record = await MachinesService.find(id);

      dispatch({
        type: machinesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: machinesViewActions.FIND_ERROR,
      });

      getHistory().push('/machines');
    }
  },
};

export default machinesViewActions;
