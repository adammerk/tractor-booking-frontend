import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import MobilePhoneStatusViewItem from 'src/view/mobilePhoneStatus/view/MobilePhoneStatusViewItem';
import PreferedBookingChannelViewItem from 'src/view/preferedBookingChannel/view/PreferedBookingChannelViewItem';

function CustomerView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.customer.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.customer.fields.birthdate')}
          value={record.birthdate}
        />

        <TextViewItem
          label={i18n('entities.customer.fields.addressLine1')}
          value={record.addressLine1}
        />

        <TextViewItem
          label={i18n('entities.customer.fields.addressLine2')}
          value={record.addressLine2}
        />

        <TextViewItem
          label={i18n('entities.customer.fields.geoLocation')}
          value={record.geoLocation}
        />

        <TextViewItem
          label={i18n('entities.customer.fields.mobilePhoneNumber')}
          value={record.mobilePhoneNumber}
        />

        <MobilePhoneStatusViewItem
          label={i18n('entities.customer.fields.mobilePhoneStatus')}
          value={record.mobilePhoneStatus}
        />

        <PreferedBookingChannelViewItem
          label={i18n('entities.customer.fields.preferedBookingChannel')}
          value={record.preferedBookingChannel}
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

export default CustomerView;
