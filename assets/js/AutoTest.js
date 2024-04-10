
// window.addEventListener('resize', function() {
//     var sidebar = document.querySelector('.sidebar');

//     if (window.innerWidth > 1090) {
//         sidebar.classList.remove('collapse');
//     } else {
//         sidebar.classList.add('collapse');
//     }
// });


// window.dispatchEvent(new Event('resize'));

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
    console.log('Clicked link:', links);
    
    var selects = document.querySelectorAll('select');
    console.log('Corresponding select:', selects);
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
                console.log(select);

            }
        });
    });
});