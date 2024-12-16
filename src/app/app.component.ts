import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { PropuestaDeValorComponent } from './propuesta-de-valor/propuesta-de-valor.component';
import { TrazabilidadComponent } from './trazabilidad/trazabilidad.component';
import { ImpactoComponent } from './impacto/impacto.component';
import { ProductosComponent } from './productos/productos.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { ContactComponent } from './contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({

  selector: 'app-root',
  imports: [ReactiveFormsModule, HttpClientModule, NavbarComponent, EncabezadoComponent, PropuestaDeValorComponent, TrazabilidadComponent, ImpactoComponent, ProductosComponent, PieDePaginaComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Chocolitos';
}
