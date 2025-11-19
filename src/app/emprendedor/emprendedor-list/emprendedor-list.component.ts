import { Component, OnInit, Output } from '@angular/core';
import { Emprendedor } from '../emprendedor';
import { EmprendedorService } from '../emprededor.service';

@Component({
  selector: 'app-emprendedor-list',
  standalone: false,
  templateUrl: './emprendedor-list.component.html',
  styleUrl: './emprendedor-list.component.css'
})
export class EmprendedorListComponent implements OnInit {
  // Lista de emprendedores quemada, recuerden que tiene que crear un servicio para obtenerlos del API
  // Por lo tanto, el contenido de esta lista luego lo deben eliminar
  emprendedores: Array<Emprendedor> = []

  constructor(private emprendedorService: EmprendedorService) { }

  ngOnInit(): void {
    this.emprendedorService.getEmprendedores().subscribe(emprendedores => {
      this.emprendedores = emprendedores;
    });
  }
  
}
