import { Schema, model } from 'mongoose';
import validator from 'validator';
// import bcrypt from 'bcrypt';
// const saltRounds = 12;

const UserSchema = new Schema({
    
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email address is required'],
        unique: true,
        lowercase: true,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: (props) => `${props.value} is not a valid email address`
        }        
    },
    password: {
        type: String,
        required: true,
        // select: false,
        minLength: [6, 'Password is too short'],
        // validate: {
        //     validator: (value) => {
        //         return validator.isStrongPassword(value, {
        //             minLength: 8,
        //             minLowercase: 1,
        //             minUppercase: 1,
        //             minNumbers: 1,
        //             minSymbols: 1
        //         })
        //     }, 
        //     message: 'Password must be at least 8 characters long and contain isUppercase, lowercase, numbers and symbols.'
        // }
    }
})

// // Pre-save middleware to hash password
// UserSchema.pre('save', async function(next) {
//     console.log(this.password)
//   // Only hash the password if it has been modified (or is new)
//   if (!this.isModified('password')) return next();

//   try {
//     // Generate a salt and hash the password
//     const salt = await bcrypt.genSalt(saltRounds);
//     this.password = await bcrypt.hash(this.password, salt);
//     console.log(this.password);
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// // Instance method to compare password for login
// UserSchema.methods.comparePassword = async function(candidatePassword) {
//   return await bcrypt.compare(candidatePassword, this.password);
// };

const User = model('User', UserSchema);
export { User }