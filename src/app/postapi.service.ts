import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  constructor(private http: HttpClient) {
    console.log("SEGUNDA API FUNCIONANDO")
   }

  getData(){
    return this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
  }
}
