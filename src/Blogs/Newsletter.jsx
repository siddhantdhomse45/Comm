import React from 'react';


const Newletter = () => {
    return (
        <div>
            <section className="section newsletter">
                <div className="container">

                    <div className="newsletter-card" style={{backgroundImage: `url("https://github.com/codewithsadee/casmart/blob/master/assets/images/newsletter-bg.png?raw=true")`}}>

                        <h2 className="card-title">Subscribe Newsletter</h2>

                        <p className="card-text">
                            Enter your email below to be the first to know about new collections and product launches.
                        </p>

                        <form action="" className="card-form">

                            <div className="input-wrapper">
                                <ion-icon name="mail-outline"></ion-icon>

                                <input type="email" name="emal" placeholder="Enter your email" required className="input-field" />
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                <span>Subscribe</span>

                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                            </button>

                        </form>

                    </div>

                </div>
            </section>

        </div>
    );
};

export default Newletter;