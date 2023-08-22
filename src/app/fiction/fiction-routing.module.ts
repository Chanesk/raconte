import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SingleRaconteComponent } from "../raconte/components/single-raconte/single-raconte.component";
import { FictionComponent } from "./components/fiction/fiction.component";

const routes: Routes=[
    {path:':id',component:SingleRaconteComponent},
    {path:'', component: FictionComponent}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class FictionRoutingModule {}