import { Component, OnInit, EventEmitter, Input,  Output } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{

  @Input()
  postList: Post[] = [];

  @Input()
  canEdit : boolean = false;

  @Output()
  reloadPost = new EventEmitter();

  constructor(private postservice : PostService, private router : Router){

  }

  ngOnInit(): void {
    
  }
  deletePost(postId: string)
  {
    this.postservice.deletePost(postId).subscribe(()=>{
      this.reloadPost.emit(true);
      
      this.router.navigateByUrl('/profile');

    })
  }


}
