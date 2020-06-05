import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { RegistroComponent } from './containers/registro/registro.component';
import { PerfilComponent } from './containers/perfil/perfil.component';
import { UsersComponent } from './containers/users/users.component';


const routes: Routes = [
  {path: '', component: RegistroComponent},
  {path: 'home', component: HomeComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
