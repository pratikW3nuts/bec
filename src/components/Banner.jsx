import Image from "next/image";
import Link from "next/link";
import bnrimg from "@/assets/images/bnrimg.png";
import get_start from "@/assets/images/get_start.svg";

const Banner = ()=>{
    return(
        <>
        <div className="banner relative">
            <div className="bgimg">
                <Image src={bnrimg} className="h-auto w-full" />
            </div>
                <div className="contentouter absolute top-0 left-0 h-full w-full flex items-center justify-center">
                    <div className="container">
                        <div className="contentbox flex justify-between">
                            <div className="leftbox">
                                <div className="leftdetail">
                                    <div className="linetext relative after:absolute after:bg-white after:w-[86px] after:h-[1px] after:top-[16px] after:left-0 ">
                                    <p className="uppercase text-white text-[24px] tracking-[0.023em] pb-[16px]">fast & secure move</p>
                                    </div>
                                    <h1 className="text-h1">Moving<br/> Was Never <span>So Easy</span></h1>
                                    <div className="get_started">
                                        <p>GET STARTED</p>
                                        <Link href="#"><Image src={get_start}></Image></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="rightbox">
                                <div className="rightdetail">
                                    <div className="box">
                                        <span>Relocation</span>
                                        <strong>80<sup>+</sup></strong>
                                    </div>
                                    <div className="box">
                                        <span>client</span>
                                        <strong>12<sup>k</sup></strong>
                                    </div>
                                    <div className="box">
                                        <span>moving house</span>
                                        <strong>150<sup>+</sup></strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Banner;