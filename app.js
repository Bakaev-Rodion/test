const express = require('express');
var path = require('path');
//const config = require('config');
require('dotenv').config();


const app = express();

const PORT = normalizePort(process.env.PORT || '8000');

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))

//if(process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
//}

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
