import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { ReadListComponent } from './singlepage/read-list/read-list.component';
import { UnreadListComponent } from './singlepage/unread-list/unread-list.component';


const routes: Routes = [
  { path: '', component: SinglepageComponent },
  { path: 'read-list', component: ReadListComponent },
  { path: 'unread-list', component: UnreadListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
