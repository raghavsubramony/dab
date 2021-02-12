import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Runid} from './runid';
import { Observable } from  'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }
  PHP_API_SERVER = "http://127.0.0.1:8085";
  readPolicies(): Observable<Runid[]>{
    return this.httpClient.get<Runid[]>(`${this.PHP_API_SERVER}/get_runid.php`);
  }
}
