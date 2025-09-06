import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI)
        console.log(`MongoDB connect: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error connecting to MongoDb: ${error.message}`)
        process.exit(1)
    }

}