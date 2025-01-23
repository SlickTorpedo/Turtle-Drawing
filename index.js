//Simple express app with the pages as routes
const express = require('express');

const app = express();

app.use('/', require('./pages/home'));


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});