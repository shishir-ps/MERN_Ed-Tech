import User from "../models/user-model.js";
import bcrypt from "bcrypt";



// ++++++++++++++++++++++++++++
//     **Home Page**
// ++++++++++++++++++++++++++++

const home = async (req, res) => {
    try {
        res
            .status(200)
            .send(`From controller SERVER OK`);
    } catch (error) {
        console.error(error);
        res
            .status(400)
            .json({ msg: 'PAGE NOT FOUND' });
    }
};


// ++++++++++++++++++++++++++++
//     **Registration LOGIC**
// ++++++++++++++++++++++++++++

const register = async (req, res) => {
    try {
        const { email, username, password, phone } = req.body;

        const userExist = await User.findOne({ email: email });
        const validUsername = await User.findOne({ username: username });
        if (userExist || validUsername) {
            return res
                .status(400)
                .json({ message: "user already exist" });
        }

        const createdUser = await User.create({ email, username, password, phone });
        createdUser.generateJwtToken
        res
            .status(201)
            .json({ message: createdUser, 
                    JWT: await createdUser.generateToken(), 
                    ID: createdUser._id.toString() });

    } catch (error) {
        console.error(error);
        res
            .status(400)
            .json({ msg: 'PAGE NOT FOUND' });
    }

};



// ++++++++++++++++++++++++++++
//     **Login LOGIC**
// ++++++++++++++++++++++++++++

const login = async (req, res) => {
    try {
        const { email, password, username } = req.body;

        const userExist = await User.findOne({ email: email });
        if (!userExist) {
            return res
                .status(400)
                .json({ message: "Invalid Email || Password" });
        }
        const isPasswordValid = await bcrypt.compare(password, userExist.password);
        if (isPasswordValid) {
            
            res
                .status(401)
                .json({
                    message: "Login Successful",
                    JWT: await userExist.generateToken(),
                    ID: userExist._id.toString(),
                });

        }


    } catch (error) {
        console.error(error);
        res
            .status(400)
            .json({ msg: 'PAGE NOT FOUND' });
    }

};


export default { home, register, login };
