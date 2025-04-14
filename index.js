document.getElementById("year").textContent = new Date().getFullYear();


// Select all the section links
const navLinks = document.querySelectorAll('.navbar h1 a');
const sections = document.querySelectorAll('.section');

// Add an event listener to handle scroll
window.addEventListener('scroll', () => {
  let currentSection = "";

  // Loop through sections to find which one is currently in view
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  // Add active class to the corresponding nav link
  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});

