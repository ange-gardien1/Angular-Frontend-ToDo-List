import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  newUser : User = new User({});
  constructor(private userservice: UserService, private router: Router)
  {

  }
  ngOnInit(): void {
    
  }
  signUp()
  {
    this.userservice.signup(this.newUser).subscribe(()=>{
      window.alert("User Registere Successfully");
      this.router.navigate(['signin']);
    }, error => {
      window.alert("User Registration Failed fill all the required field ");
      console.log('Error', error)
    });
  }

}
