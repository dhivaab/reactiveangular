import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-postspage',
  templateUrl: './postspage.component.html',
  styleUrls: ['./postspage.component.css']
})
export class PostspageComponent implements OnInit {

  posts: Post[];
  // dependcy injection
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    // subscribe to posts from service
    this.dataservice.getPost().subscribe((posts) => {
      this.posts = posts;
      });
  }
}

interface Post {
  id: number;
  title: string;
  body: string;
  userid: number;
  }
