import { User } from "./user";

export class Post {
    postId? : number;
    content? : string;
    user?: User;
    createdOn? : string;

    constructor(post:any){
        this.postId = post.postId ?? 0;
        this.content = post.content;
        this.user = post.user;
        this.createdOn = new Date(post.createdOn).toLocaleString();
    }
}
    