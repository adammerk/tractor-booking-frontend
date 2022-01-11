import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/machines/importer/machinesImporterSelectors';
import MachinesService from 'src/modules/machines/machinesService';
import fields from 'src/modules/machines/importer/machinesImporterFields';
import { i18n } from 'src/i18n';

const machinesImporterActions = importerActions(
  'MACHINES_IMPORTER',
  selectors,
  MachinesService.import,
  fields,
  i18n('entities.machines.importer.fileName'),
);

export default machinesImporterActions;