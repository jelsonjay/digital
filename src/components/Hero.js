import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"


const query = graphql `
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
     ...GatsbyImageSharpFluid
      }
    }
  }
}
`
const Hero = () => {
  const {file: {childImageSharp: {fluid},},} = useStaticQuery(query)

  return <header className='hero'>
  <div className='section-center hero-center'>
  <article className='hero-info'>
  <div>
  <div className='underline'></div>
  <h1>Digital Company Software</h1>
  <h4>web developer & designer</h4>
  <Link to='/contact' className='btn'>
    get in touch
  </Link>

  </div>
  </article>
  <Image fluid={fluid} className='hero-img' />
  </div>
  </header>
}

export default Hero