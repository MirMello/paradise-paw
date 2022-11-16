import React from 'react';

function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-column-1'>
                <p>
                    Call us at <tele>(801) 589-8924</tele>
                </p>
                <p>
                   Give my facebook page a like! {/* <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100054300710319%26sk&width=450&layout=standard&action=like&size=small&share=true&height=35&appId" width="450" height="35" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/> */}
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