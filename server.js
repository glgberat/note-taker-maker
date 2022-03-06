//Dependencies initilized
const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3002; //This environment variable needed to deploy for Heroku
const app = express();
const shortid = require("shortid");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


//Routes  //
//GET API request for starting page index.html
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

// GET API request for notes page
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname,  './public/notes.html'));
  });


  app.get("/api/notes", function (req, res) {
    fs.readFile("./db/db.json", function (err, data) {
      if (err) throw err;
      let Notes = JSON.parse(data);
      return res.json(Notes);
    });
  });


  //POST API request
app.post("/api/notes", function (req, res) {
    fs.readFile("./db/db.json", function (err, data) {
      if (err) throw err;
      let Notes = JSON.parse(data);
      let AddNote = {
        title: req.body.title,
        text: req.body.text,
        id: shortid.generate(), //id generated randomly for each notes using npm package 'shortid'
      };
      Notes.push(AddNote);
      fs.writeFile("./db/db.json", JSON.stringify(Notes, null, 3), (err) => {
        if (err) throw err;
        res.send("200");
      });
    });
  });





//server listening the port #3002
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });