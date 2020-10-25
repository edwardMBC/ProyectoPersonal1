import { Component, Input } from '@angular/core';
import { Observable, Observer} from 'rxjs';
import {retry} from 'rxjs/operators'
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent{
  
  @Input('codigos') codigos=[];
  @Input('active') active=false;
  @Input('listacode') Productos=[{
                                codigo:"Ingresa objetos",
                                data:{nombre:"N/A",
                                      precio:"0",
                                      description:"Sin descrpccion",
                                      imagen:"Not Found"}
                                    }
  ];
  a=[];

  constructor() { 
    this.retornaobservable().pipe(
      retry()
    )
    .subscribe(
      valor => console.log(valor),
      (err) => console.log('Error: ',err),
      () => console.info('Obs terminado')
    )
  }

  retornaobservable(){
    var i =-1;
    return new Observable<any>( observer => {

      const interval = setInterval( () => {
        console.log(this.codigos.length)
        console.log(this.Productos)
        if (this.codigos.length===0){observer.error('Sin Productos en carrito')}
        
        if (this.codigos.length>0&&i<this.codigos.length){
          i++;
          let codigo = this.codigos[i]
          console.log(codigo)
          let pro = this.Productos.find(Producto => {
            Producto.codigo===codigo
          })
          observer.next(pro);}
        
        if (i===this.codigos.length-1){clearInterval(interval);
        observer.complete();}

    },1000)
  })
}
  
  /*carrito():Observable< any >{
    this.codigos.map(codigo=>{
      let pro = this.Productos.find(Producto=>{Producto.codigo===codigo})
      this.a.push(pro)
    })
    let i:any;
    this.a.map(a=>{i.push(a.codigo)})
    if (i.length===this.codigos.length){IntersectionObserver.complete}
    return
    return this.codigos.map()
    this.a.push(this.Productos.find(Producto=> Producto.codigo === codigo)

    
    /*
    const a = this.Productos.map(Producto => {
      this.Productos.find(Producto.codigo === Producto)
    })
  console.log(a)
  for (let i = 0; i < this.codigos.length; i++) {
    this.a = this.Productos.find(Producto => Producto.codigo === this.codigos[i])
    }
  }
    */

}
