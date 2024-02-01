import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit{


    currentUser?: User;
    post?:Post

  constructor(private userService: UserService, private postService: PostService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const postId = parseInt(this.route.snapshot.params['id']) ?? 0;
        
    this.userService.getCurrentUser().subscribe(user => {
        this.currentUser = user;

        if (postId) {
            this.postService.getPost(postId).subscribe(post => {
                this.post = new Post(post);

                if (this.post.user?.userId != this.currentUser?.userId) {
                    console.log('Not your Post');
                    this.router.navigateByUrl('/');
                }
            });
        } else {
            this.router.navigateByUrl('/');
        }
    });
  }

  updatePost() {
    if(this.post)
    {
      this.postService.updatePost(this.post).subscribe(() => {
        this.router.navigateByUrl('profile')
    }, error => {
      console.log('Error: ', error)
      if (error.status === 401 || error.status == 403) {
        this.router.navigate(['signin']);
      }
    });
    }
   
}

}
