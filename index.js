// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

fetch('/contact.html')
.then(response => response.text())
.then(html => {
  // Parse the fetched HTML text
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // Select the section with id="about"
  const aboutSection = doc.querySelector('#contact');

  // Check if the section exists
  if (aboutSection) {
    // Inject the 'about' section into the DOM
    document.getElementById('contact-content').innerHTML = aboutSection.outerHTML;
  } else {
    console.error('About section not found');
  }
})
.catch(err => {
  console.error('Failed to load contact page content', err);
});

fetch('/paintings.html')
.then(response => response.text())
.then(html => {
  // Parse the fetched HTML text
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // Select the section with id="about"
  const aboutSection = doc.querySelector('#paintings');

  // Check if the section exists
  if (aboutSection) {
    // Inject the 'about' section into the DOM
    document.getElementById('paintings-content').innerHTML = aboutSection.outerHTML;
  } else {
    console.error('About section not found');
  }
})
.catch(err => {
  console.error('Failed to load contact page content', err);
});

// fetch('/cv.html')
// .then(response => response.text())
// .then(html => {
//   // Parse the fetched HTML text
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(html, 'text/html');

//   // Select the section with id="about"
//   const aboutSection = doc.querySelector('#cv');

//   // Check if the section exists
//   if (aboutSection) {
//     // Inject the 'about' section into the DOM
//     document.getElementById('cv-content').innerHTML = aboutSection.outerHTML;
//   } else {
//     console.error('About section not found');
//   }
// })
// .catch(err => {
//   console.error('Failed to load contact page content', err);
// });

fetch('/about.html')
.then(response => response.text())
.then(html => {
  // Parse the fetched HTML text
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // Select the section with id="about"
  const aboutSection = doc.querySelector('#about');

  // Check if the section exists
  if (aboutSection) {
    // Inject the 'about' section into the DOM
    document.getElementById('about-content').innerHTML = aboutSection.outerHTML;
  } else {
    console.error('About section not found');
  }
})
.catch(err => {
  console.error('Failed to load contact page content', err);
});