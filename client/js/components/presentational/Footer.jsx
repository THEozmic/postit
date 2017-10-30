import React from 'react';

/**
 * Footer Component
 * @method Footer
 * @returns {Object} JSX
 */
const Footer = () =>
  (
    <footer className="container col s12">
      <div className="col s12">
        <section className="left">
          <h5>About</h5>
          <p>
            <strong>PostIt </strong> is an open source web application.
          </p>
        </section>
        <section className="right">
          <h5>Made with love by</h5>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="//twitter.com/THEozmic"
            >@THEozmic</a>
          </div>
        </section>
      </div>
    </footer>
    );

export default Footer;
