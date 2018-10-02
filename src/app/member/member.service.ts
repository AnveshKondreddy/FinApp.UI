import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {map} from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable()
export class MemberService {

    private headers: Headers = new Headers({ 'content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private _http: Http) { }
     apiLink= "http://localhost:51665/api/members";
    public readmembers(): any {
       
        console.log("Read Members service");
        console.log(this.apiLink);
        return this._http.get(this.apiLink).pipe(
            map((respose:Response)=>respose.json(), console.log(Response))
        );
    }
}