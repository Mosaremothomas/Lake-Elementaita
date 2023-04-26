import { Link } from 'react-router-dom'

import './services.css'

import big5_lounge from '../../../assets/big5-lounge.png'
import sweeties_restaurant from '../../../assets/sweeties-restaurant.png'
import lovers_garden from '../../../assets/lovers_garden_.png'

export default function Services() {
  return (
    <section className="Services" id="Services">
        <h1>Services</h1>
        <div className="services_wrapper">
            <div className="service">
                <img src={big5_lounge} alt="" />
                <div className="description">
                    <h4>Big 5 Lounge</h4>
                    <p>Has a long grand dining table for upto 20 pax tuned to your liking.</p>
                </div>
            </div>

            <div className="service">
                <img src={sweeties_restaurant} alt="" />
                <div className="description">
                    <h4>Sweetie's Restaurant</h4>
                    <p>Enjoy the outdoor buffet breakfast at the sweetie restaurant.</p>
                </div>
            </div>

            <div className="service">
                <img src={lovers_garden} alt="" />
                <div className="description">
                    <h4>Lover's Garden</h4>
                    <p>Enjoy quite moments with your loved ones at the lush green gardens.</p>
                </div>
            </div>
        </div>

        <div className="weddings">
            <img src={ sweeties_restaurant } alt="" />
            <div className="weddings_info">
                <h1>Weddings</h1>
                <p>Lake Elementaita Manor Weddings is a once-in-a-lifetime experience and a wonderful adventure, not just for the bride and groom, but for everyone involved.</p>
                <p>When you combine the allure of travel, a remarkable location, and an extraordinary cause for celebration, the mix is rich with meaning, memories and opportunities for bonding.</p>
                <Link to="/weddings">Discover More</Link>
            </div>
        </div>
    </section>
  )
}
