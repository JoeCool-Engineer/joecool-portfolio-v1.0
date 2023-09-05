import React from 'react'
import { projects } from '../../data'

// TODO: Required to update the projects in the assets folder with images of projects. (45 min)
const Project = ({ project }) => {
  return (
    <div className='col'>
        <div class="card">
            <img src={require(`../../assets/projects/${project.name}.jpg`)} class="card-img" alt={project.name}/>
            <div class="card-img-overlay">
                <h3 class="card-title">
                    <a href={project.link} className='card-text'>{ project.name }</a>
                    <a href={project.repo} className='card-text'><i className='fab fa-github'></i></a>
                </h3>
                <p class="card-text">{ project.description }</p>
            </div>
        </div>
    </div> 
  )
}

export default Project