import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {
  @Input() postId: number;
  autore: string;
  testo: string;

  constructor(private http: HttpClient) { }

  submitComment() {
    const comment = { author: this.autore, text: this.testo };
    this.http.post(`API_URL/posts/${this.postId}/comments`, comment)
      .subscribe(() => {
        this.autore = '';
        this.testo = '';
      });
  }
}
