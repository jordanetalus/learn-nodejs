const mongoose = require('mongoose');
const User = require('./models/User');


async function main(){
    await mongoose.connect('mongodb://127.0.0.1/exemple-mongoose');// connexion à la bd

    console.log('connexion ok');

    const users = await User.find();// récupération des documents
    console.log(users);

    const jordane = await User.findById('67e2ba8d5bc3a1fd931afc77');// récupération spécifique via l'id
    console.log(jordane);

    const id ='67e2ba8d5bc3a1fd931afc77'; // update d'un document
    await User.findByIdAndUpdate(id,{
        email: "jordanefossitalla@gmail.com",
    });

    const rest = await User.updateMany(// update de plusieurs documents 
        {lastname:'jordane'},
        {firstname:'fossi talla'},
    );

    console.log(rest);

    mongoose.disconnect();
}
    
main();