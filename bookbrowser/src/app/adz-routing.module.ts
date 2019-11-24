import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookSearchComponent } from './book/book-search/book-search.component';


const routes: Routes = [
  { path: 'book/search', component: BookSearchComponent },
  { path: 'book/list:request', component: BookListComponent },
  { path: '',
    redirectTo: 'book/search',
    pathMatch: 'full'
  }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdzRoutingModule { }
