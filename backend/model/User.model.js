import mongoose from "mongoose";
import bcryptjs from "bcryptjs"

const Schema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minLength: 6
    },

    confirmPassword: {
        type: String,
        validate: {
            validator: function (el){
                return el === this.password;
            },
            message: "Passwords are not the same!"
        }
    },

    gender: {
        type: String,
        required: true,
        enum: ["male", "female", "others"]
    },

    profilePic: {
        type: String,
        default: "",
    }
})

Schema.pre('save', async function (next){
    if(!this.isModified('password')) return next();

    this.password =  await bcryptjs.hash(this.password,12);
    this.confirmPassword = undefined;
    next();
})

Schema.methods.correctPassword =  async function(candidatePassword, userPassword) {
    return await bcryptjs.compare(candidatePassword, userPassword)
}

const User = mongoose.model("User", Schema)

export default User;