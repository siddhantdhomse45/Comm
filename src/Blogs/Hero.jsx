import React from 'react';


const Hero = () => {
    return (
        <div>
            <section
                className="hero" 
                id="home" 
                style={{
                    backgroundImage: `url("https://github.com/codewithsadee/casmart/blob/master/assets/images/hero-banner.jpg?raw=true")`,
                    backgroundSize: 'cover',        // Ensure the image covers the entire section
                    backgroundRepeat: 'no-repeat',
                    // backgroundPosition: 'center',  
                    height: '100vh',               // Set section height
                    color: 'white',                // Adjust text color for readability
                }}
            >
                <div className="container">

                    <div className="hero-content">

                        <p className="hero-subtitle">Fashion Everyday</p>

                        <h2 className="h1 hero-title">Unrivalled Fashion House</h2>

                        <button className="btn btn-primary">Shop Now</button>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Hero;
