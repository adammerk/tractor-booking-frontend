import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.machines.fields.id'),
  },
  {
    name: 'machineType',
    label: i18n('entities.machines.fields.machineType'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'location',
    label: i18n('entities.machines.fields.location'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'name',
    label: i18n('entities.machines.fields.name'),
  },
  {
    name: 'description',
    label: i18n('entities.machines.fields.description'),
  },
  {
    name: 'bookable',
    label: i18n('entities.machines.fields.bookable'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'unitPrice',
    label: i18n('entities.machines.fields.unitPrice'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'photos',
    label: i18n('entities.machines.fields.photos'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.machines.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.machines.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
