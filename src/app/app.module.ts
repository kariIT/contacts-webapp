import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactService} from './contact/services/contact.service';
import {ContactHttpService} from './contact/services/contact-http.service';
import {HttpClientModule} from '@angular/common/http';
import {ContactDetailComponent} from './contact/contact-detail/contact-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialComponentsModule} from './ui/material-components/material-components.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AvatarModule } from 'ng2-avatar';
import { TextToColorPipe } from './contact/pipes/text-to-color.pipe';
import {NgPipesModule} from 'ngx-pipes';

const appRoutes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/:id', component: ContactDetailComponent},
  {path: '', redirectTo: '/contacts', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,
    TextToColorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MaterialComponentsModule,
    FlexLayoutModule,
    AvatarModule.forRoot(),
    NgPipesModule
  ],
  providers: [
    ContactService,
    ContactHttpService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
