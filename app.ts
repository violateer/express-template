import express = require('express');

const app = express();

const port = 3000;

app.get('/', (request, result) => {
  result.send('你好!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
