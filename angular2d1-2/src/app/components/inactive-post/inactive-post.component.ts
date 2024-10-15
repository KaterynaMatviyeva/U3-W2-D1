import { Component } from '@angular/core';
import { iPost } from '../../interfaces/post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../app/services/post.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss',
})
export class InactivePostComponent {
  constructor(private postSvc: PostService) {}

  postArray: iPost[] = [];

  ngOnInit() {
    this.postArray = this.postSvc.posts.filter((post) => !post.active);
  }
}
