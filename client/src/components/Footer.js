import React from 'react';

function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-column-1'>
                <p>
                    Call us at <tele>(801) 589-8924</tele>
                </p>
                <p>
                    Check out our <a href='https://www.facebook.com/search/top?q=paradise%20paw'>facebook</a> page
                </p>
            </div>
            <div className='footer-column-2'>
                <p><strong>Hours:</strong> Thursday 4pm-8pm</p>
                <p>Friday Thru Sunday 11am-6pm</p>
                <p>Closed Monday thru Wednesday</p>
            </div>
        </footer>
    )
}

export default Footer;