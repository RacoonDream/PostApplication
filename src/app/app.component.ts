import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
posts: string[];

  AddPost(post:string)
  {
  this.posts.push(post);
  }
}
