import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { HorreurPageModule } from './horreur-page/horreur-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LandingPageModule,
    HorreurPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
