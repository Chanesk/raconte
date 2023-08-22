import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class TokenService {
    saveToken(token:string):void{
        localStorage.setItem('token', token)
    }

    isSining():boolean{
        const token = localStorage.getItem('token')
        return !! token
    }
}