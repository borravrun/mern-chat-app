import { IoIosSearch } from "react-icons/io";

export default function SearchInput() {
    return (
        <form className={'input'}>
            <IoIosSearch className={'w-6'}/>
            <input type="search" className="grow" placeholder="Search"/>
        </form>
    )
}
