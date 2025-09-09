import React from 'react'
import {BsSend} from "react-icons/bs";

export default function MessageInput() {
    return (
        <form className={'px-4 my-5'}>
            <div className={'w-full relative'}>
                <input
                    type={'text'}
                    className={'border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'}
                    placeholder={'Send a message'}
                />
                <button type={'submit'} className={'absolute inset-y-0 end-0 flex item-center p-3 cursor-pointer'}>
                    <BsSend className={'w-6 h-6'}/>
                </button>
            </div>
        </form>
    )
}
