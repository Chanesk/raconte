import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HorreurListComponent } from './horreur-page/components/horreur-list/horreur-list.component';
import { FictionComponent } from './fiction/components/fiction/fiction.component';
import { ReelComponent } from './reel/components/reel/reel.component';
import { SingleRaconteComponent } from './raconte/components/single-raconte/single-raconte.component';

const routes: Routes = [
  {path:'reel/:id', component:SingleRaconteComponent},
  {path: 'fiction/:id', component: SingleRaconteComponent},
  {path:'horror/:id', component: SingleRaconteComponent},
  {path: 'raconte/:id', component: SingleRaconteComponent},
  {path:'reel', component: ReelComponent},
  { path: 'fiction', component: FictionComponent},
  { path: 'horror', component: HorreurListComponent },
  { path: '', component: LandingPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
