
import Categories from '@/app/compnents/careories'
import CompanyLogo from '@/app/compnents/companylogo'

import Hero from '@/app/compnents/hero'
import HotProduct from '@/app/compnents/hotproduct'
import OurProduct from '@/app/compnents/ourproduct'
import HeroSectionTwo from './compnents/section'
import HeroSectionThree from './compnents/three'

export default function Home() {
  return (
    <>
      <Hero />
    <HeroSectionThree/>
      <HeroSectionTwo/>
      

      <Categories />
      <HotProduct />
      <OurProduct />
    </>
  );
}