// agregar-producto.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Producto } from '../productos/producto.model';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {
  producto: Producto = new Producto();

  constructor(private router: Router, private apiService: ApiService) {}

  onSubmit() {
    this.apiService.agregarProducto(this.producto)
      .subscribe(
        producto => {
          console.log('Producto agregado:', producto);
          this.router.navigate(['/dashboard/productos']);
        },
        error => {
          console.error('Error al agregar producto', error);
        }
      );
  }
}