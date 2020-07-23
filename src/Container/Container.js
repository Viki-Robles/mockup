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
                    <div className="container-box-text">
                        <h2 className="container-box-title">GRIP</h2>
                        <br/>
                        <h2 className="container-box-title-second">VIRTUAL</h2>
                    </div>
                </div>
                <div className="container-box-one-small">
                    <h5 className="container-box-one-small-title">Welcome to Grip Virtual. Please log in below to get started.</h5>
                    <button>Login</button>
                </div>
            </div>
            <div className="container-box-two">
                <img src={mockuppicture} alt="" className="big-picture" />
                <h6>Take the work out of networking. Meet the right people for your business needs with our<br/>intelligent matchmaking technology.</h6>
                <h5 className="container-second-box-title">Log in -70% od thiose who did said that they made a connection they would not <br/>have made otherwise.</h5>
            </div>
        </div>
    );
}