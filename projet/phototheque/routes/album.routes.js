const express = require('express');
const router = express.Router(); 
router.get('/albums/create', (req, res) => {
    res.render('new_album', { title: 'Nouvel album' });
});

module.exports = router; 