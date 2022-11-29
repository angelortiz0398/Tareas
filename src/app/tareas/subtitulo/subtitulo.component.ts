import { TareasService } from './../services/tareas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-subtitulo',
  templateUrl: './subtitulo.component.html',
  styleUrls: ['./subtitulo.component.css']
})
export class SubtituloComponent {
  constructor(private tareasService: TareasService){

  }
  get tareas(){
    return this.tareasService.tareas.length;
  }
}
