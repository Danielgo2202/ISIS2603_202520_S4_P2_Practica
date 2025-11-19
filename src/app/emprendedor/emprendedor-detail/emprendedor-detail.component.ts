import { Component, Input } from '@angular/core';
import { Emprendedor } from '../emprendedor';
import { EmprendedorDetail } from '../emprendedor-detail';
import { EmprendedorService } from '../emprededor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emprendedor-detail',
  standalone: false,
  templateUrl: './emprendedor-detail.component.html',
  styleUrl: './emprendedor-detail.component.css'
})
export class EmprendedorDetailComponent {
  
  emprendedor: any;

  constructor(
    private route: ActivatedRoute,
    private emprendedorService: EmprendedorService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.emprendedorService.getEmprendedorDetalle(id).subscribe(data => {
      this.emprendedor = data;
    });
  }

}
