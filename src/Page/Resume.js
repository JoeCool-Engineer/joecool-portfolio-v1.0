import React from 'react'

const Resume = () => {

  return (
    <div className='skills'>
      <p>
        Download my Resume
      </p>
      <div className='row mb-5 d-flex'>

        <div className='col-12 col-md-6 d-flex flex-column aligh-items-center'>
          <h3>Front-end Proficiencies</h3>    
            <ul class="list-group list-group-flush">
              <li class="list-group-item">HTML</li>
              <li class="list-group-item">CSS</li>
              <li class="list-group-item">JavaScript</li>
              <li class="list-group-item">JQuery</li>
              <li class="list-group-item">React</li>
              <li class="list-group-item">Bootstrap</li>
            </ul>
        </div>

        <div className='col-12 col-md-6  d-flex flex-column aligh-items-center pt-5 pt-md-0'>
          <h3>Back-end Proficiencies</h3>    
            <ul class="list-group list-group-flush">
              <li class="list-group-item">APIs</li>
              <li class="list-group-item">Node</li>
              <li class="list-group-item">Express</li>
              <li class="list-group-item">MySQL, Sequelize</li>
              <li class="list-group-item">MongoDB, Mongoose</li>
              <li class="list-group-item">GraphQL</li>
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Resume;