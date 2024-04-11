var ImagesTestConfigurationsPageEditAsync = [
    "assets/image/TestConfigurationsPageEditAsync/1.png",
    "assets/image/TestConfigurationsPageEditAsync/2.png"

];
var ImagesTestConfigurationsPageDeleteAsync = [
    "assets/image/TestConfigurationsPageDeleteAsync/1.png",
    "assets/image/TestConfigurationsPageDeleteAsync/2.png",
    "assets/image/TestConfigurationsPageDeleteAsync/3.png"
];
var ImagesTestConfigurationsPageCreateFailAsync = [
    "assets/image/TestConfigurationsPageCreateFailAsync/1.png",
    "assets/image/TestConfigurationsPageCreateFailAsync/2.png"

];
var ImagesTestConfigurationsPageCreateSuccessAsync = [
    "assets/image/TestConfigurationsPageCreateSuccessAsync/1.png",
    "assets/image/TestConfigurationsPageCreateSuccessAsync/2.png"
];
var ImagesTestConfigurationsPagePreviousPageAsync = [
    "assets/image/TestConfigurationsPagePreviousPageAsync/1.png",
    "assets/image/TestConfigurationsPagePreviousPageAsync/2.png"
];
var ImagesTestConfigurationsPageSelectAsync = [
    "assets/image/TestConfigurationsPageSelectAsync/1.png",
    "assets/image/TestConfigurationsPageSelectAsync/2.png"
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
    document.getElementsByClassName('imageIndexDisplay').innerText = "PAGE: " + (imageIndex + 1);
    console.log(document.getElementsByClassName('imageIndexDisplay').innerText = "PAGE: " + (imageIndex + 1));
    console.log(images[imageIndex]);
}