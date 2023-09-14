const express = require("express");
const Result = require("../Database");
// const Mapping = require("./Operations");
const Router = express.Router();

Router.post("/Insert", (req, res) => {
  let Details = req.body;
  console.log(Details);
  Result.Result("events", "Insert", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.delete("/Delete:orgBy", (req, res) => {
  let Details = req.params.orgBy;
  Result.Result("events", "Delete", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.put("/Update:orgBy", (req, res) => {
  let Details = req.params.orgBy;
  let UpdatedDetails = req.body;
  console.log(UpdatedDetails);
  console.log(Details);
  Result.Result("events", "Update", Details, UpdatedDetails)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.get("/Read:orgBy", (req, res) => {
  const Details = req.params.orgBy;
  Result.Result("events", "Read", Details)
    .then((result) => {
      res.send({ Message: result.Message, Result: result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.get("/1Read:orgBy", (req, res) => {
  const Details = req.params.orgBy;
  Result.Result("events", "Read1", Details)
    .then((result) => {
      res.send({ Message: result.Message, Result: result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.get("/2Read:prgType", (req, res) => {
  const Details = req.params.prgType;
  Result.Result("events", "Read2", Details)
    .then((result) => {
      res.send({ Message: result.Message, Result: result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.get("/4Read:prgTheme", (req, res) => {
  const Details = req.params.prgTheme;
  Result.Result("events", "Read4", Details)
    .then((result) => {
      res.send({ Message: result.Message, Result: result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
module.exports = Router;