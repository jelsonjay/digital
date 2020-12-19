import React from "react"
import dataSourcesIcons from "../constants/dataSourcesIcons"


const DataSource = () => {
  return <section className='section bg-white' id='tech'>
  <h2 className='subtitle-source'>Data Sources</h2>
  <div className='section-center grid-stack-center'>
  {dataSourcesIcons.map((items) =>{
  const {id , icons} = items
  return <article key={id} className='grid-stack'>
  {icons}
  <div className='undeline'></div>
  </article>
  })}

  </div>
</section>
}

export default DataSource