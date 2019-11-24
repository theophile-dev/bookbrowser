import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book/book';
import { map } from 'rxjs/operators';

const URL = "https://www.googleapis.com/books/v1/";

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private httpClient: HttpClient) {}

  public searchBooks(bookName: string, maxResult: number): Observable<Book[]>{

    let searchUrl = URL + "volumes?q=" + bookName + "&maxResults=" + maxResult;
    
    return this.httpClient.get(searchUrl).pipe(map((reponse : any) => {
     let books : Book[] = [];
     if (reponse.items.length > 0){
      reponse.items.forEach(book => {
       books.push(new Book(book));
     });
     }
     return books;  
    }));
  }



}
