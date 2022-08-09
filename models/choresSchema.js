import mongoose from 'mongoose';

const Schema = mongoose.Schema

//Schema to create object and specify type of data. Moongoose.schema is an inbuilt function.

const choresSchema = new Schema({
  username: {
    type: String
  },
  item: {
    type: String
  },
  completed: {
    type: Boolean
  },
  sub: {
    type: String,
    required: true
  }
  
}, { timestamps: true} )

export default mongoose.model('Chores', choresSchema)