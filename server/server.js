import "dotenv/config";
import express from "express";
import router from "./router/auth-router.js";
import connectDB from "./utils/db.js";

const app = express();

app.use(express.json());
app.use("/api/auth", router);



const PORT = 4000;


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);
    });
});