import { Navbar, NavbarBrand } from "@nextui-org/navbar";
import { Image } from "@nextui-org/react";
import RealEstateLogo from "/RealEstateLogo.jpg";
import SearchBar from "./SearchBar";
function MainNavbar() {
    return (
        <Navbar className="">
            <NavbarBrand className="gap-2">
                <Image src={RealEstateLogo} width={"30px"} />
                <p className="font-[Archivo] font-semibold text-xl">
                    Rentailia
                </p>
            </NavbarBrand>
            <SearchBar />
        </Navbar>
    );
}

export default MainNavbar;
