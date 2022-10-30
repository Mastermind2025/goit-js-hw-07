import { galleryItems } from './gallery-items.js';  // import array from gallery-items.js

const gallMainBox = document.querySelector('.gallery');  // parent box
const cardsGallery = crtGalImg(galleryItems);           // passing an array to the function

gallMainBox.insertAdjacentHTML('afterbegin', cardsGallery);

gallMainBox.addEventListener('click', onGalleryClick);          // add listener

// render gallery html 
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
    
    evnt.preventDefault();                      //Cancel browser default actions

      if (evnt.target.nodeName !== "IMG") {
        return;
        } 
        const inst = basicLightbox.create(`
            <div class="modal">
                <img src="${evnt.target.dataset.source}" width="1100" height="800">
            </div>`,

            //Object

            {

                onClose: (inst) => {
                    document.removeEventListener('keydown', toEsc);
                    
                },
                onShow: (inst) => {
                    document.addEventListener('keydown', toEsc);
                   
                },
            }
        )
          inst.show();
          
          console.log(evnt.target.dataset.source);
          
          // closing by Esc
            function toEsc(evnt){
                if (evnt.code === "Escape") {
                    inst.close();
                }
            }
        } 





