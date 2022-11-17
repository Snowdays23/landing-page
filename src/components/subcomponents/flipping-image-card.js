import React, { useEffect, useState } from 'react';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/bootstrap-override.css";
import "../../assets/css/flipping-image-card.css";
import "../../assets/css/style.css";
import ReactCardFlip from 'react-card-flip';

export default function FlippingImageCard({imgFront, imgBack, textFront, textBack}) {
    const [isCardFlipped, setCardFlipped] = useState(false);

    useEffect(() => {
        setTimeout(() => setCardFlipped(!isCardFlipped), 4000);
    });

    return (
        <div class="mx-2 mb-4" style={{ "min-height": "64vmin" }}>
            <ReactCardFlip isFlipped={isCardFlipped}>
                <div class="card flipping-image-card" style={{ position: "fixed", "max-height": "72vmin" }}>
                    <img src={imgFront} class="card-img-top" alt=""></img>
                    <div class="card-body">
                        <p className='text-white normal-text font-josefin'>{textFront}</p>
                    </div>
                </div>
                <div class="card flipping-image-card" style={{ position: "fixed", "max-height": "72vmin" }}>
                    <img src={imgBack} class="card-img-top" alt=""></img>
                    <div class="card-body">
                        <p className='text-white normal-text font-josefin'>{textBack}</p>
                    </div>
                </div>
            </ReactCardFlip>
        </div>
    );
};