import { Typography } from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import selectors from 'src/modules/machineTypes/machineTypesSelectors';

function MachineTypesViewItem(props) {
  const hasPermissionToRead = useSelector(
    selectors.selectPermissionToRead,
  );

  const valueAsArray = () => {
    const { value } = props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  const displayableRecord = (record) => {
    if (hasPermissionToRead) {
      return (
        <div key={record.id}>
          <MaterialLink
            component={Link}
            to={`/machine-types/${record.id}`}
          >
            {record.machineType}
          </MaterialLink>
        </div>
      );
    }

    return <div key={record.id}>{record.machineType}</div>;
  };

  if (!valueAsArray().length) {
    return null;
  }

  return (
    <div style={{ marginBottom: '16px' }}>
      <Typography variant="subtitle2">
        {props.label}
      </Typography>
      {valueAsArray().map((value) =>
        displayableRecord(value),
      )}
    </div>
  );
}

MachineTypesViewItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
};

export default MachineTypesViewItem;
