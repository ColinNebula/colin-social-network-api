const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction

  } = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/Thoughts
router
  .route('/')
  .get(getAllThought)
  

// Set up GET one, PUT, and DELETE at /api/Thought/:id
router
  .route('/:id')
  .get(getThoughtById)
  .post(addThought)
  .put(updateThought)
  .delete(deleteThought);

  router
  .route('/:thoughtId/reactions')
  .post(addReaction)  

  router
  .route('/:id/reactions/:reactionId')
  .delete(removeReaction);


module.exports = router;