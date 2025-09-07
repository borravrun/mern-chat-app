import User from "../model/User.model.js";

export async function getUsers(req, res){
    try{
        const loggedInUserId = req.user._id;
        const allUser = await User.find({ _id: { $ne: loggedInUserId}}).select("-password");

        res.status(200).json({
            success: true,
            users: allUser
        })

    }catch (error){
        console.log(`Error in getUsers controller ${error.message}`);
        res.status(500).json({
            success: false,
            message: "Server error"
        })
    }
}