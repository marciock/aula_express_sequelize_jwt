'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users',{
      id:{
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER      
    },
      nome:{
        allowNull:false,
        type:Sequelize.STRING(150)
      },
      email:{
        allowNull:false,
        type:Sequelize.STRING(70)
      },
      senha:{
        allowNull:false,
        type:Sequelize.STRING(254)
      },
      permissao:{
        allowNull:false,
        type:Sequelize.INTEGER
      },
      ativo:{
        allowNull:false,
        type:Sequelize.BOOLEAN
      },
      createdAt:{
        allowNull:false,
        type:Sequelize.DATE
      },
      updatedAt:{
        allowNull:false,
        type:Sequelize.DATE
      }
      })
    },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
