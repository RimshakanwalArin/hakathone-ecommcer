import React from 'react'
import AboutHero from '@/app/compnents/aboutHero'
import AboutSection from '@/app/compnents/aboutSection'
import AboutPopularProduct from '@/app/compnents/aboutpropularproduct'

const page = () => {
    return (
      <div>
        <AboutHero />
            <AboutSection />
            <AboutPopularProduct />
            
      </div>
    );
}

export default page