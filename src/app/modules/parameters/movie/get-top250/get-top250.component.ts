import { Component, OnInit } from '@angular/core';
import { list } from 'src/app/models/parameters/list.model';
import { MovieService } from 'src/app/services/parameters/movie.service';

@Component({
  selector: 'app-get-top250',
  templateUrl: './get-top250.component.html',
  styleUrls: ['./get-top250.component.scss']
})
export class GetTop250Component implements OnInit {

  // los elementos del JSON se guardaran en una variable de tipo Lista definida en modelos 
  recordList: list = new list;
  filteredItems: list = new list;

  //varibles usadas en la paginacion para decidir cuantos registros mostrar por pagina
  currentPage = 1;
  itemsPerPage = 10;

  //encabezados de la tabla haciendo que se muestren todos por defecto
  columns = [
    { name: 'Rank', visible: true },
    { name: 'Titulo', visible: true },
    { name: 'Año', visible: true },
    { name: 'Imagen', visible: true },
    { name: 'Personal', visible: true },
    { name: 'Calificación ImDb', visible: true },
    { name: 'Total Calificaciones', visible: true }
  ];

  //variable en la cual se guarda el filtro aplicado a las peliculas por año
  selectedOption = 'all';

  //funcion que mira el valor de la variable y que devuelve una lista de las peliculas ya filtradas
  filterRecords() {
    if (this.recordList.items) {
      switch (this.selectedOption) {
        case 'after2000':
          return this.recordList.items.filter(record => record.year && record.year >= 2000);
        case 'between1980And2000':
          return this.recordList.items.filter(record => record.year && record.year >= 1980 && record.year < 2000);
        case 'before1980':
          return this.recordList.items.filter(record => record.year && record.year < 1980);
        default:
          return this.recordList.items;
      }
    }
    return
  }

  //funcion para ocultar las columnas a las que se les hace click
  hideColumn(columna: any) {
    columna.visible = false;
  }

  //funcion para mostrar de nuevo las columnas que han sido ocultadas
  showAllColumns() {
    this.columns.forEach(column => column.visible = true);
  }

  //funcion para verificar si hay columnas ocultas para activar el boton que las vuelve a mostrar
  areHiddenColumns() {
    return this.columns.some(column => !column.visible);
  }

  //funciones de la paginacion
  getPaginatedItems() {
    const filteredRecords = this.filterRecords();
    if (filteredRecords && Array.isArray(filteredRecords)) {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return filteredRecords.slice(startIndex, endIndex);
    }
    return [];
  }

  onSelectOption() {
    this.currentPage = 1;
  }

  getLastPage() {
    if (this.recordList.items) {
      return Math.ceil(this.recordList.items.length / this.itemsPerPage);
    }
    return
  }

  //funcion para que al pasar de pagina nos lleve a la parte de arriba automaticamente
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  constructor(
    private service: MovieService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }

  //funcion que se conecta al servicio de peliculas para traer los datos de la api
  GetRecordList() {
    this.service.GetRecordList().subscribe({
      next: (data: list) => {
        this.recordList = data;
      }
    });
  }
}
