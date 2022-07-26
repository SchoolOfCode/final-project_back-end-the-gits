import express from 'express';
import {
  getShoppinglist,
  getShoppinglistItem,
  createShoppinglistItem,
  updateShoppinglistItem,
  deleteShoppinglistItem
} from '../controllers/shoppinglistController.js'

const router = express.Router();

// Retrieves all the shopping lists
router.get('/', getShoppinglist)

// Retrieves all the items for a shopping by its id
router.get('/:id', getShoppinglistItem)

// Adds a new item to the shopping list
router.post('/:id', createShoppinglistItem)

// Amend list item
router.patch('/:id/item/:item_id', updateShoppinglistItem)

// Delete list item
router.delete('/:id/item/:item_id', deleteShoppinglistItem)


export default router;
