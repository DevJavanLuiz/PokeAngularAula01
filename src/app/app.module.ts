import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { ListarComponent } from './paginas/listar/listar.component';
import { HeaderComponent } from './componemtes/header/header.component';
import { FooterComponent } from './componemtes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    ListarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
