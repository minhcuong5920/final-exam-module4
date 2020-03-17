import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Booklist } from "../booklist";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  url = "http://localhost:8081/books";

  constructor(private http: HttpClient, private router: Router) {}

  getAll(): Observable<Booklist[]> {
    return this.http.get<Booklist[]>(this.url);
  }

  addBook(book: Booklist): Observable<Booklist> {
    return this.http.post<Booklist>(this.url, book);
  }

  getBookById(id: number) {
    return this.http.get<Booklist>(this.url + '/' + id);
  }

  update(book: Booklist) {
    book.read = !book.read;
    return this.http.put<Booklist>(this.url, book);
  }
}
