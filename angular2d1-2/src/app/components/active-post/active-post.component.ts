import { Component } from '@angular/core';
import { iPost } from '../../interfaces/post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../app/services/post.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss',
})
export class ActivePostComponent {
  constructor(private postSvc: PostService) {}

  postArray: iPost[] = [];

  ngOnInit() {
    this.postArray = this.postSvc.posts.filter((p) => p.active);
  }
}
