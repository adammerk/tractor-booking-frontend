import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'mobilePhoneStatus',
    label: i18n('entities.mobilePhoneStatus.fields.mobilePhoneStatus'),
    schema: schemas.string(
      i18n('entities.mobilePhoneStatus.fields.mobilePhoneStatus'),
      {
        "required": true
      },
    ),
  },
];