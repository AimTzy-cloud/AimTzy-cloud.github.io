if ('speechSynthesis' in window) {
    let msg = new SpeechSynthesisUtterance();
    msg.text = "Selamat datang di website Baim Junior, Dimana anda bisa belajar tentang web developer dan belajar tool hacking atau cyber keamanan dan kamu juga bisa belajar software developer, Ingat jangan pernah menyerah atau mengeluh karna pada dasarnya penyesalan itu adanya diakhir. Terima kasih";
    msg.onstart = function() {
        console.log('Speech started');
    };
    msg.onerror = function(event) {
        console.error('SpeechSynthesisUtterance error:', event.error);
        alert('Sepertinya fitur suara tidak dapat dijalankan. Pastikan browser Anda mendukung Web Speech API.');
    };
    window.speechSynthesis.speak(msg);
} else {
    alert('Web Speech API tidak didukung di browser ini.');
}