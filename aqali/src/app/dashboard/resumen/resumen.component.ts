import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import Chart from 'chart.js/auto'; // Importa Chart.js

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  tiempoRestante: string = '';
  productosIngresados: any[] = [];
  productosSalidos: any[] = [];
  colegio = {
    nombre: 'Colegio Ejemplo',
    direccion: 'Calle Falsa 123',
    imagen: 'assets/colegioSanLazaro.png'
  };
  docentes = [
    { nombre: 'Docente 1', imagen: 'https://via.placeholder.com/150', seccion: 'Matemáticas' },
    { nombre: 'Docente 2', imagen: 'https://via.placeholder.com/150', seccion: 'Ciencias' },
    { nombre: 'Docente 3', imagen: 'https://via.placeholder.com/150', seccion: 'Historia' },
    { nombre: 'Rusnayo', imagen: 'https://via.placeholder.com/150', seccion: 'DAWA' },
  ];

  // Variable para el gráfico
  chartProductosIngresados: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.calcularTiempoRestante();
    this.obtenerProductos();
  }

  calcularTiempoRestante() {
    const targetTime = new Date();
    targetTime.setHours(12, 0, 0, 0); // 12:00 PM (mediodía)

    interval(1000).subscribe(() => {
      const now = new Date();
      let difference = targetTime.getTime() - now.getTime();

      if (difference < 0) {
        targetTime.setDate(targetTime.getDate() + 1);
        difference = targetTime.getTime() - now.getTime();
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      this.tiempoRestante = `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    });
  }

  obtenerProductos() {
    this.http.get<any[]>('http://localhost:3000/api/productos').subscribe(
      (productos: any[]) => {
        this.productosIngresados = productos;

        // Llama a la función para crear o actualizar el gráfico
        this.crearActualizarGraficoProductosIngresados();
      },
      error => {
        console.error('Error al obtener productos desde la API', error);
      }
    );
  }

  crearActualizarGraficoProductosIngresados() {
    if (this.chartProductosIngresados) {
      this.chartProductosIngresados.destroy(); // Destruye el gráfico anterior si existe
    }

    const labels = this.productosIngresados.map(producto => producto.nombre);
    const data = this.productosIngresados.map(producto => producto.cantidad);

    this.chartProductosIngresados = new Chart('chartProductosIngresados', {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Productos Ingresados',
          data: data,
          backgroundColor: [
            'rgb(75, 192, 192)',
            'rgb(255, 99, 132)',
            'rgb(255, 205, 86)',
            // Puedes agregar más colores aquí si tienes más productos
          ],
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right', // Posiciona la leyenda a la derecha
            labels: {
              boxWidth: 20 // Ancho de la caja de color de las leyendas
            }
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem: any) {
                return `${labels[tooltipItem.index]}: ${data[tooltipItem.index]}`;
              }
            }
          }
        }
      }
    });
  }

  navigateTo(url: string) {
    // Implementa la navegación si es necesario
  }
}
