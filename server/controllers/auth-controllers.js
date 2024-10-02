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
            .json({msg: 'PAGE NOT FOUND'});
    }
};


// ++++++++++++++++++++++++++++
//     **Registration LOGIC**
// ++++++++++++++++++++++++++++

const register = async (req, res) => {
    try {
        console.log(req.body);
        res
            .status(200)
            .json({message :req.body});
                

    } catch (error) {
        console.error(error);
        res 
            .status(400)
            .json({msg: 'PAGE NOT FOUND'});
    }

};


export default { home, register };
