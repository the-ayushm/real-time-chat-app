import mongoose from 'mongoose'


const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    }
},{timestamps: true}) // timestamps: true will automatically add createdAt and updatedAt fields in the database

const Message = mongoose.model('Message', messageSchema) 
export default Message