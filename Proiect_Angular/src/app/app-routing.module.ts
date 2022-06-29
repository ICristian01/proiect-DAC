import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path: 'login',
    loadChildren:()=>import('./modules/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'register',
    loadChildren:()=>import('./modules/register/register.module').then(m=>m.RegisterModule)
  },
  {
    path:'movies',
    loadChildren:()=>import('./modules/movies/movies.module').then(m=>m.MoviesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
