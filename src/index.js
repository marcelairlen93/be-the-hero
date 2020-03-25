const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.port || 3333;
app.listen(port, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Server running on port ${port}`);
});
