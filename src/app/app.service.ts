import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getTest():Observable<any[]> {

    var data = {
    };

    let params = new URLSearchParams();
    for(let key in data) {
        params.set(key, data[key]);
    }
    let options = new RequestOptions({
        search: params
    });

    return this.http.get('https://jsonplaceholder.typicode.com/users', options)
      .map(
        (response: Response) => {
          const result = response.json();
          return result;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Somehting went wrong');
        }
      );
  }

}
