import list from 'src/modules/bookings/list/bookingsListReducers';
import form from 'src/modules/bookings/form/bookingsFormReducers';
import view from 'src/modules/bookings/view/bookingsViewReducers';
import destroy from 'src/modules/bookings/destroy/bookingsDestroyReducers';
import importerReducer from 'src/modules/bookings/importer/bookingsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
