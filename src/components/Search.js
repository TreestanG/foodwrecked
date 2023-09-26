import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Search() {
    return (<div className="flex items-center bg-gray-200 p-4 rounded-lg">
        <FontAwesomeIcon icon={faSearch} className=" text-xl pr-4 hover:cursor-pointer"></FontAwesomeIcon>
        <input className=" w-[40rem] text-black border-none outline-none bg-gray-200" placeholder="Search..."></input>

    </div>)
}