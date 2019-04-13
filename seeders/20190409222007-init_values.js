'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      { first_name: 'Roger', last_name: 'Acosta'},
      { first_name: 'José', last_name: 'Rodríguez'},
      { first_name: 'Juan', last_name: 'Pérez'}
    ]).then(() => {
      return queryInterface.bulkInsert('comments', [
        { user_id: 1, content: 'In 900 years of time and space, I’ve never met anyone who wasn’t important.' },
        { user_id: 1, content: 'There’s a lot of things you need to get across this universe. Warp drive… wormhole refractors… You know the thing you need most of all? You need a hand to hold.' },
        { user_id: 1, content: 'I am and always will be the optimist. The hoper of far-flung hopes and the dreamer of improbable dreams.' }
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
