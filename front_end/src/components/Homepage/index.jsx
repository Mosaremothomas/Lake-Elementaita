import Hero from './Hero'
import Navbar from './Navbar'
import About from './About'
import Gallery from './Gallery'
import Rooms from './Rooms'
import Footer from './Footer'

export default function Homepage(){
    return(
        <>
            <Navbar />
            <Hero />
            <About />
            <Gallery />
            <Rooms />
            <Footer />
        </>
    )
}