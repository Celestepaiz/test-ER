import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';

import { DondeLlegasComponent } from './donde-llegas/donde-llegas.component';
import { ListComponent } from './list/list.component';
import { PagoComponent } from './pago/pago.component';
import { AsientosComponent } from './asientos/asientos.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { NavbarComponent } from './components/navbar.component';
import { FooterComponent } from './components/footer.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TouristerComponent } from './tourister/tourister.component';

import { BoletoComponent } from './boleto/boleto.component';
<<<<<<< HEAD
import { RolloComponent } from './rollo/rollo.component';
import {MatTabsModule} from '@angular/material/tabs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';






=======
import { NavbarPrincipalComponent } from './navbar-principal/navbar-principal.component';
import { NavabarTouristerComponent } from './navabar-tourister/navabar-tourister.component';
>>>>>>> 69a367bdff08c9d015bee8014815048ae1e456f0

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
    LandingPageComponent,
    TouristerComponent,
    BoletoComponent,
<<<<<<< HEAD
    RolloComponent
=======
    NavbarPrincipalComponent,
    NavabarTouristerComponent
>>>>>>> 69a367bdff08c9d015bee8014815048ae1e456f0
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    NgbModule,
    BsDatepickerModule.forRoot()  
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
