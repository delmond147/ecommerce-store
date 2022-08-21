import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB is Connected at: ${conn.connection.host}`.cyan)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
