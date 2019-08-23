const express = require('express');
const path = require('path');
const app = express();


app.get('/', (req,res) => {
  res.cookie('username', 'Yuvaraj');
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/getNewPage', (req, res) => {
  res.send('Serving in new page- Session storage is not available here ');
});

app.listen(8081, () => console.log('Server is listening at port 8081') );
