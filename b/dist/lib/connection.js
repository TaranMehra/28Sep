import mongoose from "mongoose"; // using js ODM -> Object document model for abstraction and structure
import "dotenv/config";
// config();
let cacheConnection = null;
const mongoURI = process.env.MONGODB_URI;
//checking the connection
export const checkConnection = async () => {
    if (cacheConnection) {
        console.log("Already Connected");
        return cacheConnection;
    }
    else {
        return await createConnection();
    }
};
export const createConnection = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("DB Connected Successfully");
        });
        mongoose.connection.on("error", (error) => {
            console.log("Failed to Connect DB", error);
        });
        mongoose.connection.on("disconnected", () => {
            console.warn("DB Disconntecd");
        });
        mongoose.connection.on("reconnected", () => {
            console.log("🔁 Mongoose reconnected to MongoDB");
        });
        const conn = await mongoose.connect(mongoURI, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
        });
        cacheConnection = conn.connection;
        return cacheConnection;
    }
    catch (error) {
        console.error("Got the Error While Connecting", error);
        process.exit(1);
    }
};
//# sourceMappingURL=connection.js.map