import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent{

  searchValue: string = "";

  constructor(private router: Router) { }

  public search(){
    if (this.searchValue != "") {
    this.router.navigate(['book', this.searchValue]);
    }
  }
}
