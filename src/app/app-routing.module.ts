import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { PostsComponent } from './components/posts/posts.component';
import { NewPostComponent } from './components/new-post/new-post.component';

import { EditPostComponent } from './components/edit-post/edit-post.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DeleteComponent } from './components/delete/delete.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/posts",
    pathMatch: "full"
  },
  {
    path:"signin",
    component: SigninComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"posts",
    component:PostsComponent
  },
  {
    path: "post/new",
    component: NewPostComponent
  },
  {
    path: "edit/:id",
    component: EditPostComponent
  },
  {
    path: "search",
    component: SearchUserComponent
  },
  {
    path:"profile",
    component: ProfileComponent
  },
  {
    path:"profile/:id",
    component: ProfileComponent
  },
  {
    path: "delete/:id",
    component: DeleteComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
