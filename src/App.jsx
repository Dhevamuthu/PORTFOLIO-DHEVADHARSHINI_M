
import styles from './App.module.css'
import { About } from './components/About/About'
import { Achievements } from './components/Achivements/Achievements'
import { Certification } from './components/Certification/Certification'
import { Contact } from './components/Contact/Contact'
import { Education } from './components/Education/Education'
import { Experience } from './components/Experience/Experience'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Projects } from './components/Projects/Projects'

function App() {
  

  return (
   
      <div className={styles.App}>
        <Navbar/>
        <Hero/>
        <About/>
        <Education/>
        <Experience/>
        <Projects/>
        <Certification/>
        <Achievements/>
        <Contact/>
        </div>
    
  )
}

export default App
