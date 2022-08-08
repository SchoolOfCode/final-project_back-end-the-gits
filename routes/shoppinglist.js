import express from 'express';
import {
  getShoppingList,
  getShoppingListItem,
  createShoppingListItem,
  updateShoppingListItem,
  deleteShoppingListItem,
  deleteShopNameItem
} from '../controllers/shoppingController.js'

const router = express.Router();

// DEVELOPMENT ONLY - Retrieves all the shopping items from database (useful to check data)
router.get('/', getShoppingList)

// Retrieves all the items for a shopping list by its user created name (i.e. Lidl)
router.get('/:id', getShoppingListItem)

// Adds a new item to the shopping list (needs to be linked by id)
router.post('/', createShoppingListItem)

// Amend list item (i.e. to cohange completed from False to True)
router.patch('/', updateShoppingListItem)

// Delete list item
router.delete('/', deleteShoppingListItem)

// Delete ShopName 

router.delete('/remove-shop', deleteShopNameItem )


export default router;
