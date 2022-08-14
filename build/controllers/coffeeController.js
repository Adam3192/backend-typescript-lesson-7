"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCoffee = exports.editCoffee = exports.editCoffeePage = exports.addCoffee = exports.addCoffeePage = exports.oneCoffee = exports.allCoffee = exports.defaultCoffee = void 0;
const coffee_1 = require("../models/coffee");
const defaultCoffee = (req, res, next) => {
    res.redirect('/coffee');
};
exports.defaultCoffee = defaultCoffee;
const allCoffee = async (req, res, next) => {
    let coffeeList = await coffee_1.Coffee.findAll();
    res.render('all-coffee', { coffeeList });
};
exports.allCoffee = allCoffee;
const oneCoffee = (req, res, next) => {
    throw 'Not implemented';
};
exports.oneCoffee = oneCoffee;
const addCoffeePage = (req, res, next) => {
    throw 'Not implemented';
};
exports.addCoffeePage = addCoffeePage;
const addCoffee = (req, res, next) => {
    throw 'Not implemented';
};
exports.addCoffee = addCoffee;
const editCoffeePage = (req, res, next) => {
    throw 'Not implemented';
};
exports.editCoffeePage = editCoffeePage;
const editCoffee = (req, res, next) => {
    throw 'Not implemented';
};
exports.editCoffee = editCoffee;
const deleteCoffee = (req, res, next) => {
    throw 'Not implemented';
};
exports.deleteCoffee = deleteCoffee;
