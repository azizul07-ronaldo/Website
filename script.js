document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () =>{
    if(window.scrollY > 50){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
  });

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
});
