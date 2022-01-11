import list from 'src/modules/machines/list/machinesListReducers';
import form from 'src/modules/machines/form/machinesFormReducers';
import view from 'src/modules/machines/view/machinesViewReducers';
import destroy from 'src/modules/machines/destroy/machinesDestroyReducers';
import importerReducer from 'src/modules/machines/importer/machinesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
