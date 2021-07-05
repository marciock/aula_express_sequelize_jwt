const {Users} =require('../models');
const bcrypt=require('bcryptjs');
require("dotenv").config();
const jwt=require('jsonwebtoken');

module.exports={

    check:async(req,res)=>{
        const email=req.body.email;
        const senha=req.body.senha;

       
        
        const result=await Users.findOne(
            {where:{
                ativo:true,
                email:email
            }
        }
        );

        //console.log(result.senha)
        if(result === null){
            let message={message:'Login Inválido'};

            res.status(500).render('error',message);

        }else{
            console.log(senha)
          
            bcrypt.compare(senha,result.senha,(err,data)=>{
                console.log(data)

                if(data===true){    
                    const token=jwt.sign({id:result.id,email:result.email,permissao:result.permissao},process.env.NODE_TOKEN,{expiresIn: 300})
    
                   res.render('dash',{data:token});
                }
                else{
                 //   message={message:err}
                    res.status(401).render('error',message);
                }
            });
            

           

        }

        
        
    }
}
