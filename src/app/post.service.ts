import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://4200-paolocaruga-01angularem-ku2n8ml9dge.ws-eu98.gitpod.io/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.apiUrl);
  }

  createPost(post: any) {
    return this.http.post(this.apiUrl, post);
  }

  likePost(postId: number) {
    return this.http.patch(`${this.apiUrl}/${postId}/like`, {});
  }

  deletePost(postId: number) {
    return this.http.delete(`${this.apiUrl}/${postId}`);
  }
}
