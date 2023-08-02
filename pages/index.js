import Head from 'next/head';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HeroSection from '@/components/home/hero-section';
import AdvantagesOfMKC from '@/components/home/advantages-of-mkc';
import AboutUs from '@/components/home/about-us';
import OurCourses from '@/components/home/our-courses';
import FrequentlyAskQuestion from '@/components/home/faq';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Best NEET JEE Coaching in India – MKC</title>
        <meta name="description" content="If you are looking for best neet/jee coaching in India, visit https://mkcjeeneet.com! Join Neet/Jee fresh batches now."></meta>
      </Head>
      <HeroSection />
      <AdvantagesOfMKC />
      <AboutUs />
      <OurCourses />
      <FrequentlyAskQuestion />
    </>
  )
}
