import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component'; 
import {LoginComponent} from './login/login.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ProfileComponent} from './profile/profile.component';
import {ListAccountComponent} from './list-account/list-account.component';
import {AddAccountComponent} from './add-account/add-account.component';
import {UpdateAccountComponent} from './update-account/update-account.component';

const routes: Routes = [
  {
    path: 'register' , component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: HomepageComponent
  },
  {
    path: '', component: HomepageComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'add', component: AddAccountComponent
  },
  {
    path: 'list', component: ListAccountComponent
  },
  {
    path: 'update', component: UpdateAccountComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
