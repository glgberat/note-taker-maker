const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3002;
const app = express();








//server listening the port #3002
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });