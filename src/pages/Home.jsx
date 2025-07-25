import Hero from '../components/home/Hero'
import '../styles/home.css'
import OneStop from '../components/home/OneStop'
import OurProducts from '../components/home/OurProducts'
import OurServices from '../components/home/OurServices'
import Stats from '../components/home/Stats'
import LogoCloud from '../components/home/LogoCloud'
import ClientMarquee from '../components/home/ClientMarquee'

const Home = () => {
  return (
    <div>
      <Hero/>
      <OneStop/>
      <Stats/>
      <OurProducts/>
      <ClientMarquee/>
      <OurServices/>
      <LogoCloud/>
    </div>
  )
}

export default Home