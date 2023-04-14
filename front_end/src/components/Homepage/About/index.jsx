import './about.css'

import big5_lounge from './images/big5-lounge.png'
import lovers_garden from './images/lovers-garden.png'
import sweeties_restaurant from './images/sweeties-restaurant.png'

export default function About() {
  return (
    <section className="About">
        <h1>Our Story</h1>
        <div className="about_content">
            <p>Lake Elementaita Manor is a family style container lodge with stunning views of Lake Elementaita and sleeping warrior hills. It currently has 8 spacious rooms tastefully furnished with instant showers, satelite TVs, wardrobes and other basic amenities.</p>
            <p>The Manor is situated 1.5 Kms from the Nairobi - Nakuru highwary (No noise from the highway).</p>
        </div>
        
        <div className="our_story">
            <div class="story">
                <img src={ big5_lounge } alt="" />
                <div class="description">
                    <h4>Big 5 Lounge</h4>
                    <p>Has a long grand dining table for upto 20 pax tuned to your liking.</p>
                </div>
            </div>

            <div className="story">
                <img src={ sweeties_restaurant } alt="" />
                <div class="description">
                    <h4>Sweetie Restaurant</h4>
                    <p>Enjoy the outdoor buffet breakfast at the sweetie restaurant.</p>
                </div>
            </div>

            <div class="story">
                <img src={ lovers_garden } alt="" />
                <div class="description">
                    <h4>Lover's Garden</h4>
                    <p>Enjoy quite moments with your loved ones at the lush green gardens.</p>
                </div>
            </div> 
        </div>
    </section>
  )
}
