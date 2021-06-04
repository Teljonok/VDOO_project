import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from '../models/product';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  
  url = 'http://localhost:3000/products';
  
  constructor(private http: HttpClient) { }
  
  
  getAllProducts(){
    return this.http.get(this.url);//.pipe(map(response => { console.log(response)}));
               // .map(response => response.json());
    //+ '?_sort=id&_order=desc'
    // return this.http.get<Product[]>(this.url);
    
  }
  
}
