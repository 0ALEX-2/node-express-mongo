const express = require('express');
const tourController = require('./../controller/tourController');
const router = express.Router();

//Param middleware
router.param('id', (req, res, next, val) => {
  console.log(`Tour id is : ${val}`);
  next();
});

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTours)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
