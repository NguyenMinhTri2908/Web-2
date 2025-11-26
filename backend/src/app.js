const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;


mongoose.connect('mongodb://127.0.0.1:27017/cw-web2')
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});