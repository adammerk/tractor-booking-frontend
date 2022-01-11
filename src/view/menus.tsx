import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import React from 'react';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import config from 'src/config';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: <DashboardIcon />,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: <CreditCardOutlinedIcon />,
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: <PersonIcon />,
  },

  {
    path: '/audit-logs',
    icon: <HistoryIcon />,
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: <SettingsIcon />,
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/customer',
    permissionRequired: permissions.customerRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.customer.menu'),
  },

  {
    path: '/machines',
    permissionRequired: permissions.machinesRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.machines.menu'),
  },

  {
    path: '/bookings',
    permissionRequired: permissions.bookingsRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.bookings.menu'),
  },

  {
    path: '/machine-types',
    permissionRequired: permissions.machineTypesRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.machineTypes.menu'),
  },

  {
    path: '/locations',
    permissionRequired: permissions.locationsRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.locations.menu'),
  },

  {
    path: '/mobile-phone-status',
    permissionRequired: permissions.mobilePhoneStatusRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.mobilePhoneStatus.menu'),
  },

  {
    path: '/prefered-booking-channel',
    permissionRequired: permissions.preferedBookingChannelRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.preferedBookingChannel.menu'),
  },
].filter(Boolean);
