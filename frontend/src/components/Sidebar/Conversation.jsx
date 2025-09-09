import React from 'react'

export default function Conversation({}) {
    return (
        <div className={'flex gap-2 items-center rounded p-2 py-1 cursor-pointer'}>
            <div className="avatar avatar-online">
                <div className="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp"/>
                </div>
            </div>

            <p className={"font-bold text-gray-200"}>Jhone Deo</p>


        </div>
    )
}
