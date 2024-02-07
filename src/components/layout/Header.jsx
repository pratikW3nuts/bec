// const { Fragment } = require("react")
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.svg";

const Header = () => {

    return (
        <>
            <header>
                <div className="pc_headerwrap py-[30px] sticky z-[15] top-0 flex items-center justify-center">
                    <div className="container relative flex items-center justify-center">
                        <div className="pc_logobox my-0 mx-auto">
                            <Link href="#" className="flex items-center justify-center flex-col">
                                <Image src={Logo} alt="logo"/>
                                <strong className="block font-Oswald font-normal text-[10px] text-bodytextlight pt-[10px] uppercase"><span className="text-primary">Brenda</span> Expert Coaching </strong>
                            </Link>
                        </div>

                        <div className="pc_navigation flex items-center justify-between absolute px-[15px] left-0 right-0 h-0 top-[50%]">
                            <ul className="p-0 m-0 flex items-center">
                                <li className="m-0 p-0 flex items-center"><Link href="#" className="active font-Oswald uppercase transition-none">Home</Link></li>
                                <li className="m-0 p-0 flex items-center"><Link href="#" className="active font-Oswald uppercase transition-none">Podcast</Link></li>
                                <li className="m-0 p-0 flex items-center"><Link href="#" className="active font-Oswald uppercase transition-none">Video</Link></li>
                                <li className="m-0 p-0 flex items-center"><Link href="#" className="active font-Oswald uppercase transition-none">Blog</Link></li>
                            </ul>
                            <ul className="p-0 m-0 flex items-center">
                                <li className="m-0 p-0 flex items-center"><Link className="active font-Oswald uppercase transition-none" href="#">About</Link></li>
                                <li className="m-0 p-0 flex items-center"><Link className="active font-Oswald uppercase transition-none" href="#">Team</Link></li>
                                <li className="m-0 p-0 flex items-center"><Link className="active font-Oswald uppercase transition-none" href="#">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="pc_hamburger" id="pc_hamburger-1">
                            <span className="pc_line"></span>
                            <span className="pc_line"></span>
                            <span className="pc_line"></span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )

}


export default Header;