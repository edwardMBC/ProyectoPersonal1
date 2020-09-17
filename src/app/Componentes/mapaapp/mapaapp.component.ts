import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {icon} from 'leaflet';
import {puntosventa, aerop, patios, vrosario,
  monumentosc, mallcentersc} from '../../../assets/recursos/CENTRO';
import { ifError } from 'assert';

@Component({
  selector: 'app-mapaapp',
  templateUrl: './mapaapp.component.html',
  styleUrls: ['./mapaapp.component.css']
})
export class MapaappComponent implements OnInit {
  name = 'Angular';
  map:any;
  count = 0;

    ngOnInit() {
      // aqui llamas la funcion 

      this.markers()

    }

markers(){
  setTimeout(() => {

    var monuments = L.layerGroup();
    var mallcenters = L.layerGroup();
    var pventas = L.layerGroup();
    var pventasP = L.layerGroup();
    var pventasvr = L.layerGroup();
    var pventasap = L.layerGroup();

    function popup(feature, layer) { 
      if (feature.properties && feature.properties.name) 
      { layer.bindPopup(feature.properties.name);
        layer.setIcon(icon({
          iconSize: [41, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/images/iconopventas.png'
        })); } 
      }

      function popmonu(feature, layer) {
          if (feature.properties && feature.properties.name) 
          { layer.bindPopup(feature.properties.description,)
}
          if (feature.properties.capa == "mon") {
            layer.setIcon(icon({
              iconSize: [30, 41],
              iconAnchor: [13, 41],
              iconUrl: 'assets/images/iconmonumento.png'
            }))
          } else {
            layer.setIcon(icon({
              iconSize: [41, 41],
              iconAnchor: [13, 41],
              iconUrl: 'assets/images/Ccomercial.png'
            }))
          }
          }

      L.geoJSON(monumentosc, {onEachFeature: popmonu}).addTo(monuments);  
      L.geoJSON(mallcentersc, {onEachFeature: popmonu}).addTo(mallcenters);  
      L.geoJSON(puntosventa, {onEachFeature: popup}).addTo(pventas);  
      L.geoJSON(patios, {onEachFeature: popup}).addTo(pventasP);  
      L.geoJSON(vrosario, {onEachFeature: popup}).addTo(pventasvr);  
      L.geoJSON(aerop, {onEachFeature: popup}).addTo(pventasap);  

      this.loadmap(monuments, mallcenters, 
        pventas, pventasP, pventasvr, pventasap)

  }, 50)

}
loadmap(monuments,mallcenters, pventas, pventasP, 
  pventasvr, pventasap){
  var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
  '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
  var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'

  var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr})
  var streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr})
  
  this.map = L.map('map', {
    center: [7.889231,-72.4980936],
    zoom: 10,
    layers: [grayscale, monuments]
  })

  var baseLayers = {
    "Escala de Grises": grayscale,
    "Calles": streets
  }
  var overlays = {
    "Monumentos": monuments,
    "Centros Comerciales": mallcenters,
    "P. Apuestas Centro": pventas,
    "P. Apuestas Patios": pventasP,
    "P. Apuestas Villa Rosario": pventasvr,
    "P. Apuestas Aeropuerto": pventasap
  }
  L.control.layers(baseLayers, overlays).addTo(this.map)
}

    Buscame(){
      var browserLat;
      var browserLong;  

    navigator.geolocation.getCurrentPosition((position)=>{
    browserLat =  position.coords.latitude;
    browserLong = position.coords.longitude;
    console.log(browserLat, browserLong)
      this.yo(browserLat, browserLong)
    
    },(err) =>{
    console.error(err)});  
    }

    yo(browserLat, browserLong){
      var marker_actual = L.marker([browserLat,browserLong])
      .bindPopup('<b>Hola </b><br>Tu estas aqui')
      .openPopup()
      .setIcon(icon({
        iconSize: [40, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/images/usuario.png'
      }))
      marker_actual.addTo(this.map)
      console.log('lol')
  
      this.map.setView([browserLat,browserLong], 18);  
  
      console.log(browserLat)
      console.log(browserLong)
    }

    hubicame(){
      this.map.locate({setView: true, maxZoom:18});

    }


  }
