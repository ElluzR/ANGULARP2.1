import { Component } from '@angular/core';
import { ServiciosService } from './services/servicios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercicio02';
  usuarios: Array<any>; 

  constructor (private servServices: ServiciosService) {

    this.usuarios =  new Array<any>();
  }
  
  getAllUsuarios(){ 
    this.servServices.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

}
