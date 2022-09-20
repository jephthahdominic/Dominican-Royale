import React from 'react'
import './Footer.css'
import img1 from '../assets/pic9.jpg'

export default function Footer() {
  return (
    <div className='footer'>
        <section>
            <span>Contact Us</span>
            <div>
                <span>08033134187, 08052737057</span>
                <span>Facebook</span>
                <span>Instagram</span>
                <span>Gmail</span>
            </div>
        </section>
        <section>
            <span>Quick links</span>
            <div>
                <a>Login</a>
            </div>
        </section>
        <section>
            <span>Location</span>
            <div>
                Road A House 1, Valley View Gardens Estate Atali, Port-Harcourt
            </div>
        </section>
        <section>
            <span>Our Gallery</span>
            <div>
                Road A House 1, Valley View Gardens Estate Atali, Port-Harcourt
            </div>
        </section>
    </div>
  )
}
