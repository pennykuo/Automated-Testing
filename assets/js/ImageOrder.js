var ImagesTestOrdersPageFirstPageAsync = [
    "assets/image/TestOrdersPageFirstPageAsync/1.png",
    "assets/image/TestOrdersPageFirstPageAsync/2.png"

];
var ImagesTestOrdersPagePreviousPageAsync = [
    "assets/image/TestOrdersPagePreviousPageAsync/1.png",
    "assets/image/TestOrdersPagePreviousPageAsync/2.png",
];
var ImagesTestOrdersPageSelectAsync = [
    "assets/image/TestOrdersPageSelectAsync/1.png",
    "assets/image/TestOrdersPageSelectAsync/2.png"

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