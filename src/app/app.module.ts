import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPostComponent } from './new-post/new-post.component';
import { HeaderComponent } from './header/header.component';
import { PostsService } from './services/posts.service';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsListItemComponent } from './posts-list/posts-list-item/posts-list-item.component';

const appRoute: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    HeaderComponent,
    PostsListComponent,
    PostsListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
