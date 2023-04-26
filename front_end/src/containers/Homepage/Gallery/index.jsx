import './gallery.css'

import logo from '../../../assets/logo.png'
import entrance01 from '../../../assets/entrance01.png'
import entrance02 from '../../../assets/entrance02.png'
import screen from '../../../assets/screen.png'
import lovers from '../../../assets/lovers_garden.png'
import wine_glass from '../../../assets/wine_glass.png'
import horse_ride from '../../../assets/horse_ride.png'
import meal from '../../../assets/meal.png'
import sunset from '../../../assets/sunset.png'

export default function Gallery() {
    return (
        <section className="Gallery" id="Gallery">
            <h1>Gallery</h1>
            <div className="gallery_wrapper">
                <div className="gallery">
                    <img src={logo} alt="" />
                </div>

                <div className="gallery">
                    <img src={entrance01} alt="" />
                </div>

                <div className="gallery">
                    <img src={entrance02} alt="" />
                </div>                

                <div className="gallery">
                    <img src={lovers} alt="" />
                </div>

                <div className="gallery">
                    <img src={ meal } alt="" />
                </div>

                <div className="gallery">
                    <img src={wine_glass} alt="" />
                </div>

                <div className="gallery">
                    <img src={screen} alt="" />
                </div>

                <div className="gallery">
                    <img src={ horse_ride } alt="" />
                </div>                

                <div className="gallery">
                    <img src={ sunset } alt="" />
                </div>
            </div>
        </section>
    )
}
