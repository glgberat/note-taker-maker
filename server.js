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







//server listening the port #3002
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });