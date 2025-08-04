import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      } /*
      {
        path: 'marketplace',
        loadComponent: () =>
          import('../marketplace/marketplace.page').then(
            (m) => m.MarketplacePage
          ),
      }, */,
      {
        path: 'collection',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('../collection/collection.page').then(
                (m) => m.CollectionPage
              ),
          },
          {
            path: 'coin',
            loadComponent: () =>
              import('../coin/coin.page').then(
                (m) => m.CoinPage
              ),
          },
          {
            path: 'filtered',
            loadComponent: () =>
              import('../collection/collection-filtered/collection-filtered.page').then(
                (m) => m.CollectionFilteredPage
              ),
          },
        ],
      },
      {
        path: 'calculator',
        loadComponent: () =>
          import('../calculator/calculator.page').then((m) => m.CalculatorPage),
      }, 
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];
