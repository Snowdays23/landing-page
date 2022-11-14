import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/bootstrap-override.css";
import "../../assets/css/images-carousel.css";

export default function ImagesCarousel({images, intervalMs=1000}) {
    const [imageIndex, setImageIndex] = useState(0);

    const spawnImage = src => {
        const div = document.createElement("div");
        div.style.backgroundImage = `url("${src}")`;
        div.classList.add("carousel-slide");
        div.classList.add("should-enter");
        return div;
    }

    useEffect(() => {
        const afterEntering = evt => {
            evt.currentTarget.classList.remove("entering");
            evt.currentTarget.classList.add("active");
            
            setTimeout(() => {
                setImageIndex((imageIndex + 1) % images.length);
            }, intervalMs);
        }
        const afterLeaving = evt => {
            evt.currentTarget.parentNode.removeChild(evt.currentTarget);
        }

        const img = spawnImage(images[imageIndex]);
        $('#carousel-inner').append(img);
        $(".carousel-slide.active")
            .one("animationend", afterLeaving)
            .removeClass("active")
            .addClass("leaving");
        $(".carousel-slide.should-enter")
            .one("animationend", afterEntering)
            .removeClass("should-enter")
            .addClass("entering");
    });

    return (
        <div class="d-flex flex-row p-0" style={{
            minHeight: "64vmin"
        }} id="carousel-inner">
            <div class="carousel-slide should-enter"></div>
        </div>
    );
};