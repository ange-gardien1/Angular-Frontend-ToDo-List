export class User {
    Email  ?: string;
    Password  ?:  string;
        FirstName?: string;
        LastName? : string;
        Gender?   : string;
        Country? : string;
        Bio   ?:   string;
        userId?: number;
        createdOn?:string;
       

     constructor(user: any)
     {
        this.Email = user.Email;
         this.Password = user.Password;
         this.FirstName =user. FirstName;
         this.LastName = user.LastName;
         this.Gender = user.Gender;
         this.Country = user.Country;
         this.Bio = user.Bio;
         this.userId = user.userId;
         this.createdOn = new Date(user.createdOn).toLocaleString()
         
     }
}
