import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  currentUser?: User;
  profileUser?: User;
  userPost: Post[] = [];
  myProfile: boolean = false;

  constructor(private userService: UserService, private router: ActivatedRoute, private postService : PostService){}

  ngOnInit(): void {
    
    const id = parseInt(this.router.snapshot.params['id']) ?? 0;

    this.userService.getCurrentUser().subscribe(user => {
        this.currentUser = new User(user);
        if (!id && user) {
            this.profileUser = user;
            this.myProfile = true;
            this.getPosts(user.userId ?? 0);
            
        } 
        else {
            this.myProfile = id == this.currentUser.userId;
        }
    });

    if (id) {
        this.userService.getUser(id).subscribe(user => {
            this.profileUser = new User(user)
            console.log('Profile User Data:', this.profileUser); 
            this.getPosts(user?.userId ?? 0);
        });
    }
          
  }
  getPosts(id: number) {
    this.postService.getUserPosts(id).subscribe(posts =>
        this.userPost = posts.map(post => new Post(post)));
}
}
