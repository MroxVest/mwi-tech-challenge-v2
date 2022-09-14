const express = require("express");
 
// contentRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const contentRoutes = express.Router();
 
// This section will bring in content.
contentRoutes.post("add/content", async (req, response) => {
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
 await req.app.locals.db.collection("content")
 .insertOne(myobj, (err, res) => {
   if (err) throw err;
   response.json(res);
 });
});
 
module.exports = contentRoutes;