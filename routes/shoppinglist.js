import express from 'express';
import {
  getShoppingList,
  getShoppingListItem,
  createShoppingListItem,
  updateShoppingListItem,
  deleteShoppingListItem
} from '../controllers/shoppingController.js'

const router = express.Router();

// Retrieves all the shopping lists
router.get('/', getShoppingList)

// Retrieves all the items for a shopping by its id
router.get('/:id', getShoppingListItem)

// Adds a new item to the shopping list
router.post('/', createShoppingListItem)

// Amend list item
router.patch('/:id/item/:item_id', updateShoppingListItem)

// Delete list item
router.delete('/:id/item/:item_id', deleteShoppingListItem)


export default router;
