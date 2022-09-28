import React from 'react'
import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img src="https://images.pexels.com/photos/2055957/pexels-photo-2055957.jpeg" alt="" className="headerImg" />
    </div>
  )
}
