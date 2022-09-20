import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header() {

  return (
    <>
        <div className='top-header'>
            
        </div>
        <div className='sticky-header'>
            <div className='schoolName'>
                <Link to='/'>DOMINICAN ROYALE INTERNATIONAL SCHOOL</Link>
            </div>
            <div className='navigation'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li><Link to='/gallery'>Gallery</Link></li>
                    <li><a>Blog</a></li>
                    <li><a>Login</a></li>
                    <li><a></a></li>
                </ul>
            </div>
        </div>
    </>
  )
}
