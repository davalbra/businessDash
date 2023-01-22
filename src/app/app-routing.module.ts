import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarMainComponent } from './container/sideBar/sidebar-main/sidebar-main.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarMainComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
