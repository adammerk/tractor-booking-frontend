import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.preferedBookingChannel.fields.id'),
  },
  {
    name: 'preferedBookingChannel',
    label: i18n('entities.preferedBookingChannel.fields.preferedBookingChannel'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.preferedBookingChannel.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.preferedBookingChannel.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
