import { Component, OnInit } from "@angular/core";
import { Booklist } from "src/app/booklist";
import { BooksService } from "src/app/service/books.service";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-unread-list",
  templateUrl: "./unread-list.component.html",
  styleUrls: ["./unread-list.component.css"]
})
export class UnreadListComponent implements OnInit {
  addBookForm: any;
  books: Booklist[] = [];
  book;

  constructor(
    private bookService: BooksService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addBookForm = this.fb.group({
      name: [""]
    });
    this.getAll();
  }

  getAll() {
    this.bookService.getAll().subscribe(data => {
      for (const book of data) {
        if (book.read === true) {
          this.books.push(book);
        }
      }
    });
  }

  update(id) {
    this.bookService.getBookById(id).subscribe(data => {
      this.book = data;

      this.bookService.update(this.book).subscribe(data => {
        this.book = data;
        this.router.navigate(["/read-list"]);
      });
    });
  }
}
