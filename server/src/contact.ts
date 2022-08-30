import * as mongodb from "mongodb";
 
export interface Contact {
   fname: string;
   lname: string;
   title: string;
   email: string;
   message: string;
}