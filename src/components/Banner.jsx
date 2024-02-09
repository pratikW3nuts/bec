import Image from "next/image";
import Link from "next/link";
import truck from "@/assets/images/truck.png";
import get_start from "@/assets/images/get_start.svg";

const Banner = ()=>{
    return(
        <>
        <div className="banner relative">
            <div className="bgimg">
                <Image src={truck} alt="bnr" className="h-auto w-full" />
            </div>
                <div className="contentouter absolute top-0 left-0 h-full w-full flex items-center justify-center">
                    <div className="container">
                        <div className="contentbox flex justify-between relative z-[1]">
                            <div className="leftbox">
                                <div className="leftdetail max-w-[854px]">
                                    <div className="linetext relative after:absolute after:bg-white after:w-[86px] after:h-[1px] after:top-[16px] after:left-0 ">
                                    <p className="uppercase text-white text-[24px] tracking-[0.023em] pb-[16px] ml-[110px]">fast & secure move</p>
                                    </div>
                                    <h1 className="text-h1 text-white">Moving<br/>Was Never<br/><span className="text-primary">So Easy</span></h1>
                                    <div className="get_started flex items-center pt-[60px]">
                                        <p className="text-white font-medium text-[20px]">GET STARTED</p>
                                        <Link href="#" className="h-[49px] w-[49px] flex items-center justify-center bg-primary rounded-full">
                                            <i className="w-[12px] h-[20px] text-0 flex"><Image src={get_start} alt="getstart"></Image></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="rightbox">
                                <div className="rightdetail flex flex-col">
                                    <div className="box flex justify-end flex-col items-end">
                                        <span className="font-Sarabun font-semibold text-[24px] leading-[113%] text-primary uppercase pb-[8px]">Relocation</span>
                                        <strong className="font-medium text-[75px] leading-[113%] text-white">80<sup>+</sup></strong>
                                    </div>
                                    <div className="box flex justify-end flex-col items-end">
                                        <span className="font-Sarabun font-semibold text-[24px] leading-[113%] text-primary uppercase pb-[8px]">client</span>
                                        <strong className="font-medium text-[75px] leading-[113%] text-white">12<sup>+</sup></strong>
                                    </div>
                                    <div className="box flex justify-end flex-col items-end">
                                        <span className="font-Sarabun font-semibold text-[24px] leading-[113%] text-primary uppercase pb-[8px]">moving house</span>
                                        <strong className="font-medium text-[75px] leading-[113%] text-white">150<sup>+</sup></strong>
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