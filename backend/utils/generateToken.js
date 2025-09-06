import jwt from "jsonwebtoken";

async function generateToken(payload, res){
   const token = jwt.sign({payload}, process.env.JWT_SCERET, {
        expiresIn: "15d"
   })

   res.cookie("jwt", token, {
       maxAge: 15 * 24 * 60 * 60 * 1000,
       httpOnly: true,
       sameSite: 'strict'
   })
}

export default generateToken;