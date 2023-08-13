import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Raconte } from 'src/app/core/model/raconte.model';
import { raconteService } from 'src/app/core/service/racontes.service';

@Component({
  selector: 'app-raconte-list',
  templateUrl: './raconte-list.component.html',
  styleUrls: ['./raconte-list.component.scss']
})
export class RaconteListComponent implements OnInit{
  raconte$!: Observable<Raconte[]>;

  constructor(private raconteService: raconteService){}

  ngOnInit(): void {
    this.raconte$= this.raconteService.getAllRacontes();
    this.raconte$.subscribe(value =>console.log(value)
    )
  }

}
