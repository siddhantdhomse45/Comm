import React from 'react';


const Service = () => {
    return (
        <div>
            <section className="service">
                <div className="container">

                    <ul className="service-list">

                        <li className="service-item">
                            <div className="service-item-icon">
                                <img src="https://raw.githubusercontent.com/codewithsadee/casmart/c113d2cf1c0fc1031b984fb8adc8b7229b9fdf10/assets/images/service-icon-1.svg" alt="Service icon"/>
                            </div>

                            <div className="service-content">
                                <p className="service-item-title">Free Shipping</p>

                                <p className="service-item-text">On All Order Over $599</p>
                            </div>
                        </li>

                        <li className="service-item">
                            <div className="service-item-icon">
                                <img src="https://raw.githubusercontent.com/codewithsadee/casmart/c113d2cf1c0fc1031b984fb8adc8b7229b9fdf10/assets/images/service-icon-2.svg" alt="Service icon"/>
                            </div>

                            <div className="service-content">
                                <p className="service-item-title">Easy Returns</p>

                                <p className="service-item-text">30 Day Returns Policy</p>
                            </div>
                        </li>

                        <li className="service-item">
                            <div className="service-item-icon">
                                <img src="https://raw.githubusercontent.com/codewithsadee/casmart/c113d2cf1c0fc1031b984fb8adc8b7229b9fdf10/assets/images/service-icon-3.svg" alt="Service icon"/>
                            </div>

                            <div className="service-content">
                                <p className="service-item-title">Secure Payment</p>

                                <p className="service-item-text">100% Secure Gaurantee</p>
                            </div>
                        </li>

                        <li className="service-item">
                            <div className="service-item-icon">
                                <img src="https://raw.githubusercontent.com/codewithsadee/casmart/c113d2cf1c0fc1031b984fb8adc8b7229b9fdf10/assets/images/service-icon-4.svg" alt="Service icon"/>
                            </div>

                            <div className="service-content">
                                <p className="service-item-title">Special Support</p>

                                <p className="service-item-text">24/7 Dedicated Support</p>
                            </div>
                        </li>

                    </ul>

                </div>
            </section>
            
        </div>
    );
};

export default Service;