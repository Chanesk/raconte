import { Component, Input } from '@angular/core';
import { Raconte } from 'src/app/core/model/raconte.model';

@Component({
  selector: 'app-raconte-third-recente',
  templateUrl: './raconte-third-recente.component.html',
  styleUrls: ['./raconte-third-recente.component.scss']
})
export class RaconteThirdRecenteComponent {
  @Input() raconte!: Raconte
}
