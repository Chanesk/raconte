import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Raconte } from 'src/app/core/model/raconte.model';
import { raconteService } from 'src/app/core/service/racontes.service';

@Component({
  selector: 'app-horreur-list',
  templateUrl: './horreur-list.component.html',
  styleUrls: ['./horreur-list.component.scss']
})
export class HorreurListComponent implements OnInit{
  raconte$!: Observable<Raconte[]>;
  constructor(private RaconteService: raconteService){}

  ngOnInit(): void {
    this.raconte$= this.RaconteService.getAllRacontes();
  }
}
