import React from "react"
import Title from "../components/Title"
import icons from "../constants/Icons"
import Deploy from "../components/Deploy"
import DataSources from "../components/DataSources"


const Technology = () => {
  return <section className='section bg-white' id='tech'>
  <Title title='technologies & tools' />
  <h2 className='subtitle'>Build</h2>
  <div className='section-center grid-stack-center'>
  {icons.map((items) =>{
  const {id , icon} = items
  return <article key={id} className='grid-stack'>
  {icon}
  <div className='undeline'></div>
  </article>
  })}
  </div>
  <Deploy />
  <DataSources />
</section>

}

export default Technology 