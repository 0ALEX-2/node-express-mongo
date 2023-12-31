const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    // .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    // console.log(con.connections);
    console.log('Database connection established!');
  })
  .catch((error) => {
    console.log(error);
  });

  //------------Schema---------------


// const testTour = new Tour({
//   name: "The forest hiker",
//   rating: 4.7,
//   price:499
// })
// testTour.save().then(doc=>console.log(doc)).catch(err=>console.log(err))


// ------------------------------------------------
const port = process.env.PORT || 3000;
app.listen(port, (err, data) => {
  console.log(`App is running on port ${port} ...`);
});
