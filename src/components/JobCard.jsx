import React from 'react'
import { assets} from '../assets/assets'

const JobCard = ({job}) => {
  return (
    <div className='col-3 border shadow p-4 rounded' style={{width: '300px'}}>
        <img src={assets.company_icon} alt="" className='my-3'/>
        <h4 className='fs-5 mb-3'>{job.title}</h4>
        <div className='d-flex gap-2'>
            <button className='btn btn-outline-success text-nowrap my-4 p-2'>{job.location}</button>
            <button className='btn btn-outline-info text-nowrap my-4 p-2'>{job.level}</button>
        </div>
        <p dangerouslySetInnerHTML={{__html:job.description.slice(0, 150)}}></p>
        <div className='d-flex gap-2'>
            <button className='btn btn-primary text-nowrap my-4 p-2'>Apply now</button>
            <button className='btn border text-nowrap my-4 p-2'>Learn more</button>
        </div>
    </div>
  )
}

export default JobCard