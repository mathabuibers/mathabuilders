function setupImageGallery(totalImages, largeImageClass, smallImageClass) {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
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
  prevBtn.addEventListener('click', () => {
    currentIndex -= 1;
    updateImages();
  });

  // Event listener for the next button
  nextBtn.addEventListener('click', () => {
    goToNextImage();
  });

  // Function to start automatic sliding
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

/*==================== ANImaTION ====================*/


//hero logo,testmonial-heading
window.addEventListener('load', function() {
  var heroLogo = document.querySelector('.hero-logo');
  heroLogo.style.left = '15%'; // Move the logo to its final position using JavaScript
   // Add transition to the left property
  window.addEventListener('scroll', function() {
      var logoRect = heroLogo.getBoundingClientRect();
      var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      if (logoRect.top + logoRect.height < 0) { // If the logo leaves the viewport from the top
          heroLogo.style.left = '-200px'; // Move the logo completely out of the viewport
      } else {
          heroLogo.style.left = 'calc(15% - ' + window.pageYOffset + 'px)'; // Move the logo towards the left based on scroll position
          heroLogo.style.transition = 'left 0s';
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
