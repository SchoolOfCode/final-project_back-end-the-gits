import Chores from '../models/choresSchema.js';
import mongoose from 'mongoose';





// GET / Finds a chore by name (i.e. washing up).
export const getChores = async (req, res) => {
    // req.params is part of the url request.
    const {id} = req.params
    const chores = await Chores.find({sub: id})
    
    // This IF statement will catch an empty array and return an error.
    if (chores.length === 0){
        return res.status(404).json({error: 'chores not found'})
    }
    res.status(200).json(chores)
}

// POST / Creates a new item document in the database with required "key:value" pairs (i.e. username, item).
export const createChores = async (req, res) => {
    const {username, item, completed, sub} = req.body
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
        const chores = await Chores.create({username, item, completed, sub})
        res.status(200).json(chores)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
 }

// PATCH / Update the item in the db (i.e. to toggle between Ture/False for completed).
// in req.body pass in the "key:value" piar to change (i.e. "completed": "true")
export const updateChores = async (req, res) => {
    const {id} = req.body
    // the if statement checks to see if id is valid and if not returns error message.
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'chores not found no matching id'})
    }
    const chores = await Chores.findOneAndUpdate({_id: id}, { 
        ...req.body
    }) 
    if(!chores) {
        return res.status(404).json({error: 'chore not found'})
    }
    return res.status(200).json(chores)
}

// DELETE / Deletes an item from the database.
export const deleteChores = async (req, res) => {
    const {id} = req.body
    // the if statement checks to see if id is valid and if not returns error message.
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'chore not found'})
    }
    const chores = await Chores.findByIdAndDelete({_id: id})
    
    if(!chores) {
        return res.status(404).json({error: 'chore not found'})
    }
    return res.status(200).json(chores)
}
