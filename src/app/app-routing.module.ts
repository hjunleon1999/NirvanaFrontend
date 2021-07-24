import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ErrorPageComponent} from './error-page/error-page.component'

const routes: Routes = [
  { path: '' , 
  loadChildren: ()=>import ('./main/main.module').then(m=>m.MainModule)  
  
},  //canActivate: [AuthGaurd],
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'home' , redirectTo:''},
  { path: 'error/:status', component: ErrorPageComponent},
  { path: '**', redirectTo:'error/404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
