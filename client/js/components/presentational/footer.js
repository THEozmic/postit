import React from 'react';

const Footer = () =>
  <footer className="container col s12">
    <div
    className="col s12">
        <section>
            <h5>About</h5>
            <p>
                <strong>PostIt </strong>
                is an open source web application.
            </p>
        </section>

        <section>
            <h5>Made with love by</h5>
            <div><img src="dist/images/Landscape-white.png"/></div>
        </section>

        <section>
            <h5>Help and support</h5>
            <a href="#/userguide">User Guide</a>
        </section>
    </div>
</footer>;

export default Footer;
