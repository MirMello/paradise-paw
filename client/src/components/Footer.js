import React from 'react';

function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-column-1'>
                <p>
                    Call us at <tele>(801) 589-8924</tele>
                </p>
                <p>
                   Give my <a className='facebook-page-link' href="https://www.facebook.com/profile.php?id=100054300710319">facebook page</a> a like!
                </p>

                {/* facebook link isn't working */}

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