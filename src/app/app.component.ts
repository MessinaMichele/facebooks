import { Component } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_Angular_empty';
}

sorted_posts(): Post[]{
  return this.posts.sort((a: PositionCallback, b: Post) => (b.like - a.like ))
}
submit_add_post(autore: HTMLInputElement, testo: HTMLTextAreaElement){
 if (autore.value != ' ' && testo.value != ' ') {
  this.post_height = 470
  this.error_appear = false

this.posts.push(new postMessage(autore.value, testo.value))
autore.value = ' '
testo.value = ' '

  }else{
    this.error_appear = true
    this.post_height = 510
  }

 }
}
