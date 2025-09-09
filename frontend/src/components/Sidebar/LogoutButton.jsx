import React from 'react';
import {BiLogOut} from "react-icons/bi";

function LogoutButton() {
    return (
        <div className={'absolute bottom-2'}>
            <BiLogOut className={'w-6 h-6'}/>
        </div>
    );
}

export default LogoutButton;