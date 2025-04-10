import React from 'react'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser, SignInButton} from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  const {openSignIn, signOut} = useClerk()
  const {user} = useUser()
  return (
    <div style={{backgroundColor: ''}} className='shadow'>
      <div className='container '>
        <div className='row'>
          <div className='col-auto me-auto py-3'>
            <img src={assets.logo} alt="" />
          </div>
          {
            user
            ?
            (<div className='col-auto d-flex py-3  gap-3 align-items-center'>
              <Link to={'/applications'} className='m-0'>Applied Jobs</Link>
              <p className='m-0 d-none d-sm-inline-block'>| Hi, {user.firstName+ ' ' + user.lastName}</p>
              <UserButton/> 
            </div>)
            :
            (<div className='col-auto py-3'>
              <button onClick={signOut} className='btn btn-primary mx-2'>Recruiter Login</button>
              <button onClick={() => openSignIn()} className='btn btn-primary'>Login</button>
            </div> )           
          }
          {/* <div className='col-auto py-3'>
              <button onClick={signOut} className='btn btn-primary mx-2'>Recruiter Login</button>
              <button onClick={() => openSignIn()} className='btn btn-primary'>Login</button>
            </div>  */}
        </div>
      </div>
    </div>
  )
}
