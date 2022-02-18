import mongoose from 'mongoose';

const memorySchema = mongoose.Schema({
    title:{
        type:String,
        require: true
    },
    place:{
        type:String,
        require: true
    },
    description:{
        type:String,
        require: true
    },
    image:{
        type:String,
        require: true
    },
    date:{
        type:Date,
        require: true
    }
});

const Memory = mongoose.model('Memory', memorySchema);

export default Memory;