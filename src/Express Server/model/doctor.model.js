const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let docotrSchema = new Schema
    (
        {
            first_name: {
                type: String
            },
            last_name: {
                type: String
            },
            fachbereich: {
                type: String
            },
            adresse: {
                type: String
            },
            telnummber: {
                type: Number
            },
        },

        {
            collection: 'doctor'
        }

    );

module.exports = mongoose.model('doctorSchema', docotrSchema)