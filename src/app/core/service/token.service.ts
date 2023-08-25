import { Injectable} from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class TokenService {
    test$!:Observable<any>
    saveToken(token:string):void{
        localStorage.setItem('token', token)
    }

    getToken():string | null{
        return  localStorage.getItem('token')
    }
}