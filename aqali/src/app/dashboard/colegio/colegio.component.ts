import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-colegio',
  templateUrl: './colegio.component.html',
  styleUrls: ['./colegio.component.css']
})
export class ColegioComponent implements AfterViewInit {
  colegio = {
    nombre: 'Colegio Ejemplo',
    direccion: 'Calle Falsa 123',
    imagen: 'assets/colegioSanLazaro.png',
    codigoUnico: 'ABCD1234'
  };

  docentes = [
    { nombre: 'Docente 1', imagen: 'https://via.placeholder.com/150', seccion: 'Matemáticas' },
    { nombre: 'Docente 2', imagen: 'https://via.placeholder.com/150', seccion: 'Ciencias' },
    { nombre: 'Docente 3', imagen: 'https://via.placeholder.com/150', seccion: 'Historia' },
    { nombre: 'Rusnayo', imagen: 'https://via.placeholder.com/150', seccion: 'DAWA' },
  ];

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const map = L.map('mapa', {
      center: [51.505, -0.09], // Coordenadas de ejemplo (Londres)
      zoom: 20 // Nivel de zoom inicial
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    tiles.addTo(map);
  }
}
