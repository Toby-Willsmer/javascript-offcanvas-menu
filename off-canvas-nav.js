// Off Canvas navigation sidebar - JS

// Global navigation variables
var trigger = document.getElementsByClassName('side-nav__link'),
    push = document.getElementsByClassName('move-content'),
    aClass = ['side-nav__link--active'],
    pClass = ['move-content--pushed', 'side-nav-overlay--open', 'nav-small'],
    overlay = document.querySelector('.side-nav-overlay'),
    control = document.querySelector('.side-nav__link-control'), // Hamburger on mobile
    nav = document.querySelector('.side-nav');

// We do the screen size listening this way as this has more cross browser consisitancy
// Even though we have to have the media queries repeated in the js as well as the CSS
// These must match the CSS settings: - 768px, 1240px, 1440px
// Global variable
var breakpoints = ['768', '1240', '1440'];

// Global functions
removeAllNav = function() {
  removeActiveNavTrigger();
  removePush();
  hideSideNav();
}

removeActiveNavTrigger = function() {
  for (var i=0; i < trigger.length; i++) {
    trigger[i].classList.remove(aClass[0]);
  }
}

function offCanvas() {

  // Push and pull the content - only used on desktop
  addPush = function() {
    for (var i=0; i < push.length; i++) {
      push[i].classList.add(pClass[0]);
    }
  }

  removePush = function() {
    for (var i=0; i < push.length; i++) {
      push[i].classList.remove(pClass[0]);
    }
  }

  showSideNav = function() {
    overlay.classList.add(pClass[1]); // Overlay
    nav.classList.add(pClass[2]); // For css positioning on small
  }

  hideSideNav = function() {
    overlay.classList.remove(pClass[1]); // Overlay
    nav.classList.remove(pClass[2]); // For css positioning on small
  }

  // Loop through the active triggers
  for (var i=0; i < trigger.length; i++) {

    // The side menu links
    trigger[i].onclick = function(e) {

      e.preventDefault(); // Stop the # being added to the URL
      var active = document.querySelector('.side-nav__link--active');

      addActive = function() {
        e.currentTarget.classList.add(aClass[0]);
      }

      removeActive = function() {
        active.classList.remove(aClass[0]);
      }

      // Default actions - Add the active state when clicked and remove any existing active classes
      addActive();
      if(active) {
        removeActive();
      }

      // Do the active state switching and the show/hude of content
      if(this.classList.contains(aClass[0])) {
        addActive();
        if(active) {
          removeActive();
        }
        showSideNav();
        addPush();
      } else {
        hideSideNav();
        removePush();
      }

      // The hamburger icon is hidden above small so no need to listen for screen width
      // Make sure the hamburger on small can be clicked to close if active is already present elsewhere
      if(control.classList.contains(aClass[0]) && active) {
        e.currentTarget.classList.remove(aClass[0]);
        removeActive();
        hideSideNav();
      }

      // Make the default show when the hamburger is clicked to open it not empty
      // We remove the active class instantly once fired as the default open link will be active
      if(control.classList.contains(aClass[0])) {
        e.currentTarget.classList.remove(aClass[0]);
        document.querySelector("[data-navdef='1']").classList.add(aClass[0]);
      }

    } // End click

  } // Close trigger loop

  // The media query listener for click outside and remove/add on screen sizes
  var mediaQuery = [
        window.matchMedia('(max-width:' + breakpoints[0] + 'px)'), // phone
        window.matchMedia('(min-width:' + breakpoints[2] + 'px)') // desktop
      ];

  clickOutside = function(click) {
    for (var i=0; i < push.length; i++) {
      if(click == true) {
        push[i].onclick = function() {
          removeAllNav();
        }
      } else {
        push[i].onclick = function(e) {
          e.preventDefault();
        }
      }
    }
  }

  // Screen change over breakpoint
  screenChange = function() {
    if (mediaQuery[0].matches || !mediaQuery[1].matches) { // Phone and tablet
      removeAllNav();
      clickOutside(true); // Remove the active nav when clicked outside it
    } else { // Desktop
      for (var i=0; i < trigger.length; i++) {
        trigger[i].classList.remove(aClass[0]); // Remove existing active before adding the default
        if(trigger[i].getAttribute('data-navDef') == 1) { // Make sure there is a default visible
          trigger[i].classList.add(aClass[0]);
        }
      }
      showSideNav();
      addPush();
      clickOutside(); // Cancel click outside
    }
  }

  screenChange(); // Run on load
  for (var i =0; i < mediaQuery.length; i++) {
    mediaQuery[i].addListener(screenChange);
  }

}offCanvas();
