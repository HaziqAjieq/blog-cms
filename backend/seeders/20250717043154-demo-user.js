"use strict";
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     *
     */
    const saltRounds = 10;
    const now = new Date();

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "admin",
          password: await bcrypt.hash("abc123!@#", saltRounds),
          email:'admintest@gmail.com',
          role:'admin',
          createdAt: now,
          updatedAt: now,
        },
        {
           username: "editor",
          password: await bcrypt.hash("!@#123abc", saltRounds),
          email:'editortest@gmail.com',role:'editor',
          createdAt: now,
          updatedAt: now,
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('Users', null, {});
  },
};
