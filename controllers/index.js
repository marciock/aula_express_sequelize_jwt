const {Acessos} =require('../models');

module.exports={

    show:async(req,res)=>{
        const results=await Acessos.findAll({attibutes:['permissao','rota']});

        process.env.ACESSOS=JSON.stringify(results);

       console.log(process.env.ACESSOS);
       // res.json(results);
        
       res.render('login');

    }

}