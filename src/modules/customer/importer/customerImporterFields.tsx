import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'name',
    label: i18n('entities.customer.fields.name'),
    schema: schemas.string(
      i18n('entities.customer.fields.name'),
      {
        "required": true,
        "min": 2,
        "max": 255
      },
    ),
  },
  {
    name: 'birthdate',
    label: i18n('entities.customer.fields.birthdate'),
    schema: schemas.date(
      i18n('entities.customer.fields.birthdate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'addressLine1',
    label: i18n('entities.customer.fields.addressLine1'),
    schema: schemas.string(
      i18n('entities.customer.fields.addressLine1'),
      {},
    ),
  },
  {
    name: 'addressLine2',
    label: i18n('entities.customer.fields.addressLine2'),
    schema: schemas.string(
      i18n('entities.customer.fields.addressLine2'),
      {},
    ),
  },
  {
    name: 'geoLocation',
    label: i18n('entities.customer.fields.geoLocation'),
    schema: schemas.string(
      i18n('entities.customer.fields.geoLocation'),
      {},
    ),
  },
  {
    name: 'mobilePhoneNumber',
    label: i18n('entities.customer.fields.mobilePhoneNumber'),
    schema: schemas.string(
      i18n('entities.customer.fields.mobilePhoneNumber'),
      {},
    ),
  },
  {
    name: 'mobilePhoneStatus',
    label: i18n('entities.customer.fields.mobilePhoneStatus'),
    schema: schemas.relationToOne(
      i18n('entities.customer.fields.mobilePhoneStatus'),
      {},
    ),
  },
  {
    name: 'preferedBookingChannel',
    label: i18n('entities.customer.fields.preferedBookingChannel'),
    schema: schemas.relationToOne(
      i18n('entities.customer.fields.preferedBookingChannel'),
      {},
    ),
  },
];