import { Component,  EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{

    @Input()
    postList: Post[] = [];

    @Input()
    canEdit : boolean = false;

    @Output()
    reloadPost = new EventEmitter();

  constructor(private postService: PostService, userService: UserService){}

  ngOnInit(): void {
    
  }

  deletePost(postId?: string)
  {
    if(postId)
    {
      this.postService.deletePost(postId).subscribe(()=>{
        this.reloadPost.emit(true);
      })
    }
   
  }

}
