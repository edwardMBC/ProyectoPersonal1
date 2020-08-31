import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {icon} from 'leaflet'
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

    var monuments = L.layerGroup()
    var mallcenters = L.layerGroup()

      L.marker([7.878051, -72.508974],
        {title: "Columna de Padilla",draggable: false})
        .setIcon(icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/images/iconmonumento.png'
        }))
        .bindPopup("<div class='dpopus'><h1>Columna de padilla</h1> <img src='https://mapio.net/images-p/67690776.jpg' alt='Imagen de Columna de Padilla' width='150' height='150'> <p>Recuerda la batalla naval que se dió con los españoles y que selló nuestra libertad. Está dedicada al almirante José Prudencio Padilla</p></div>")
        .addTo(monuments)
      
      L.marker([7.877029, -72.500795],
        {title: "Cristo Rey",draggable: false})
        .setIcon(icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/images/iconmonumento.png'
        }))
        .bindPopup("<div class='dpopus'><h1>Cristo Rey</h1> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3QGBZBpcxXW0rWbkBeHVcC77XAp6f80hvcS6WoWyBJ9ssQ0a5&usqp=CAU' alt='Imagen de Cristo rey' width='150' height='150'> <p>Un mirador con vista de la mayor parte de la ciudad. Alberga un monumento de Cristo de gran tamaño que durante las fiestas patronales es visitado por miles de feligreses y adeptos católicos. Si no eres religioso, al menos te llevarás una excelente foto y una vista fantástica</p></div>")
        .addTo(monuments)

      L.marker([7.891050, -72.517389],
        {title: "Loma de Bolivar",draggable: false})
        .setIcon(icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/images/iconmonumento.png'
        }))
        .bindPopup("<div class='dpopus'><h1>Loma de Bolivar</h1> <img src='https://www.laopinion.com.co/sites/default/files/2020/02/27/imagenes_adicionales/web-loma-2.jpg' alt='Imagen de la Loma de Bolivar' width='150' height='150'> <p>Monumento con mucha historia de la ciudad de Cúcuta, tiene una muy bonita vista de la ciudad y es una muy buena posición te entretenimiento y cultura en la ciudad</p></div>")
        .addTo(monuments)

      L.marker([7.886034, -72.520624],
        {title: "Virgen de Fatima",draggable: false})
      .setIcon(icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/images/iconmonumento.png'
      }))
      .bindPopup("<div class='dpopus'><h1>Virgen de Fatima</h1> <img src='https://www.laopinion.com.co/sites/default/files/2016/05/11/imagen/virgen1.jpg' alt='Imagen de la virgen de Fatima' width='150' height='150'> <p>Un acto religioso muy hermoso y de tradición en el barrio Cundinamarca de Cúcuta</p></div>").addTo(monuments)

      L.marker([7.914306, -72.540468],
        {title: "Mirador Cristo Nazareno",draggable: false})
        .setIcon(icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/images/iconmonumento.png'
        }))
        .bindPopup("<div class='dpopus'><h1>Mirador Cristo Nazareno</h1> <img src='https://www.laopinion.com.co/sites/default/files/styles/640x370/public/2017/05/26/imagen/metro1.jpg' alt='Imagen del mirador Cristo nazareno' width='150' height='150'> <p>Con una vista de 360°, este mirador de la comuna 8, tiene 2 mil 600 metros cuadrados de urbanismo, que incluyen senderos peatonales, espacios públicos, locales comerciales, baños, una escultura metalica de Jesús Nazareno, de más de 25 metros, inspirada en un diseño del maestro Trino Ortega, y las estaciones del Viacrucis, para el acceso peatonal por escalera de 200 peldaños o en vehiculo hasta la parte alta de cerro</p></div>")
        .addTo(monuments)

        L.marker([7.8879538,-72.5014653],
          {title: "Ventura Plaza",draggable: false})
          .setIcon(icon({
            iconSize: [41, 41],
            iconAnchor: [41, 41],
            iconUrl: 'assets/images/Ccomercial.png'
          }))
          .bindPopup("<div class='dpopus'><h1>Centro Comercial Ventura Plaza</h1> <img src='assets/images/venturaplaza.jpeg' alt='Imagen del C.C Ventura Plaza ' width='150' height='150'> <p>Hermoso centro comercial. Perfecto para ir a comer helado o ir a cine</p></div>")
          .addTo(mallcenters)

          L.marker([7.9200052,-72.4816703],
            {title: "Jardin Plaza",draggable: false})
            .setIcon(icon({
              iconSize: [41, 41],
              iconAnchor: [41, 41],
              iconUrl: 'assets/images/Ccomercial.png'
            }))
            .bindPopup("<div class='dpopus'><h1>Centro Comercial Jardin Plaza</h1> <img src='assets/images/JardinPlaza.jpg' alt='Imagen del Jardin Plaza' width='150' height='150'> <p>Espacioso y abierto centro comercial, con bellas zonas verde</p></div>")
            .addTo(mallcenters)

            L.marker([7.88806,-72.5056052],
              {title: "River Plaza",draggable: false})
              .setIcon(icon({
                iconSize: [41, 41],
                iconAnchor: [41, 41],
                iconUrl: 'assets/images/Ccomercial.png'
              }))
              .bindPopup("<div class='dpopus'><h1>Centro Comercial River Plaza</h1> <img src='assets/images/RiverPlaza.jpg' alt='Imagen del ' width='150' height='150'> <p>Centrico y realmente visitado centro comercial</p></div>")
              .addTo(mallcenters)
      
      this.loadmap(monuments, mallcenters)

  }, 50)

}
loadmap(monuments,mallcenters){
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
    "Centros Comerciales": mallcenters
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
