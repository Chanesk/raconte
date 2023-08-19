import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HorreurListComponent } from './horreur-page/components/horreur-list/horreur-list.component';
import { FictionComponent } from './fiction/components/fiction/fiction.component';

const routes: Routes = [
  { path: 'fiction', component: FictionComponent},
  { path: 'horror', component: HorreurListComponent },
  { path: '', component: LandingPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
