import React from 'react'
import { projects } from '../../data'
import { formatProjectTitle } from '../../utils'
import './style.css'

// TODO: Required to update the projects in the assets folder with images of projects. (45 min)
const Project = ({ project }) => {
  return (
    <div className='col'>
        <div className="card h-100">
            <img src={require(`../../assets/projects/${project.name}.jpg`)} className="card-img-top" alt={formatProjectTitle(project.name)}/>
            <div className="card-img-overlay d-flex flex-column project-info">
                <h3 className="card-title">
                    <a href={project.link} className='card-text me-2'>{ formatProjectTitle(project.name) }</a>
                    <a href={project.repo} className='card-text'><i className='fab fa-github'></i></a>
                </h3>
                <p className="card-text">{ project.description }</p>
            </div>
        </div>
    </div> 
  )
}

export default Project