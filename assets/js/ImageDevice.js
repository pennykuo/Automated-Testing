var ImagesTestDevicesPageAddFailAsync = [
    "assets/image/TestDevicesPageAddFailAsync/1.png",
    "assets/image/TestDevicesPageAddFailAsync/2.png"

];
var ImagesTestDevicesPageAddSuccessAsync = [
    "assets/image/TestDevicesPageAddSuccessAsync/1.png",
    "assets/image/TestDevicesPageAddSuccessAsync/2.png",
];
var ImagesTestDevicesPageAssignFunctionAsync = [
    "assets/image/TestDevicesPageAssignFunctionAsync/1.png",
    "assets/image/TestDevicesPageAssignFunctionAsync/2.png",
    "assets/image/TestDevicesPageAssignFunctionAsync/3.png"
];
var ImagesTestDevicesPageFirstPageAsync = [
    "assets/image/TestDevicesPageFirstPageAsync/1.png",
    "assets/image/TestDevicesPageFirstPageAsync/2.png"
];
var ImagesTestDevicesPagePreviousPageAsync = [
    "assets/image/TestDevicesPagePreviousPageAsync/1.png",
    "assets/image/TestDevicesPagePreviousPageAsync/2.png"
];
var ImagesTestDevicesPageSelectAsync = [
    "assets/image/TestDevicesPageSelectAsync/1.png",
    "assets/image/TestDevicesPageSelectAsync/2.png"
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