const express = require("express");
const path = require('path');

const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../frontend/build')));
const bodyParser  = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false }));
app.use(express.static('public'))

const PORT = process.env.PORT || 3001;

const router = require('./routes/routes');
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}. Ctrl^c to quit.`);
});
