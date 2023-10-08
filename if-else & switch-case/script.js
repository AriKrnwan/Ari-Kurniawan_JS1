// IF ELSE
function tentukanJenisSegitiga() {
    const sisiA = parseFloat(document.getElementById('sisiA').value);
    const sisiB = parseFloat(document.getElementById('sisiB').value);
    const sisiC = parseFloat(document.getElementById('sisiC').value);

    if (sisiA === sisiB && sisiB === sisiC) {
        document.getElementById('hasil').textContent = "Segitiga sama sisi";
    } else if (sisiA === sisiB || sisiB === sisiC || sisiA === sisiC) {
        document.getElementById('hasil').textContent = "Segitiga sama kaki";
    } else {
        document.getElementById('hasil').textContent = "Segitiga sembarang";
    }
}

// SWITCH CASE
function evaluateNumber() {
    var number = parseInt(document.getElementById("numberInput").value);
    var resultElement = document.getElementById("result");

    switch (number) {
        case 1:
            resultElement.innerHTML = "<h2> Selamat Tinggal - Tere Liye </h2> <p> Kita tidak sempurna. Kita mungkin punya keburukan, melakukan kesalahan, bahkan berbuat jahat, menyakiti orang lain. Tapi beruntunglah yang mau berubah. Berjanji tidak melakukannya lagi, memperbaiki, dan menebus kesalahan tersebut. Mari tutup masa lalu yang kelam, mari membuka halaman yang baru. Jangan ragu-ragu. Jangan cemas. Tinggalkanlah kebodohan dan ketidakpedulian. “Selamat Tinggal” suka berbohong, “Selamat Tinggal” kecurangan, “Selamat Tinggal” sifat-sifat buruk lainnya. Karena sejatinya, kita tahu persis apakah kita memang benar-benar bahagia, baik, dan jujur. Sungguh “Selamat Tinggal” kepalsuan hidup. Selamat membaca novel ini. Dan jika kamu telah tiba di halaman terakhirnya, merasa novel ini menginspirasimu, maka kabarkan kepada teman, kerabat, keluarga lainnya. Semoga inspirasinya menyebar luas. </p>";
            break;
        case 2:
            resultElement.innerHTML = "<h2> Laut Bercerita - Leila S. Chudori </h2> <p> Laut Bercerita, novel terbaru Leila S. Chudori, bertutur tentang kisah keluarga yang kehilangan, sekumpulan sahabat yang merasakan kekosongan di dada, sekelompok orang yang gemar menyiksa dan lancar berkhianat, sejumlah keluarga yang mencari kejelasan makam anaknya, dan tentang cinta yang tak akan luntur. </p>";
            break;
        case 3:
            resultElement.innerHTML = "<h2> Luka Cita - Valerie Patkar </h2> <p> Untuk mereka yang berhasil menggapai cita-cita, tetapi masih terluka karenanya. Lukacita bercerita tentang para pemimpi yang dikhianati cita-cita mereka sendiri. Ada seorang pendiri perusahaan startup idealis bernama Javier dan seorang mantan atlet catur penakut bernama Utara. Saat mereka hampir menyerah untuk memperjuangkan apa yang mereka cita-citakan selama ini, mereka bertemu untuk belajar memaafkan keadaan. </p>";
            break;
        default:
            resultElement.innerHTML = "Masukkan angka 1 sampai 3";
            break;
    }
}