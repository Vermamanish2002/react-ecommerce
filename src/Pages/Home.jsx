import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Policy from '../components/Policy'
import NewsBox from '../components/NewsBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
    <BestSeller/>
    <Policy/>
    <NewsBox/>
    </div>
  )
}

export default Home
