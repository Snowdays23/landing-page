import im0 from '../img/previousImg/08-14.28_JAC_1800.jpg';
import im1 from '../img/previousImg/07-19.37_ROB_0924.jpg';
import im2 from '../img/previousImg/09-14.02_JAC_2245.jpg';

import im3 from '../img/previousImg/07-20.34__MG_5258.jpg';
import im4 from '../img/previousImg/09-14.49_ISE_045.jpg';
import im5 from '../img/previousImg/08-00.13_ROB_1337.jpg';

let i = 0;
let images = [];
let images2 = [];
let time = 2000;

images[0] =  im0;
images[1] = im1;
images[2] = im2;

images2[0] =  im3;
images2[1] = im4;
images2[2] = im5;

function changeImages () {
    document.carouselImage.src = images[i];
    document.carouselImage2.src = images2[i];

    if(i < images.length -1)
        i++;
    else
        i = 0;

    setTimeout(changeImages, time);
}

window.onload = changeImages;