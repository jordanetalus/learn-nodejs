const mongoose = require('mongoose');
const User = require('./models/User');


async function main(){
    await mongoose.connect('mongodb://127.0.0.1/exemple-mongoose');

    console.log('connexion ok');

    const user1 = new User({
        email: "jordane@exemple.com",
        firstname: "talla",
        lastname: "jordane",
        age: 38
    });

    console.log(user1);
    await user1.save();
}

main();