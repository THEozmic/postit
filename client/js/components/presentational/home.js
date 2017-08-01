import React from 'react';
import { Footer, Header } from './';

const Home = () =>
<div>
  <Header/>
    <section className="container">
        <div>
            <h5>
                <p className="mt-5">A web application
                    that lets you easily share
                    messages to people you care about.
                </p>
            </h5>
            <div class="action-buttons">
                <a
                href='#register'
                className="waves-effect waves-light btn action-btn">
                Create an account
                </a>
                <a
                href='#login'
                className="waves-effect waves-light btn action-btn">
                Login
                </a>

            </div>
            <div className="steps">
                <div> 1. Create an account</div>
                <div> 2. Create a message board</div>
                <div> 3. Add friends to board</div>
                <div> 4. Post away!</div>
            </div>
        </div>
    </section>
  <Footer/>
</div>;

export default Home;
