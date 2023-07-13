const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/users', (req, res, next) => {
    res.render();
});

app.get('/', (req, res, next) => {
    res.render();
});

app.post('/add-user', (req, res, next) => {
    res.redirect('/users');
});

app.listen(5000);