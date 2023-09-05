import React from 'react'
import { projects } from '../data'
import Project from '../components/Project'

const Portfolio = () => {
  return (
    // Used Bootstrap Card Grid to define className
  <div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 mb-4 g-4'>
    { projects.map((project, i) => (
    <Project project={ project } key={ i } />
    )) }
  </div>
  )
}

export default Portfolio;