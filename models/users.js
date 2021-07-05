module.exports=(Sequelize,DataType)=>{
    const Users=Sequelize.define('Users',{
        id:{
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
          type:DataType.INTEGER      
        },
        nome:{
          allowNull:false,
          type:DataType.STRING(150)
        },
        email:{
          allowNull:false,
          type:DataType.STRING(70)
        },
        permissao:{
          allowNull:false,
          type:DataType.INTEGER
        },
        senha:{
          allowNull:false,
          type:DataType.STRING
        },
        ativo:{
          allowNull:false,
          type:DataType.BOOLEAN
        },
        
    },{});

    Users.associate=(models)=>{
        Users.belongsTo(models.Permissoes,{
          foreignKey:'permissao',
            targetKey:'id',
            as:'pe'
        })
    };
    return Users;
}