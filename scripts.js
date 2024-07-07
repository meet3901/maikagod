function redirectToLink(pageName) {
    window.location.href = pageName;
}


function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.className === "") {
        navbar.className = "show";
    } else {
        navbar.className = "";
    }
}

// メニューの開閉を切り替える
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
}

// ドロップダウンメニューの開閉を切り替える
function toggleDropdown(event) {
    event.preventDefault(); // デフォルトのリンク動作を防ぐ
    const dropdownContent = event.currentTarget.nextElementSibling;
    if (dropdownContent) {
        dropdownContent.classList.toggle("show");
    }
    // リンク先に移動
    window.location.href = event.currentTarget.getAttribute('href');
}

