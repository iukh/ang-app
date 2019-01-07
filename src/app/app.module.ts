import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { UserService } from './user.service';


import { AuthPageComponent } from './auth-page/auth-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MainPageComponent } from './main-page/main-page.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistrationComponent } from './auth-page/registration/registration.component';
import { LoginComponent } from './auth-page/login/login.component';
import { SectionsComponent } from './main-page/sections/sections.component';
import { SectionService } from './section.service';
import { ArticleComponent } from './main-page/article/article.component';
import { ArticleService } from './article.service';
import { ArticleFormComponent } from './main-page/article-form/article-form.component';
import { UserDetailsComponent } from './admin-page/user-details/user-details.component';
import { ArticleDetailsComponent } from './admin-page/article-details/article-details.component';
import { SectionDetailsComponent } from './admin-page/section-details/section-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    AdminPageComponent,
    MainPageComponent,
    RegistrationComponent,
    LoginComponent,
    SectionsComponent,
    ArticleComponent,
    ArticleFormComponent,
    UserDetailsComponent,
    ArticleDetailsComponent,
    SectionDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SectionService, ArticleService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
