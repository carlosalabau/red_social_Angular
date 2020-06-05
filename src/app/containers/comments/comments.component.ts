import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor() { }

  @Input() comments = [];
  @Input() idPost = [];

  ngOnInit(): void {
    console.log(this.idPost)
  }

}
