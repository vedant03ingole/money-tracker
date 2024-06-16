import mongoose, { connection } from "mongoose"

export const connectToDB = async () => {
    const connection = {}

    try{
        if(connection.isConnected) return
        const db = await mongoose.connect(process.env.MONGO_URI)
        connection.isConnected = db.connections[0].readyState
        // console.log('connected to db')
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}