import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/mobilePhoneStatus/importer/mobilePhoneStatusImporterSelectors';
import MobilePhoneStatusService from 'src/modules/mobilePhoneStatus/mobilePhoneStatusService';
import fields from 'src/modules/mobilePhoneStatus/importer/mobilePhoneStatusImporterFields';
import { i18n } from 'src/i18n';

const mobilePhoneStatusImporterActions = importerActions(
  'MOBILEPHONESTATUS_IMPORTER',
  selectors,
  MobilePhoneStatusService.import,
  fields,
  i18n('entities.mobilePhoneStatus.importer.fileName'),
);

export default mobilePhoneStatusImporterActions;