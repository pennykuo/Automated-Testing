var ImagesTestStocksPageFirstPageAsync = [
    "assets/image/TestStocksPageFirstPageAsync/1.png",
    "assets/image/TestStocksPageFirstPageAsync/2.png"

];
var ImagesTestStocksPagePreviousPageAsync = [
    "assets/image/TestStocksPagePreviousPageAsync/1.png",
    "assets/image/TestStocksPagePreviousPageAsync/2.png",
];
var ImagesTestStocksPageSelectAsync = [
    "assets/image/TestStocksPageSelectAsync/1.png",
    "assets/image/TestStocksPageSelectAsync/2.png"

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