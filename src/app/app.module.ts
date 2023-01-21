import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
@NgModule({
  declarations: [AppComponent],
  imports: [
    IconModule,
    SidebarModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [IconSetService],
  bootstrap: [AppComponent],
})
export class AppModule {}
