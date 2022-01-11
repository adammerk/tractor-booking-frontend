import Permissions from 'src/security/permissions';
import config from 'src/config';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },
  
  {
    path: '/customer',
    loader: () =>
      import('src/view/customer/list/CustomerListPage'),
    permissionRequired: permissions.customerRead,
    exact: true,
  },
  {
    path: '/customer/new',
    loader: () =>
      import('src/view/customer/form/CustomerFormPage'),
    permissionRequired: permissions.customerCreate,
    exact: true,
  },
  {
    path: '/customer/importer',
    loader: () =>
      import(
        'src/view/customer/importer/CustomerImporterPage'
      ),
    permissionRequired: permissions.customerImport,
    exact: true,
  },
  {
    path: '/customer/:id/edit',
    loader: () =>
      import('src/view/customer/form/CustomerFormPage'),
    permissionRequired: permissions.customerEdit,
    exact: true,
  },
  {
    path: '/customer/:id',
    loader: () =>
      import('src/view/customer/view/CustomerViewPage'),
    permissionRequired: permissions.customerRead,
    exact: true,
  },

  {
    path: '/machines',
    loader: () =>
      import('src/view/machines/list/MachinesListPage'),
    permissionRequired: permissions.machinesRead,
    exact: true,
  },
  {
    path: '/machines/new',
    loader: () =>
      import('src/view/machines/form/MachinesFormPage'),
    permissionRequired: permissions.machinesCreate,
    exact: true,
  },
  {
    path: '/machines/importer',
    loader: () =>
      import(
        'src/view/machines/importer/MachinesImporterPage'
      ),
    permissionRequired: permissions.machinesImport,
    exact: true,
  },
  {
    path: '/machines/:id/edit',
    loader: () =>
      import('src/view/machines/form/MachinesFormPage'),
    permissionRequired: permissions.machinesEdit,
    exact: true,
  },
  {
    path: '/machines/:id',
    loader: () =>
      import('src/view/machines/view/MachinesViewPage'),
    permissionRequired: permissions.machinesRead,
    exact: true,
  },

  {
    path: '/bookings',
    loader: () =>
      import('src/view/bookings/list/BookingsListPage'),
    permissionRequired: permissions.bookingsRead,
    exact: true,
  },
  {
    path: '/bookings/new',
    loader: () =>
      import('src/view/bookings/form/BookingsFormPage'),
    permissionRequired: permissions.bookingsCreate,
    exact: true,
  },
  {
    path: '/bookings/importer',
    loader: () =>
      import(
        'src/view/bookings/importer/BookingsImporterPage'
      ),
    permissionRequired: permissions.bookingsImport,
    exact: true,
  },
  {
    path: '/bookings/:id/edit',
    loader: () =>
      import('src/view/bookings/form/BookingsFormPage'),
    permissionRequired: permissions.bookingsEdit,
    exact: true,
  },
  {
    path: '/bookings/:id',
    loader: () =>
      import('src/view/bookings/view/BookingsViewPage'),
    permissionRequired: permissions.bookingsRead,
    exact: true,
  },

  {
    path: '/machine-types',
    loader: () =>
      import('src/view/machineTypes/list/MachineTypesListPage'),
    permissionRequired: permissions.machineTypesRead,
    exact: true,
  },
  {
    path: '/machine-types/new',
    loader: () =>
      import('src/view/machineTypes/form/MachineTypesFormPage'),
    permissionRequired: permissions.machineTypesCreate,
    exact: true,
  },
  {
    path: '/machine-types/importer',
    loader: () =>
      import(
        'src/view/machineTypes/importer/MachineTypesImporterPage'
      ),
    permissionRequired: permissions.machineTypesImport,
    exact: true,
  },
  {
    path: '/machine-types/:id/edit',
    loader: () =>
      import('src/view/machineTypes/form/MachineTypesFormPage'),
    permissionRequired: permissions.machineTypesEdit,
    exact: true,
  },
  {
    path: '/machine-types/:id',
    loader: () =>
      import('src/view/machineTypes/view/MachineTypesViewPage'),
    permissionRequired: permissions.machineTypesRead,
    exact: true,
  },

  {
    path: '/locations',
    loader: () =>
      import('src/view/locations/list/LocationsListPage'),
    permissionRequired: permissions.locationsRead,
    exact: true,
  },
  {
    path: '/locations/new',
    loader: () =>
      import('src/view/locations/form/LocationsFormPage'),
    permissionRequired: permissions.locationsCreate,
    exact: true,
  },
  {
    path: '/locations/importer',
    loader: () =>
      import(
        'src/view/locations/importer/LocationsImporterPage'
      ),
    permissionRequired: permissions.locationsImport,
    exact: true,
  },
  {
    path: '/locations/:id/edit',
    loader: () =>
      import('src/view/locations/form/LocationsFormPage'),
    permissionRequired: permissions.locationsEdit,
    exact: true,
  },
  {
    path: '/locations/:id',
    loader: () =>
      import('src/view/locations/view/LocationsViewPage'),
    permissionRequired: permissions.locationsRead,
    exact: true,
  },

  {
    path: '/mobile-phone-status',
    loader: () =>
      import('src/view/mobilePhoneStatus/list/MobilePhoneStatusListPage'),
    permissionRequired: permissions.mobilePhoneStatusRead,
    exact: true,
  },
  {
    path: '/mobile-phone-status/new',
    loader: () =>
      import('src/view/mobilePhoneStatus/form/MobilePhoneStatusFormPage'),
    permissionRequired: permissions.mobilePhoneStatusCreate,
    exact: true,
  },
  {
    path: '/mobile-phone-status/importer',
    loader: () =>
      import(
        'src/view/mobilePhoneStatus/importer/MobilePhoneStatusImporterPage'
      ),
    permissionRequired: permissions.mobilePhoneStatusImport,
    exact: true,
  },
  {
    path: '/mobile-phone-status/:id/edit',
    loader: () =>
      import('src/view/mobilePhoneStatus/form/MobilePhoneStatusFormPage'),
    permissionRequired: permissions.mobilePhoneStatusEdit,
    exact: true,
  },
  {
    path: '/mobile-phone-status/:id',
    loader: () =>
      import('src/view/mobilePhoneStatus/view/MobilePhoneStatusViewPage'),
    permissionRequired: permissions.mobilePhoneStatusRead,
    exact: true,
  },

  {
    path: '/prefered-booking-channel',
    loader: () =>
      import('src/view/preferedBookingChannel/list/PreferedBookingChannelListPage'),
    permissionRequired: permissions.preferedBookingChannelRead,
    exact: true,
  },
  {
    path: '/prefered-booking-channel/new',
    loader: () =>
      import('src/view/preferedBookingChannel/form/PreferedBookingChannelFormPage'),
    permissionRequired: permissions.preferedBookingChannelCreate,
    exact: true,
  },
  {
    path: '/prefered-booking-channel/importer',
    loader: () =>
      import(
        'src/view/preferedBookingChannel/importer/PreferedBookingChannelImporterPage'
      ),
    permissionRequired: permissions.preferedBookingChannelImport,
    exact: true,
  },
  {
    path: '/prefered-booking-channel/:id/edit',
    loader: () =>
      import('src/view/preferedBookingChannel/form/PreferedBookingChannelFormPage'),
    permissionRequired: permissions.preferedBookingChannelEdit,
    exact: true,
  },
  {
    path: '/prefered-booking-channel/:id',
    loader: () =>
      import('src/view/preferedBookingChannel/view/PreferedBookingChannelViewPage'),
    permissionRequired: permissions.preferedBookingChannelRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
