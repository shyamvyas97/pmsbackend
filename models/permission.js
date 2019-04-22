const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Permission = new Schema({
    role: [{ type: Schema.Types.ObjectId, ref: 'Roles' }],
    entity: [{ type: Schema.Types.ObjectId, ref: 'Entity' }],
    add_edit: {
        type: String
    },
    del: {
        type: String
    },
    list: {
        type: String
    }
});

module.exports = mongoose.model('Permission', Permission);
