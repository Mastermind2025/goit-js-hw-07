import { galleryItems } from './gallery-items.js';

const gallMainBox = document.querySelector('.gallery');
const cardsGallery = crtGalImg(galleryItems);

gallMainBox.insertAdjacentHTML('afterbegin', cardsGallery);

gallMainBox.addEventListener('click', onGalleryClick);

// html gallery
function crtGalImg(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
                <div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                    </a>
                </div>
            `;
        })
        .join('');
}

function onGalleryClick(evnt) {
    
    evnt.preventDefault();

      if (evnt.target.nodeName !== "IMG") {
        return;
        } else {
        const inst = basicLightbox.create(`
            <div class="modal">
                <img src="${evnt.target.dataset.source}" width="1100" height="800">
            </div>`
            )
            inst.show();  
            console.log(evnt.target.dataset.source);
            window.addEventListener("keydown", (evnt) => {
                if (evnt.code === "Escape") {
                    inst.close();
                }
            });
        } 

    changeActiveClass();
    
    const imgItem = e.target;
    const parentGalleryItem = imgItem.closest('.gallery__item');
    addActiveClass(parentGalleryItem);
}

//  remove class
function changeActiveClass() {
    const currentActiveItem = document.querySelector('.gallery__item.is-active');

    if (currentActiveItem) {
        currentActiveItem.classList.remove('is-active');
    }
}
// add class
function addActiveClass(item) {
    item.classList.add('is-active');
}

