// Fungsi untuk membuka popup login
function openLoginPopup() {
    document.getElementById("loginOverlay").style.display = "flex";
}

// Fungsi untuk menutup popup login
function closeLoginPopup() {
    document.getElementById("loginOverlay").style.display = "none";
}

// Fungsi untuk menampilkan popup login secara otomatis
function showAutoLoginPopup() {
    // Di sini Anda dapat menentukan kondisi kapan popup harus muncul secara otomatis
    var shouldShowPopup = true;

    if (shouldShowPopup) {
        openLoginPopup();
    }
}

// Panggil fungsi untuk menampilkan popup login secara otomatis
showAutoLoginPopup();
