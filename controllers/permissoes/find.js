const {Users} =require('../../models');


module.exports={

    show:async (req,res)=>{

        const results=await Users.findAll({where:{ativo:true}});
        res.json(results);
    }
}