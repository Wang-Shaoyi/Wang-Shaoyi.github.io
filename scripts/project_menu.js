
    // 加载外部menu.html文件并插入到页面中
    fetch('project_menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading menu:', error));
