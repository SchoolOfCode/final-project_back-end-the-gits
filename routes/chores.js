import express from 'express';
import {
  getChores,
  createChore,
  updateChore,
  deleteChore,
} from '../controllers/choresController.js'

const router = express.Router();

// Retrieves all the chores for a user by the user id(sub)
router.get('/:id', getChores)

// Adds a new item to the shopping list (needs to be linked by id)
router.post('/', createChore)

// Amend list item (i.e. to cohange completed from False to True)
router.patch('/', updateChore)

// Delete list item
router.delete('/', deleteChore)


export default router;
