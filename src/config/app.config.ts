interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'FooBar',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage foo', 'Read user', 'Read company'],
  ownerAbilities: ['Manage foo', 'Manage user', 'Manage company'],
  getQuoteUrl: 'https://app.roq.ai/proposal/4c968337-bc6c-4bd3-8de8-99d69234c6f2',
};
