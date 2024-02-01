import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

  Email : string = "";
  Password : string = "";


  constructor(private userService : UserService, private router : Router){}

  ngOnInit(): void {
    
  }
  signin(){
    this.userService.login(this.Email, this.Password).subscribe((response:any)=>{
     
      this.router.navigateByUrl('/posts');
    }, error=>{
      console.log('Error:', error);
      window.alert('Email Or Paswword Incorrect Try Again');
      this.router.navigateByUrl('/signin');
    });
  }

}
