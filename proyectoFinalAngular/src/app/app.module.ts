import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllTatuadoresComponent } from './components/all-tatuadores/all-tatuadores.component';
import { CardTatuadoresComponent } from './components/card-tatuadores/card-tatuadores.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FormularioRegistroComponent,
    CardTatuadoresComponent,
    AllTatuadoresComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
