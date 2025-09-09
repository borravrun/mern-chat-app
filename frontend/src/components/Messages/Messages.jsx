import React from 'react'
import Message from "./Message.jsx";
import MessageInput from "./MessageInput.jsx";

export default function Messages() {
    return (
        <div className={'p-4 flex-1 overflow-y-auto'}>
            {[1,2,3,4,5,6,7,8,9,10].map((_, index) => (
                 <Message key={index}/>
            )) }
        </div>
    )
}
