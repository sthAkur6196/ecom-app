import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(){
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://thumbs.dreamstime.com/b/ecommerce-website-audit-data-analysis-marketing-flat-design-banner-concept-gathering-information-online-103949405.jpg" alt="" />
                <div className="home__row">
                    <Product 
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, unde!"
                        price={499}
                        rating={3}
                    />
                    
                    <Product 
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, unde!"
                        price={1099}
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, unde!"
                        price={1099}
                        rating={1}
                    />
                    <Product 
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, unde!"
                        price={1099}
                        rating={4}
                    />
                    <Product 
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, unde!"
                        price={1099}
                        rating={2}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, unde!"
                        price={1099}
                        rating={3}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;