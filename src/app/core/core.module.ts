import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import * as fr from '@angular/common/locales/fr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[
    HeaderComponent
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
})
export class CoreModule {
  constructor(){
    registerLocaleData(fr.default);
  }
}
