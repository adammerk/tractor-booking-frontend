import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'machineType',
    label: i18n('entities.machineTypes.fields.machineType'),
    schema: schemas.string(
      i18n('entities.machineTypes.fields.machineType'),
      {
        "required": true
      },
    ),
  },
];