const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: 'Please provide a user name!',
            trim: true,
            unique: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            match: [/.+@.+\..+/]
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },

        thoughts: [
            {
                type:Schema.Types.ObjectId,
                ref:'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Friends'
            }
        ]    
        },
    
    {
        toJSON: {
            virtuals: true,
            
        },
        // prevents virtuals from creating duplicate of _id as `id`
        id: false
});

UserSchema.virtual('friendCount').get(function() {

    return this.friends.length;
});

// create the Pizza model using the PizzaSchema
const User = model('User', UserSchema);

// export the Pizza model
module.exports = User;