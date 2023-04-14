import './gallery.css'

import logo from './images/logo.png'
import entrance01 from './images/entrance01.png'
import entrance02 from './images/entrance02.png'
import screen from './images/screen.png'
import lovers from './images/lovers_garden.png'
import wine_glass from './images/wine_glass.png'

export default function Gallery() {
  return (
    <section className="Gallery">
        <h1>Gallery</h1>
        <div className="gallery_wrapper">
            <div className="gallery">
                <img src={ logo } alt="" />
            </div>

            <div className="gallery">
                <img src={ entrance01 } alt="" />
            </div>

            <div className="gallery">
                <img src={ entrance02 } alt="" />
            </div>

            <div className="gallery">
                <img src={ screen } alt="" />
            </div>

            <div className="gallery">
                <img src={ lovers } alt="" />
            </div>

            <div className="gallery">
                <img src={ wine_glass } alt="" />
            </div>
        </div>
    </section>
  )
}
