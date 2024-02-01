import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  dbUrl: string = "http://localhost:5266/api/post";
  TokenKey : string = "myFinalProjectToken";

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]>
  {
    return this.http.get<Post[]>(this.dbUrl);
  }

  getPost(postId: number) : Observable <Post>
  {
    return this.http.get<Post>(`${this.dbUrl}/${postId}`);
  }
  CreatePost(newPost: Post)
  {
    delete newPost.createdOn;
    let reqHeaders = {
      Authorization : `Bearer ${localStorage.getItem(this.TokenKey)}`
    }
    return this.http.post(this.dbUrl, newPost, {headers: reqHeaders});
  }
  updatePost(updatedPost: Post): Observable<any>
  {
    delete updatedPost?.createdOn;
    var reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.TokenKey)}`
    };
    return this.http.put(`${this.dbUrl}/${updatedPost.postId}`,updatedPost,{headers:reqHeaders});
  }
  deletePost(PostId : string)
  {
    var reqHeaders = {
      Authorization : `Bear ${localStorage.getItem(this.TokenKey)}`
    };
    return this.http.delete(`${this.dbUrl}/${PostId}`,{headers:reqHeaders});
  }
  getUserPosts(id:number)
  {
   return this.http.get<Post[]>(`${this.dbUrl}/user/${id}`);

  }
}
