import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjmComponent } from './componentes/ejm/ejm.component';
import { LoginComponent } from './componentes/login/login.component';


const routes: Routes = [
  // { path: '', redirectTo: lo, pathMatch: 'full' },
  // { path: 'Seguimientos-listar', component: SeguimientosListarComponent, canActivate: [AuthGuard]},
  // { path: 'Seguimientos', component: SeguimientosPerfilComponent, canActivate: [AuthGuard]},
  // { path: 'Usuarios', component: UsuariosComponent, canActivate: [AuthGuard]},
  // { path: 'Soporte/:id', component: SoporteComponent, canActivate: [AuthGuard]},
  // { path: 'gestion-seguimientos/:id', component: GestionSeguimientosComponent, canActivate: [AuthGuard]},
  { path: 'ejm', component: EjmComponent},
  { path: 'Login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy',useHash:true})],
  exports: [RouterModule]
})



export class AppRoutingModule { }
