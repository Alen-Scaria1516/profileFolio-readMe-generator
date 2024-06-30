import Head from "next/head";
import NavBar from './components/Navbar';
import HomePage from "./components/slides/Homepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>ProfileFolio GitHub Profile ReadMe Maker</title>
        <meta name="title" content="ProfileFolio GitHub Profile ReadMe Maker" />     
      </Head>
      <div className="overflow-x-hidden max-w-[100vw] p-3 md:p-4 text-black">
      <NavBar/>
      <HomePage/>
      </div>
    </>
  );
}
