import './rooms.css'

import standard_room from '../../../assets/standard_room.png'
import superior_room from '../../../assets/superior_room.png'

export default function Rooms() {
    return (
        <section class="Rooms" id="Rooms">
            <h1 class="section_heading">Our Rooms</h1>
            <div class="rooms_wrapper">
                <div class="room">
                    <div class="image">
                        <img src={superior_room} alt="" />
                    </div>
                    <div class="description">
                        <h4>Superior Room</h4>
                        <h5>Lake Elementaita Manor</h5>
                        <p>Experience the lakeside traquility from the comfort of one of our superior rooms, minimally designed to complement the peaceful and quiet enviroment.</p>
                        <p>The Lodge has 8 spacious rooms tastefully furnished rooms suitable for families.</p>
                        <p>All the rooms are fully furnished with instant showers, satelite TVs, wardrobes and other basic amenities.</p>
                        <div class="room_features">
                            <div class="feature">
                                <p>Bed</p>
                                <p>1 <span class="icon icon-bed"></span></p>
                            </div>
                            <div class="feature">
                                <p>Guests</p>
                                <p>2 <span class="icon icon-users"></span></p>
                            </div>
                            <div class="feature">
                                <p>Bathrooms</p>
                                <p>1 <span class="icon icon-bath"></span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="room">
                    <div class="image">
                        <img src={standard_room} alt="" />
                    </div>
                    <div class="description">
                        <h4>Standard Room</h4>
                        <h5>Lake Elementaita Manor</h5>
                        <p>Experience the lakeside traquility from the comfort of one of our superior rooms, minimally designed to complement the peaceful and quiet enviroment.</p>
                        <p>The Lodge has 8 spacious rooms tastefully furnished rooms suitable for families.</p>
                        <p>All the rooms are fully furnished with instant showers, satelite TVs, wardrobes and other basic amenities.</p>
                        <div class="room_features">
                            <div class="feature">
                                <p>Beds</p>
                                <p>2 <span class="icon icon-bed"></span></p>
                            </div>
                            <div class="feature">
                                <p>Guests</p>
                                <p>2 <span class="icon icon-users"></span></p>
                            </div>
                            <div class="feature">
                                <p>Bathrooms</p>
                                <p>1 <span class="icon icon-bath"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
