const express = require('express');
const ejs = require('ejs');
const path = require('path');
const { title } = require('process');
const app = express();
const port = 3000;

const articles = [
    {
        title: 'debuger avec node js',
        category: 'dévellopement web',
    },
    {
        title: 'Nodejs VS PHP',
        category: 'dévellopement web',
    },
    {
        title: 'sokets en C ',
    
    },
    {
        title: 'systeme d\'exploitation utiliser ',
        category: 'informatique',
    },
];

app.set('view engine', 'ejs');

app.use('/static',express.static('public'));

app.get('/', (req,res) => {
    res.render('pages/home');
});

app.get('/hello/:name', (req,res) => {
  
    res.render('pages/hello', { name: req.params.name});
});

app.get('/posts', (req,res) => {

    res.render('pages/posts-list',{posts: articles});
});

app.listen(port, () =>{
    console.log(`serveur lencer au port ${port}`);
});