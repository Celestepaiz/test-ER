import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from  '@angular/router';

//Aqui importaremos las rutas de los componentes
import { HomeComponent } from './components/home.component';
import { DondeLlegasComponent } from './donde-llegas/donde-llegas.component';
import { ListComponent } from './list/list.component';
import { PagoComponent } from './pago/pago.component';
import { AsientosComponent } from './asientos/asientos.component';

//Estas son las rutas de nuestro proyecto que agregaremos poco a poco
const appRoutes: Routes = [
	{path: 'home', component: HomeComponent },
	{path: 'donde-sales', component: DondeLlegasComponent},
	{path: 'list', component: ListComponent},
	{path: 'asientos', component: AsientosComponent},
	{path: 'pago', component: PagoComponent},
	{path: '**', pathMatch: 'full', redirectTo: 'donde-sales' }

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
