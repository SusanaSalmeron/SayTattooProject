import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './components/account/account.component';
import { DataComponent } from './components/data/data.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MoreDataComponent } from './components/moreData/moreData.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { modifyDataComponent } from './components/modifyData/modifyData.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FormularioRegistroComponent,
    AccountComponent,
    DataComponent,
    SidebarComponent,
    MoreDataComponent,
    AboutMeComponent,
    modifyDataComponent,




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
