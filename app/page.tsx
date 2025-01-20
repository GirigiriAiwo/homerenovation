import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from './NavBarComponent/Navbar';
import Background from './BackgroundComponent/Background';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Renovation Business</title>
      </Head>
      <Navbar/>
      <Background/>
     
    </>
  );
};

export default Home;
