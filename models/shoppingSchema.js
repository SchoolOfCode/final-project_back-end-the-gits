import mongoose from 'mongoose';

const Schema = mongoose.Schema

const shoppingSchema = new Schema({
  username: {
    type: String
  },
  item: {
    type: String
  },
  completed: {
    type: Boolean
  },
  
}, { timestamps: true} )

export default mongoose.model('Shopping', shoppingSchema)