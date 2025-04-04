import { connect } from "mongoose";

export async function connectDB() {
    try {
        const { connection } = await connect(process.env.MONGODB_URL as string);

        console.log(`✅ MongoDB connected: ${connection.host}`);
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        process.exit(1);
    }
}
