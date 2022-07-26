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


export default router;
