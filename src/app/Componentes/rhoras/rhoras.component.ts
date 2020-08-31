import { Component, OnInit } from '@angular/core';
import {GethorasService} from 'src/app/services/gethoras.service'
import * as moment from 'moment';
import { Chart } from 'node_modules/chart.js';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-rhoras',
  templateUrl: './rhoras.component.html',
  styleUrls: ['./rhoras.component.css']
})
export class RhorasComponent implements OnInit {
  title = 'pruebapp';
  horaInicio;
  horaFin;
  informacionMostrar: any = [];
  mensaje = null;
  pro: any = [];
  fechas: any = [];
  mostrar=false;
  constructor(private service: GethorasService) { }

  ngOnInit(): void {
  }
  
  obtenerHoras() {
    this.informacionMostrar = []; this.pro = []; this.fechas = []

    this.service.obtenerHorasDispositivo(this.horaInicio, this.horaFin).subscribe(res => {
      console.log(res)
      this.informacionMostrar = res
      this.horas(res)
    }, error => {
      console.log(error.status)
      if (error.status) {
        this.mensaje = 'error'
        console.log(this.mensaje)
      }
    })
  }

  horas(aquirecibohoras) {
    const horasMostrar = aquirecibohoras
    var local = []
    var cantidadFechas = []
    horasMostrar.map((fechas) => {
      let f = fechas.serverTime.substring(0, 10)
      let h = fechas.serverTime.substring(10, 19)
      let t = fechas.type.substring(8)
      //funcion para agregar fechas a matriz----------------------------------
      if (cantidadFechas.length == 0) { cantidadFechas.push(f) }
      else { cantidadFechas.map(fecha => {
          if (cantidadFechas.indexOf(f) == -1) 
          { fecha = cantidadFechas.push(f) } else { }})
      }
      local.push(f + h + t)
    })
    this.limitanteFechas(local, cantidadFechas)
  }

  limitanteFechas(local, cantidadFechas){
    if (cantidadFechas.length<=5) {
      this.filtro1(local, cantidadFechas)
    } else {
      alert("Solo puedo calcular maximo 3 dias")
    } 
  }

  filtro1(local, cantidadFechas){
    let localalph = []
    for (let i = 0; i < local.length; i++) {
      if (localalph.length==0) {localalph.push(local[i])} 
      else {
        if (i < local.length-1) {
          let a = local[i].substring(19)
          let b = local[i+1].substring(19)
          if (a==b) {localalph.push(local[i]); i=i+1} 
          else {localalph.push(local[i])}
        } else {localalph.push(local[i])}
      }
    }
    local=localalph
    this.filtro2(local, cantidadFechas)  
  }

  filtro2(local, cantidadFechas) {
    var local2 = []
    for (let i = 0; i < local.length; i++) {
      if (local2.length == 0) { local2.push(local[i]) }
      else {
        if (i < local.length - 2) {
          let b = local[i].substring(11, 19)//hora
          let e = local[i + 1].substring(11, 19)//hora
          if (b.substring(0, 5) == e.substring(0, 5)) { i = i + 1 }
          else { local2.push(local[i]) }
        } else { local2.push(local[i]) }
      }
    }
    this.elementaddOnOff(local2, cantidadFechas)
  }


  elementaddOnOff(local2, cantidadFechas) {
    var on=[]; var off=[]
    for (let i = 0; i < local2.length; i++) {
      let f = local2[i].substring(0, 10)
      let h = local2[i].substring(11, 19)
      let t = local2[i].substring(19)
      if (t == "On") {
        let u = cantidadFechas.indexOf(f)
        on.push(u + '_' + h + '_e')
      }
      else {
        let u = cantidadFechas.indexOf(f)
        off.push(u + '_' + h + '_a')
      }
    }
    this.creacionarraybidi(on, off, cantidadFechas)
  }

  creacionarraybidi(on, off, cantidadFechas) {
    var arraybidi = []

    for (let i = 0; i < cantidadFechas.length; i++) {
      var fecha = new Array()
      arraybidi.push(fecha)
    }
    this.calculototal(on, off, arraybidi, cantidadFechas)
  }

  calculototal(on, off, arraybidi, cantidadFechas) {
    for (let i = 0; i < on.length && off.length; i++) {
      let idb = on[i].substring(0, 1)
      let idboff = off[i].substring(0, 1)
      let a = moment(`${on[i].substring(2, 10)}`, 'hh:mm:ss')
      let b = moment(`${off[i].substring(2, 10)}`, 'hh:mm:ss')
      if (idb == idboff) {

        let ho = b.diff(a, 'seconds')
        arraybidi[idb].push(`${idb}_${ho}`)

      } else {
        let h2 = moment('23:59:59', 'hh:mm:ss')
        let h1 = moment('00:00:01', 'hh:mm:ss')
        let ho = h2.diff(a, 'seconds')
        let hoof = b.diff(h1, 'seconds')
        arraybidi[idb].push(`${idb}_${ho}`)
        arraybidi[idboff].push(`${idboff}_${hoof}`)
      }
    }
    this.convertirHMS(arraybidi, cantidadFechas)
  }

  convertirHMS(arraybidi, cantidadFechas) {
    var arrayfinal = []
    for (let i = 0; i < arraybidi.length; i++) {
      let suma = 0
      for (let j = 0; j < arraybidi[i].length; j++) {
        let local = arraybidi[i][j].substring(2)
        suma = (suma + parseInt(local))
      }
      let h = Math.floor(suma / 3600)
      let m = Math.floor((suma / 60) % 60)
      let s = Math.floor(suma % 60)

      this.pro.push(`${cantidadFechas[i]} horas: ${h}:${m}:${s}`)
      arrayfinal.push(new Number(`${Math.floor(suma/60)}`))
    }
    this.pro.shift()
    this.pro.pop()
    arrayfinal.shift()
    arrayfinal.pop()
    cantidadFechas.shift()
    cantidadFechas.pop()
    this.mostrar=true
    this.grafica(cantidadFechas,arrayfinal)
  }
  grafica(cantidadFechas,arrayfinal) {

      new Chart("migrafica", {
      type: 'bar',
      data: {
        labels: cantidadFechas,
        datasets: [{
          label: 'Tiempo Calculado en min',
          data: arrayfinal,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  descargarPDF(){
    var element = document.getElementById('reporte')

    html2canvas(element).then((canvas)=>{
    var imgData = canvas.toDataURL('image/png')
    var doc = new jsPDF()
    doc.addImage(imgData,0,0,200,200)
    doc.save("Reporte.pdf")
    })
  }
}

