import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function LocationsView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.locations.fields.locationName')}
          value={record.locationName}
        />

        <TextViewItem
          label={i18n('entities.locations.fields.addressLine1')}
          value={record.addressLine1}
        />

        <TextViewItem
          label={i18n('entities.locations.fields.addressLine2')}
          value={record.addressLine2}
        />

        <TextViewItem
          label={i18n('entities.locations.fields.contactPhone')}
          value={record.contactPhone}
        />

        <TextViewItem
          label={i18n('entities.locations.fields.contactEmail')}
          value={record.contactEmail}
        />

        <TextViewItem
          label={i18n('entities.locations.fields.geoLocation')}
          value={record.geoLocation}
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

export default LocationsView;
