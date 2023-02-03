const imageContainerElement = document.querySelector('.image-container');
const btnElement = document.querySelector('.btn');

btnElement.addEventListener('click', () => {
    imageNum = 8; // 8 images will be added
    addNewImages();
});

function addNewImages() {
    for (let index = 0; index < imageNum; index++) {
        const newImageElement = document.createElement('img');
        newImageElement.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainerElement.appendChild(newImageElement);
    }
}