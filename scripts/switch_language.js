function switchLang(lang) {
    // 遍历所有含有 data-lang-en 属性的元素，根据语言切换内容
    document.querySelectorAll('[data-lang-en]').forEach(el => {
        if (lang === 'en') {
            el.innerText = el.getAttribute('data-lang-en');
            // 恢复默认的字体设置（即不修改原来的英文CSS字体）
            el.style.fontFamily = '';
        } else if (lang === 'cn') {
            el.innerText = el.getAttribute('data-lang-cn');
            // 设置中文时的字体
            el.style.fontFamily = "'YourChineseFont', sans-serif";
        }
    });

    // 更新语言切换按钮的样式
    document.getElementById('lang-en').classList.remove('selected');
    document.getElementById('lang-cn').classList.remove('selected');
    document.getElementById('lang-' + lang).classList.add('selected');

    // 保存用户选择的语言到 localStorage 中
    localStorage.setItem('selectedLanguage', lang);
}

document.addEventListener('DOMContentLoaded', (event) => {
    // 从 localStorage 获取上次保存的语言，如果没有则默认为英文
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';

    // 初始化页面时根据保存的语言选择相应的语言
    switchLang(savedLang);
});