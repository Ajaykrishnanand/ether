const sorting_stuff = ['1', '3', '5', '7'];
sorting_stuff.sort()

// database connectivity

import mongoose from 'mongoose';


const Connection = () => { 
  try{
  mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log("Database connected successfully");
  } catch(error) {
    console.log("disconnected db", error.message");
       }
//  new simp
//new chages
