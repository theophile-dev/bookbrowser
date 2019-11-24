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
    
    return this.httpClient.get(URL + "volumes?q=" + bookName + "&maxResults=" + maxResult).pipe(map((reponse : any) => {
     let books : Book[] = [];
     reponse.items.forEach(book => {
      books.push(new Book(book.volumeInfo.title))
    });
     return books;  
    }));
  }



}
