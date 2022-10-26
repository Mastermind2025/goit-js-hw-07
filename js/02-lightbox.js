import { galleryItems } from './gallery-items.js';

const boxWrapMn = document.querySelector('.gallery');    // get gallery parent box
const cardsLightbox = boxNewWrap(galleryItems);         // passing an array to the function

//result of work function boxNewWrap to place into parent box
boxWrapMn.insertAdjacentHTML('afterbegin', cardsLightbox);



// function create lightbox
function boxNewWrap(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
                <a class="gallery__item" href="${original}">
                    <img 
                        class="gallery__image" 
                        src="${preview}" 
                        alt="${description}" />
                </a>
            `;
        })
        .join('');
    
}

// modal
    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',    //get the caption from given attribute
        captionDelay: 250,      //adds a delay before the caption shows (in ms)
        animationSpeed: 200,    //how long takes the slide animation
        scaleImageToRatio: true,//scales the image up to the defined ratio
    });
 
