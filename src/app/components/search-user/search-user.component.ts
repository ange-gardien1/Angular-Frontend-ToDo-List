import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit{

   SearchText: string = '';
   users: User[] = [];
   notFound = false;

  constructor(private userservice : UserService){}


  ngOnInit(): void {
    
  }
  
  search() {
    if (this.SearchText.trim() != '') {
        this.userservice.searchUsers(this.SearchText).subscribe(results => {
            this.users = results.map(r => new User(r));
            console.log(this.users)
            if (this.users.length == 0) {
                this.notFound = true;
            }
        })
    }
}
}
