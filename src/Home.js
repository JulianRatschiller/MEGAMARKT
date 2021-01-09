import React from 'react';
import './Home.css';
import Product from './Product';
import home1 from './img/home1.jpg';
import product1 from './img/1.jpg';
import product2 from './img/2.jpg';
import product3 from './img/3.jpg';
import product4 from './img/4.jpg';
import product5 from './img/5.jpg';
import product6 from './img/6.jpg';
import product7 from './img/7.jpg';
import product8 from './img/8.jpg';
import product9 from './img/9.jpg';
import Slider from './Slider';

function Home() {
    return (
        <div className="home">
            <div className="home__container">

                <Slider />

                {/* <img className="home__image" src={home1} alt="homescreen"></img> */}

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change
                        by Steven R. Covey (10th Anniversary Edition)"
                        price={12.99}
                        image={product1}
                        rating={5}
                    />
                    <Product
                        id="12345689"
                        title="Der neue Echo (4. Generation) | Mit herausragendem Klang, Smart Home-Hub und Alexa | Anthrazit"
                        price={100.99}
                        image={product5}
                        rating={5}
                    />
                    <Product
                        id="65248932"
                        title="Neues Apple iPad Pro - Space Grau (2. Generation), Wi-Fi integration, iOS 12, Displaygröße 11Zoll, Arbeitsspeicher 256GB"
                        price={950.99}
                        image={product4}
                        rating={5}
                    />
                </div>

                <div className="home__row">

                    <Product
                        id="56482315"
                        title="Huawei Band 4 wasserdichter Bluetooth Fitness- Aktivitätstracker mit Herzfrequenzmesser, Sport Band und Touchscreen, Graphite Black
                        Huawei Band 4, Schwarz"
                        price={24.95}
                        image={product3}
                        rating={5}
                    />
                    <Product
                        id="31342345"
                        title="Russell Hobbs Standmixer Glas Steel 2-in-1, inkl. To-Go-Becher & Deckel, 1.5l Glasbehälter, Mixer 0.8 PS-Motor, mini Smoothie-Maker 23821-56 [Energieklasse A+++]"
                        price={51.99}
                        image={product2}
                        rating={4}
                    />

                    <Product
                        id="54896254"
                        title="Logitech G213 Prodigy Gaming-Tastatur, RGB-Beleuchtung, Programmierbare G-Tasten, QWERTZ-Layout, Schwarz"
                        price={59.95}
                        image={product6}
                        rating={4}
                    />
                    <Product
                        id="65215954"
                        title="Datenbanksysteme: Eine Einführung (De Gruyter Studium) (Deutsch) Taschenbuch – 25. September 2015
                        von Alfons Kemper"
                        price={49.95}
                        image={product7}
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="54896587"
                        title="Samsung LS34J552WQUXEN 86,7 cm (34 Zoll) Ultra WQHD Monitor (3.440 x 1.440 Pixel, VA-Panel, 21:9 Format, 60 Hz, 4ms) dunkelblaugrau"
                        price={365.99}
                        image={product8}
                        rating={5}
                    />
                    <Product
                        id="65498732"
                        title="AMD Ryzen 7 3700X Prozessor, 4GHz AM4 36MB Cache Wraith Prism, 65-Watt, 8 Prozessor-Kerne, 4.4GHz max"
                        price={324.95}
                        image={product9}
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;


