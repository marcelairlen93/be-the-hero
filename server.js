const app = require('./src/app');

const port = process.env.port || 3333;
app.listen(port, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Server running on port ${port}`);
});
