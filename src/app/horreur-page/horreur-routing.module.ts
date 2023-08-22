import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SingleRaconteComponent } from "../raconte/components/single-raconte/single-raconte.component";
import { HorreurListComponent } from "./components/horreur-list/horreur-list.component";

const routes: Routes=[
    {path:':id', component: SingleRaconteComponent},
    {path:'', component: HorreurListComponent},
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class HorreurRoutingModule {}