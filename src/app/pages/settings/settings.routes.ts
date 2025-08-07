import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'settings',
    pathMatch: 'full',
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('src/app/pages/settings/settings.page').then(
        (m) => m.SettingsPage
      ),
  },
  {
    path: 'notifications',
    loadComponent: () =>
      import('src/app/pages/settings/notifications/notifications.page').then(
        (m) => m.NotificationsPage
      ),
  },
  {
    path: 'account',
    loadComponent: () =>
      import('src/app/pages/settings/account/account.page').then(
        (m) => m.AccountPage
      ),
  },
  {
    path: 'help',
    loadComponent: () =>
      import('src/app/pages/settings/help/help.page').then((m) => m.HelpPage),
  },
];
