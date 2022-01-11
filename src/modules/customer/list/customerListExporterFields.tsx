import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.customer.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.customer.fields.name'),
  },
  {
    name: 'birthdate',
    label: i18n('entities.customer.fields.birthdate'),
  },
  {
    name: 'addressLine1',
    label: i18n('entities.customer.fields.addressLine1'),
  },
  {
    name: 'addressLine2',
    label: i18n('entities.customer.fields.addressLine2'),
  },
  {
    name: 'geoLocation',
    label: i18n('entities.customer.fields.geoLocation'),
  },
  {
    name: 'mobilePhoneNumber',
    label: i18n('entities.customer.fields.mobilePhoneNumber'),
  },
  {
    name: 'mobilePhoneStatus',
    label: i18n('entities.customer.fields.mobilePhoneStatus'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'preferedBookingChannel',
    label: i18n('entities.customer.fields.preferedBookingChannel'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.customer.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.customer.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
