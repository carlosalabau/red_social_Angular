import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { RegistroComponent } from './containers/registro/registro.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuHomeComponent } from './components/menu-home/menu-home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './containers/login/login.component';
import { PerfilComponent } from './containers/perfil/perfil.component';
import { UsersComponent } from './containers/users/users.component';
import { DetallePerfilComponent } from './containers/detalle-perfil/detalle-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    MenuComponent,
    MenuHomeComponent,
    LoginComponent,
    PerfilComponent,
    UsersComponent,
    DetallePerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
