import User from "../models/user-model.js";



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
        if (userExist) {
            return res
                .status(400)
                .json({ message: "user already exist" });
        }
        
        const createdUser = await User.create({ email, username, password, phone });
        createdUser.generateJwtToken
        res
            .status(201)
            .json({ message: createdUser, JWT: await createdUser.generateToken(), ID: createdUser._id.toString() });

    } catch (error) {
        console.error(error);
        res
            .status(400)
            .json({ msg: 'PAGE NOT FOUND' });
    }

};


export default { home, register };
