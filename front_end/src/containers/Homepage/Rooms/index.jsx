import './rooms.css'

import standard_room from '../../../assets/standard_room.png'
import superior_room from '../../../assets/superior_room.png'

export default function Rooms() {
    return (
        <section className="Rooms" id="Rooms">
            <h1 className="section_heading">Our Rooms</h1>
            <div className="rooms_wrapper">
                <div className="room">
                    <div className="image">
                        <img src={superior_room} alt="" />
                    </div>
                    <div className="description">
                        <h4>Superior Room</h4>
                        <h5>Lake Elementaita Manor</h5>
                        <p>Experience the lakeside traquility from the comfort of one of our superior rooms, minimally designed to complement the peaceful and quiet enviroment.</p>
                        <p>The Lodge has 8 spacious rooms tastefully furnished rooms suitable for families.</p>
                        <p>All the rooms are fully furnished with instant showers, satelite TVs, wardrobes and other basic amenities.</p>
                        <div className="room_features">
                            <div className="feature">
                                <p>Bed</p>
                                <p>1 <span className="icon icon-bed"></span></p>
                            </div>
                            <div className="feature">
                                <p>Guests</p>
                                <p>2 <span className="icon icon-users"></span></p>
                            </div>
                            <div className="feature">
                                <p>Bathrooms</p>
                                <p>1 <span className="icon icon-bath"></span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="room">
                    <div className="image">
                        <img src={standard_room} alt="" />
                    </div>
                    <div className="description">
                        <h4>Standard Room</h4>
                        <h5>Lake Elementaita Manor</h5>
                        <p>Experience the lakeside traquility from the comfort of one of our superior rooms, minimally designed to complement the peaceful and quiet enviroment.</p>
                        <p>The Lodge has 8 spacious rooms tastefully furnished rooms suitable for families.</p>
                        <p>All the rooms are fully furnished with instant showers, satelite TVs, wardrobes and other basic amenities.</p>
                        <div className="room_features">
                            <div className="feature">
                                <p>Beds</p>
                                <p>2 <span className="icon icon-bed"></span></p>
                            </div>
                            <div className="feature">
                                <p>Guests</p>
                                <p>2 <span className="icon icon-users"></span></p>
                            </div>
                            <div className="feature">
                                <p>Bathrooms</p>
                                <p>1 <span className="icon icon-bath"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
