import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div>
        <div className='container shadow border rounded my-5' style={{backgroundColor: ''}}>
            <div className='row align-items-center justify-content-center'>
                <div className='col-8 text-center'>
                    <h3 className='fs-2 p-3 mb-3'>Download Mobile App For Better Experience</h3>
                    <div className='d-flex gap-4 justify-content-center mb-4'>
                        <a href=''><img src={assets.app_store} alt="" /></a>
                        <a href=''><img src={assets.play_store} alt="" /></a>
                    </div>
                </div>
                <div className='col-4 align-content-center d-none d-lg-block mx-auto'>
                    <img src={assets.app_main_img} alt="" 
                    className='p-4'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppDownload