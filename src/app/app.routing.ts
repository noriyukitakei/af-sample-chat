import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { AuthComponent }  from './auth.component';
import { ChatComponent }  from './chat.component';

const myRoutes = [
  { path: '', component: ChatComponent },
  { path: 'auth', component: AuthComponent }
];

export const MY_ROUTES: ModuleWithProviders = RouterModule.forRoot(myRoutes);
