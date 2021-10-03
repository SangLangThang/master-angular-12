import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './section1/server/server.component';
import { WarningAlertComponent } from './section2/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './section2/success-alert/success-alert.component';
import { Section2Component } from './section2/section2.component';
import { ServersComponent } from './section1/servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Section2Component
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
