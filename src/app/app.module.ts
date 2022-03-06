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

//Devolucv
import { ListaLibrosComponent } from './componentes/devuolucion/lista-libros/lista-libros.component';
import { PantallaDevolucionComponent } from './componentes/devuolucion/pantalla-devolucion/pantalla-devolucion.component';
import { BtnRealizarDevolucionComponent } from './componentes/devuolucion/btn-realizar-devolucion/btn-realizar-devolucion.component';
import { HeaderPaginaDevolucionesComponent } from './componentes/devuolucion/header-pagina-devoluciones/header-pagina-devoluciones.component';
import { ModalCancelarComponent } from './componentes/devuolucion/modal-cancelar/modal-cancelar.component';
import { BuscadorUsuarioComponent } from './componentes/devuolucion/buscador-usuario/buscador-usuario.component';



@NgModule({
  declarations: [
    AppComponent,
    EjmComponent,
    NavigationComponent,
    LoginComponent,
    PrestamoComponent,
    ListaLibrosComponent,
    PantallaDevolucionComponent,
    BtnRealizarDevolucionComponent,
    HeaderPaginaDevolucionesComponent,
    ModalCancelarComponent,
    BuscadorUsuarioComponent
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
