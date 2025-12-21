function scrollToTarget(target) {
  if (!target) return;

  // Set offset based on viewport width
  const offset = window.innerWidth <= 768 ? 100 : 20; 
  // 100px offset on mobile, 20px on desktop

  const topPos = target.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({
    top: topPos - offset,
    behavior: 'smooth'
  });
}

// For nav links
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      scrollToTarget(target);
    }
  });
});

// For mobile dropdown
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenu) {
  mobileMenu.addEventListener('change', function() {
    if (!this.value) return;

    if (this.value.startsWith('#')) {
      const target = document.querySelector(this.value);
      scrollToTarget(target);
    } else {
      window.location.href = this.value; // normal file link
    }
    this.selectedIndex = 0; // reset hamburger
  });
}