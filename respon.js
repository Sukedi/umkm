function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;
    let chatbox = document.getElementById("chatbox");
    chatbox.innerHTML += "<table><tr><td width='50%'><div id='kiri'>" + userInput + "</div></td><td width='50%'></td></tr></table>";
    response = GetResponse(userInput);
    chatbox.innerHTML += "<table><tr><td width='50%'></td><td width='50%'><i><div id='kanan'>" + response + "</div></i></td></tr></table>";
    document.getElementById("userInput").value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
    document.getElementById("greatings").innerHTML = "";
}
function GetResponse(txt){
    txt = txt.replace(/ {2,}/g, " ").replace(/'/g, "").replace("telep", "telp").
    replace(/ss/g, "s").replace("met", "mat").replace("ll", "l").replace("suwon", "suwun").
    replace("ma kasi", "makasi").replace("pa kabar", "pakabar");
    alamat = "Alamat kami:<br>"+
    "Jl. Maluku No.33 Desa Cibelok Kecamatan Taman Kabupaten Pemalang, Jawa Tengah.";
    let jwb = ["pikir dulu sebelum nulis.", 
    "ngga usah ragu tulis saja yang jelas.", 
    "kami tunggu pertanyaanmu yang spesifik.", 
    "tulis info spesifik yang anda perlukan.", 
    "ketik masalah spesifik yang ingin anda tanyakan."];
    prdk = "<ul><li><b>Herbal</b>: minuman tradisional.</li><li><b>Kuliner</b>: olahan berbahan daging ayam dan entog.</li>"+
        "<li><b>Bakery</b>: kue, roti dan bolen.</li></ul>";
    jasa = "<ul><li><b>Pembuatan software</b> database.</li><li><b>Pembuatan website</b> interaktif.</li><li><b>Pelatihan/kursus IT</b>.</li></ul>";
    sila = "Silakan ketik info yang anda butuhkan.";
    rspn1 = "";
    rspn2 = "Ada yang bisa saya bantu?";
    if (ada(["asalamualaikum"],txt)){ rspn1 = "Wa'alaikumussalam warahmatullahi wabarakatuh. " }
    if (ada(["halo","helo"],txt)){ rspn1 += "Iya halo. "; }
    if (ada(["hai","hei"],txt)){ rspn1 += "Hai juga. "; }
    if (ada(["mat pagi"],txt)){ rspn1 += "Selamat pagi juga. " }
    if (ada(["mat sian"],txt)) { rspn1 += "Selamat siang juga. " }
    if (ada(["mat sore"],txt)) { rspn1 += "Selamat sore juga. " }
    if (ada(["mat mala"],txt)) { rspn1 += "Selamat malam juga. " }
    if (ada(["pakaba","mana kaba"],txt)){ rspn1 += "Alhamdulillah baik-baik saja. "; }
    if (ada(["trim","makasi","matur","suwun"],txt)){ rspn1 += "Sama-sama. Semoga kami bisa membantu. "; rspn2 = ""; }
    if (rspn1==="") { 
        let nn = Math.ceil(Math.random() * 4);
        rspn1 = document.getElementById("greatings").innerHTML;
        rspn2 = "Maaf pesan tidak spesifik. Silakan " + jwb[nn]; 
    }
    // utk pertanyaan² serius...
    if (ada(["dagang","awar","layan"],txt)){
        rspn2 = "Kami melayani <b>Produk</b> dan <b>Jasa</b>. Silakan tulis apa yang ingin anda ketahui. ";}
    if (ada(["usaha","bidang"],txt)){
        rspn2 = "Kami berusaha di bidang <b>Produk</b> dan <b>Jasa</b>. Silakan tulis apa yang ingin anda ketahui. ";}
    if (ada(["produk"],txt)){ 
        rspn2 = "Produk kami adalah:"+prdk+sila;}
    if (ada(["jasa","mputer"],txt)){ 
        rspn2 = "Kami melayani jasa:"+jasa+sila;}
    if (ada(["produk"],txt) && ada(["jasa"],txt)){ 
        rspn2 = "Produk kami adalah:"+prdk+
        "dan jasa kami adalah:"+jasa+sila;}
    if (ada(["minuman","herbal"],txt)){ 
        rspn2 = "Produk minuman herbal kami adalah <b>Tjap Duo Kembar</b>: pegal linu, kunyit asam, manjakani, dll. Hub.081392084160. ";}
    if (ada(["kuliner"],txt)){ 
        rspn2 = "Produk kuliner kami adalah <b>Dapur Bu Dewi</b>: tongseng, rica-rica, dll. Hub.082132431402. ";}
    if (ada(["bakery","roti","kue","bolen"],txt)){ 
        rspn2 = "Produk bakery/jajanan kami adalah <b>Amar Bolen</b>: roti, bolen, dll. Hub.083825184570. ";}
    if (ada(["software"],txt)){ 
        rspn2 = "Software buatan kami bekerja di platform Windows. Kami bangun dengan Microsoft Visual Foxpro. "+
        "Fasilitas software bisa direquest seperti bisa diseting <b>multi-user</b>, ekspor data ke sheet excel, dll.<br>"+
        "Hubungi:081394641984. ";}
    if (ada(["website"],txt)){ 
        rspn2 = "Program website interaktif buatan kami dibangun dengan menggunakan HTML, CSS, PHP dan JavaScript, "+
        "bekerja sama dengan Internet Service Provider (ISP) sebagai penyedia domain (alamat website) dan hosting (server data). "+
        "Database yang kami pakai adalah database <b>SQL Server</b>. Hubungi:081394641984. ";}
    if (ada(["latih","train","rsus","privat","prifat"],txt)){
        rspn2 = "Pelatihan atau kursus IT bisa diikuti oleh siswa, pegawai atau umum dengan pilihan materi: Microsoft Office (Word dan Excel), pembuatan software dan "+
        "pembuatan website.<br>Hubungi:081394641984. ";}
    if (ada(["nomor","telp"," wa","whats","kontak"],txt)){
        rspn2 = "Nomor telpon/whatsapp:<br><ul><li>Jasa komputer: 081394641984</li><li>Produk herbal: 081392084160</li><li>Produk kuliner: 082132431402</li><li>Produk bakery: 083825184570</li></ul>";}
    if (ada(["jam oper","jam kerj","jam berap"],txt)){
        rspn2 = "Jam kerja kami fleksibel sesuai pesanan pelanggan/klien. Hari minggu kami tidak melayani.";}
    if (ada(["harga","biaya","ongkos"],txt)){
        rspn2 = "Untuk harga produk atau biaya jasa silakan hubungi langsung nomor telpong/whatsapp kontak masing-masing.";}
    if (ada(["deli","order"," do ","pesan","antar"],txt)){
        rspn2 = "Untuk produk bisa delivery order atau pesan diantar, bisa juga datang langsung ke tempat produksi. Silakan hubungi nomor telpong/whatsapp masing-masing produk.";}
    if (ada(["kemasan"],txt)){
        rspn2 = "Produk minuman herbal kemasan botol sedangkan produk kuliner kemasan mangkuk sterofom.";}
    if (ada(["produk"],txt) && ada(["lain"],txt) && !ada(["herbal"],txt) && !ada(["kuliner"],txt)){
        rspn2 = "Sementara ini kami hanya memproduksi minuman herbal, kuliner dan bakery.";}
    if (ada(["share","serlo","loc"],txt)){
        rspn2 = "<a href='https://maps.app.goo.gl/ZRk3L6Vtr73NkF2J8?g_st=ac'>Klik di sini untuk buka lokasi di Google Map</a>.";}
    if (ada(["profil"],txt)){ 
        rspn2 = "Kami adalah UMKM modal mandiri yang bergerak di bidang usaha produk dan jasa. "+
        "Produk kami berupa minuman herbal, kuliner dan bakery. Sedangkan jasa kami berupa developing program dan edukasi komputer. Kami sudah memulai usaha sejak tahun 2021."; }
    if (ada(["berdiri","didiri"],txt)){ rspn2 = "Usaha kami berdiri sejak tahun 2021."; }
    if (ada(["alamat","kantor","lokasi"],txt)){ rspn2 = alamat; }
    if (ada(["cabang"],txt)){ rspn2 = "Kami tidak buka cabang. "; }
    return rspn1 + "\n" + rspn2;
}
function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}
function ada(teks, t) {
    let regex = new RegExp("("+teks.join("|")+")", "i");
    return regex.test(t);
}
