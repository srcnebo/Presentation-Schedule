const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const { MONGODB_URI } = require('./server/database/db');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use('/', require('./server/routes/router'));

mongoose
  .connect(
    MONGODB_URI,
    { useNewUrlParser: true }
  )
  .then(err => {
    if (err) {
      console.log(err);
    }
    console.log('Dabase is connected');
  });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
