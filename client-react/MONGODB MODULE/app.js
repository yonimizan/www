const connectToDb = require ('./connectToDB');
const mongoose = require ('mongoose');

connectToDb ();

const customerSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
});

const Customers = mongoose.model ('Customers', customerSchema);

const createCustomersCollection = async () => {
  try {
    await Customers.createCollection ();
    console.log ('Create Collection');
  } catch (error) {
    console.log ('failed create collection ', error);
  }
};

// createCustomersCollection ();

const postCustomer = async (name, age, email) => {
  try {
    const newCustomer = new Customers ({name, age, email});
    await newCustomer.save ();
    console.log ('post customer to collection');
  } catch (error) {
    console.log ('failed to post customer ', error);
  }
};

//postCustomer("Eliran", 27, "eliran@gmail.com");
//postCustomer("Roni", 25, "RONI@gmail.com");

const getCustomers = async () => {
    try {
      const customers = await Customers.find ();
      console.log ('customers: ', customers);
    } catch (error) {
      console.log ('failed to get customers');
    }
  };
  
  //getCustomers();

  const getCustomer = async id => {
    try {
      const customer = await Customers.findById (id);
      console.log ('customer: ', customer);
    } catch (error) {
      console.log ('failed to find customer ', error);
    }
  };
  
   //getCustomer("64987c71ac55590fdf417bc9");

    
   const deleteCustomer = async id => {
    try {
      const customer = await Customers.findByIdAndDelete (id);
      console.log ('delete customer: ', customer);
    } catch (error) {
      console.log ('failed to delete customer ', error);
    }
  };
  
  deleteCustomer ('64987d5db6487952d2f58321');
