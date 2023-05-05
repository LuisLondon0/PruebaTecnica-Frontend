import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { list } from 'src/app/models/parameters/list.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url: string = GeneralData.URL_TOP250_MOVIES;

  constructor(
    private http: HttpClient
  ) { }

  //funcion que se conecta con la api para traer los registros
  GetRecordList(): Observable<list>{
    return this.http.get<list>(`${this.url}`);
  }

}
