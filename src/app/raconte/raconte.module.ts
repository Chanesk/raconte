import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaconteComponent } from './components/raconte/raconte.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { RaconteListComponent } from './components/raconte-list/raconte-list.component';



@NgModule({
  declarations: [
    RaconteComponent,
    SubscribeComponent,
    RaconteListComponent,
  ],
  imports: [
    CommonModule,
  ], 
  exports:[
    RaconteComponent,
    SubscribeComponent
  ]
})
export class RaconteModule { }
