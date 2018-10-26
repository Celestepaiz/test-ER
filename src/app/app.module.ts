import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';

import { DondeLlegasComponent } from './donde-llegas/donde-llegas.component';
import { ListComponent } from './list/list.component';
import { PagoComponent } from './pago/pago.component';
import { AsientosComponent } from './asientos/asientos.component';

import { NavbarComponent } from './components/navbar.component';
import { FooterComponent } from './components/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DondeLlegasComponent,
    ListComponent,
    AsientosComponent,
    PagoComponent,
    NavbarComponent,

    FooterComponent,
    LandingPageComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    routing,
    FormsModule    
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
