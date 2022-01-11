import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'preferedBookingChannel',
    label: i18n('entities.preferedBookingChannel.fields.preferedBookingChannel'),
    schema: schemas.string(
      i18n('entities.preferedBookingChannel.fields.preferedBookingChannel'),
      {
        "required": true
      },
    ),
  },
];