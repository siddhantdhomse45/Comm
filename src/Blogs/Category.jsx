import React from 'react';

const Category = () => {
    return (
        <div>
             <section className="section category">
                <div className="container">

                    <ul className="category-list">

                        <li className="category-item">
                            <figure className="category-banner">
                                <img src="https://github.com/codewithsadee/casmart/blob/master/assets/images/category-1.jpg?raw=true" alt="Sunglass & eye" loading="lazy" width="510" height="600" className="w-100"/>
                            </figure>

                            <a href="#" className="btn btn-secondary">Sunglass & Eye</a>
                        </li>

                        <li className="category-item">
                            <figure className="category-banner">
                                <img src="https://casmart.vercel.app/assets/images/category-2.jpg" alt="Active & outdoor" loading="lazy" width="510" height="600" className="w-100"/>
                            </figure>

                            <a href="#" className="btn btn-secondary">Active & Outdoor</a>
                        </li>

                        <li className="category-item">
                            <figure className="category-banner">
                                <img src="https://github.com/codewithsadee/casmart/blob/master/assets/images/category-3.jpg?raw=true" alt="Winter wear" loading="lazy" width="510" height="600" className="w-100"/>
                            </figure>

                            <a href="#" className="btn btn-secondary">Winter Wear</a>
                        </li>

                        <li className="category-item">
                            <figure className="category-banner">
                                <img src="https://github.com/codewithsadee/casmart/blob/master/assets/images/category-4.jpg?raw=true" alt="Exclusive footwear" loading="lazy" width="510" height="600" className="w-100"/>
                            </figure>

                            <a href="#" className="btn btn-secondary">Exclusive Footwear</a>
                        </li>

                        <li className="category-item">
                            <figure className="category-banner">
                                <img src="https://github.com/codewithsadee/casmart/blob/master/assets/images/category-5.jpg?raw=true" alt="Jewelry" loading="lazy" width="510" height="600" className="w-100"/>
                            </figure>

                            <a href="#" className="btn btn-secondary">Jewelry</a>
                        </li>

                        <li className="category-item">
                            <figure className="category-banner">
                                <img src="https://github.com/codewithsadee/casmart/blob/master/assets/images/category-6.jpg?raw=true" alt="Sports cap" loading="lazy" width="510" height="600" className="w-100"/>
                            </figure>

                            <a href="#" className="btn btn-secondary">Sports Cap</a>
                        </li>

                    </ul>

                </div>
            </section>
            
        </div>
    );
};

export default Category;