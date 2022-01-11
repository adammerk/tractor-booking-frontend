import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import customer from 'src/modules/customer/customerReducers';
import machines from 'src/modules/machines/machinesReducers';
import bookings from 'src/modules/bookings/bookingsReducers';
import machineTypes from 'src/modules/machineTypes/machineTypesReducers';
import locations from 'src/modules/locations/locationsReducers';
import mobilePhoneStatus from 'src/modules/mobilePhoneStatus/mobilePhoneStatusReducers';
import preferedBookingChannel from 'src/modules/preferedBookingChannel/preferedBookingChannelReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    customer,
    machines,
    bookings,
    machineTypes,
    locations,
    mobilePhoneStatus,
    preferedBookingChannel,
  });
