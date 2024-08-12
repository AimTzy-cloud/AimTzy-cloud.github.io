function welcomeMessage() {
    const msg = new SpeechSynthesisUtterance();
    msg.text = "Selamat datang di website Baim Junior, Dimana anda bisa belajar tentang web developer dan belajar tool hacking atau cyber keamanan dan kamu juga bisa belajar software developer, Ingat jangan pernah menyerah atau mengeluh karna pada dasarnya penyesalan itu adanya diakhir. Terima kasih";
    window.speechSynthesis.speak(msg);
}

// Panggil fungsi ketika halaman dimuat
window.onload = welcomeMessage;
