import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import { Title } from './Components/Title/Title'
import Packages from './Components/Packages/Packages'
import Gallery from './Components/Gallery/Gallery'
import Location from './Components/Location/Location'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import WaterRipple from './Components/Waterripple/WaterRipple'
import { useState } from 'react'
const App = () => {
   const [showSplash, setShowSplash] = useState(true);
  return (
    <>
     {showSplash ? (
        <WaterRipple onFinish={() => setShowSplash(false)} />
      ) : (
    <>
      <Navbar /> 
      <Hero /> 
      <div className='container'>
        <Title subTitle='about us' title='Discover Our Adventures'/>
        <About />
        <Title subTitle='Packages' title='What we offer'/>
        <Packages/>
        <Title subTitle='Gallery' title='Our Memories'/>
        <Gallery />
        <Title subTitle='Location' title='Find us here'/>
        <Location />

        <Title subTitle='Contact' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      </>
      )}
    </>
  );
}

export default App