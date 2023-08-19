import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HorreurListComponent } from './horreur-page/components/horreur-list/horreur-list.component';

const routes: Routes = [
  { path: 'horror', component: HorreurListComponent },
  { path: '', component: LandingPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
