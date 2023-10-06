import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import {
    projectCard,
    projectText,
    heading,
    caption,
  } from './project-card.module.css'

const ProjectCard = ({title, description, image}) => {
  return (
    <div className={projectCard}>
      <GatsbyImage
        image={image}
        alt="sports day shirt"
        style={{width: 350}}
      />
      <div className={projectText}>
        <h2 className={heading}>{title}</h2>
        <p className={caption}>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard