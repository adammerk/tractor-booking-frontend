import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.machineTypes.fields.id'),
  },
  {
    name: 'machineType',
    label: i18n('entities.machineTypes.fields.machineType'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.machineTypes.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.machineTypes.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
