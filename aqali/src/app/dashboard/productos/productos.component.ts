// productos.component.ts

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Producto } from './producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.apiService.getProductos()
      .subscribe(
        productos => {
          this.productos = productos;
        },
        error => {
          console.error('Error al obtener productos', error);
        }
      );
  }
}