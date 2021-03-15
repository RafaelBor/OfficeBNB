import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'offices',
    loadChildren: () => import('./pages/offices/offices.module').then( m => m.OfficesPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./pages/filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'office/:id',
    loadChildren: () => import('./pages/office/office.module').then( m => m.OfficePageModule)
  },
  {
    path: 'select-hours',
    loadChildren: () => import('./pages/select-hours/select-hours.module').then( m => m.SelectHoursPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'rules-office',
    loadChildren: () => import('./pages/rules-office/rules-office.module').then( m => m.RulesOfficePageModule)
  },
  {
    path: 'office-pay/:id',
    loadChildren: () => import('./pages/office-pay/office-pay.module').then( m => m.OfficePayPageModule)
  },
  {
    path: 'user-edit',
    loadChildren: () => import('./pages/user-edit/user-edit.module').then( m => m.UserEditPageModule)
  },
  {
    path: 'offices-save',
    loadChildren: () => import('./pages/offices-save/offices-save.module').then( m => m.OfficesSavePageModule)
  },
  {
    path: 'credit-card-details/:id',
    loadChildren: () => import('./pages/credit-card-details/credit-card-details.module').then( m => m.CreditCardDetailsPageModule)
  },
  {
    path: 'office-complete',
    loadChildren: () => import('./pages/office-complete/office-complete.module').then( m => m.OfficeCompletePageModule)
  },
  {
    path: 'office-historial',
    loadChildren: () => import('./pages/office-historial/office-historial.module').then( m => m.OfficeHistorialPageModule)
  },
  {
    path: 'status-reserva',
    loadChildren: () => import('./pages/status-reserva/status-reserva.module').then( m => m.StatusReservaPageModule)
  },
  {
    path: 'buscar-cupon',
    loadChildren: () => import('./pages/buscar-cupon/buscar-cupon.module').then( m => m.BuscarCuponPageModule)
  },
  {
    path: 'office-reglas',
    loadChildren: () => import('./pages/office-reglas/office-reglas.module').then( m => m.OfficeReglasPageModule)
  },
  {
    path: 'mostrar-mensaje/:id',
    loadChildren: () => import('./pages/mostrar-mensaje/mostrar-mensaje.module').then( m => m.MostrarMensajePageModule)
  },
  {
    path: 'mostrar-mensaje-arrendador/:id',
    loadChildren: () => import('./pages/mostrar-mensaje-arrendador/mostrar-mensaje-arrendador.module').then( m => m.MostrarMensajeArrendadorPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
