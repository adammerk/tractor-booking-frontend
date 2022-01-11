import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'customer',
    label: i18n('entities.bookings.fields.customer'),
    schema: schemas.relationToOne(
      i18n('entities.bookings.fields.customer'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'products',
    label: i18n('entities.bookings.fields.products'),
    schema: schemas.relationToMany(
      i18n('entities.bookings.fields.products'),
      {
        "required": true,
        "min": 1
      },
    ),
  },
  {
    name: 'employee',
    label: i18n('entities.bookings.fields.employee'),
    schema: schemas.relationToOne(
      i18n('entities.bookings.fields.employee'),
      {},
    ),
  },
  {
    name: 'bookingStart',
    label: i18n('entities.bookings.fields.bookingStart'),
    schema: schemas.datetime(
      i18n('entities.bookings.fields.bookingStart'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'bookingEnd',
    label: i18n('entities.bookings.fields.bookingEnd'),
    schema: schemas.datetime(
      i18n('entities.bookings.fields.bookingEnd'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'delivered',
    label: i18n('entities.bookings.fields.delivered'),
    schema: schemas.boolean(
      i18n('entities.bookings.fields.delivered'),
      {},
    ),
  },
  {
    name: 'returned',
    label: i18n('entities.bookings.fields.returned'),
    schema: schemas.boolean(
      i18n('entities.bookings.fields.returned'),
      {},
    ),
  },
  {
    name: 'attachments',
    label: i18n('entities.bookings.fields.attachments'),
    schema: schemas.files(
      i18n('entities.bookings.fields.attachments'),
      {
        "max": 3
      },
    ),
  },
];