const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Entity = new Schema({
    entity_name: {
    	type: String
    }
});

module.exports = mongoose.model('Entity', Entity);