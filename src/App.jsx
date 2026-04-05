
import Marquee from 'react-fast-marquee'
import './App.css'
import Baner from './components/baner/Baner'
import Course from './components/course/Course'
import NavBar from './components/navBar/NavBar'
import Advantages from './components/advantage/Advantages'
import BootCamp from './components/bootCampProgram/BootCamp'
import Services from './components/services/Services'
import FrequentryAsk from './components/FrequentryAsk/FrequentryAsk'
import Footer from './components/footer/Footer'

function App() {
 

  return (
    <div className='max-w-300 inter mx-auto'>
     
<NavBar></NavBar>
<Baner></Baner>
  <Course></Course>
  <Advantages></Advantages>
  <BootCamp></BootCamp>
  <Services></Services>
  <FrequentryAsk></FrequentryAsk>
  <Footer></Footer>
    </div>
  )
}

export default App
