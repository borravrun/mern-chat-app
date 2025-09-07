import express from "express";
import cookieParser from "cookie-parser"
import AuthRoute from "./routes/auth.route.js";
import MessageRoute from "./routes/message.route.js";
import UserRoute from "./routes/user.route.js";


const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))

app.use("/api/auth", AuthRoute)
app.use("/api/message", MessageRoute)
app.use("/api/users", UserRoute)

export default app;