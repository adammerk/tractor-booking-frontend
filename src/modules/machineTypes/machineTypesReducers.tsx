import list from 'src/modules/machineTypes/list/machineTypesListReducers';
import form from 'src/modules/machineTypes/form/machineTypesFormReducers';
import view from 'src/modules/machineTypes/view/machineTypesViewReducers';
import destroy from 'src/modules/machineTypes/destroy/machineTypesDestroyReducers';
import importerReducer from 'src/modules/machineTypes/importer/machineTypesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
