import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Section } from '../../section'
import { SectionService } from '../../section.service';
import { Article } from '../../article'
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.less']
})
export class ArticleFormComponent implements OnInit {
  articleForm: FormGroup;
  sectionId: string
  constructor(private fb: FormBuilder,
  private sectionService: SectionService,
  private articleService: ArticleService
) { }

sections: any = [];
  ngOnInit() {
    this.initForm();
    this.getSections();
  }

  onSubmit() {
    this.addArticle(this.articleForm.value);
    }

  initForm() {
    this.articleForm = this.fb.group({
       title: null,
       text: null,
      answer: null,
      sectionName: null,
      sectionId: "5c2e219817915fa0b8bfdb63",
      author: "admin"
    });
  }
  getSections() {
   return this.sectionService.getSections().subscribe(sections => {
     this.sections = sections;
   });
 };
 addArticle (article) {
   console.log("started remove")
   console.log(article)
   return this.articleService.addArticle(article)
}
}
