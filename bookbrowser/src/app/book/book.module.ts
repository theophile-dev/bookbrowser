import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookOverviewComponent } from './book-overview/book-overview.component';




@NgModule({
  declarations: [BookListComponent, BookSearchComponent, BookOverviewComponent],
  imports: [
    CommonModule
  ]
})
export class BookModule { }
