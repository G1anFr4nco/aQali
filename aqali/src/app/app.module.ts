import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResumenComponent } from './dashboard/resumen/resumen.component';
import { ProductosComponent } from './dashboard/productos/productos.component';
import { IngresosComponent } from './dashboard/ingresos/ingresos.component';
import { SalidasComponent } from './dashboard/salidas/salidas.component';
import { StockComponent } from './dashboard/stock/stock.component';
import { ColegioComponent } from './dashboard/colegio/colegio.component';
import { DocentesComponent } from './dashboard/docentes/docentes.component';
import { ReportesComponent } from './dashboard/reportes/reportes.component';
import { GenerarRegistrosComponent } from './dashboard/generar-registros/generar-registros.component';
import { MapaComponent } from './dashboard/mapa/mapa.component';
import { PerfilComponent } from './dashboard/perfil/perfil.component';
import { ConfiguracionComponent } from './dashboard/configuracion/configuracion.component';
import { AgregarProductoComponent } from './dashboard/agregar-producto/agregar-producto.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ResumenComponent,
    ProductosComponent,
    IngresosComponent,
    SalidasComponent,
    StockComponent,
    ColegioComponent,
    DocentesComponent,
    ReportesComponent,
    GenerarRegistrosComponent,
    MapaComponent,
    PerfilComponent,
    ConfiguracionComponent,
    AgregarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
