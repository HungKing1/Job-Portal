import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
const Hero = () => {

  const {setSearchFilter, setIsSearched, searchFilter} = useContext(AppContext)

  const titleRef = useRef(null)
  const locationRef = useRef(null)

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value
    })
    setIsSearched(true)
    console.log(
     searchFilter
    )
  }

  return (
    <div>
      <div className='text-center p-5 bg-info container my-2 rounded'>
          <h2 className='my-3 p-3'>Over 10,000+ jobs to apply</h2>
          <p className='my-3 p-3'>Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!</p>
          <div className='d-inline-flex justify-content-center p-2 bg-white rounded w-auto  mx-auto gap-2'>
              <div className='d-inline-flex gap-2'>
                  <img src={assets.search_icon} alt="" />
                  <input type="text"
                  placeholder='Search for jobs'
                  className='rounded p-2 border-0 shadow-none'
                  ref={titleRef}/>
              </div>
              <div className='d-inline-flex gap-2'>
                  <img src={assets.location_icon} alt="" />
                  <input type="text" 
                  placeholder='Location'
                  className='rounded p-2 border-0 shadow-none'
                  ref={locationRef}/>
              </div>
              <button onClick={onSearch} className='btn border me-0'>Search</button>
          </div>
      </div>
      <div className='container border shadow rounded p-3'>
        <div className='d-flex gap-5 align-items-center p-3 flex-wrap'>
          <p className='fs-6 m-0'>Trusted by</p>
          <img style={{height: '25px'}} src={assets.microsoft_logo} alt="" />
          <img style={{height: '25px'}} src={assets.walmart_logo} alt="" />
          <img style={{height: '25px'}} src={assets.accenture_logo} alt="" />
          <img style={{height: '25px'}} src={assets.samsung_logo} alt="" />
          <img style={{height: '25px'}} src={assets.amazon_logo} alt="" /> 
          <img style={{height: '25px'}} src={assets.adobe_logo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero