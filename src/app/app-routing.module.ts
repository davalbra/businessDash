import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarMainComponent } from './container/sideBar/sidebar-main/sidebar-main.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ModelOneComponent } from './views/model/model-one/model-one.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SidebarMainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'model-one',
        component: ModelOneComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
