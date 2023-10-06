import * as React from 'react'
import { Link } from 'gatsby'
import {
    infoCard,
    infoLinks,
    heading,
    caption,
  } from './info-card.module.css'


const InfoCard = () => {
  return (
    <div className={infoCard}>
      <h1 className={heading}>Charlene Kim</h1>
      <p className={caption}>UCLA Computer Science</p>
      <div className={infoLinks}>
        <Link>Email</Link><br/>
        <Link>Resume</Link><br/>
        <Link>LinkedIn</Link><br/>
      </div>
      
      <p>4th-year Computer Science major at UCLA, located in the Los Angeles Area. 
            <br/><br/>In the intersections of my deep passion for art/design, computers, 
            and working with children, I hope to promote the advancement of STEM education 
            for the next generation. 
            <br/><br/>I am particularly dedicated to bridging the educational gap for 
            students in underprivileged neighborhoods, firmly believing that our zip code 
            should never dictate the quality of our education. As an advocate for equity 
            and inclusion, I strive to ensure that every child has equal access to 
            educational opportunities.
            <br/><br/>Furthermore, I firmly believe that art permeates every aspect of our 
            lives, and I am convinced that the functionality and accessibility of technology 
            can be greatly enhanced through thoughtful design. I aim to contribute to the 
            development of innovative solutions that not only empower users but also promote 
            inclusivity and usability.
        </p>
        <br/>
        <hr/>
    </div>
  )
}

export default InfoCard