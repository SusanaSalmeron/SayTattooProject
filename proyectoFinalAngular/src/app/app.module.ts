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
import { FavouritesComponent } from './components/favourites/favourites.component';
import { TattoosComponent } from './components/tattoos/tattoos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoginComponent } from './components/login/login.component';
import { AllTatuadoresComponent } from './components/all-tatuadores/all-tatuadores.component';
import { CardTatuadoresComponent } from './components/card-tatuadores/card-tatuadores.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FormularioRegistroComponent,
    CardTatuadoresComponent,
    AllTatuadoresComponent,
    AccountComponent,
    DataComponent,
    SidebarComponent,
    MoreDataComponent,
    FavouritesComponent,
    TattoosComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InfiniteScrollModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
