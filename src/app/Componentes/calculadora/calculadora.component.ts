import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  operacion="";
  historyl="";
  calculo:number=60;
  prueba="2*5";
  asnwer=0;

  ac(){
    this.operacion=""
  }

  del(){
    this.operacion=this.operacion.substring(0,this.operacion.length-1)
  }
  pushx(){this.operacion=`${this.operacion}*`}
  pushdiv(){this.operacion=`${this.operacion}/`}
  pushplus(){this.operacion=`${this.operacion}+`}
  pushmain(){this.operacion=`${this.operacion}-`}
  ans(){this.operacion=`${this.operacion}${this.asnwer}`}
  exp(){}

  operation(){
    this.historyl=eval(this.operacion)
    this.asnwer=eval(this.operacion)
  }
  
  push0(){this.operacion=`${this.operacion}0`}
  pushpoint(){this.operacion=`${this.operacion}.`}
  push7(){this.operacion=`${this.operacion}7`}
  push8(){this.operacion=`${this.operacion}8`}
  push9(){this.operacion=`${this.operacion}9`}
  push4(){this.operacion=`${this.operacion}4`}
  push5(){this.operacion=`${this.operacion}5`}
  push6(){this.operacion=`${this.operacion}6`}
  push1(){this.operacion=`${this.operacion}1`}
  push2(){this.operacion=`${this.operacion}2`}
  push3(){this.operacion=`${this.operacion}3`}

}
