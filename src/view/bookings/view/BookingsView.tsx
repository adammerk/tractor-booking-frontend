import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import moment from 'moment';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import CustomerViewItem from 'src/view/customer/view/CustomerViewItem';
import MachinesViewItem from 'src/view/machines/view/MachinesViewItem';

function BookingsView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <CustomerViewItem
          label={i18n('entities.bookings.fields.customer')}
          value={record.customer}
        />

        <MachinesViewItem
          label={i18n('entities.bookings.fields.products')}
          value={record.products}
        />

        <UserViewItem
          label={i18n('entities.bookings.fields.employee')}
          value={record.employee}
        />

        <TextViewItem
          label={i18n(
            'entities.bookings.fields.bookingStart',
          )}
          value={moment(record.bookingStart).format(
            'YYYY-MM-DD HH:mm',
          )}
        />

        <TextViewItem
          label={i18n(
            'entities.bookings.fields.bookingEnd',
          )}
          value={moment(record.bookingEnd).format(
            'YYYY-MM-DD HH:mm',
          )}
        />

        <TextViewItem
          label={i18n('entities.bookings.fields.delivered')}
          value={
            record.delivered
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.bookings.fields.returned')}
          value={
            record.returned
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <FilesViewItem
          label={i18n(
            'entities.bookings.fields.attachments',
          )}
          value={record.attachments}
        />        
      </div>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default BookingsView;
