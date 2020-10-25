import { Component } from '@angular/core';
import {productos} from '../../../assets/recursos/productos';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.css']
})
export class TiendaComponent{

  Productos=productos;
  carrito:boolean=false;
  i:number = 1;
  listacarrito=[];

  constructor() { }

  carritoactive(){
    this.i++
    if (this.i%2===0) {
      this.carrito=true
    } else {this.carrito=false}
  }

  listcarrito(codigo){
    //const lol = this.Productos.find(Producto => Producto.codigo === codigo)
    this.listacarrito.push(codigo)
  }
  listdeseos(codigo){
    //const lol = this.Productos.find(Producto => Producto.codigo === codigo)
    console.log(this.listacarrito);
  }
  
}
