import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SingleRaconteComponent } from "../raconte/components/single-raconte/single-raconte.component";
import { ReelComponent } from "./components/reel/reel.component";

const routes: Routes =[
    {path: ':id', component: SingleRaconteComponent},
    {path:'', component: ReelComponent}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[]
})
export class ReelRoutingModule {}