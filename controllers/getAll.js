const { Users } = require("../models");
const getAll = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: { exclude: ['password'] }
        });

        if (!users || users.length === 0) {
            return res.status(200).json({
                success: false,
                message: `No users in database`,
                data:[]
            })
        }
        return res.status(200).json({
            success: true,
            data: users
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `${req.method} failed, consult error >>> ${error}`
        })
    }

}
module.exports={getAll};