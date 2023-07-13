const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser({extended: false}));

app.get('/users', (req, res, next) => {
    res.render('users', {pageTitle: 'users', users: users, hasUsers: users.length > 0});
});

app.post('/add-user', (req, res, next) => {
    users.push({userName: req.body.title})
    res.redirect('/users');
});

app.get('/', (req, res, next) => {
    res.render('add-user', {pageTitle: 'Add User'});
});

app.listen(5000);