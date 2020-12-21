import React from "react"
import Title from "../components/Title"
//import Image from "gatsby-image"
import about from "../constants/about"
import Team from "../components/Team"
//import SEO from '../components/SEO'

const About = () => {
  return <section className='section-center bg-white' id='about'>
  <div className='section-center'>
  <Title title='About Us' />
  {about.map((items) =>{
  const {id , info} = items
  return <article key={id} className='about-text'>
  <p>{info}</p>

  </article>

  })}
  </div>
  <Team />
</section>
}


export default About

