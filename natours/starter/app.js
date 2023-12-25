const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const port = 3000;

const app = express();

//--------------Middlewares-----------------------
app.use(express.json());
app.use((req, res, next) => {
  req.createdAt = new Date().toISOString();
  next();
});
app.use(morgan('dev'));

//-----------Controllers------------------------
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    createdAt: req.createdAt,
    results: tours.length,
    data: {
      tours,
    },
  });
};
const getTours = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((elm) => elm.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid Id',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};
const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};
const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({ status: 'fail', message: 'Invalid Id' });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here>',
    },
  });
};
const deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({ status: 'fail', message: 'Invalid Id' });
  }
  res.status(204).json({
    status: 'success',
    message: 'Tour has been deleted',
    data: null,
  });
};

const getAllUsers = (req, res) => {
  res.status(500).json({ status: 'error', message: 'User not found' });
};
const getUser = (req, res) => {
  res.status(500).json({ status: 'error', message: 'User not found' });
};
const createUser = (req, res) => {
  res.status(500).json({ status: 'error', message: 'User not found' });
};
const updateUser = (req, res) => {
  res.status(500).json({ status: 'error', message: 'User not found' });
};
const deleteUser = (req, res) => {
  res.status(500).json({ status: 'error', message: 'User not found' });
};

//-----------------Routers-----------------

// app.get('/api/v1/tours',getAllTours);
// app.get('/api/v1/tours/:id',getTours);
// app.post('/api/v1/tours',createTour);
// app.patch('/api/v1/tours/:id',updateTour);
// app.delete('/api/v1/tours/:id',deleteTour);

app.route('/api/v1/tours').get(getAllTours).post(createTour);
app
  .route('/api/v1/tours/:id')
  .get(getTours)
  .patch(updateTour)
  .delete(deleteTour);

app.route('/api/v1/users').get(getAllUsers).post(createUser);
app
  .route('/api/v1/users/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

//---------------------Start---------------------

app.listen(port, (err, data) => {
  console.log(`App is running on port ${port} ...`);
});
