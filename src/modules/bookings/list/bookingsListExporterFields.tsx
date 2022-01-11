import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.bookings.fields.id'),
  },
  {
    name: 'customer',
    label: i18n('entities.bookings.fields.customer'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'products',
    label: i18n('entities.bookings.fields.products'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'employee',
    label: i18n('entities.bookings.fields.employee'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'bookingStart',
    label: i18n('entities.bookings.fields.bookingStart'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'bookingEnd',
    label: i18n('entities.bookings.fields.bookingEnd'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'delivered',
    label: i18n('entities.bookings.fields.delivered'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'returned',
    label: i18n('entities.bookings.fields.returned'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'attachments',
    label: i18n('entities.bookings.fields.attachments'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.bookings.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.bookings.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
