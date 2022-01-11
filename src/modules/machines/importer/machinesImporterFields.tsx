import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'machineType',
    label: i18n('entities.machines.fields.machineType'),
    schema: schemas.relationToOne(
      i18n('entities.machines.fields.machineType'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'location',
    label: i18n('entities.machines.fields.location'),
    schema: schemas.relationToOne(
      i18n('entities.machines.fields.location'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'name',
    label: i18n('entities.machines.fields.name'),
    schema: schemas.string(
      i18n('entities.machines.fields.name'),
      {
        "required": true,
        "min": 2,
        "max": 255
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.machines.fields.description'),
    schema: schemas.string(
      i18n('entities.machines.fields.description'),
      {
        "max": 21845
      },
    ),
  },
  {
    name: 'bookable',
    label: i18n('entities.machines.fields.bookable'),
    schema: schemas.boolean(
      i18n('entities.machines.fields.bookable'),
      {},
    ),
  },
  {
    name: 'unitPrice',
    label: i18n('entities.machines.fields.unitPrice'),
    schema: schemas.decimal(
      i18n('entities.machines.fields.unitPrice'),
      {
        "required": true,
        "scale": 2,
        "min": 0.01,
        "max": 99999
      },
    ),
  },
  {
    name: 'photos',
    label: i18n('entities.machines.fields.photos'),
    schema: schemas.images(
      i18n('entities.machines.fields.photos'),
      {
        "max": 3
      },
    ),
  },
];