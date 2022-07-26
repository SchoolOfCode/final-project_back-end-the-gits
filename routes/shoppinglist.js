import express from 'express';
// TODO: IMPORT THE CONTROLLER

const router = express.Router();

// Retrieves all the shopping lists
router.get('/', (req, res) => {
  res.json({
    success: true,
    payload: 'This returns all shopping lists'
  });
})

// Retrieves all the items for a shopping by its id
router.get('/:id', (req, res) => {
  res.json({
    success: true,
    payload: 'This returns a shopping list'
  });
})

// Adds a new item to the shopping list
router.post('/:id', (req, res) => {
  const { id } = req.params;
  const { item } = req.body;
  res.json({
    success: true,
    payload: `New item with body: ${item} added to list: ${id}`
  });
})

export default router;
