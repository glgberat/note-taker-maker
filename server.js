//Dependencies initilized
const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3002; //This environment variable needed to deploy for Heroku
const app = express();


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
    res.sendFile(path.join(__dirname, "public", "notes.html"));
  });


  app.get("/api/notes", function (req, res) {
    fs.readFile("./db/db.json", function (err, data) {
      if (err) throw err;
      let allNotes = JSON.parse(data);
      return res.json(allNotes);
    });
  });




//server listening the port #3002
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });