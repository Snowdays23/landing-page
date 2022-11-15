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
            {/* <button class="carousel-button left">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                </svg>
            </button>
            <button class="carousel-button right">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                </svg>
            </button> */}
        </div>
    );
};