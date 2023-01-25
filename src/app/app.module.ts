import { NgModule } from '@angular/core';
import {
  HashLocationStrategy,
  LocationStrategy,
  PathLocationStrategy,
  CommonModule,
} from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TableModule,
  TabsModule,
  UtilitiesModule,
  WidgetModule,
  FormModule,
} from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';

import { ChartjsModule } from '@coreui/angular-chartjs';
import { SidebarMainComponent } from './container/sideBar/sidebar-main/sidebar-main.component';
import { SidebarFooterComponent } from './container/sideBar/sidebar-footer/sidebar-footer.component';
import { SidebarHeaderComponent } from './container/sideBar/sidebar-header/sidebar-header.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ModelOneComponent } from './views/model/model-one/model-one.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarMainComponent,
    SidebarFooterComponent,
    SidebarHeaderComponent,
    DashboardComponent,
    ModelOneComponent,
  ],
  imports: [
    AppRoutingModule,

    GridModule,
    WidgetModule,
    TableModule,
    ChartjsModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
