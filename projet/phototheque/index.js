const express = require('express');
const session = require('express-session');
const flash = require('connect-flash')
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const albumRoute = require('./routes/album.routes');

mongoose.connect('mongodb://localhost/phototheque');

app.use(express.urlencoded({extended: false }));
app.use(express.json());
                           
app.set('view engine', 'ejs');//importation de ejs
app.set('views', path.join(__dirname, 'views'))//indiquer où se trouve les fichier views en utilisant le path
app.use(express.static('public'));

app.set('trust proxy', 1);
app.use(session({
    secret: 'hello world',
    resave: false,
    saveUninitialized: true,

}));
app.use(flash())

app.get('/', (req, res) => {
    res.redirect('/albums');
});

app.use('/', albumRoute);

app.use((req,res) => {
    res.status(404);
    res.send('page non trouver');
});

app.listen(3000, () => {
    console.log('Application lencer sur le port 3000');
});

