module.exports=(Sequelize,DataType)=>{
    const Acessos=Sequelize.define('Acessos',{
        id:{
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type:DataType.INTEGER
          },
          permissao:{
            allowNull:false,
              type:DataType.INTEGER
          },
          rota:{
            allowNull:false,
              type:DataType.STRING
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
    },{})

    Acessos.associate=(models)=>{
        Acessos.belongsTo(models.Permissoes,{
          foreignKey:'permissao',
            targetKey:'id',
            as:'p'
        })
    };

    return Acessos;
}