const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const contentRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
// This section will bring in content.
contentRoutes.route(".../content").get(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   h1: req.body.h1,
   h2: req.body.h2,
   box1: req.body.box1,
   box2: req.body.box2,
   box3: req.body.box3,
   logo: req.body.link,
   talkie: req.body.link,
   rabbit: req.body.link,
   shield: req.body.link,
 };
 db_connect.collection("content").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
module.exports = recordRoutes;