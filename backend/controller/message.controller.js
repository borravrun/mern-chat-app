import Conversation from "../model/Conversation.model.js";
import Message from "../model/Message.model.js";

export async function sendMessage (req, res, next){
    try{
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId =  req.user._id;
        let conversation = await  Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        })
        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(),newMessage.save()]);

        res.status(201).json({
            success: true,
            newMessage,
            message: "Message sent successfully"
        });

    } catch (error) {
        console.log(`Error in sendMessage controller ${error.message}`);
        res.status(500).json({
            success: false,
            message: "Server error"
        })
    }
}

export async function getMessages(req, res, next){
    try {
        const {id: userToChatId} = req.params;
        const senderId =  req.user._id;

        const conversation = await Conversation.findOne({
                participants: { $all: [senderId, userToChatId] }
        }).populate("messages")
        if(!conversation) return res.status(200).json({
            success: true,
            messages: []
        });

        const messages = await conversation.messages

        res.status(200).send({
            success: true,
            messages,
        })
        
    } catch (error) {
        console.log(`Error in getMessages controller ${error.message}`);
        res.status(500).json({
            success: false,
            message: "Server error"
        })
    }
}