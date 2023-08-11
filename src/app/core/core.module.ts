import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import * as fr from '@angular/common/locales/fr'


@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule],
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
