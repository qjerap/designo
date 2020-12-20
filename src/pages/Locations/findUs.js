import React from 'react';
import "./findUs.scss";

import MapCanada from "./assets/desktop/image-map-canada.png"

const FindUs = () => {

    return (
        <div id="canada" className="find-us wrapper">
            <div className="find-us__info"></div>
            <div className="find-us__map">
                <img src={MapCanada} alt="our location in Canada"/>
            </div>
        </div>
    )
};

export default FindUs;