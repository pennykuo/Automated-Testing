var ImagesTestCustomersPageFirstPageAsync = [
    "assets/image/TestCustomersPageFirstPageAsync/1.png",
    "assets/image/TestCustomersPageFirstPageAsync/2.png"

];
var ImagesTestCustomersPagePreviousPageAsync = [
    "assets/image/TestCustomersPagePreviousPageAsync/1.png",
    "assets/image/TestCustomersPagePreviousPageAsync/2.png",
];
var ImagesTestCustomersPageSelectAsync = [
    "assets/image/TestCustomersPageSelectAsync/1.png",
    "assets/image/TestCustomersPageSelectAsync/2.png"

];
var imageIndex = 0;
function changeImage(images, direction) {
    if ((direction === 1 && imageIndex < images.length - 1) || 
    (direction === -1 && imageIndex > 0)) {
        imageIndex += direction;
    }
    var sliderImages = document.getElementsByClassName('slider-image');
    for (var i = 0; i < sliderImages.length; i++) {
        sliderImages[i].src = images[imageIndex];
    }
    // document.getElementsByClassName('imageIndexDisplay').innerText = "PAGE: " + (imageIndex + 1);
    // console.log(document.getElementsByClassName('imageIndexDisplay').innerText = "PAGE: " + (imageIndex + 1));
    // console.log(images[imageIndex]);
}