import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { AccountComponent } from './components/account/account.component';
import { DataComponent } from './components/data/data.component';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';
import { MoreDataComponent } from './components/moreData/moreData.component';
import { SliderComponent } from './components/slider/slider.component';
import { TattoosComponent } from './components/tattoos/tattoos.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: SliderComponent },
  { path: 'register', component: FormularioRegistroComponent },
  { path: 'account', component: AccountComponent },
  { path: 'data', component: DataComponent },
  { path: 'moreData', component: MoreDataComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'favourites/:id', component: FavouritesComponent },
  { path: 'tattoos', component: TattoosComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
