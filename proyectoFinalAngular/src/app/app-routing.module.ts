import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AccountComponent } from './components/account/account.component';
import { DataComponent } from './components/data/data.component';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';
import { modifyDataComponent } from './components/modifyData/modifyData.component';
import { MoreDataComponent } from './components/moreData/moreData.component';
import { SliderComponent } from './components/slider/slider.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: SliderComponent },
  { path: 'register', component: FormularioRegistroComponent },
  { path: 'account', component: AccountComponent },
  { path: 'data', component: DataComponent },
  { path: 'moreData', component: MoreDataComponent },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'ratings', component: modifyDataComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
