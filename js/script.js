// Carousel Functionality
let rev = 0;
carousel(rev);

function previousReview() {
    rev = rev - 1;
    carousel(rev);
}

function nextReview() {
    rev = rev + 1;
    carousel(rev);
}

function carousel(review) {
    let reviews = document.getElementsByClassName("review__items");

    if (review >= reviews.length) {
        review = 0;
        rev = 0;
    }
    if (review < 0) {
        review = reviews.length - 1;
        rev = reviews.length - 1;
    }
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none";
    }
    reviews[review].style.display = "block";
}

// Submenu Functionality
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const submenu = dropdown.querySelector('.submenu');

    dropdown.addEventListener('mouseenter', () => {
        submenu.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
        submenu.style.display = 'none';
    });

    submenu.addEventListener('mouseenter', () => {
        submenu.style.display = 'block';
    });

    submenu.addEventListener('mouseleave', () => {
        submenu.style.display = 'none';
    });
});


// Tab Navigation Functionality
function openSpec(specLabel) {
    var i;
    var x = document.getElementsByClassName("spec");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(specLabel).style.display = "block";  
  }
