import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const galleryRef = document.querySelector('.gallery');

const createItemGallery = ({ preview, original, description }) => {
  return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>`;
};

const createListGallery = array => {
  return `${array.map(el => createItemGallery(el)).join('')}`;
};

const renderGalleryToHTML = array => {
  galleryRef.insertAdjacentHTML('beforeend', createListGallery(array));
};

renderGalleryToHTML(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
