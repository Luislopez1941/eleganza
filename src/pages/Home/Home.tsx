import React from 'react'
import Header from '@/components/Header/Header'
import Layout from '@/components/layout/Layout'
import Stats from '@/components/Stats/Stats'
import Features from '@/components/Features/Features'
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts'
import OccasionCategories from '@/components/OccasionCategories/OccasionCategories'
import CallToAction from '@/components/CallToAction/CallToAction'
import Location from '@/components/Location/Location'
import Footer from '@/components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <Layout />
        <Stats />
        <Features />
        <OccasionCategories />
        <FeaturedProducts />
        <Location />
        <CallToAction />
        
        <Footer />
    </div>
  )
}

export default Home