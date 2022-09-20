import React from 'react'
import './Home.css'
import IntroImage from '../../components/assets/Group.png'
import BannerImage from '../../components/assets/banner2.jpg'

export default function Home() {
  return (
    <div className='home'>
        <section class="welcome">
            
            <div>
                <h1>WELCOME TO DOMINICAN ROYALE INTERNATIONAL SCHOOL</h1>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing 
                    elit. Accusamus voluptatum, quasi illum placeat, autem
                    eum dolorum ipsum non similique consequatur id consectetur 
                    magni vero hic earum ratione voluptas pariatur ab.
                </span>
                {/*<div>
                    <a className='major'>About Us</a>
                </div>*/}
            </div>            
        </section>
        <section className='cards white'>
            <div className='StylingDiv'>
                <div>
                    <span>Our Vision</span>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing 
                        elit. Sequi ratione voluptatem delectus molestiae, minus
                        laudantium dolorem. Ad libero nihil optio, nesciunt, 
                        explicabo dicta officiis veritatis 
                        iusto et consequuntur, maiores aperiam.
                    </span>
                </div>
                <div>
                    <span>Our Mission</span>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing 
                        elit. Sequi ratione voluptatem delectus molestiae, minus
                        laudantium dolorem. Ad libero nihil optio, nesciunt, 
                        explicabo dicta officiis veritatis 
                        iusto et consequuntur, maiores aperiam.
                    </span>
                </div>
            </div>
            
        </section>

        <section className='introduction'>
            <div className='first-speech'>
                <h3>Give Your Child The Best Education</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Ab in non eum possimus magnam earum voluptates excepturi 
                    reiciendis sequi. Vitae consectetur corrupti, commodi atque facilis 
                    nisi nemo blanditiis exercitationem Lorem ipsum dolor, sit amet 
                    consectetur adipisicing elit. Sunt, necessitatibus totam? Laudantium 
                    dignissimos, maxime impedit tenetur nisi incidunt possimus sit sint, 
                    error cupiditate non esse totam cum laboriosam quibusdam officiis.</span>
                <a>Enroll Now</a>
            </div>
            <div className='intro-image'>
                <img src={IntroImage}/>
            </div> 
        </section>

        <section className='white'>
            <span>Our Vision</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing 
                    elit. Sequi ratione voluptatem delectus molestiae, minus
                    laudantium dolorem. Ad libero nihil optio, nesciunt, 
                    explicabo dicta officiis veritatis 
                    iusto et consequuntur, maiores aperiam.
                </span>
        </section>
    </div>
  )
}
