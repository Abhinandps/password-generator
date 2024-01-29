import React, { useState } from 'react'
import { useStore } from '../hooks/useStore'
import { googleLogout } from '@react-oauth/google'
import { Link } from 'react-router-dom'

const Profile = () => {
  const { authData, setAuthData } = useStore()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '80px' }}>
      {Object.keys(authData).length === 0 ?
        (<div style={{ width: '300px' }}>
          <h2 style={{ fontSize: '2.5em' }}>🔐Secure</h2>
          <p style={{ fontSize: '12px' }}>Having strong pass­words is the first step in staying safe online. For full online protection, get F‑Secure Total. Here’s how it changes your life:</p>
        </div>) :
        (<>
          <div>
            <h2>🔐Secure</h2>
          </div>
          <div style={{ padding: '0px 30px', textTransform: 'uppercase', }}>
            <Link style={{ margin: '0px 20px', color: '#fff' }} to={'/'}>home</Link>
            <Link style={{ margin: '0px 20px', color: '#fff' }} to={'/saved-passwords'}>saved passwords</Link>
          </div>
        </>)}

      <div style={{ position: 'relative' }}>
        {authData && authData?.name &&
          (<>
            <img onClick={() => setIsOpen(prev => !prev)} src={authData.image} style={{ width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer' }} />

            <div style={{ display: `${isOpen ? 'block' : 'none'}`, position: 'absolute', top: '60px', right: '-160px', zIndex: '1', background: 'white', borderRadius: '10px', boxShadow: '-moz-initial', color: '#000', padding: '10px 20px', textAlign: 'left' }}>
              <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Profile</p>
              <p style={{ fontSize: "12px", color: "gray" }}>{authData.name}</p>
              <span style={{ fontSize: "12px", color: "gray" }}>{authData.email}</span>
              <p style={{ color: 'red', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => {
                googleLogout()
                localStorage.setItem('authData', '{}')
                setAuthData({})
              }}>Logout</p>
            </div>

          </>
          )}
      </div>
    </div>
  )
}

export default Profile