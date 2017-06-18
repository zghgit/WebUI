/**
 * Created by max on 2017/4/26.
 */
import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
@Injectable()
export class AppHttpService {
    public error: Error;

    constructor(public http: Http) {
    };
    public postData(url: string, params?: any): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(url, JSON.stringify(params), {headers: headers})
            .map((res: Response) => {
                let result = res.json();
                return result;
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    };

    public getData(url: string): Observable<any> {
        return this.http.get(url)
            .map((res: Response) => {
                let result = res.json();
                return result;
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    };

    public getBinary(url: string, params?: any): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers, responseType: 2});
        return this.http
            .post(url, JSON.stringify(params), options).map(res => {
                console.log(res);
                return res
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

}