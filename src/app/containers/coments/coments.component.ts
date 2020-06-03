import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.scss']
})
export class ComentsComponent implements OnInit {

  constructor() { }

  @Input() coments = [];
  @Input() idPost = [];

  ngOnInit(): void {
    console.log(this.idPost)
  }

}
