import React, { use, useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets, JobCategories, JobLocations } from '../assets/assets'
import JobCard from './JobCard'
import AppDownload from './AppDownload'

const JobListing = () => {
    const {searchFilter, isSearched, setSearchFilter, jobs} = useContext(AppContext)
    const [showFilter, setShowFilter] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className='container'>
        <div className='row'>
            {/* Side bar */}
            <div className='col-3'>
                {/* Search Filter */}
                <div>
                    {
                        isSearched && (searchFilter.title !== '' || searchFilter.location !== '') && (
                            <>
                                <h3 className='my-4 fs-3'>Current Search</h3>
                                <div>
                                    {searchFilter.title && (
                                        <span className='p-2 border rounded-3 d-inline-flex gap-2 me-2' style={{backgroundColor: '#20c997'}}>
                                            {searchFilter.title}
                                            <img className='cursor-pointer' onClick={() => setSearchFilter(prev =>  ({...prev, title:''}))} src={assets.cross_icon} alt="" />
                                        </span>
                                    )}
                                    {searchFilter.location && (
                                        <span className='p-2 border rounded-3 d-inline-flex gap-2 me-2' style={{backgroundColor: '#0dcaf0'}}>
                                            {searchFilter.location}
                                            <img className='cursor-pointer' onClick={() => setSearchFilter(prev => ({...prev, location:''}))} src={assets.cross_icon} alt="" />
                                        </span>
                                    )}
                                </div>
                            </>
                        )
                    }
                </div>
                <button className='btn border rounded' onClick={() => {setShowFilter(prev => !prev)}}>
                    {
                        showFilter ? 'Filter' : 'Close'
                    }
                </button>
                {/* Categories Filter */}
                <div className= {showFilter ? 'd-none d-xl-inline-block' : 'd-none'}>
                    <h4 className='my-4 fs-3'>Search by Categories</h4>
                    <ul className='list-unstyled'>
                        {
                            JobLocations.map((location, index) => (
                                <li key={index}
                                className='mb-3 d-flex gap-2' >
                                    <input type="checkbox" style={{transform: 'scale(1.3)'}} name='' id=''/>
                                    {location}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Categories Location */}
                <div className={showFilter ? 'd-none d-xl-inline-block' : 'd-none'}>
                    <h4 className='my-4 fs-3'>Search by Location</h4>
                    <ul className='list-unstyled'>
                        {
                            JobCategories.map((category, index) => (
                                <li key={index}
                                className='mb-3 d-flex gap-2' >
                                    <input type="checkbox" style={{transform: 'scale(1.3)'}} name='' id=''/>
                                    {category}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {/* Job cards */}
            <section className='col-xl-9 col-12'>
                <h3 className='fs-2 mt-4'>Latest jobs</h3>
                <p className='fs-4'>Get your desired job from top companies</p>
                <div className='d-flex gap-3 flex-wrap row'>
                    {
                        jobs.slice((currentPage-1)*6, currentPage*6).map((job, index) => (
                            <JobCard key={index} job={job}/>
                        ))
                    }
                </div>      
            </section>
        </div>
        {
            jobs.length > 0 && (
                <div className='d-flex justify-content-center gap-3 mt-3'>
                    <a>
                        <button className='border btn rounded' 
                        onClick={() => {if(currentPage > 1 ) setCurrentPage(prev => prev-1)}}><img src={assets.left_arrow_icon} alt="" /></button>
                    </a>
                    {
                        Array.from({length: Math.ceil(jobs.length/6)}).map((_, index) => (
                            <a>
                                <button className={`border btn rounded ${currentPage === index + 1 ? 'btn-primary' : ''}`}
                                onClick={() => {setCurrentPage(index+1)}}>{index+1}</button>
                            </a>
                        ))
                    }
                    <a>
                        <button className='border btn rounded'><img src={assets.right_arrow_icon} alt="" 
                        onClick={() => {if(currentPage < Math.ceil(jobs.length/6)) setCurrentPage(prev => prev+1)}}/></button>
                    </a>
                </div>
            )
        }
        {/* App Download */}
        <AppDownload /> 
    </div>
  )
}

export default JobListing