import { Component, Input } from '@angular/core';
import { Raconte } from 'src/app/core/model/raconte.model';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-raconte-recente',
  templateUrl: './raconte-recente.component.html',
  styleUrls: ['./raconte-recente.component.scss'],
})
export class RaconteRecenteComponent {
  @Input() raconte!: Raconte;

  icon = faArrowUpRightFromSquare;
}
