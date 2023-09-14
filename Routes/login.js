const express = require("express");
const Login = require("../Database");
// const Mapping = require("./Operations");
const Router = express.Router();


Router.get("/Read:mail", (req, res) => {
  const Details = req.params.mail;
  console.log(Details);
  Login.Login("reg", "Read", Details)
    .then((result) => {
      res.send({ Message: result.Message, Result: result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = Router;