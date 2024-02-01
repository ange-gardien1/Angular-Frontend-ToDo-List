import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit{

      newPost: Post = new Post({});
      isLoggedIn : boolean = false;

      @Output()
      postCreated = new EventEmitter();
    
  constructor (private postservice: PostService, private router: Router, private userService: UserService){}


  ngOnInit(): void {
    
    this.userService.isLoggedIn.subscribe(loggedIn =>
      this.isLoggedIn = loggedIn);

  }
  createPost()
  {
    this.postservice.CreatePost(this.newPost).subscribe(()=>{
     this.newPost = new Post({});
     this.postCreated.emit(true);

    }, error=>{
      console.log('Error:',error)
      if(error.status === 401 || error.status == 403)
      {
        this.router.navigate(['signin']);
      }
    });
  }

}
