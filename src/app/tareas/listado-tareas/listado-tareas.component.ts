import { TareasService } from './../services/tareas.service';
import { Component } from '@angular/core';
import { Tarea } from '../interfaces/tarea';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent {
  constructor(private tareasService: TareasService){
    console.log(tareasService);
  }
  get tareas(){
    return this.tareasService.tareas;
  }
  delete(tarea: Tarea){
    this.tareasService.deleteTarea(tarea.tarea);
  }
  complete(tarea: Tarea){
    this.tareasService.completeTarea(tarea.tarea);
  }
}
