function switchLang(lang) {
    document.querySelectorAll('[data-lang-en]').forEach(el => {
      if (lang === 'en') {
          el.innerText = el.getAttribute('data-lang-en');
      } else if (lang === 'cn') {
          el.innerText = el.getAttribute('data-lang-cn');
      }
    });
    // Update button styles
    document.getElementById('lang-en').classList.remove('selected');
    document.getElementById('lang-cn').classList.remove('selected');
    document.getElementById('lang-' + lang).classList.add('selected');

    // Save the selected language to localStorage
    localStorage.setItem('selectedLanguage', lang);
  }

  // Initialize with English selected
  document.addEventListener('DOMContentLoaded', (event) => {
      const savedLang = localStorage.getItem('selectedLanguage') || 'en';
      switchLang(savedLang);
  });