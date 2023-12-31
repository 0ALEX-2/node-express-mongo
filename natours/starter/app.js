const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//--------------Middlewares-----------------------
app.use(express.json());
app.use((req, res, next) => {
  req.createdAt = new Date().toISOString();
  next();
});
app.use(morgan('dev'));

//-----------Controllers------------------------

//-----------------Routers-----------------

// app.get('/api/v1/tours',getAllTours);
// app.get('/api/v1/tours/:id',getTours);
// app.post('/api/v1/tours',createTour);
// app.patch('/api/v1/tours/:id',updateTour);
// app.delete('/api/v1/tours/:id',deleteTour);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/user', userRouter);

//---------------------Start---------------------

module.exports = app;
