import "dotenv/config"
import app from "./app.js";
import {connectDB} from "./config/db.js";

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is started at ${PORT}`)
})