import React, { useState } from 'react'
import "./Slider.scss"
import i1 from './img/home1.jpg'
import i2 from './img/home2.jpg'
import i3 from './img/home3.jpg'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function Slider() {

    let sliderArr = [<img src={i2} />,
    <img src={i1} />, <img src={i3} />]
    const [x, setX] = useState(0);


    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    }
    const goRight = () => {
        (x === -100 * (sliderArr.length - 1)) ? setX(0) : setX(x - 100);
    }


    return (
        <div className="slider" >
            {
                sliderArr.map((item, index) => {
                    return (
                        <div className="slide" style={{ transform: `translateX(${x}%)` }}>
                            {item}
                        </div>
                    )
                })
            }
            <button id="goLeft" onClick={goLeft}> <ChevronLeftIcon className="icon" /></button>
            <button id="goRight" onClick={goRight}><ChevronRightIcon className="icon" /></button>

        </div >
    )
}

export default Slider

