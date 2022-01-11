import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.locations.fields.id'),
  },
  {
    name: 'locationName',
    label: i18n('entities.locations.fields.locationName'),
  },
  {
    name: 'addressLine1',
    label: i18n('entities.locations.fields.addressLine1'),
  },
  {
    name: 'addressLine2',
    label: i18n('entities.locations.fields.addressLine2'),
  },
  {
    name: 'contactPhone',
    label: i18n('entities.locations.fields.contactPhone'),
  },
  {
    name: 'contactEmail',
    label: i18n('entities.locations.fields.contactEmail'),
  },
  {
    name: 'geoLocation',
    label: i18n('entities.locations.fields.geoLocation'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.locations.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.locations.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
