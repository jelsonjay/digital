import React from "react"
import deployIcons from "../constants/deployIcons"


const Deploy = () => {
  return <section className='section bg-white' id='tech'>
  <h2 className='subtitle-deploy'>Deploy & cnd</h2>
  <div className='section-center grid-stack-center'>
  {deployIcons.map((items) =>{
  const {id , icon} = items
  return <article key={id} className='grid-stack'>
  {icon}
  <div className='undeline'></div>
  </article>
  })}

  </div>
</section>
}

export default Deploy 