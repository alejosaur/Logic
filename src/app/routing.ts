import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiarComponent } from './estudiar/estudiar.component';
import { KejestoComponent } from './kejesto/kejesto.component';
import { FotosLindasComponent } from './fotos-lindas/fotos-lindas.component';
import { PremioComponent } from './premio/premio.component';

export const appRoutes: Routes =[
    {path: '', redirectTo: 'fotosLindas', pathMatch: 'full'},
    {path: 'fotosLindas', component: FotosLindasComponent},
    {path: 'estudiar', component: EstudiarComponent},
    {path: 'kejesto', component: KejestoComponent},
    {path: 'premio', component: PremioComponent},
    {path: '*', redirectTo: 'fotosLindas', pathMatch: 'full'}
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);