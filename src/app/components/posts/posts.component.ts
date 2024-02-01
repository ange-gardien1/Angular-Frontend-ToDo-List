import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{


postList: Post[] = [];

  constructor(private postservice: PostService, private router:Router){}

  ngOnInit(): void {
    this.reloadPost();
  }
  
  reloadPost(){
    this.postservice.getAllPosts().subscribe(posts => {
      this.postList = posts.map(post => new Post(post));
    });
  }

 
    }

