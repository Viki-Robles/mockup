import React, { useEffect, useState } from "react";



export default function Container() {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/dragons")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoad(true);
            });
    }, []);

    if (!load) {
        return <div>Loadin Main...</div>;
    } else {
        return (
            <>
                <div>
                    {
                        data.map((data) => <div key={data.id}>
                            <div className="dragon-container">
                                <div className="dragon-title">{data.name}</div>
                                <div className="dragon-title"><img src={data.flickr_images[1]}/></div>
                                <div className="dragon-type">{data.type}</div>
                                <div className="dragon-description">{data.description}</div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </>
        )
    }
}
