const { Schema, model, Types } = require('mongoose');


const reactionSchema = new Schema({
    reactionId: {
        type: Types.ObjectId,
        default: new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    userName: {
        type: String,
        required: true
    },
},
{
    toJSON: {
        getters: true
    },
    id: false
});

const Reaction = model('Reaction', reactionSchema);

module.exports = reactionSchema;
