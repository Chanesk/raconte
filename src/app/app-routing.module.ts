import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router"
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { RaconteComponent } from "./raconte/components/raconte/raconte.component";

const routes: Routes=[
    {path:'', component:LandingPageComponent}

]
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}