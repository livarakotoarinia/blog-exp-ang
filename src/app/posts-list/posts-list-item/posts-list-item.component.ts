import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styleUrls: ['./posts-list-item.component.scss']
})
export class PostsListItemComponent implements OnInit {
  @Input() postsTitle: string;
  @Input() postsContent: string;
  @Input() postsLoveIts: number;
  @Input() postsCreatedAt: Date;

  constructor() { }

  ngOnInit() {
  }

  getTitle(){
    return this.postsTitle;
  }
  
  getContent(){
    return this.postsContent;
  }

  getLoveIts(){
    return this.postsLoveIts;
  }

  getCreatedAt(){
    return this.postsCreatedAt;
  }

  loveUp(){
    return ++this.postsLoveIts;
  }

  loveDown(){
    return --this.postsLoveIts;
  }

  getColor() {
    if (this.postsLoveIts > 0) {
      return 'green';
    } else if (this.postsLoveIts < 0) {
      return 'red';
    }
  }
}
