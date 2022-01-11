import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/machineTypes/importer/machineTypesImporterSelectors';
import MachineTypesService from 'src/modules/machineTypes/machineTypesService';
import fields from 'src/modules/machineTypes/importer/machineTypesImporterFields';
import { i18n } from 'src/i18n';

const machineTypesImporterActions = importerActions(
  'MACHINETYPES_IMPORTER',
  selectors,
  MachineTypesService.import,
  fields,
  i18n('entities.machineTypes.importer.fileName'),
);

export default machineTypesImporterActions;