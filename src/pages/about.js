import React from "react"
import Title from "../components/Title"
//import Image from "gatsby-image"
import about from "../constants/about"
//import SEO from '../components/SEO'

const About = () => {
  return <section className='section-center bg-white' id='about'>
  <div className='section-center'>
  {about.map((items) =>{
  const {id , title, info} = items
  return <article key={id} className='about-text'>
  <Title title={title} />
    <p>{info}</p>
    
  </article>


  })}



  </div>
</section>
}


export default About

