import React from 'react'
import hero2 from "../assets/kevin-menya-aH1uiH-Ht_w-unsplash-slim.jpg";

function About() {
  return (
    <section className='bg-orange-900/0 text-black'>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* Component */}
        <div className="flex flex-col gap-14 lg:gap-20">
          {/* Content */}
          <div className="flex flex-col gap-14 lg:gap-20">
            <div className="flex flex-col md:flex-row gap-5">
              <h2 className="text-3xl md:text-5xl font-bold flex-1">
                Our Story
              </h2>
              <p className="flex-1">
                Our journey is fueled by a passion for transforming ideas into
                immersive visual experiences. Established with a vision to
                revolutionize the world of video content, we've evolved into a
                hub of creativity and innovation.
              </p>
            </div>
          {/* Image */}
          <img
            src={hero2}
            alt="image of a woman tailoring in a tailor shop"
            className="w-full rounded-xl"
          />
            <div className="flex flex-col md:flex-row gap-5">
              <h2 className="text-3xl md:text-5xl font-bold flex-1">
                Mission
              </h2>
              <p className="flex-1">
                Our mission is clear: to empower brands through the unparalleled
                power of storytelling. We believe that every brand has a unique
                narrative waiting to be told, and our mission is to bring those
                stories to life with authenticity, creativity, and impact.
              </p>
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-5">
              <p className="flex-1">
                What sets us apart is our holistic approach to video production.
                From concept to creation and promotion, we guide our clients
                through every step, ensuring a seamless and effective process.
                We combine creativity with strategy, producing content that not
                only looks stunning but also achieves tangible results.
              </p>
              <h2 className="text-3xl md:text-5xl font-bold flex-1 md:text-right">
                Approach
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About