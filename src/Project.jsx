import React from 'react'
import './Projects.css'

export default function Project({checked, projectLink, imageName, projectName, projectText, projectLanguages}) {
  const alt = imageName.replace(".jpg", "");

  return (
    <div className='projects-warpper'>
        <div className="projects-project" onClick={()=>window.open(`${projectLink}`, "_blank")} style={{backgroundColor:checked?'black':'white', border:checked?'1px solid #1a1a1a':'1px solid #E5E2E2'}}>
            <img src={`/assets/images/${imageName}`} alt={alt} className="project-image" />
            <h1 className="project-title">{projectName}</h1>
            <p className="project-text">{projectText}</p>
            <ul className="programming-language">
            {projectLanguages.map((language)=>(
              <li className={checked?'language language-darkMode':'language language-lightMode'}>{language}</li>
            ))}
            </ul>
        </div>
    </div>
  )
}
