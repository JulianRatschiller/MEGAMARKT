import React from 'react'
import './Footer.css'
import RoomIcon from '@material-ui/icons/Room';

function FooterTop() {
    return (
        <div class="row">
            <div class="col span-1-of-2">
                <ul class="footer-nav">
                    <li><RoomIcon className="room__icon" />
                    </li>
                    <li><a href="#">Lieferung nach: <strong>Italien</strong></a></li>
                    <li><a href="#">Angebote</a></li>
                    <li><a href="#">Neuigkeiten</a></li>
                    <li><a href="#">Prima-TV</a></li>
                </ul>
            </div>
            <div class="col span-1-of-2">
                <ul class="social-links">
                    <li><a href="#"><strong>Prima-Music:</strong> Über 20 Millionen Songs!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                </ul>

            </div>
        </div>
    )
}

export default FooterTop
