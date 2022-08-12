import express from 'express';
import {
  getChores,
  createChores,
  updateChores,
  deleteChores,
} from '../controllers/choresController.js'

const router = express.Router();

// Retrieves all the chores for a user by the user id(sub)
router.get('/:id', getChores)

// Adds a new item to the chores list (needs to be linked by id)
router.post('/', createChores)

// Amend list item (i.e. to cohange completed from False to True)
router.patch('/', updateChores)

// Delete list item
router.delete('/', deleteChores)


export default router;
