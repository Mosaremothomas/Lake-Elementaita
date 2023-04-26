import { Link } from 'react-router-dom'

import Footer from '../../components/Footer'

import './weddings.css'

import weddings from '../../assets/weddings.png'

export default function Weddings() {
  return (
    <section className="Weddings">
      <div className="hero">
        <img src={ weddings } alt="Weddings" />
        <div className="hero_content_wrapper">
          <div className="hero_content">
            <h1>Weddings</h1>
            <p>Creating Memories</p>
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>

      <div className="content">
        <p>Manor destination wedding is a an once-in-a-lifetime experience and a wonderful adventure, not just for the bride and groom, but for everyone involved. When you combine the allure of travel, a remarkable location, and an extraordinary cause for celebration, the mix is rich with meaning, memories, and opportunities for bonding.</p>
        <p>Destination weddings have captured the imagination of the modern bride for a number of reasons. A destination bride may be geographically separated from her family, or she may be marrying someone from another region. She and her fiancé may be avid travelers, driven to broaden their horizons through journeys. There are many reasons to choose a destination wedding and perhaps just as many reasons not to. The decision is not one to be made lightly, and it is important to go through the decision-making process before committing to a marriage celebration far from home.</p>
        <p>The Manor magnificent gardens are the ultimate location for garden wedding and their receptions, special moments and photo shoots.</p>

        <p>We have based our proposal on the Lake Elementaita Manor Lodge as requested. Manor Lodges has an excellent working knowledge of the lodge and venue proposed and we can therefore personally assure you that the quality and levels of services will meet your group’s expectations.</p>        
      </div>

      <div className="content">
        <h2>Transport (Optional)</h2>
        <p>The transportation is based on luxury tour vans / bus with services of qualified English-speaking guides. Manor Lodges uses only the very best providers for all transfers and excursions arrangements. An itemised cost for all services is attached on a separate spread sheet.</p>
      </div>

      <div className="content">
        <h2>Rates</h2>
        <p>All prices are quoted in Kenya Shillings (KSHS) unless otherwise stated.</p>
        <p>This proposal has been prepared for the mentioned wedding and determined dates mentioned on the cover page only. The rates are valid for this particular wedding only.</p>
        <p>Please note that the following programme is a suggested one and it can be adapted according to your requirements and budget.</p>
        <p>We sincerely hope that our proposal meets with your approval. Should further information be required, please do not hesitate to contact us.</p>
      </div>

      <div className="content Packages">
        <h2>Wedding Program & Costs</h2>
        <h3>The Package Amount</h3>
        <div className="packages_wrapper">
          <div className="package">
            <p>Special Dahlia Package Per Plate</p>
            <p>Ksh. 6,000 /=</p>
            <p>(Minimum Pax 350)</p>
          </div>
          <div className="package">
            <p>Special Hawaiian Ginger Package Per Plate</p>
            <p>Ksh. 6, 500 /=</p>
            <p>(Mininum Pax 200)</p>
          </div>
          <div className="package">
            <p>Special Rose wedding package Per Plate</p>
            <p>Ksh. 7000 /=</p>
            <p>(Minimum Pax 100)</p>
          </div>
          <div className="package">
            <p>Special Delphinium package </p>
            <p>Ksh. 5, 500 /=</p>
            <p></p>
          </div>
          <div className="package">
            <p>Buffet lunch plus a soft drink + Use of Manor grounds per Person (For Pax below 100 a supplement of = Ksh. 150,000 /= is applicable)</p>
            <p>Ksh. 150,000 /=</p>
            <p>(Minimum Pax 100 – Maximum 1,000 Pax)</p>
          </div>
          <div className="package">
            <p>Evening party by the pool side Hall – (Elaborate Barbecue + Accompaniments) per person, open cash bar</p>
            <p>Ksh. 4, 500 /=</p>
            <p></p>
          </div>
          <div className="package">
            <p>Soda (300ml) / Juice per Glass / Mineral Water (500ml)</p>
            <p>Ksh. 250 /=</p>
            <p></p>
          </div>
          <div className="package">
            <p>Beer / Glass of wine</p>
            <p>Ksh. 450 /=</p>
            <p></p>
          </div>
        </div>
      </div>

      <div className="content">
        <p>05 ties wedding cake (1 for couple, 2 for in-laws CLIENTS OWN and 2 for guests ) with a stand, setting, cutlery, wine glasses and cake assistant – Optional</p>
      </div>

      <div className="content">
        <h2>Flowers and Decor</h2>
        <p>Clients Own</p>
      </div>

      <div className="content">
        <h2>Public Address System + D.J</h2>
        <p>Day Event & Client's own</p>
        <p>Evening Party - Optional</p>
        <p>Master of Ceremony + Entertainment – Optional CLIENTS OWN</p>
      </div>

      <div className="content">
        <h2>Transport</h2>
        <p>Hire of transport from Nairobi to Manor Lodge in a 25 = Ksh. 35, 000.00 setter Rosa Bus (per Bus per day) – Optional</p>
      </div>

      <div className="content">
        <h2>Accommodation</h2>
        <p>Accommodation at Lake Elementaita Manor Lodge based on half board basis (dinner Bed and breakfast).</p>
      </div>

      <div className="content">
        <h2>Complementary Services for your package</h2>
        <p>The Manor Lodge will as a good gesture to the Bride throw in the following at noo extra charge depending on the package:</p>
        <ul>
          <li>01 Bottle of Wine in Honey moon suite</li>
          <li>Flower Petals on the bed</li>
          <li>Breakfast on the bed</li>
          <li>01 Free night for the Couple.</li>
          <li>01 Hour Free boat ride for the couple</li>
          <li>First Night of 1st Anniversary Free</li>
          <li>Free Tent, Seats and Tables</li>
          <li>Free Use of grounds for church, reception and photo session</li>
          <li>Professional catering service and set up</li>
        </ul>
      </div>

      <Footer />
    </section>    
  )
}
