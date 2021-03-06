const {Users} = require('../models');

module.exports={

    show:async(req,res)=>{

        const param=req.params.id;

        const results=await Users.findOne({
            where:{id:param,ativo:true},
            attributes:['id','nome','email']
        });

        //console.log(results);

        if(results===null){
            res.render('error',{message:'Algo deu errado'})
        }else{
            res.render('edit',{data:results});
        }

        
    }
}