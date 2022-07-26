// const mongoose = require("mongoose"); 
import Shopping from '../models/shoppingSchema.js';
import mongoose from 'mongoose';
// import res from 'express/lib/response';

//finds ALL shopping lists and sorts it in order of most recent list.
export const getShoppingList = async (req, res) => {
    const shoppingList = await Shopping.find().sort({createdAt: -1})
    res.status(200).json(shoppingList)
}
//the if statement checks to see if id is valid and if not returns error message. 
export const getShoppingListItem = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'list item not found'})
    }
    const shoppingItem = await Shopping.findById(id)
    if (!shoppingItem){
        return res.status(404).json({error: 'list item not found'})
    }
}

export const createShoppingListItem = async (req, res) => {
    const {username, item, shoppingListName, completed} = req.body
    let emptyFields = []
    if (!item) {
        emptyFields.push('item')
    } 
    if (emptyFields.length > 0) {
        return res.status(404).json({error: 'please enter item'})
    }
    //add doc to DB
    try{
        const shoppingItem = await Shopping.create({username, item, shoppingListName, completed})
        res.status(200).json(shoppingItem)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
 }

export const updateShoppingListItem = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'list item not found'})
    }
    const shoppingListItem = await Shopping.findOneAndUpdate({_id: id}, { 
        ...req.body
    }) 
    if(!shoppingListItem) {
        return res.status(404).json({error: 'list item not found'})
    }
    return res.status(200).json(shoppingListItem)
}

export const deleteShoppingListItem = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'list item not found'})
    }
    const shoppingListItem = await Shopping.findByIdAndDelete({_id: id})
    
    if(!shoppingListItem) {
        return res.status(404).json({error: 'list item not found'})
    }
    return res.status(200).json(shoppingListItem)
}