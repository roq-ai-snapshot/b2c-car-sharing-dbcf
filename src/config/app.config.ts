interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Fleet Manager', 'Admin'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing v3',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View available cars near location', 'Book a car', 'Cancel a booking', 'Update booking details'],
  ownerAbilities: [
    'Manage companies',
    'Invite Fleet Managers and Admins',
    'View available cars',
    'Book a car',
    'Cancel a booking',
    'Update booking details',
  ],
};
