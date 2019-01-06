import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Article } from './article';

const api = '/api/articleManagement';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticles(id: string) {
    return this.http.get<Array<Article>>(`http://localhost:3000/api/articleManagement/section/${id}/articles`);
  }

  deleteArticle (article: Article): Observable<Article> {
    const id = typeof article === 'number' ? article : article._id;
    const url = `http://localhost:3000/api/articleManagement/article/${id}`;
    return this.http.delete<Article>(url);
  }

  addArticle (article: Article): Observable<Article> {
    console.log(article);
  const url = `http://localhost:3000/api/articleManagement/addarticle`;
  return this.http.post<Article>(url, article, httpOptions);
  }
}
