// Mendapatkan elemen ikon menu dan navigasi samping
const menuIcon = document.getElementById('menu');
const sideMenu = document.getElementById('side-menu');

// Menambahkan event listener pada ikon menu untuk menampilkan navigasi
menuIcon.addEventListener('click', function(event) {
    sideMenu.classList.toggle('active'); // Menampilkan atau menyembunyikan menu
    event.stopPropagation(); // Mencegah event bubbling agar tidak menutup menu
});

// Menambahkan event listener pada dokumen untuk mendeteksi klik di luar menu
document.addEventListener('click', function() {
    // Sembunyikan menu jika sedang aktif
    if (sideMenu.classList.contains('active')) {
        sideMenu.classList.remove('active');
    }
});

// Mencegah menu menutup jika diklik di dalam menu
sideMenu.addEventListener('click', function(event) {
    event.stopPropagation(); // Mencegah event bubbling agar tidak menutup menu
});
