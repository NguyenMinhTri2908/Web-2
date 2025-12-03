const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const connectDB = require('./utils/db');

const app = express();
const port = process.env.PORT || 5001;

connectDB();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});