import { RequestHandler } from "express";
import { Coffee } from "../models/coffee";

export const defaultCoffee: RequestHandler = (req, res, next) => {
    res.redirect('/coffee');
}

export const allCoffee: RequestHandler = async (req, res, next) => {
    let coffeeList: Coffee[] = await Coffee.findAll();
    res.render('all-coffee', { coffeeList });
}

export const oneCoffee: RequestHandler = (req, res, next) => {
    throw 'Not implemented';
}

export const addCoffeePage: RequestHandler = (req, res, next) => {
    throw 'Not implemented';
}

export const addCoffee: RequestHandler = (req, res, next) => {
    throw 'Not implemented';
}

export const editCoffeePage: RequestHandler = (req, res, next) => {
    throw 'Not implemented';
}

export const editCoffee: RequestHandler = (req, res, next) => {
    throw 'Not implemented';
}

export const deleteCoffee: RequestHandler = (req, res, next) => {
    throw 'Not implemented';
}