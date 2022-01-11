import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import MachineTypesViewItem from 'src/view/machineTypes/view/MachineTypesViewItem';
import LocationsViewItem from 'src/view/locations/view/LocationsViewItem';

function MachinesView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <MachineTypesViewItem
          label={i18n('entities.machines.fields.machineType')}
          value={record.machineType}
        />

        <LocationsViewItem
          label={i18n('entities.machines.fields.location')}
          value={record.location}
        />

        <TextViewItem
          label={i18n('entities.machines.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.machines.fields.description')}
          value={record.description}
        />

        <TextViewItem
          label={i18n('entities.machines.fields.bookable')}
          value={
            record.bookable
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        {record.unitPrice != null && <TextViewItem
          label={i18n('entities.machines.fields.unitPrice')}
          value={Number(record.unitPrice).toFixed(2)}
        />}

        <ImagesViewItem
          label={i18n('entities.machines.fields.photos')}
          value={record.photos}
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

export default MachinesView;
