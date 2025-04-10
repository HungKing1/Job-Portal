import React from 'react'
import { NavBar } from '../components/NavBar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero />
      <JobListing />
      <Footer />
    </div>
  )
}

export default Home