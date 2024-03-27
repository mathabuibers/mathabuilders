function setupImageGallery(totalImages, largeImageClass, smallImageClass) {
  const prevBtns = document.querySelectorAll('#prevBtn'); // Select all elements with ID "prevBtn"
  const nextBtns = document.querySelectorAll('#nextBtn'); // Select all elements with ID "nextBtn"
  const largeImage = document.querySelector(largeImageClass);
  const smallImage = document.querySelector(smallImageClass);

  let currentIndex = 1; // Index of the currently displayed image
  let slideInterval; // Variable to store the interval ID

  // Function to update the image source based on the current index
  function updateImages() {
    // Ensure currentIndex is within the range of images
    currentIndex = (currentIndex + totalImages - 1) % totalImages + 1;

    largeImage.src = `./assets/img/img-${currentIndex}.jpg`;
    smallImage.src = `./assets/img/img-${(currentIndex % totalImages) + 1}.jpg`;
  }

  // Function to go to the next image
  function goToNextImage() {
    currentIndex += 1;
    updateImages();
  }

  // Event listener for the previous button
  prevBtns.forEach(button => {
    button.addEventListener('click', function() {
      currentIndex -= 1;
      updateImages();
    });
  });
  
  nextBtns.forEach(button => {
    button.addEventListener('click', function() {
      goToNextImage();
    });
  });
 
  function startSlideInterval() {
    slideInterval = setInterval(goToNextImage, 3000);
  }

  // Function to stop automatic sliding
  function stopSlideInterval() {
    clearInterval(slideInterval);
  }

  // Set interval for automatic sliding initially
  startSlideInterval();

  // Clear interval and restart when mouse is over the gallery to prevent automatic sliding
  largeImage.addEventListener('mouseover', () => {
    stopSlideInterval();
  });

  // Restart interval when mouse leaves the gallery
  largeImage.addEventListener('mouseleave', () => {
    startSlideInterval();
  });

  // Initial image setup
  updateImages();
}

// Call the function with parameters
setupImageGallery(19, '.large-image', '.small-image');

function redirectToServices() {
  window.location.href = 'ourservices.html';
}

if (window.innerWidth <= 430) {
  document.getElementById('box4').addEventListener('click', redirectToServices);
}

/*==================== ANImaTION ====================*/


//hero logo,testmonial-heading
window.addEventListener('load', function() {
  var heroLogo = document.querySelector('.hero-logo');
  var isMobile = window.matchMedia('(max-width: 767px)').matches; // Check if the device is mobile
  
  if (isMobile) {
    heroLogo.style.left = '20%';
  } else {
    heroLogo.style.left = '15%';
  }
  window.addEventListener('scroll', function() {
    var logoRect = heroLogo.getBoundingClientRect();
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    if (logoRect.top + logoRect.height < 0) { // If the logo leaves the viewport from the top
      heroLogo.style.left = '-200px'; // Move the logo completely out of the viewport
    } else {
      if (isMobile) {
        heroLogo.style.left = '20%'; // Set the left value to 105px for mobile devices
      } else {
        heroLogo.style.left = 'calc(15% - ' + window.pageYOffset + 'px)'; // Move the logo towards the left based on scroll position
        heroLogo.style.transition = 'left 0s'; // Add transition to the left property
      }
    }
  });
});
//svg icon
document.addEventListener('DOMContentLoaded', function() {
    // Zoom in animation when the page loads
    var topElement = document.querySelector('.top');
    var svgicon=document.querySelector('.svg-icon');
    topElement.style.width = '100%';

    // Zoom out animation based on scroll
    window.addEventListener('scroll', function() {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;
        var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        var scrollPercent = (scrollTop / maxScroll) * 100;

        // Calculate the width based on scroll position
        var newWidth = 100 + scrollPercent;
        if (newWidth < 0) {
            newWidth = 0;
            topElement.style.width = newWidth  + '%';
        }

        // Apply the new width to the element
        topElement.style.width = newWidth  + '%';
        svgicon.style.width = newWidth  + '%';
        topElement.style.transition = 'left 0s';
    });
});

//phone

// Timer for the testimonial contents
const ids = ['slide1', 'slide2', 'slide3'];
let i = 0;
let intervalId;

// Function to hide all slides
function hideAllSlides() {
    ids.forEach(id => {
        document.getElementById(id).style.display = 'none';
    });
}

// Function to change slide
function changeSlide() {
    document.getElementById(ids[i]).style.display = 'none';
    i = (i + 1) % ids.length;
    document.getElementById(ids[i]).style.display = 'block';
}

// Function to start slideshow for mobile
function startSlideshowForMobile() {
    // Check if viewport width is less than or equal to a certain value (e.g., 768px for mobile)
    if (window.innerWidth <= 768) {
        // Hide all slides initially
        hideAllSlides();
        // Change slide immediately after the page loads
        changeSlide();
        // Start the slideshow if the viewport width is for mobile
        intervalId = setInterval(changeSlide, 5000);
    }
}

// Call the function to start the slideshow for mobile devices when the page is loaded
startSlideshowForMobile();

// Add event listener for viewport resize
window.addEventListener('resize', function() {
    // Call the function to start the slideshow for mobile devices when the viewport is resized
    startSlideshowForMobile();
});


// Hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu__item");

  menuItems.forEach(function (menuItem) {
      menuItem.addEventListener("click", function (event) {
          // Prevent default link behavior
          event.preventDefault();

          // Get the target section ID from the href attribute
          const targetId = this.getAttribute("href").substring(1);

          // Find the target section
          const targetSection = document.getElementById(targetId);

          // Scroll to the target section
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: "smooth" });
          }

          // Close the menu after clicking a link (optional)
          const menuToggle = document.getElementById("menu__toggle");
          if (menuToggle.checked) {
              menuToggle.checked = false;
          }
      });
  });
});
