import React from 'react';
import "./Newsletter.css"

const Newsletter_component = () => {
    return (
        <div className="aside-widget">
        <div className="section-title">
            <h2 className="title">Newsletter</h2>
        </div>
        <div className="newsletter-widget">
            <form>
                <p>Nec feugiat nisl pretium fusce id velit ut tortor pretium.</p>
                <input className="input" name="newsletter" placeholder="Enter Your Email"/>
                <button className="primary-button">Subscribe</button>
            </form>
        </div>
    </div>
    );
};

export default Newsletter_component;