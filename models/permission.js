const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Permission = new Schema({
    role: {
        type: String
    },
    entity: {
    	type: String
    },
    add_edit: {
        type: String
    },
    delete: {
        type: String
    },
    list: {
        type: String
    }
});

module.exports = mongoose.model('Permission', Permission);