import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
  sectionId: string;
  sections: any = [];
  isSectionExisting: boolean= true;
  newSectionName: string = "";
  constructor(private fb: FormBuilder,
    private sectionService: SectionService,
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
    this.getSections();
  }

  onSubmit() {
    console.log("new Name" + this.newSectionName)
    if (this.newSectionName) {
      this.createSection();
      var obj = this.articleForm.value;
      obj.sectionName= this.newSectionName;
      console.log("Forma DATA");
      console.log(obj);
      this.addArticle(obj);
    } else {
      this.addArticle(this.articleForm.value);
    }
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
    return this.articleService.addArticle(article).subscribe(
      suc => {
          console.log(suc);
          this.router.navigate(['/main']);
      },
      err => {
        console.log("ERROR!!!");
          console.log(err);
      }
  );
  }
  createSection() {
    return this.sectionService.createSection({
      isActive: false,
      sectionName: this.newSectionName
    }).subscribe(section => {
      console.log(section);
      console.log("success");
    });
  }
  onChange(selectedSection) {
    console.log("select section " + selectedSection);
    if (selectedSection == "") {
      this.isSectionExisting = false;
    } else {
      this.isSectionExisting = true;
    }
  }
}
