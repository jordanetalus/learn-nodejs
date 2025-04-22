const Album = require('../models/album');

const albums = async (req, res) => {
    const albums = await Album.find();
    res.render('albums', {
        title: 'Mes albums',
        albums: albums});
};


// Affiche le formulaire de création d'album
const createAlbumForm = (req, res) => {
    res.render('new-album', {
        title: 'Nouvel album',
        errorMessage: null // Important pour éviter l'erreur dans EJS
    });
};

// Traite la soumission du formulaire
const createAlbum = async (req, res) => {
    const title = req.body.albumTitle?.trim();

    if (!title) {
        return res.render('new-album', {
            title: 'Nouvel album',
            errorMessage: 'Le titre de l’album est requis.'
        });
    }

    try {
        await Album.create({ title });
        res.redirect('/albums');
    } catch (err) {
        console.error('Erreur lors de la création de l’album :', err);
        res.render('new-album', {
            title: 'Nouvel album',
            errorMessage: 'Une erreur est survenue lors de la création de l’album.'
        });
    }
};

module.exports = {
    createAlbumForm,
    createAlbum,
    albums,
};
