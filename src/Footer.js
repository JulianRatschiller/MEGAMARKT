import React, { footer } from 'react'
import './Footer.css'
import './grid.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <footer>

            <div class="row">
                <div class="col span-1-of-2">
                    <ul class="footer-nav">
                        <li><a href="#">Über uns</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Impressum</a></li>
                        <li><a href="#">iOS App</a></li>
                        <li><a href="#">Android App</a></li>
                    </ul>
                </div>
                <div class="col span-1-of-2">
                    <ul class="social-links">
                        <li><a href="#">
                            <FacebookIcon className="facebook" />
                        </a></li>
                        <li><a href="#">
                            <TwitterIcon className="twitter" />
                        </a></li>
                        <li><a href="#">
                            <YouTubeIcon className="youtube" />
                        </a></li>
                        <li><a href="#">
                            <InstagramIcon className="instagram" />
                        </a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <p>Copyright &copy; 2020 Julian Ratschiller. All rights reserved. Dies ist eine Demo.</p>
            </div>
        </footer>

    )
}

export default Footer
