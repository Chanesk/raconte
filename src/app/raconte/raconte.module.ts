import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaconteComponent } from './components/raconte/raconte.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { RaconteListComponent } from './components/raconte-list/raconte-list.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { TruncatePipe } from '../truncate.pipe';



@NgModule({
  declarations: [
    RaconteComponent,
    SubscribeComponent,
    RaconteListComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ], 
  exports:[
    RaconteListComponent,
    SubscribeComponent
  ]
})
export class RaconteModule { }
