import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  books: Book[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.searchBooks("programming", 30).subscribe((books: Book[]) =>{
      this.books = books;
    }
    );
  }

}
