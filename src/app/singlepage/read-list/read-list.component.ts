import { Component, OnInit } from "@angular/core";
import { BooksService } from "../../service/books.service";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { Booklist } from "../../booklist";

@Component({
  selector: "app-read-list",
  templateUrl: "./read-list.component.html",
  styleUrls: ["./read-list.component.css"]
})
export class ReadListComponent implements OnInit {
  addBookForm: any;
  editBookForm: any;
  books: Booklist[] = [];
  book;

  ERROR_MESSAGE = {
    name: [
      {type: 'required', message: 'Name is required.'},
    ]
  };

  constructor(
    private bookService: BooksService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addBookForm = this.fb.group({
      name: ["", [Validators.required]]
    });
    this.getAll();
  }

  getAll() {
    this.bookService.getAll().subscribe(data => {
      for (const book of data) {
        if (book.read === false) {
          this.books.push(book);
        }
      }
    });
  }

  onSubmit(data) {
    if(data.name){
    const book: Booklist = {
      name: data.name,
      read: false
    };
    this.bookService.addBook(book).subscribe( next => {
      this.books.push(book);
      alert("Thành công");
    });
    this.addBookForm.patchValue({name: ''});
  }
  }

  update(id) {
    this.bookService.getBookById(id).subscribe(data => {
      this.book = data;
      this.bookService.update(this.book).subscribe(data =>{
        console.log(data);

        this.router.navigate(['/unread-list']);
      });
    });
  }
}
