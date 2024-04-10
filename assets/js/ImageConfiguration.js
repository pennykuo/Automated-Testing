var ImagesTestConfigurationPageEditAsync = [
    "assets/image/TestConfigurationPageEditAsync/1.png",
    "assets/image/TestConfigurationPageEditAsync/2.png"

];
var ImagesTestConfigurationPageDeleteAsync = [
    "assets/image/TestConfigurationPageDeleteAsync/1.png",
    "assets/image/TestConfigurationPageDeleteAsync/2.png",
    "assets/image/TestConfigurationPageDeleteAsync/3.png"
];
var ImagesTestConfigurationPageCreateFailAsync = [
    "assets/image/TestConfigurationPageCreateFailAsync/1.png",
    "assets/image/TestConfigurationPageCreateFailAsync/2.png"

];
var ImagesTestConfigurationPageCreateSuccessAsync = [
    "assets/image/TestConfigurationPageCreateSuccessAsync/1.png",
    "assets/image/TestConfigurationPageCreateSuccessAsync/2.png"
];
var ImagesTestConfigurationsPagePreviousPageAsync = [
    "assets/image/TestConfigurationsPagePreviousPageAsync/1.png",
    "assets/image/TestConfigurationsPagePreviousPageAsync/2.png"
];
var ImagesTestConfigurationPageSelectAsync = [
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