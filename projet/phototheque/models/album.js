const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, 
    image: [String], // tableau de chaînes pour les URL ou chemins d’images
  },
  { timestamps: true } // ajoute createdAt et updatedAt automatiquement
);

module.exports = mongoose.model('Album', albumSchema);
