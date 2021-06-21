import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';
import { AllTatuadoresComponent } from './components/all-tatuadores/all-tatuadores.component';

import { SliderComponent } from './components/slider/slider.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: SliderComponent },
  { path: 'register', component: FormularioRegistroComponent },
  { path: 'tatuadores', component: AllTatuadoresComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
