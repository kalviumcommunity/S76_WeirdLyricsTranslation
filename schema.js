const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lyricsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    lyrics: {
        type: String,
        required: true
    },
    translation: {
        type: String,
        required: true
    }
});

const model = mongoose.model('Lyrics', lyricsSchema);

module.exports = model;