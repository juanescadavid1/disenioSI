import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjmComponent } from './componentes/ejm/ejm.component';
import { LoginComponent } from './componentes/login/login.component';
import { PrestamoComponent } from './componentes/prestamo/prestamo.component';
import { RegistroLibrosComponent } from './componentes/registro-libros/registro-libros.component';
import { PantallaDevolucionComponent }  from './componentes/devuolucion/pantalla-devolucion/pantalla-devolucion.component'


const routes: Routes = [
  // { path: '', redirectTo: lo, pathMatch: 'full' },
  // { path: 'Seguimientos-listar', component: SeguimientosListarComponent, canActivate: [AuthGuard]},
  // { path: 'Seguimientos', component: SeguimientosPerfilComponent, canActivate: [AuthGuard]},
  // { path: 'Usuarios', component: UsuariosComponent, canActivate: [AuthGuard]},
  // { path: 'Soporte/:id', component: SoporteComponent, canActivate: [AuthGuard]},
  // { path: 'gestion-seguimientos/:id', component: GestionSeguimientosComponent, canActivate: [AuthGuard]},
  { path: 'RegistroLibro', component: RegistroLibrosComponent},
  { path: 'ejm', component: EjmComponent},
  { path: 'prestamo', component: PrestamoComponent},
  { path: 'Login', component: LoginComponent },
  { path: 'devoluciones', component: PantallaDevolucionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy',useHash:true})],
  exports: [RouterModule]
})



export class AppRoutingModule { }
