import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  autore: string;
  testo: string;

  constructor(private postService: PostService) { }

  submitPost() {
    const post = { autore: this.autore, testo: this.testo };
    this.postService.createPost(post)
      .subscribe(() => {
        this.autore = '';
        this.testo = '';
      });
  }
}

