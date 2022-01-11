import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/bookings/importer/bookingsImporterSelectors';
import BookingsService from 'src/modules/bookings/bookingsService';
import fields from 'src/modules/bookings/importer/bookingsImporterFields';
import { i18n } from 'src/i18n';

const bookingsImporterActions = importerActions(
  'BOOKINGS_IMPORTER',
  selectors,
  BookingsService.import,
  fields,
  i18n('entities.bookings.importer.fileName'),
);

export default bookingsImporterActions;