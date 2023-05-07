import React from "react";
import pics from '../img/masonry.png';

function Hero() {
    return (      
        <section className="container flex flex-col pt-7 pl-9 items-start mb-5">  
            <div className="w-full">
                <img src={pics} className="w-72 mb-8 mx-auto md:w-96" alt="airbnb views" />
            </div>       
            <h1 className="font-semibold text-4xl mb-4">Online Experiences</h1>
            <p className="text-base font-light leading-tight max-w-xs">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            
            
        </section>        
    )
}

export default Hero;