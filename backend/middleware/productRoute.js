import jwt from 'jsonwebtoken'
import User from "../model/User.model.js";

async function productRoute(req, res, next) {
    try{
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Unauthorized - No Token Provided"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SCERET);
        if(!decoded) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized - Invalid Token"
            })
        }

        const user = await User.findById(decoded.payload).select("-password")
        if(!user){
            res.status(404).json({
            success: false,
            message: "User not found!"
            })
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(`Error in productRoute middleware ${error.message}`);
        res.status(500).json({
            success: false,
            message: "Server error"
        })
    }
}

export default productRoute;