const express =     require('express');
const mongoose =    require('mongoose');
const bodyParser =  require('body-parser');

const users =     require('./routes/api/users');
const posts =     require('./routes/api/posts');
const profiles =  require('./routes/api/profile');

const app = express();

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Database configuration
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(error => console.log(error));

app.get('/', (request, response) => response.send ('Hello World!'));

// Use routes

app.use('/api/users', users);
app.use('/api/profile', profiles);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));