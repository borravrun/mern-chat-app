import express from "express";
import AuthRoute from "./routes/auth.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/api/auth", AuthRoute)

export default app;