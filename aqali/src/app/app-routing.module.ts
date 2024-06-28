import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
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

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'resumen', pathMatch: 'full' },
      { path: 'resumen', component: ResumenComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'agregar-producto', component: AgregarProductoComponent },
      { path: 'ingresos', component: IngresosComponent },
      { path: 'salidas', component: SalidasComponent },
      { path: 'stock', component: StockComponent },
      { path: 'colegio', component: ColegioComponent },
      { path: 'docentes', component: DocentesComponent },
      { path: 'reportes', component: ReportesComponent },
      { path: 'generar-registros', component: GenerarRegistrosComponent },
      { path: 'mapa', component: MapaComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'configuracion', component: ConfiguracionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
