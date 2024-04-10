function showContent(value) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    const selectedContent = document.getElementById(value);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.sidebar-link');
    
    var selects = document.querySelectorAll('select');
    selects.forEach(function(select) {
        select.style.display = 'none';
    });

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            selects.forEach(function(select) {
                select.style.display = 'none';
            });
            const contents = document.querySelectorAll('.content');
            contents.forEach(content => {
                content.style.display = 'none';
            });
            var select = document.querySelector('.' + link.textContent.trim()+'-bar');
            if (select) {
                select.style.display = 'block';

            }
        });
    });
});
var images = [
    "assets/image/TestConfigurationsPageAsync/1.png",
];
var imageIndex = 0;

function changeImage(direction) {
    imageIndex = imageIndex + direction;
    if (imageIndex < 0) {
        imageIndex = images.length - 1;
    } else if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    document.getElementById('slider-image').src = images[imageIndex];
}