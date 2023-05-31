import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'https://4200-paolocaruga-01angularem-ku2n8ml9dge.ws-eu98.gitpod.io/comments';

  constructor(private http: HttpClient) { }

  getCommentsByPostId(postId: number) {
    return this.http.get(`${this.apiUrl}?postId=${postId}`);
  }

  createComment(comment: any) {
    return this.http.post(this.apiUrl, comment);
  }

  deleteComment(commentId: number) {
    return this.http.delete(`${this.apiUrl}/${commentId}`);
  }
}
