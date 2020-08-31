import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
            loadChildren: () =>
            import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'account',
        loadChildren: () =>
        import('../account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: 'messages',
        loadChildren: () =>
        import('../messages/messages.module').then(m => m.MessagesPageModule)
      },
      {
        path: 'offices-save',
        loadChildren: () =>
        import('../offices-save/offices-save.module').then(m => m.OfficesSavePageModule)
      },
      {
        path: 'offices',
        loadChildren: () =>
        import('../offices/offices.module').then(m => m.OfficesPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
