import { PostService } from '../../app/services/post.service';
import { iPost } from './../../interfaces/post';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  posts: iPost[] = [];
  postInEvidenza!: iPost;

  constructor(private postSvc: PostService) {}

  ngOnInit(): void {
    this.postInEvidenza =
      this.postSvc.posts[Math.floor(Math.random() * this.postSvc.posts.length)];
  }
}
