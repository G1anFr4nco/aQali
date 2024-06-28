import { Producto } from "../productos/producto.model";

// ingreso.model.ts
export class Ingreso {
    constructor(
      public _id: string,
      public productoId: Producto | string, // Puede ser un Producto o solo el ID del producto
      public cantidad: number,
      public fechaIngreso: Date
    ) {}
  }
  