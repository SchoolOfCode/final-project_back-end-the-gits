import mongoose from 'mongoose';

const Schema = mongoose.Schema

//Schema to create object and specify type of data. Moongoose.schema is an inbuilt function.

const shoppingSchema = new Schema({
  username: {
    type: String
  },
  item: {
    type: String
  },
  shoppingListName: {
    type: String.fromCharCode,
    required: true
  },
  completed: {
    type: Boolean
  },
  
}, { timestamps: true} )

export default mongoose.model('Shopping', shoppingSchema)