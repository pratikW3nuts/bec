import Image from "next/image";
import moving from "@/assets/images/moving.svg";
import world from "@/assets/images/world.svg";
import storage from "@/assets/images/storage.svg";
import Link from "next/link";

const Service = () => {
  return (
    <>
      <div className="service_wrap bg-service py-[100px] bg-no-repeat bg-cover bg-center relative before:absolute before:block before:bg-black before:opacity-[0.9] before:content-[''] before:h-full before:w-full before:top-0 before:left-0">
        <div className="container">
          <div className="service_row relative z-[1]">
            <div className="titlebox text-center">
              <div className="linetext relative after:absolute after:bg-primary after:w-[86px] after:h-[1px] after:top-[16px] after:left-[50%] after:ml-[-131px]">
                <p className="uppercase text-primary text-[24px] tracking-[0.023em] pb-[16px] ml-[110px]">
                  our service
                </p>
              </div>
              <h2 className="text-h2 text-white">precise & <span className="text-primary">hardworking</span></h2>
            </div>
            <div className="box_row flex justify-between pt-[110px]">
                <div className="servicebox relative max-w-[289px] text-center bg-skin pt-[75px] px-[45px] pb-[48px]">
                    <div className="iconbox flex justify-center items-center h-[94px] w-[94px] bg-darkgrey rounded-full text-center mx-auto absolute top-[-50px] left-[50%] -translate-x-[50%]">
                        <i className="text-0 block h-[50px] w-[50px]"><Image src={world} alt="world"></Image></i>
                    </div>
                    <div className="detailbox">
                        <h3 className="text-h3 text-paragraph uppercase pb-7">STORAGE UNITS</h3>
                        <p className="text-[16px] text-paragraph pb-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor.</p>
                        <div className="linlbox flex justify-center">
                        <Link href='#' className="flex justify-center font-medium uppercase text-paragraph underline underline-offset-4 decoration-paragraph">get started</Link>
                        </div>
                    </div>
              </div>
              {/*  */}
              <div className="servicebox relative max-w-[289px] text-center bg-skin pt-[75px] px-[45px] pb-[48px]">
                    <div className="iconbox flex justify-center items-center h-[94px] w-[94px] bg-darkgrey rounded-full text-center mx-auto absolute top-[-50px] left-[50%] -translate-x-[50%]">
                        <i className="text-0 block h-[50px] w-[50px]"><Image src={storage} alt="storage"></Image></i>
                    </div>
                    <div className="detailbox">
                        <h3 className="text-h3 text-paragraph uppercase pb-7">MOVING KITS</h3>
                        <p className="text-[16px] text-paragraph pb-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor.</p>
                        <div className="linlbox flex justify-center">
                        <Link href='#' className="flex justify-center font-medium uppercase text-paragraph underline underline-offset-4 decoration-paragraph">get started</Link>
                        </div>
                    </div>
              </div>
              {/*  */}
              <div className="servicebox relative max-w-[289px] text-center bg-skin pt-[75px] px-[45px] pb-[48px]">
                    <div className="iconbox flex justify-center items-center h-[94px] w-[94px] bg-darkgrey rounded-full text-center mx-auto absolute top-[-50px] left-[50%] -translate-x-[50%]">
                        <i className="text-0 block h-[50px] w-[50px]"><Image src={moving} alt="move"></Image></i>
                    </div>
                    <div className="detailbox">
                        <h3 className="text-h3 text-paragraph uppercase pb-7">world moving</h3>
                        <p className="text-[16px] text-paragraph pb-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor.</p>
                        <div className="linlbox flex justify-center">
                        <Link href='#' className="flex justify-center font-medium uppercase text-paragraph underline underline-offset-4 decoration-paragraph">get started</Link>
                        </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
