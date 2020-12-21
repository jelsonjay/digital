import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Work from "./work"
import Technology from "./technologies"
import About from "./about"
import Contact from "./contact"


// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Work />
      <Technology />
      <Contact />
   </Layout>
  )
}

export default IndexPage
