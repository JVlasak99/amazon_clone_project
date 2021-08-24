import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/em/pd21/xcm_em_Prime_Day_2021_899-USEN_D_PDS-HP-Tall-Hero_1500x600._CB667794968_.jpg"
                    alt="background banner"
                />

                <div className="home__row">
                    <Product
                        id="1234843"
                        title="The Lean Startup"
                        price={29.99}
                        image={
                            "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        }
                        rating={5}
                    />
                    <Product
                        id="1278412"
                        title="Kenwood kMix Stand Mixer for baking, Stylish Kitchen Mixer with K-Beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image={
                            "https://images-na.ssl-images-amazon.com/images/I/51jy6tmdBXL._AC_SX466_.jpg"
                        }
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="9851264"
                        title="iPhone 12 Pro 128GB Pacific Blue"
                        price={999.0}
                        rating={5}
                        image={
                            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021661000"
                        }
                    />
                    <Product
                        id="4124795"
                        title="Lifetime 10 ft. Cruze Sit-In Kayak, Bahama Fusion, 90748"
                        price={199.0}
                        rating={4}
                        image={
                            "https://media.tractorsupply.com/is/image/TractorSupplyCompany/1531654?"
                        }
                    />
                    <Product
                        id="214674"
                        title="THE NORTH FACE Geodome 4 Tent with Footprint NV21800 Saffron Yellow EMS"
                        price={1988.99}
                        rating={5}
                        image={
                            "https://i.ebayimg.com/images/g/zNEAAOSwen9fMmS~/s-l500.jpg"
                        }
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="6745182"
                        title="65 Inch Class NU8500 Premium Curved Smart 4K UHD TV"
                        price={1799.99}
                        rating={4}
                        image={
                            "https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/television-and-home-theater-accessories/pdp/un65nu8500fxza/gallery/UN65NU8500FXZA_004_L_Perspective_Black-1600x1200.jpg?$product-details-jpg$"
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
