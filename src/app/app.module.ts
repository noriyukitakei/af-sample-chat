import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth.component';
import { ChatComponent } from './chat.component';
import { MY_ROUTES } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MY_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
