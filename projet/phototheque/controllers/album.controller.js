const Album = require('../models/Album');

const createAlbumForm = (req, res) => {
        res.render('new_album', { title: 'Nouvel album' });
    
};


const createAlbum = (req, res) => {
    res.send('ok');
};


module.exports = {
    createAlbumForm,
    createAlbum
}