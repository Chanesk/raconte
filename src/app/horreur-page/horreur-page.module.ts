import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorreurListComponent } from './components/horreur-list/horreur-list.component';
import { HorreurArticleComponent } from './components/horreur-article/horreur-article.component';
import { DependanceModule } from '../dependance/dependance.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { RaconteModule } from '../raconte/raconte.module';

@NgModule({
  declarations: [
    HorreurListComponent,
    HorreurArticleComponent,
  ],
  imports: [
    CommonModule,
    DependanceModule,
    FontAwesomeModule,
    RaconteModule
  ],
  
})
export class HorreurPageModule {}
