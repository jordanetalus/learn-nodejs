const express = require('express');
const app = express();
const port = 3000;
const tasks = [
    {
        title: "apprendre à programmer",
        done: false,
    },
    {
        title: "faire des courses",
        done: true,
    },

]


app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('todolist',{tasks: tasks});
});

app.listen(port, ()=> {
    console.log(`serveur lancer sur le port ${port}`);
})

