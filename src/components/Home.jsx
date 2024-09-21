import React from 'react'
import BallFollowCursor from './ball'

function Home() {
  return (
    <div>
    <div className='z-50'><BallFollowCursor/></div>
    <div className="hero z-0 bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
    <div className="text-white text-center p-8 bg-black bg-opacity-50 rounded-lg">
      <h1 className="text-5xl font-bold mb-4">Welcome to [Your Brand Name]</h1>
      <p className="text-lg">Discover the power of innovation and creativity with us.</p>
    </div>
  </div>
  <div className="flex flex-col md:flex-row items-center py-16 px-8">
  <img src="/path-to-your-image1.jpg" alt="Innovation" className="md:w-1/2 w-full rounded-lg mb-8 md:mb-0" />
  <div className="md:w-1/2 md:pl-16">
    <h2 className="text-3xl font-semibold mb-4">Innovation at Its Core</h2>
    <p className="text-lg">At [Your Brand Name], we believe that innovation is the key to staying ahead in a rapidly changing world. Our solutions are designed to not only meet your needs today but also anticipate the challenges of tomorrow.</p>
  </div>
</div>
<div className="flex flex-col md:flex-row items-center py-16 px-8">
  <div className="md:w-1/2 md:pr-16">
    <h2 className="text-3xl font-semibold mb-4">Our Commitment to Quality</h2>
    <p className="text-lg">Quality is at the heart of everything we do. From the products we create to the services we offer, we are dedicated to delivering excellence in every aspect of our work.</p>
  </div>
  <img src="/path-to-your-image2.jpg" alt="Quality" className="md:w-1/2 w-full rounded-lg mt-8 md:mt-0" />
</div>
<div className="flex flex-col md:flex-row items-center py-16 px-8">
  <img src="/path-to-your-image3.jpg" alt="Innovation" className="md:w-1/2 w-full rounded-lg mb-8 md:mb-0" />
  <div className="md:w-1/2 md:pl-16">
    <h2 className="text-3xl font-semibold mb-4">Customer-Centric Approach</h2>
    <p className="text-lg">Our customers are at the center of everything we do. We listen, understand, and create solutions that are tailored to meet your specific needs and exceed your expectations.</p>
  </div>
</div>
<div className="flex flex-col md:flex-row items-center py-16 px-8">
  <img src="/path-to-your-image5.jpg" alt="Sustainability" className="md:w-1/2 w-full rounded-lg mb-8 md:mb-0" />
  <div className="md:w-1/2 md:pl-16">
    <h2 className="text-3xl font-semibold mb-4">Sustainability and Responsibility</h2>
    <p className="text-lg">We are committed to sustainability and corporate responsibility. Our initiatives are designed to reduce our environmental impact and contribute positively to the communities we serve.</p>
  </div>
</div>

  </div>
  )
}

export default Home