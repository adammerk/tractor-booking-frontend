import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'locationName',
    label: i18n('entities.locations.fields.locationName'),
    schema: schemas.string(
      i18n('entities.locations.fields.locationName'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'addressLine1',
    label: i18n('entities.locations.fields.addressLine1'),
    schema: schemas.string(
      i18n('entities.locations.fields.addressLine1'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'addressLine2',
    label: i18n('entities.locations.fields.addressLine2'),
    schema: schemas.string(
      i18n('entities.locations.fields.addressLine2'),
      {},
    ),
  },
  {
    name: 'contactPhone',
    label: i18n('entities.locations.fields.contactPhone'),
    schema: schemas.string(
      i18n('entities.locations.fields.contactPhone'),
      {},
    ),
  },
  {
    name: 'contactEmail',
    label: i18n('entities.locations.fields.contactEmail'),
    schema: schemas.string(
      i18n('entities.locations.fields.contactEmail'),
      {},
    ),
  },
  {
    name: 'geoLocation',
    label: i18n('entities.locations.fields.geoLocation'),
    schema: schemas.string(
      i18n('entities.locations.fields.geoLocation'),
      {},
    ),
  },
];