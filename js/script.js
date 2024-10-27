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


//   Hero popup image animation
window.addEventListener("load", () => {
    setTimeout(() => {
        const images = document.querySelectorAll('.hero-popup-img');
        images.forEach((img, index) => {
            setTimeout(() => {
                img.classList.add('show');
            }, index * 500);  // Delay each by 0.5s
        });
    }, 5000);  // Start 5 seconds after page load
});





function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  // Form functionality
  document.getElementById('leadForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    try {
        const response = await fetch('send_email.php', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.text();
        alert(result); // success or error message
    } catch (error) {
        console.error('Error:', error);
        alert('There was an issue submitting the form. Please try again.');
    }
});