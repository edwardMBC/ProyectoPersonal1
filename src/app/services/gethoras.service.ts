import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class GethorasService {
  serverApi = environment.serverApi;

  constructor(private http: HttpClient) {
    
   }
  obtenerHorasDispositivo(horaInicio,horaFin){
    horaInicio= moment(horaInicio).subtract(1, 'd').format('YYYY-MM-DD')
    horaFin = moment(horaFin).add(1, 'd').format('YYYY-MM-DD')
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');//demoM
    headers = headers.append('Authorization', 'Basic ' + btoa('DEMOM1' + ':' + 'DEMOM1'));
    return this.http.get(this.serverApi + `reports/events?deviceId=225&type=ignitionOn&type=ignitionOff&from=${horaInicio}T05:00:00Z&to=${horaFin}T05:00:00Z`, {headers:headers})
  }
}
