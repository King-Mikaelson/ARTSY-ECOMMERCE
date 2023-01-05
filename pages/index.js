import Head from 'next/head'
import FeaturedProducts from '../components/FeaturedProducts'
import Hero from '../components/Hero'
import Footer from '../components/Footer';



export default function Home() {
  return (
    <div className='bg-[#FFFF]'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Hero/>
    <FeaturedProducts/>
    <Footer/>
    </div>
  )
}
