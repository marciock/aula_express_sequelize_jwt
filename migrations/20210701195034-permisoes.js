'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Permissoes',{
    id:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:Sequelize.INTEGER
    },
    tipo:{
      allowNull:false,
        type:Sequelize.STRING(80)
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
    return await queryInterface.dropTable('Permissoes')
  }
};
