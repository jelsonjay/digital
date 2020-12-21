import React from 'react'

const team = () => {
  return (
    // <!---Start Team-->
    <div class="container">
        <div class="title-stack">
        <h1>Our Team</h1>
        </div>
         {/* <!---start grid-stack--> */}
        <div class="grid-custumer">
    
        <div class="grid-item-custumer">
            <div class="custumer">
                <img src="/images/profile-pic.jpg" alt="avatar" />
                <h2>Mr Ary Santos</h2>
                <p>Co-founder / Tester</p>
        </div>
        </div>
        <div class="grid-item-custumer">
            <div class="custumer">
                <img src="/images/profile-pic.jpg" alt="avatar" />
                <h2>Mr Jelson J</h2>
                <p>Co-founder / Web Developer</p>
        </div>
        </div>
    </div>
    </div>
    // <!---End Team-->
  )
}

export default team
