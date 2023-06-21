import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EducacionService } from '../../services/educacion.service';
import { switchMap } from 'rxjs/operators';
import { Education } from '../../interfaces/educacion';

@Component({
  selector: 'app-page-educacion',
  templateUrl: './page-educacion.component.html',
  styleUrls: ['./page-educacion.component.css']
})
export class PageEducacionComponent implements OnInit{

  educations !: Education[];

  constructor(private activatedRoute: ActivatedRoute,private service :EducacionService){
    this.service.getEducations().subscribe(resp => this.educations = resp);
  }

  ngOnInit(): void {}
}
