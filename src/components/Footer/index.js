import React from 'react';
import './style.css';

const Footer = () => {
  const icons = [
    {
      name: 'fab  fa-github',
      link: 'https://github.com/JoeCool-Engineer'
    },
    {
      name: 'fab  fa-linkedin',
      link: 'https://www.linkedin.com/in/rodneybuller/'
    },
    {
      name: 'fab  fa-stack-overflow',
      link: 'https://stackoverflow.com/users/22500498/joecool-engineer'
    }
  ]
  return (<footer className='d-flex justify-content-center align-items-center'>
    {icons.map(icon => (
      <a href={icon.link} key={icon.name} target='_blank' rel='noreferrer' className='mx-3 mb-5'>
        <i className={icon.name}>
        </i></a>
    ))}
  </footer>)
}

export default Footer