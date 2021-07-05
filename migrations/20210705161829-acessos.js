'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Acessos',{
      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:Sequelize.INTEGER
      },
      permissao:{
        allowNull:false,
          type:Sequelize.INTEGER
      },
      rota:{
        allowNull:false,
          type:Sequelize.STRING
      },
      createdAt:{
        allowNull:false,
        type:Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt:{
        allowNull:false,
        type:Sequelize.DATE,
        defaultValue: new Date()
      }
    
  })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Acessos')
  }
};
