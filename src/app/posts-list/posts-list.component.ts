import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  @Input() postsTitle: string;
  @Input() postsContent: string;
  @Input() postsLoveIts: number;
  @Input() postsCreatedAt: Date;
  
  constructor() { }

  ngOnInit() {
  }

}
