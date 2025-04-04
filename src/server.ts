import express, { Application } from "express";
import "dotenv/config";
import routes from "./routers/index.route";
import cors from "cors";
import { connectDB } from "./config/db";

const app: Application = express();
const PORT = process.env.PORT || 5000;

connectDB().catch(() => process.exit(1));

// App permissions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        credentials: true,
        origin: [process.env.CLIENT_URL as string],
    })
);
app.use("/api", routes);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
