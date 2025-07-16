import { Sequelize } from 'sequelize';
import userModel from './user.js';
import 'dotenv/config'


const sequelize = new Sequelize(
  process.env.DB_DATABASE ,
  process.env.DB_USER ,
  process.env.DB_PASSWORD ,
  {
    host: process.env.DB_HOST ,
    dialect: 'mysql',
    port:process.env.DB_PORT ,
  }
);

const models = {
  User: userModel(sequelize, Sequelize.DataTypes)
};

Object.values(models).forEach(model => {
  if (model.associate) {
    model.associate(models);
  }
});


export { sequelize, models };