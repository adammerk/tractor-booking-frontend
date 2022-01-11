import list from 'src/modules/preferedBookingChannel/list/preferedBookingChannelListReducers';
import form from 'src/modules/preferedBookingChannel/form/preferedBookingChannelFormReducers';
import view from 'src/modules/preferedBookingChannel/view/preferedBookingChannelViewReducers';
import destroy from 'src/modules/preferedBookingChannel/destroy/preferedBookingChannelDestroyReducers';
import importerReducer from 'src/modules/preferedBookingChannel/importer/preferedBookingChannelImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
