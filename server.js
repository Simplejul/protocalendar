const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// differents routes
    // index 
app.get('/', (req, res) => res.render('index.ejs', {user:user}));

    // static files
app.use(express.static('public'));


// start the server
app.listen(3000, () => console.log('Server app listening on port 3000!'))