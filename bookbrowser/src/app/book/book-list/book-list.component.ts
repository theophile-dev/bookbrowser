import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BookOverviewComponent } from '../book-overview/book-overview.component';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {


  books: Book[];
  displayedBooks: Book[] = [];
  displayedColumns: string[] = ['thumbnail', 'title', 'author', 'description'];
  authors: string[] = [];
  authorFilterForm: FormControl = new FormControl(); 
  searchBooksSubscription: Subscription = null;

  constructor(private api: ApiService, private activateRoute: ActivatedRoute,
     private route: Router, public dialog: MatDialog) {

      }

  public ngOnInit() {
    this.activateRoute.params.subscribe( (params: any) => {  
      if (this.searchBooksSubscription != null) {
        this.searchBooksSubscription.unsubscribe();
      }
      this.searchBooksSubscription = this.api.searchBooks(params.request, 10).subscribe((books: Book[]) =>{
        this.books = books;
        this.authors = this.getAuthors(books);
        this.displayedBooks = books;
        this.initForm();
      });
    }); 
  }

  public navigateToSearchPage(){
    this.route.navigate(['book','search'])
  }


  public descriptionPopUp(book: Book): void {
    const dialogRef = this.dialog.open(BookOverviewComponent, {
      width: '500px',
      data: book
    });
  }

  public getAuthors(books: Book[]): string[]{
    let authorsList: string[] = [];
    books.forEach((book: Book) => {
      if (book.authorsName){
        book.authorsName.forEach((author: string) => {
          if (!authorsList.includes(author)){
            authorsList.push(author);
          }
        })
      }
    });
    return authorsList;
  }

  private initForm(){
    this.authorFilterForm.setValue(this.authors);
  }

  public filterAuthors(){
    this.displayedBooks = this.books.filter((book: Book) => 
      book.authorsName.some((author: string ) => 
      this.authorFilterForm.value.includes(author)))
  }
  public ngOnDestroy(): void {
    // activateRoute subscription is automatically unsubscribed
    this.searchBooksSubscription.unsubscribe();
  }

}
