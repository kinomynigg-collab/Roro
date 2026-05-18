// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
  const nav = document.getElementById('site-nav');
  const btn = document.getElementById('nav-toggle');
  btn.addEventListener('click', () => nav.classList.toggle('show'));

  // Fill current year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Contact form -> mailto fallback
  const form = document.getElementById('contact-form');
  if (form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const fd = new FormData(form);
      const name = fd.get('name') || 'No name';
      const email = fd.get('email') || 'no-email';
      const message = fd.get('message') || '';
      const subject = encodeURIComponent('SiteForge Inquiry from ' + name);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      // Use mailto as a simple fallback
      window.location.href = `mailto:hello@siteforge.example?subject=${subject}&body=${body}`;
    });
  }
});
