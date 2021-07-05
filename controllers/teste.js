const jwt=require("jsonwebtoken");
require('dotenv').config;
module.exports={
    review:(req,res)=>{
    let data=req.cookies;
   
     const {id,email,permissao}=jwt.verify(data.token,process.env.NODE_TOKEN);
   
    
 
    const acessos=JSON.parse(process.env.ACESSOS);
 
 
    const findRota=acessos.find(f=>f.rota==='/teste');
 
  
    if(findRota !==undefined){
        console.log(findRota)
 
        
 
         if(findRota.permissao ===permissao){
             res.status(200).render('teste');
         }else{
             res.status(401).render('error',{message:'Sem Autorização de Acesso'});
         }
 
    }else{
     res.status(500).render('error',{message:'Endereço não Encontrado'});
    }
 
 
            
                
 
 
    // });
 
}
 
}