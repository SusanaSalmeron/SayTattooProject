import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { AccountComponent } from './components/account/account.component';
import { DataComponent } from './components/data/data.component';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';
import { AllTatuadoresComponent } from './components/all-tatuadores/all-tatuadores.component';

import { MoreDataComponent } from './components/moreData/moreData.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardTatuadoresComponent } from './components/card-tatuadores/card-tatuadores.component'
import { LoginComponent } from './components/login/login.component';
import { TattoosComponent } from './components/tattoos/tattoos.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: SliderComponent },
  { path: 'account', component: AccountComponent },
  { path: 'register', component: FormularioRegistroComponent },
  { path: 'tatuadores', component: AllTatuadoresComponent },
  { path: 'tatuadores/:id', component: CardTatuadoresComponent },
  { path: 'login', component: LoginComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
