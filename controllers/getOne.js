const { Users } = require("../models");
const getOne = async (req, res)=>{
    const id = req.params.id;
    if(!id){
        return res.status(400).json({
            success:false,
            message:`${req.method} failed, no id provided.`
        })
    }
    try {
        const reqUser = await Users.findByPk(id);
        if(reqUser === null ){
            return res.status(404).json({
                success:false,
                message:`${req.method} failed, user not found`
        })
        }
        return res.status(200).json({
            success:true,
            data:reqUser
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:`${req.method} failed, consult error >>> ${error}`
        })
    }
}
module.exports = {getOne};