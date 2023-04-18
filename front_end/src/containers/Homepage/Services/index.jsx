import './services.css'

import big5_lounge from '../../../assets/big5-lounge.png'
import sweeties_restaurant from '../../../assets/sweeties-restaurant.png'
import lovers_garden from '../../../assets/lovers_garden.png'

export default function Services() {
  return (
    <section className="Services" id="Services">
        <h1>Services</h1>
        <div className="services_wrapper">
            <div class="service">
                <img src={big5_lounge} alt="" />
                <div class="description">
                    <h4>Big 5 Lounge</h4>
                    <p>Has a long grand dining table for upto 20 pax tuned to your liking.</p>
                </div>
            </div>

            <div className="service">
                <img src={sweeties_restaurant} alt="" />
                <div class="description">
                    <h4>Sweetie Restaurant</h4>
                    <p>Enjoy the outdoor buffet breakfast at the sweetie restaurant.</p>
                </div>
            </div>

            <div class="service">
                <img src={lovers_garden} alt="" />
                <div class="description">
                    <h4>Lover's Garden</h4>
                    <p>Enjoy quite moments with your loved ones at the lush green gardens.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
