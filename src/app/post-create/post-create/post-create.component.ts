import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  newPost: string;
  @Output() PostCreated = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  NewPostAdded() {
    this.PostCreated.emit(this.newPost);
  }
}
