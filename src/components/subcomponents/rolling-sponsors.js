import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/bootstrap-override.css";
import "../../assets/css/style.css";
import "../../assets/css/rolling-sponsors.css";

export default function SponsorsRoll({logos}) {
    const spawnLogo = logo => {
        const div = document.createElement("div");
        div.classList.add("logo");
        div.classList.add("rolling-on-screen");
        div.style.backgroundImage = `url("${logo}")`;
        return div;
    }
    const [logoIndex, setLogoIndex] = useState(0);
    const containerRef = React.createRef();
    const firstLogo = React.createRef();
    
    useEffect(() => {
        $(".logo").off("animationend").on("animationend", evt => {
            if (evt.originalEvent.animationName === "roll-off-screen") {
                evt.currentTarget.parentNode.removeChild(evt.currentTarget);
            } else if (evt.originalEvent.animationName === "roll-on-screen") {
                evt.currentTarget.classList.remove("rolling-on-screen");
                evt.currentTarget.classList.add("rolling-off-screen");
                evt.currentTarget.style.animationDuration = `${
                    (window.innerWidth + 0.1 * evt.currentTarget.getBoundingClientRect().width) * 8
                }ms`;

                setLogoIndex((logoIndex + 1) % logos.length);
                
                const newLogo = spawnLogo(logos[logoIndex]);
                containerRef.current.append(newLogo);
                newLogo.style.animationDuration = `${
                    newLogo.getBoundingClientRect().width * 8
                }ms`;
            }
        });
    });

    return (
        <div class="d-flex flex-row p-3" style={{
            minHeight: "45vmin"
        }} ref={containerRef}>
            <div style={{
                backgroundImage: `url("${logos[0]}")`
            }} ref={firstLogo} class="logo rolling-on-screen"></div>
        </div>
    )
};