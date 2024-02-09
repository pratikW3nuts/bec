// const { Fragment } = require("react")
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/Logo.svg";
import dropicon from "@/assets/images/dropicon.svg";

const Header = () => {

    return (
        <>
            <header className="unpack_header bg-[#222222] border-b border-solid border-white fixed top-0 left-0 z-[1111] w-full p-0 transition-all duration-300 ease-in-out">
                <div className="unpack-header-wrap">
                    <div className="container">
                        <div className="unpack-header-block flex items-center justify-between py-[33px]">
                            <div className="unpack-logobox">
                                <Link href="#" className="max-w-[248px] block">
                                    <Image src={Logo} className="w-full h-auto"/>
                                </Link>
                            </div>
                            <div className="unpack-header-nav flex">
                                <ul className="flex items-center">
                                    <li className="relative"><Link href="#" class="active transition-all duration-300 ease-in-out flex items-center text-[16px] uppercase text-white leading-[158%] hover:text-primary">Home</Link></li>
                                    <li className="relative"><Link href="#" className="flex transition-all duration-300 ease-in-out items-center text-[16px] uppercase text-white leading-[158%] hover:text-primary">About us</Link></li>
                                    <li className="relative"><Link href="#" className="flex transition-all duration-300 ease-in-out items-center text-[16px] uppercase text-white leading-[158%] hover:text-primary">Service </Link></li>
                                    <li className="relative">
                                        <Link href="#" className="flex transition-all duration-300 ease-in-out items-center text-[16px] uppercase text-white leading-[158%] hover:text-primary">Features<i className="text-0 block ml-[8px]"><Image src={dropicon} alt="dropicon"/></i></Link>
                                        <ul className="dropdown_menu flex flex-col items-start absolute left-0 bg-[#222222] p-[15px] min-w-[200px]">
                                            <li className="relative flex w-full"><Link href="#" className="flex w-full transition-all duration-300 ease-in-out text-[16px] uppercase text-white leading-[158%] hover:text-primary">1</Link></li>
                                            <li className="relative flex w-full"><Link href="#" className="flex w-full transition-all duration-300 ease-in-out text-[16px] uppercase text-white leading-[158%] hover:text-primary">2</Link></li>
                                            <li className="relative flex w-full"><Link href="#" className="flex w-full transition-all duration-300 ease-in-out text-[16px] uppercase text-white leading-[158%] hover:text-primary">3</Link></li>
                                            <li className="relative flex w-full"><Link href="#" className="flex w-full transition-all duration-300 ease-in-out text-[16px] uppercase text-white leading-[158%] hover:text-primary">4</Link></li>
                                        </ul>
                                    </li>
                                    <li className="relative"><Link href="#" className="flex transition-all duration-300 ease-in-out items-center text-[16px] uppercase text-white leading-[158%] hover:text-primary">Blog </Link></li>
                                </ul>
                                <div className="unpack-btnbox">
                                    <Link className="breezebtn" href="#">contact us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )

}


export default Header;