import list from 'src/modules/mobilePhoneStatus/list/mobilePhoneStatusListReducers';
import form from 'src/modules/mobilePhoneStatus/form/mobilePhoneStatusFormReducers';
import view from 'src/modules/mobilePhoneStatus/view/mobilePhoneStatusViewReducers';
import destroy from 'src/modules/mobilePhoneStatus/destroy/mobilePhoneStatusDestroyReducers';
import importerReducer from 'src/modules/mobilePhoneStatus/importer/mobilePhoneStatusImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
