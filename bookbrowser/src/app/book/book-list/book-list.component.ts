import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BookOverviewComponent } from '../book-overview/book-overview.component';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {


  books: Book[];
  displayedColumns: string[] = ['thumbnail', 'title', 'author', 'description'];

  searchBooksSubscription: Subscription = null;

  constructor(private api: ApiService, private activateRoute: ActivatedRoute,
     private route: Router, public dialog: MatDialog) { }

  public ngOnInit() {
    this.activateRoute.params.subscribe( (params: any) => {  
      if (this.searchBooksSubscription != null) {
        this.searchBooksSubscription.unsubscribe();
      }
      console.log(params.request);
      this.searchBooksSubscription = this.api.searchBooks(params.request, 10).subscribe((books: Book[]) =>{
        this.books = books;
      });
    }); 
  }

  public navigateToSearchPage(){
    this.route.navigate(['book','search'])
  }


  public descriptionPopUp(book: Book): void {
    const dialogRef = this.dialog.open(BookOverviewComponent, {
      width: '250px',
      data: book
    });
  }

  public ngOnDestroy(): void {
    // activateRoute subscription is automatically unsubscribed
    this.searchBooksSubscription.unsubscribe();
  }

}
