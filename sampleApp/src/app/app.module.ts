import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { BtnDeleteDirective } from './btn-delete.directive';
import { ContactDataService } from "./contact-data.service";
import { ConvertToInchesPipe } from './convert-to-inches.pipe';
import { AdminModule } from "./admin/admin.module";

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    BtnDeleteDirective,
    ConvertToInchesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContactDataService, AdminModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
