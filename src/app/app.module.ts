import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { ArticleComponent } from './article/article.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ArticlesService } from './services/articles.service';
import { AdminComponent } from './admin/admin.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: 'articles', component: ListArticleComponent },
  { path: 'articles/:id', component: ArticleComponent },
  { path: 'admins', component: AdminComponent },
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListArticleComponent,
    ArticleComponent,
    AdminComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FormsModule
  ],
  providers: [ArticlesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
