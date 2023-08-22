import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { SingleRaconteComponent } from "./components/single-raconte/single-raconte.component";

const routes: Routes= [
    {path:':id', component:SingleRaconteComponent}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RaconteRoutingModule {}