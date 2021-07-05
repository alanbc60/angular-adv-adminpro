import { NgModule } from '@angular/core';
//esto se hace para cualquier roting module pueda disponer de el
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

//configurar las rutas de mi aplicacion
const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [//rutaas hijas de pagesComponent
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Grafica1Component },
      //En caso de que encuentre vacio redirecciona al dahboard
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', component: NopagefoundComponent },
];



@NgModule({
  declarations: [],
  imports: [
    //aqui se le indican las routes principales con un forRoot
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
