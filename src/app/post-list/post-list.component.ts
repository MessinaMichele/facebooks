import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[];

  constructor(private postService: PostService, private commentService: CommentService) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe((response: any[]) => {
        this.posts = response;
        this.loadCommentsForPosts();
      });
  }

  likePost(postId: number) {
    this.postService.likePost(postId)
      .subscribe(() => {
        const post = this.posts.find(p => p.id === postId);
        post.likes++;
      });
  }

  deletePost(postId: number) {
    this.postService.deletePost(postId)
      .subscribe(() => {
        this.posts = this.posts.filter(p => p.id !== postId);
      });
  }

  loadCommentsForPosts() {
    for (const post of this.posts) {
      this.commentService.getCommentsByPostId(post.id)
        .subscribe((comments: any[]) => {
          post.comments = comments;
        });
    }
  }
deleteComment(commentId: number, postId: number) {
  this.commentService.deleteComment(commentId)
    .subscribe(() => {
      const post = this.posts.find(p => p.id === postId);
      post.comments = post.comments.filter(c => c.id !== commentId);
    });
 }
}
