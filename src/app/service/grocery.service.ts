import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  items = [];
  dataChanged$: Observable<boolean>;

  private dataChangeSubject: Subject<boolean>;

  baseUrl = "http://192.168.1.119:8080";

  constructor(public http: HttpClient) {
    console.log('Connecting Grocery Service Provider');
    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged$ = this.dataChangeSubject.asObservable();
  }

  getItems(): Observable<object[]> {
    return <Observable<object[]>>this.http.get(this.baseUrl + '/api/groceries').pipe(
      map(this.extractData), catchError(this.handleError)
    );
  }

  removeItem(item) {
    let destination:string;
    destination = this.baseUrl+'/api/groceries/'+item._id;
    console.log(destination);
    this.http.delete(destination,item).subscribe(
      res => {
        this.items = <any> res;
        this.dataChangeSubject.next(true);
      });
  }


  editItem(item){
    let destination:string;
    console.log("EDITING ITEM: " + item.name);
    destination = this.baseUrl+'/api/groceries/'+item._id;
    console.log(destination);
    this.http.put(destination, item).subscribe(
      res => {
        this.items= <any> res;
        this.dataChangeSubject.next(true);
      });
    console.log("EDITED ITEM: " + item.name);
  }

  addItem(item){
    console.log('Adding item::' + item);
    this.http.post(this.baseUrl + '/api/groceries', item).subscribe(
      res => {
        this.items = <any> res;
        this.dataChangeSubject.next(true);
      });
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error;
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }
    else {
      errMsg = error.message ? error.message : error.toString();
    }
    //console.error(errMsg);
    return throwError(errMsg);
  }
}
