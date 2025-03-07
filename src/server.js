const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const apiRoutes = require('./apiRoutes');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});