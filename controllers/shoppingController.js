import Shopping from '../models/shoppingSchema.js';
import mongoose from 'mongoose';


// GET / Finds ALL shopping list ITEMS and sorts it in order of most recent list. (DEV ONLY)
export const getShoppingList = async (req, res) => {
    const shoppingList = await Shopping.find().sort({createdAt: -1})
    res.status(200).json(shoppingList)
}

// GET / Finds a shopping list by name (i.e. Lidl).
export const getShoppingListItem = async (req, res) => {
    // req.params is part of the url request.
    const {shopName, id} = req.params
    const shoppingList = await Shopping.find({shoppingListName: shopName, sub: id})

    // Mongodb will create a new empty array if given a new shopName.
    // This IF statement will catch an empty array and return an error.
    if (shoppingList.length === 0){
        return res.status(404).json({error: 'Shopping list not found'})
    }
    res.status(200).json(shoppingList)
}

// POST / Creates a new item document in the database with required "key:value" pairs (i.e. username, item).
export const createShoppingListItem = async (req, res) => {
    const {username, item, shoppingListName, completed, sub} = req.body
    let emptyFields = []
    // IF statement to catch an empty item string - to avoid null data in the database.
    if (!item) {
        emptyFields.push('item')
    } 
    if (emptyFields.length > 0) {
        return res.status(404).json({error: 'please enter item'})
    }
    //add doc to DB
    try{
        const shoppingItem = await Shopping.create({username, item, shoppingListName, completed, sub})
        res.status(200).json(shoppingItem)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
 }

// PATCH / Update the item in the db (i.e. to toggle between Ture/False for completed).
// in req.body pass in the "key:value" piar to change (i.e. "completed": "true")
export const updateShoppingListItem = async (req, res) => {
    const {id} = req.body
    // the if statement checks to see if id is valid and if not returns error message.
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'list item not found no id'})
    }
    const shoppingListItem = await Shopping.findOneAndUpdate({_id: id}, { 
        ...req.body
    }) 
    if(!shoppingListItem) {
        return res.status(404).json({error: 'list item not found'})
    }
    return res.status(200).json(shoppingListItem)
}

// DELETE / Deletes an item from the database.
export const deleteShoppingListItem = async (req, res) => {
    const {id} = req.body
    // the if statement checks to see if id is valid and if not returns error message.
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'list item not found'})
    }
    const shoppingListItem = await Shopping.findByIdAndDelete({_id: id})
    
    if(!shoppingListItem) {
        return res.status(404).json({error: 'list item not found'})
    }
    return res.status(200).json(shoppingListItem)
}

//DELETE / Deletes shopname from database.

export const deleteShopNameItem = async (req, res) => {
    const {shopName} = req.body

    const shoppingListName = await Shopping.deleteMany({shoppingListName: shopName})

    if(!shoppingListName.acknowledged){
        return res.status(404).json({error: 'Shop Name is not found'})
    }
    return res.status(200).json(shoppingListName)

}