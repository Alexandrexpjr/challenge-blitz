"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert("tasks", [{
       title: "Sample task",
       description: "Generic description",
       status: "em andamento",
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tasks", null, {});
  },
};
