const { User } = require("../../db");

const tokenVerfied = async (req, res) => {

    const { verifyToken } = req.params;

    try {

        const user = await User.findOne({where:{verifyToken}})

        await user.update({verified:true,verifyToken:null})

        return res.status(200).json({user})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message });
    }

};

module.exports = tokenVerfied