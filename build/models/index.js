"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const coffee_1 = require("./coffee");
const dbName = 'shopdb';
const username = 'sqluser';
const password = 'password';
const sequelize = new sequelize_1.Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
(0, coffee_1.CoffeeFactory)(sequelize);
exports.db = sequelize;
