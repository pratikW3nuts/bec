import Image from "next/image";
import Link from "next/link";
import aboutman from "@/assets/images/aboutman.png";
import twit from "@/assets/images/twit.svg";
import fb from "@/assets/images/fb.svg";
import insta from "@/assets/images/insta.svg";

const Aboutus = () => {
  return (
    <>
      <div className="aboutus_wrap py-[191px]">
        <div className="container">
          <div className="aboutbox">
            <div className="grid grid-rows-1 grid-flow-col grid-cols-2">
                <div className="imgouter max-w-[491px] relative">
                    <div className="imgbox">
                        <Image src={aboutman} alt="about" className="w-full h-auto"></Image>
                    </div>
                    <div className="textbox absolute bottom-[30px] right-[-15px] flex gap-x-[6px] items-center justify-end max-w-[232px] bg-primary px-[23px] py-[10px]">
                        <strong className="block font-medium text-[75px] leading-[113%] text-white">23</strong>
                        <span className="block text-[16px] font-medium text-white uppercase leading-normal">years<br/>of<br/>experience</span>
                    </div>
               </div>
              <div className="aboutdetail">
                <div className="linetext relative after:absolute after:bg-primary after:w-[86px] after:h-[1px] after:top-[16px] after:left-0 ">
                  <p className="uppercase text-primary text-[24px] tracking-[0.023em] pb-[16px] ml-[110px]">about us</p>
                </div>
                <h2 className="text-h2 grid">Transport &<span className="text-primary">logistics</span></h2>
                <div className="detailblock pt-[32px]">
                    <p className="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                    <p className="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="socialrow flex justify-end pt-[60px]">
                    <Link href="#" className="h-[40px] w-[40px] flex items-center justify-center rounded-full border border-paragraph">
                        <i className="text-0 flex"><Image src={twit} alt="twiter"></Image></i>
                    </Link>
                    <Link href="#" className="h-[40px] w-[40px] flex items-center justify-center rounded-full border border-paragraph">
                        <i className="text-0 flex"><Image src={fb} alt="fb"></Image></i>
                    </Link>
                    <Link href="#" className="h-[40px] w-[40px] flex items-center justify-center rounded-full border border-paragraph">
                        <i className="text-0 flex"><Image src={insta} alt="insta"></Image></i>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Aboutus;
