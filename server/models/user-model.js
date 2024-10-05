import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        require: false,
    },

});


userSchema.methods.generateToken = async function () {

    try {
        return jwt.sign({
            userId: this._id.toString(),
            userEmail: this.email,
            isAdmin: this.isAdmin,
        },
            process.env.JWT_SECRET,
            {
                expiresIn: "30d",
            }
        )

    } catch (error) {
        console.log("Error generating JWT")
    }

};

userSchema.pre("save", async function (next) {
    // const user = this;

    if (!this.isModified("password")) {
        next();
    }

    try {

        const saltRound = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, saltRound);
        console.log("oaopsdojajsjhdiuahwdiuh")
        this.password = hashedPassword;


    } catch (error) {

        next(error);
        console.log("not able to hash password")

    }
});



const User = new mongoose.model("User", userSchema);

export default User;