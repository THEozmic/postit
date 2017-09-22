import React from 'react';

/**
 * @returns {JSX} for Footer component
 */
const Footer = () =>
  (
    <footer className="container col s12">
      <div className="col s12">
        <section>
          <h5>About</h5>
          <p>
            <strong>PostIt </strong> is an open source web application.
          </p>
        </section>
        <section>
          <h5>Made with love by</h5>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/THEozmic"
            >@THEozmic</a>
          </div>
        </section>
      </div>
    </footer>
    );

export default Footer;
