import { Link } from 'react-router-dom'

import './services.css'

import images from '../../../assets/images'

export default function Services() {
  return (
    <section className="Services" id="Services">
        <div className="services_wrapper">
            <div className="service">
                <div className="container">
                    <div className="service_info">
                        <h1>Big 5 Lounge</h1>
                        <div className="description">                    
                            <p>Our guests can enjoy the tranquility of the bush and the serenity of the lake while indulging in luxurious amenities and services tailored to their every need. Whether you're looking for a romantic getaway, a family vacation, or a corporate retreat, our boutique hotel promises an unforgettable stay in the heart of the Kenyan wilderness.</p>
                            <p>Perfect for hosting lavish dinner parties and social gatherings, this dining table is designed to accommodate up to 16 guests, ensuring that everyone can dine in comfort and style. With its exquisite craftsmanship and attention to detail, this dining table is sure to impress even the most discerning diners. </p>
                            <p>Whether you are looking for a fine dining experience, or a lavish buffet spread, this dining table is designed to cater to your every need and provide an unforgettable dining experience. So, sit back, relax, and indulge in the ultimate luxury dining experience with this magnificent 16 seater grand dining table.</p>
                        </div>
                    </div>
                    <div className="img_container">
                        <img src={ images.big5Lounge } alt="Big 5 Lounge" />
                    </div>  
                </div>              
            </div>

            <div className="service alternate">
                <div className="container">
                    <div className="service_info">
                        <h1>Bush Lunch</h1>
                        <div className="description">
                            <p>Amidst the vast savannah grasslands, we invite you to indulge in a unique dining experience - a bush lunch set up under the shade of magnificent acacia trees with breathtaking views of the picturesque lake.</p>
                            <p>This is an opportunity to escape the hustle and bustle of everyday life and immerse yourself in the tranquility of the African wilderness. Our expert chefs have meticulously crafted a delectable menu using locally sourced ingredients to tantalize your taste buds.</p>
                            <p>So, sit back, relax, and let us take you on a culinary journey, accompanied by the stunning backdrop of Lake Elementaita.</p>
                        </div>
                    </div>
                    <div className="img_container">
                        <img src={ images.bushLunch } alt="Bush Lunch" />
                    </div> 
                </div>               
            </div>    

            <div className="service">
                <div className="container">
                    <div className="service_info">
                        <h1>Sweetie's Restaurant</h1>
                        <div className="description">
                            <p>Nestled in the heart of the manor lies a unique dining experience – an outdoor restaurant that offers delicious buffet breakfast and dinner amidst the stunning natural surroundings. </p>
                            <p>This restaurant provides a one-of-a-kind culinary adventure that combines the pleasure of enjoying a meal with the thrill of being immersed in nature. Imagine waking up to the sounds of chirping birds and the cool breeze of the bush while indulging in a sumptuous buffet breakfast.</p>
                            <p>Later in the day, you can enjoy a delectable dinner while gazing at the starlit sky and listening to the sounds of the wild. This bush restaurant promises an unforgettable dining experience that will leave you with lasting memories.</p>
                        </div>
                    </div>

                    <div className="img_container">
                        <img src={ images.sweetiesRestaurant } alt="Sweetie's Restaurant" />
                    </div>  
                </div>              
            </div>

            <div className="service">
                <div className="container">
                    <div className="service_info">
                        <h1>Zen Garden</h1>
                        <div className="description">
                            <p>Welcome to a serene and enchanting small garden, a hidden oasis of tranquility that offers respite from the hustle and bustle of everyday life. As you step inside, you are greeted by the lush greenery of the carpet grass, soft and inviting under your feet.</p>
                            <p>The garden is enclosed by a stunning fence of vibrant hibiscus flowers, adding a touch of color and beauty to the peaceful surroundings. Here, you can escape with your loved one and enjoy a moment of peace and solitude, or come alone to read a book, meditate, or simply soak up the serene atmosphere.</p>
                            <p>This garden is a true haven, a place where you can relax and recharge your soul, and be surrounded by the natural beauty and tranquility of your surroundings.</p>
                        </div>
                    </div>
                    <div className="img_container">
                        <img src={ images.zenGarden } alt="Zen Garden" />
                    </div>   
                </div>             
            </div>
        </div>       

        <div className="weddings">
            <div className="img_container">
                <img src={ images.weddings } alt="Weddings" />
            </div>            
            <div className="weddings_info">
                <h1>Weddings</h1>
                <p>Imagine having the wedding of your dreams in a stunning location that's straight out of a fairy tale. Our hotel is the perfect destination for couples looking to tie the knot in style. With two grand mansions that offer luxurious accommodation, a sparkling pool for relaxation, and breathtaking grounds with a view of the lake, your wedding day will be nothing short of magical.</p>                
                <Link to="/weddings">Discover More</Link>
            </div>
        </div>
    </section>
  )
}
