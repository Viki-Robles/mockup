import React from "react";
import picturesmall from "./images/picturesmall.png";
import mockuppicture from "./images/mockuppic.png";
import "./Container.css";

export default function Container() {
    return (
        <div className="container">
            <div className="container-box-one">
                <div className="container-box-one-big">
                    <img src={picturesmall} alt="" className="small-picture" />
                    <h2 className="container-box-one-big-title">Grip Virtual</h2>
                </div>
                <div className="container-box-one-small">
                    <h2 className="container-box-one-small-title">Welcome to Grip Virtual. Please log in below to get started.</h2>
                    <button>Log in</button>
                </div>
            </div>
            <div clasName="container-box-two">
                <img src={mockuppicture} alt="" className="big-picture" />
            </div>
        </div>
    );
}