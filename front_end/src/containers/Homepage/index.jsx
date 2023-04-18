import Hero from './Hero'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Rooms from './Rooms'
import Gallery from './Gallery'
import Footer from './Footer'

export default function Homepage(){
    return(
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Rooms />
            <Gallery />            
            <Footer />
        </>
    )
}