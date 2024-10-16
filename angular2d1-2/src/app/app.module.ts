import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivePostComponent } from './components/active-post/active-post.component';
import { InactivePostComponent } from './components/inactive-post/inactive-post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SinglePostComponent } from './components/single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivePostComponent,
    InactivePostComponent,
    PostDetailComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SinglePostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
