import mongoose from 'mongoose'

const connectToMongoDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://ayushml1247:Ayush123@cluster0.ad6uo.mongodb.net/chat-app-db?retryWrites=true&w=majority")
        console.log("Connected to MongoDB")
    }catch(err){
        console.log("Error connecting to MongoDB", err)
    }
} 

export default connectToMongoDb