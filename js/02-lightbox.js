import { galleryItems } from './gallery-items.js';

const boxWrapMn = document.querySelector('.gallery');
const cardsLightbox = boxNewWrap(galleryItems);

boxWrapMn.insertAdjacentHTML('afterbegin', cardsLightbox);

boxWrapMn.addEventListener('click', toLightboxClick);

// lightbox
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

function toLightboxClick(event) {
    
    event.preventDefault();

    
    if (event.target.nodeName !== "IMG") {
        return;
    }
   
    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        animationSpeed: 200,
        scaleImageToRatio: true,
    });
 
}