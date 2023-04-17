import './gallery.css'

import logo from '../../../assets/logo.png'
import entrance01 from '../../../assets/entrance01.png'
import entrance02 from '../../../assets/entrance02.png'
import screen from '../../../assets/screen.png'
import lovers from '../../../assets/lovers_garden.png'
import wine_glass from '../../../assets/wine_glass.png'

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
                    <img src={screen} alt="" />
                </div>

                <div className="gallery">
                    <img src={lovers} alt="" />
                </div>

                <div className="gallery">
                    <img src={wine_glass} alt="" />
                </div>
            </div>
        </section>
    )
}
