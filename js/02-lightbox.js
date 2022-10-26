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
        captionsData: 'alt',
        captionDelay: 250,
        animationSpeed: 200,
        scaleImageToRatio: true,
    });
 
