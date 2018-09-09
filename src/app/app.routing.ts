import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from  '@angular/router';

//Aqui importaremos las rutas de los componentes
import { HomeComponent } from './components/home.component';

//Estas son las rutas de nuestro proyecto que agregaremos poco a poco
const appRoutes: Routes = [
	{path: 'home', component: HomeComponent },
	{path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
