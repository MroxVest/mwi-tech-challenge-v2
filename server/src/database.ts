import * as mongodb from "mongodb";
import { Contact } from "./contact";
 
export const collections: {
   contact?: mongodb.Collection<Contact>;
} = {};
 
export async function connectToDatabase(uri: string) {
   const client = new mongodb.MongoClient(uri);
   await client.connect();
 
   const db = client.db("mwi-tech-challenge");
   await applySchemaValidation(db);
 
   const contactCollection = db.collection<Contact>("contact");
   collections.contact = contactCollection;
}
 
// Update our existing collection with JSON schema validation so we know our documents will always match the shape of our Contact model, even if added elsewhere.
// For more information about schema validation, see this blog series: https://www.mongodb.com/blog/post/json-schema-validation--locking-down-your-model-the-smart-way
async function applySchemaValidation(db: mongodb.Db) {
   const jsonSchema = {
       $jsonSchema: {
           bsonType: "object",
           required: ["fname", "lname", "title", "email", "message"],
           additionalProperties: false,
           properties: {
               fname: {
                   bsonType: "string",
                   description: "'first name' is required and is a string",
               },
               lname: {
                   bsonType: "string",
                   description: "'last name' is required and is a string",
               },
               title: {
                   bsonType: "string",
                   description: "'title' is required and is a string",
               },
               email: {
                bsonType: "string",
                description: "'email' is required and is a string",
            },
            message: {
                bsonType: "string",
                description: "'message' is required and is a string",
            },
           },
       },
   };
 
   // Try applying the modification to the collection, if the collection doesn't exist, create it
  await db.command({
       collMod: "contact",
       validator: jsonSchema
   }).catch(async (error: mongodb.MongoServerError) => {
       if (error.codeName === 'NamespaceNotFound') {
           await db.createCollection("contact", {validator: jsonSchema});
       }
   });
}