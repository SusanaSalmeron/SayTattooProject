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
import { ProteccionDatosComponent } from './components/proteccion-datos/proteccion-datos.component';
import { AvisoLegalComponent } from './components/aviso-legal/aviso-legal.component';
import { TattoosComponent } from './components/tattoos/tattoos.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: SliderComponent },
  { path: 'register', component: FormularioRegistroComponent },
  { path: 'account/:id', component: AccountComponent },
  { path: 'data/:id', component: DataComponent },
  { path: 'moreData/:id', component: MoreDataComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'favourites/:id', component: FavouritesComponent },
  { path: 'tattoos/:id', component: TattoosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'proteccionDatos', component: ProteccionDatosComponent },
  { path: 'avisoLegal', component: AvisoLegalComponent },
  { path: 'account', component: AccountComponent },
  { path: 'tatuadores', component: AllTatuadoresComponent },
  { path: 'tatuadores/:id', component: CardTatuadoresComponent },
  { path: 'search', component: AllTatuadoresComponent }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
