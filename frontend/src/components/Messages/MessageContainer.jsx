import React from 'react'
import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";

export default function MessageContainer() {
    return (
        <div className={'flex flex-col h-full'}>
            <>
                <div className={'bg-slate-500 px-4 py-2 mb-2 sticky top-0 z-50'}>
                    <span className={'label-text'}>To:</span> {" "}
                    <span className={'text-gray-900 font-bold'}>Jhon Deo</span>
                </div>
                <Messages/>
            </>
            <div className={'mt-auto'}>
                <MessageInput/>
            </div>
        </div>
    )
}
