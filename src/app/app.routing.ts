import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from  '@angular/router';

//Aqui importaremos las rutas de los componentes
import { HomeComponent } from './components/home.component';
import { DondeLlegasComponent } from './donde-llegas/donde-llegas.component';
import { ListComponent } from './list/list.component';
import { PagoComponent } from './pago/pago.component';
import { AsientosComponent } from './asientos/asientos.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {TouristerComponent} from './tourister/tourister.component';
import { BoletoComponent} from './boleto/boleto.component';
import { DetallesComponent} from './detalles/detalles.component'
import {RolloComponent} from './rollo/rollo.component';


//Estas son las rutas de nuestro proyecto que agregaremos poco a poco
const appRoutes: Routes = [
	{path: 'home', component: HomeComponent },
	{path: 'donde-sales', component: DondeLlegasComponent},
	{path: 'list', component: ListComponent},
	{path: 'asientos', component: AsientosComponent},
	{path: 'pago', component: PagoComponent},
	{path: 'tourister', component: TouristerComponent},
	{path: 'landing-page', component: LandingPageComponent},
	{path: 'boleto', component: BoletoComponent},
	{path: 'detalles', component: DetallesComponent},
	{path: 'rollo', component: RolloComponent},
	{path: '**', pathMatch: 'full', redirectTo: 'landing-page' }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
