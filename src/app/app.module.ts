import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationComponent } from './componentes/navigation/navigation.component';
import { LoginComponent } from './componentes/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjmComponent } from './componentes/ejm/ejm.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// prime ng
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PrestamoComponent } from './componentes/prestamo/prestamo.component';
import { RegistroLibrosComponent } from './componentes/registro-libros/registro-libros.component';

//Devolucv
import { ListaLibrosComponent } from './componentes/devolucion/lista-libros/lista-libros.component';
import { PantallaDevolucionComponent } from './componentes/devolucion/pantalla-devolucion/pantalla-devolucion.component';
import { BtnRealizarDevolucionComponent } from './componentes/devolucion/btn-realizar-devolucion/btn-realizar-devolucion.component';
import { HeaderPaginaDevolucionesComponent } from './componentes/devolucion/header-pagina-devoluciones/header-pagina-devoluciones.component';
import { ModalCancelarComponent } from './componentes/devolucion/modal-cancelar/modal-cancelar.component';
import { BuscadorUsuarioComponent } from './componentes/devolucion/buscador-usuario/buscador-usuario.component';
import { DatosUsuarioComponent } from './componentes/devolucion/datos-usuario/datos-usuario.component';
import { ModalConfrimarDevolucionComponent } from './componentes/devolucion/modal-confrimar-devolucion/modal-confrimar-devolucion.component';



@NgModule({
  declarations: [
    AppComponent,
    EjmComponent,
    NavigationComponent,
    LoginComponent,
    PrestamoComponent,
    RegistroLibrosComponent,
    PrestamoComponent,
    ListaLibrosComponent,
    PantallaDevolucionComponent,
    BtnRealizarDevolucionComponent,
    HeaderPaginaDevolucionesComponent,
    ModalCancelarComponent,
    BuscadorUsuarioComponent,
    DatosUsuarioComponent,
    ModalConfrimarDevolucionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TableModule,
    ConfirmDialogModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
