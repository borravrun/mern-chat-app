import React from 'react'
import SearchInput from "./SearchInput.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";

export default function Sidebar() {
    return (
        <div className={'px-3 py-2 relative border-r border-slate-500 p-4 flex flex-col'}>
            <SearchInput/>
            <div className={'divider px-1'}></div>
            <Conversations/>
            <LogoutButton/>
        </div>
    )
}
