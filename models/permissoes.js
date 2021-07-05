module.exports=(Sequelize,DataType)=>{
    const Permissoes=Sequelize.define('Permissoes',{
        id:{
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type:DataType.INTEGER
          },
          tipo:{
            allowNull:false,
              type:DataType.STRING(80)
          },
          createdAt:{
            allowNull:false,
            type:DataType.DATE,
            defaultValue: new Date()
          },
          updatedAt:{
            allowNull:false,
            type:DataType.DATE,
            defaultValue: new Date()
          }
    })

    return Permissoes;
}