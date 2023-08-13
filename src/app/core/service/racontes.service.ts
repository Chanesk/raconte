import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Raconte } from "../model/raconte.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root',
})
export class raconteService{
    constructor(private http: HttpClient){}

    getAllRacontes():Observable<Raconte[]>{
        return this.http.get<Raconte[]>('http://localhost:1337/api/articles');
    }
}