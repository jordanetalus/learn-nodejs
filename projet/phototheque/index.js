const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const albumRoutes = require('./routes/album.routes')
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/phototheque');


app.get('/', (req, res) => {
    res.render('album', {title:'album'});
});

app.use(albumRoutes);


app.use((req, res) => {
    res.status(404);
    res.send('page non trouvée');
});

app.listen(3000, () =>{
    console.log('Application est lancer sur le port 3000');
});
 
