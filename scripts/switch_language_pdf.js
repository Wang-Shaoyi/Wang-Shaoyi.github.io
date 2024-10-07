function switchLang(lang) {
    document.querySelectorAll('[data-lang-en]').forEach(el => {
        if (lang === 'en') {
            el.innerText = el.getAttribute('data-lang-en');
            document.getElementById('pdf-frame').src = 'Shaoyi_Wang_resume.pdf';
        } else if (lang === 'cn') {
            el.innerText = el.getAttribute('data-lang-cn');
            document.getElementById('pdf-frame').src = '王劭仪简历.pdf';
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