const { Users } = require("../models");
const editUser = async (req, res)=>{
    const id = req.params.id;
    const userData = req.body;
    if(!id){
        return res.status(400).json({
            success:false,
            message:`${req.method} failed, no id provided.`
        })
    }
    if(!userData){
        return res.status(400).json({
            success:false,
            message:`${req.method} failed, no data provided.`
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
        await reqUser.update(userData);
        return res.status(200).json({
            success:true,
            message:`User updated successfully`,
            data:reqUser
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:`${req.method} failed, consult error >>> ${error}`
        })
    }
    
}
module.exports = {editUser};