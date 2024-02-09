import Head from "next/head";
import Banner from "@/components/Banner";
import Aboutus from "@/components/Aboutus";
import Service from "@/components/service";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Banner />
      <Aboutus />
      <Service />
    </>
  );
}
