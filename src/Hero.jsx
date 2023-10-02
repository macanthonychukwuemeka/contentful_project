import React from 'react';
import heroImg from './assets/hero.svg'

const Hero = ()=> {
return (<section className="hero">
<div className="hero-center">
    <div className="hero-title">
        <h1>Contentful CMS</h1>
    <p>
        ipsum, dolor sit amet consectetur 
         adipisicing elit. Voluptatibus a, optio
        impedit tempore necessitatibus corrupti
        officia sed cumque consequuntur qui ne
        que architecto saepe repellat repellend
        us dolor exercitationem esse ut quos.
        Lorem ipsum, dolor sit amet consectetur 
         adipisicing elit. Voluptatibus a, optio
        impedit tempore necessitatibus corrupti
        officia sed cumque consequuntur qui ne
        que architecto saepe repellat repellend
        us dolor exercitationem esse ut quos.
    </p>
    </div>
    <div className="img-container">
        <img src={heroImg} alt="woman and the browser" className='img' />
    </div>
</div>
</section>
)}
export default Hero;