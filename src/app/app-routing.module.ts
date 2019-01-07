import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { RegistrationComponent }   from './auth-page/registration/registration.component';
// import { LoginComponent }   from './auth-page/login/login.component';
import { SectionsComponent }   from './main-page/sections/sections.component';
import { ArticleComponent }   from './main-page/article/article.component';
import {ArticleFormComponent} from './main-page/article-form/article-form.component';
//import { AuthPageComponent } from './auth-page/auth-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  // { path: 'registration', component: RegistrationComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'main', component: SectionsComponent },
  // { path: 'articles', component: ArticleComponent, outlet: 'second'},
  // { path: 'article', component: ArticleFormComponent },
  { path: 'auth', component: AuthPageComponent },
  { path: 'main', component: MainPageComponent, children: [
      {path: 'articles', component: ArticleComponent,outlet: 'second'},
      {path: 'article', component: ArticleFormComponent,outlet: 'second'},
  ] },
  // { path: '', component: MainPageComponent, children: [
    {path: 'sections', component: SectionsComponent},

  // ] },
  { path: 'admin', component: AdminPageComponent },
  // {path: 'articles', component: ArticleComponent,outlet: 'second'},

   {path: '', redirectTo: 'auth', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
