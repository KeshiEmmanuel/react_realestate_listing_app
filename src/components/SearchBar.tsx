import { Input } from "@nextui-org/react";
import { BsSearch } from "react-icons/bs";

function SearchBar() {
    return (
        <div className="w-[500px] font-[Archivo]">
            <Input
                type="text"
                startContent={<BsSearch className="text-gray-500" />}
                placeholder="Search Properties..."
            />
        </div>
    );
}

export default SearchBar;
