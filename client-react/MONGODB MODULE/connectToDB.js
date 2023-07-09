const mongoose = require ('mongoose');

const connectToDb = async () => {
  try {
    await mongoose.connect ('mongodb://127.0.0.1:27017/gym');
    console.log ('Connected To MongoDB');
  } catch (error) {
    console.log ('failed to Connect: ', error);
  }
};

module.exports = connectToDb;