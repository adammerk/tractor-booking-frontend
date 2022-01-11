import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/preferedBookingChannel/importer/preferedBookingChannelImporterSelectors';
import PreferedBookingChannelService from 'src/modules/preferedBookingChannel/preferedBookingChannelService';
import fields from 'src/modules/preferedBookingChannel/importer/preferedBookingChannelImporterFields';
import { i18n } from 'src/i18n';

const preferedBookingChannelImporterActions = importerActions(
  'PREFEREDBOOKINGCHANNEL_IMPORTER',
  selectors,
  PreferedBookingChannelService.import,
  fields,
  i18n('entities.preferedBookingChannel.importer.fileName'),
);

export default preferedBookingChannelImporterActions;