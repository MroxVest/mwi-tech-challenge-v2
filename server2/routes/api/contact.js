const express = require("express");
const logger = require('../../middlewares/logger');

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This section will help you create a new response.
recordRoutes.post("/response/add", async (req, res) => {
 let myobj = {
   fname: req.body.fname,
   lname: req.body.lname,
   title: req.body.title,
   email: req.body.email,
   message: req.body.message,
 };
 await req.app.locals.db.collection('responses')
  .insertOne(myobj, (err, result) => {
   if (err) throw new Error(err);
   res.json(result);
 });
});
 
module.exports = recordRoutes;