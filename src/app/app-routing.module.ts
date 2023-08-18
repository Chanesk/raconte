import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RaconteComponent } from './raconte/components/raconte/raconte.component';
import { HorreurPageComponent } from './horreur-page/components/horreur/horreur-page.component';

const routes: Routes = [
  { path: 'horror', component: HorreurPageComponent },
  { path: '', component: LandingPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
