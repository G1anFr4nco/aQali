export class Producto {
  constructor(
    public nombre: string = '',
    public cantidad: number = 0,
    public fechaIngreso: string = '',
    public fechaVencimiento: string = '',
    public codigo: string = '',
    public proveedor: string = ''
  ) {}
}