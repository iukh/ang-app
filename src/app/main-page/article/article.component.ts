import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Article } from '../../article'
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  articles: any = [];
  ngOnInit(): void {
     this.getArticles();
  }

  getArticles() {
    const sectionId = this.route.snapshot.queryParamMap.get('sectionId');
    return this.articleService.getArticles(sectionId).subscribe(articles => {
    this.articles = articles;
  });
 }

 delete(article: Article) {
    this.articles = this.articles.filter(a => a !== article);
    this.articleService.deleteArticle(article).subscribe();
  }
}
