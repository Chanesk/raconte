import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaconteComponent } from './components/raconte/raconte.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { RaconteListComponent } from './components/raconte-list/raconte-list.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { TruncatePipe } from '../truncate.pipe';
import { RaconteRecenteComponent } from './components/raconte-recente/raconte-recente.component';
import { RaconteRecenteListComponent } from './components/raconte-recente-list/raconte-recente-list.component';
import { RaconteThirdRecenteComponent } from './components/raconte-third-recente/raconte-third-recente.component';



@NgModule({
  declarations: [
    RaconteComponent,
    SubscribeComponent,
    RaconteListComponent,
    TruncatePipe,
    RaconteRecenteComponent,
    RaconteRecenteListComponent,
    RaconteThirdRecenteComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ], 
  exports:[
    RaconteListComponent,
    SubscribeComponent,
    RaconteRecenteListComponent
  ]
})
export class RaconteModule { }
