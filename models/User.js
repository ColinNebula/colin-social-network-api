const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');


const UserSchema = new Schema(
    {
        firstName: {
            type: String,
            required: 'Please provide a user name!',
            trim: true,
        
        },
        lastName: {
            type: String,
            required: 'Please provide a user name!',
            trim: true,
        },
        password: {
            type: String,
            trim: true,
            required: 'Password is Required',
            validate: [({ length }) => length >= 6, 'Password should be longer.']
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
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
                ref: 'User'
            }
        ],    
    
    
        userCreated: {
        type: Date,
        default: Date.now
        
      }
    },   
    {
        toJSON: {
            virtuals: true,
            
        },
        // prevents virtuals from creating duplicate of _id as `id`
        id: false
    }
);

UserSchema.virtual('username').get(function() {
    return this.email.slice(0, this.email.indexOf('@'));
  });

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

// create the user model using the userSchema
const User = model('User', UserSchema);

// export the user model
module.exports = User;