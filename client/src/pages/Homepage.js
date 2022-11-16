

function Homepage({ setcurrentPage }) {
    return (
        <body className="homepage-body">
            <h1>Welcome to Paradise Paw</h1>
            <div className="homepage-container">
                <div className="homepage-column-1">
                    <article className="about-me">
                        <h2 id="about-me">About Me</h2>
                        <p>I love what I do, and I love my clients. This is my online portfolio to share my passion with others</p>
                    </article>
                </div>
                <div className="homepage-column-2">
                    <h3>Book Appointment</h3>
                    <form className="appointment-form">
                        <label for="contact-name">Your Name</label>
                        <input type="text" id="contact-name" placeholder="Your Name" />

                        <label for="contact-message">Message</label>
                        <textarea id="contact-message" placeholder="Message"></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </body>
    )
};

export default Homepage;