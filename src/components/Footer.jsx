import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='shadow rounded'>
            <div className='container'>
                <div className='row justify-content-between d-flex'>
                    <div className='col-auto d-flex align-items-center gap-3 p-3'>
                        <img src={assets.logo} alt="" />
                        <p className='my-0 fs-6'>| All right reserved. Copyright @job-portal</p>
                    </div>
                    <div className='d-flex gap-2 col-auto p-3'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.instagram_icon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer