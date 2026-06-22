/**
 * ElectroStore - Enterprise Product Database
 * Source of truth for all electronic equipment inventory.
 */

const products = [
    // --- SMARTPHONES ---
    {
        id: "SP-001",
        name: "iPhone 15 Pro Max 256GB",
        category: "Smartphone",
        brand: "Apple",
        price: 22499000,
        stock: 14,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&auto=format&fit=crop&q=60",
        description: "Smartphone flagship Apple dengan chip A17 Pro bionik, rangka titanium kelas dirgantara, sistem kamera telefoto 5x tercanggih, dan daya tahan baterai luar biasa."
    },
    {
        id: "SP-002",
        name: "Samsung Galaxy S25 Ultra",
        category: "Smartphone",
        brand: "Samsung",
        price: 24999000,
        stock: 8,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=60",
        description: "Era baru mobile AI dengan Galaxy AI terintegrasi. Kamera 200MP super quad-telephoto, chipset Snapdragon 8 Gen 4, dan S-Pen internal eksklusif."
    },
    {
        id: "SP-003",
        name: "Xiaomi 15 Ultra Pro",
        category: "Smartphone",
        brand: "Xiaomi",
        price: 16499000,
        stock: 5,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60",
        description: "Kolaborasi optik profesional Leica Generasi Terbaru. Sensor masif 1-inci, layar berkurva mikro inovatif, dan sistem pendingin khusus IceLoop."
    },
    {
        id: "SP-004",
        name: "TECNO Pova 7 Pro 5G",
        category: "Smartphone",
        brand: "TECNO",
        price: 2999000,
        stock: 22,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60",
        description: "Smartphone gaming budget dengan baterai monster 6000mAh, pengisian cepat 70W Ultra Charge, dan desain panel belakang mecha futuristik berlampu LED."
    },
    {
        id: "SP-005",
        name: "TECNO Phantom V Fold 2",
        category: "Smartphone",
        brand: "TECNO",
        price: 14499000,
        stock: 3,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60",
        description: "Layar lipat premium yang ultra tipis. Layar utama AMOLED Fleksibel 7.85 inci LTPO, ditenagai MediaTek Dimensity 9000+ untuk produktivitas maksimal."
    },
    {
        id: "SP-006",
        name: "TECNO Camon 40 Pro",
        category: "Smartphone",
        brand: "TECNO",
        price: 4599000,
        stock: 12,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?w=500&auto=format&fit=crop&q=60",
        description: "Pelopor fotografi malam dengan sensor Sony IMX OIS Stabilizer, desain material kulit premium, dan chipset rendering visual mandiri."
    },
    {
        id: "SP-007",
        name: "TECNO Spark 30 Pro",
        category: "Smartphone",
        brand: "TECNO",
        price: 2199000,
        stock: 30,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format&fit=crop&q=60",
        description: "Performa harian andal dengan layar AMOLED 120Hz mulus, kamera utama 108MP jernih, dan speaker stereo ganda dts audio."
    },
    {
        id: "SP-008",
        name: "Infinix GT 30 Pro Cyber",
        category: "Smartphone",
        brand: "Infinix",
        price: 4899000,
        stock: 15,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=500&auto=format&fit=crop&q=60",
        description: "Smartphone gaming murni dengan sistem pendingin uap air, layar tanpa bezel, dan kustomisasi gaming internal xOS khusus."
    },
    {
        id: "SP-009",
        name: "Infinix Note 50 Pro+",
        category: "Smartphone",
        brand: "Infinix",
        price: 3699000,
        stock: 18,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1573148195900-7845dcb9b127?w=500&auto=format&fit=crop&q=60",
        description: "Desain lengkung 3D premium tertipis di kelasnya, kamera 108MP OIS ultra jernih, dan 100W All-Round FastCharge aman."
    },
    {
        id: "SP-010",
        name: "Infinix Hot 50 Pro+ 4G",
        category: "Smartphone",
        brand: "Infinix",
        price: 2499000,
        stock: 25,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1533228894584-a1e947f66a9a?w=500&auto=format&fit=crop&q=60",
        description: "Pilihan terbaik harian mahasiswa dengan layar punch hole modern, prosesor Helio G100 responsif, dan baterai awet 5000mAh."
    },
    {
        id: "SP-011",
        name: "itel S25 Ultra Sleek",
        category: "Smartphone",
        brand: "itel",
        price: 2199000,
        stock: 40,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60",
        description: "Layar lengkung AMOLED mewah dengan harga terjangkau, proteksi Gorilla Glass, dan bodi belakang anti sidik jari."
    },
    {
        id: "SP-012",
        name: "itel RS4 Gaming Edition",
        category: "Smartphone",
        brand: "itel",
        price: 1799000,
        stock: 35,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60",
        description: "Kolaborasi gaming resmi dengan RAM masif, pengisian daya cepat bypass charging langsung ke mainboard tanpa panas berlebih."
    },
    {
        id: "SP-013",
        name: "Samsung Galaxy A56 5G",
        category: "Smartphone",
        brand: "Samsung",
        price: 6499000,
        stock: 16,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?w=500&auto=format&fit=crop&q=60",
        description: "Sistem keamanan tangguh Samsung Knox Vault, ketahanan air dan debu bersertifikat IP67, serta pembaruan OS jangka panjang hingga 5 tahun."
    },
    {
        id: "SP-014",
        name: "Samsung Galaxy Z Fold7 AI",
        category: "Smartphone",
        brand: "Samsung",
        price: 28999000,
        stock: 4,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60",
        description: "Inovasi engsel lipat tertipis bebas lipatan. Performa multitasking 3 window simultan kelas workstation bertenaga AI mutakhir."
    },
    {
        id: "SP-015",
        name: "Redmi Note 14 Pro 5G",
        category: "Smartphone",
        brand: "Xiaomi",
        price: 4399000,
        stock: 20,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60",
        description: "Ketahanan ekstrem terhadap benturan dengan Corning Gorilla Glass Victus 2, kamera resolusi tinggi 200MP OIS, dan layar kristal AMOLED."
    },
    {
        id: "SP-016",
        name: "POCO X7 Pro Performance",
        category: "Smartphone",
        brand: "Xiaomi",
        price: 5299000,
        stock: 14,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=500&auto=format&fit=crop&q=60",
        description: "Monster performa kelas menengah dengan chipset MediaTek Dimensity flagship grade, optimasi WildBoost Gaming, dan layar datar responsif."
    },
    {
        id: "SP-017",
        name: "OPPO Find X8 Pro Cinematic",
        category: "Smartphone",
        brand: "OPPO",
        price: 15999000,
        stock: 7,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format&fit=crop&q=60",
        description: "Sistem kamera telefoto periskop ganda revolusioner, pemrosesan gambar mesin ultra klip, dan bodi tipis bertekstur gelombang kosmik."
    },
    {
        id: "SP-018",
        name: "OPPO Reno14 Pro 5G",
        category: "Smartphone",
        brand: "OPPO",
        price: 8499000,
        stock: 11,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?w=500&auto=format&fit=crop&q=60",
        description: "Ahli potret wajah bertenaga AI Studio. Menghasilkan efek bokeh optik setara kamera DSLR profesional profesional."
    },
    {
        id: "SP-019",
        name: "OPPO A5 Pro Premium",
        category: "Smartphone",
        brand: "OPPO",
        price: 3199000,
        stock: 25,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1573148195900-7845dcb9b127?w=500&auto=format&fit=crop&q=60",
        description: "Desain cantik bodi kaca premium tahan gores, teknologi ekspansi RAM hingga 16GB, dan ketahanan baterai kesehatan optimal 4 tahun."
    },
    {
        id: "SP-020",
        name: "vivo X200 Pro Zeiss",
        category: "Smartphone",
        brand: "vivo",
        price: 16999000,
        stock: 6,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60",
        description: "Teknologi lapisan lensa optik T* Zeiss legendaris Jerman. Chip ISP visual kustom Vivo V4, menghasilkan akurasi warna mutlak."
    },
    {
        id: "SP-021",
        name: "vivo V50 5G Aura Light",
        category: "Smartphone",
        brand: "vivo",
        price: 6599000,
        stock: 15,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1533228894584-a1e947f66a9a?w=500&auto=format&fit=crop&q=60",
        description: "Fitur andalan pencahayaan potret Aura Light 3.0 cerdas dengan kontrol suhu warna otomatis, bodi ramping kristal mewah."
    },
    {
        id: "SP-022",
        name: "vivo Y39 5G Power",
        category: "Smartphone",
        brand: "vivo",
        price: 2799000,
        stock: 20,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format&fit=crop&q=60",
        description: "Konektivitas stabil 5G berkecepatan tinggi, speaker super keras tingkat volume 300%, bodi ramping bersudut tegas trendi."
    },

    // --- LAPTOPS ---
    {
        id: "LP-001",
        name: "ASUS ROG Strix G18 AMD",
        category: "Laptop",
        brand: "ASUS",
        price: 35999000,
        stock: 5,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop&q=60",
        description: "Laptop gaming ekstrem layar 18 inci Nebula QHD+ 240Hz, ditenagai AMD Ryzen 9 kelas atas dan GPU NVIDIA RTX 4080."
    },
    {
        id: "LP-002",
        name: "ASUS ROG Zephyrus G16 OLED",
        category: "Laptop",
        brand: "ASUS",
        price: 41999000,
        stock: 4,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60",
        description: "Laptop kreator tertipis di dunia berbahan aluminium CNC presisi tinggi dengan layar menakjubkan ROG Nebula OLED."
    },
    {
        id: "LP-003",
        name: "ASUS TUF Gaming A15",
        category: "Laptop",
        brand: "ASUS",
        price: 15499000,
        stock: 12,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60",
        description: "Laptop gaming tangguh standar militer MIL-STD-810H, kartu grafis RTX 4050, dan efisiensi daya baterai Ryzen super awet."
    },
    {
        id: "LP-004",
        name: "ASUS Zenbook 14 OLED",
        category: "Laptop",
        brand: "ASUS",
        price: 18299000,
        stock: 8,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&auto=format&fit=crop&q=60",
        description: "Ultrabook premium super ringan seberat 1.2kg dengan panel layar ASUS Lumina OLED 3K, ditenagai Intel Core Ultra dengan NPU AI internal."
    },
    {
        id: "LP-005",
        name: "MacBook Air M4 13-inch",
        category: "Laptop",
        brand: "Apple",
        price: 19499000,
        stock: 15,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60",
        description: "Desain tanpa kipas ultra sunyi bertenaga arsitektur chip Apple M4. Dukungan Apple Intelligence penuh, daya tahan baterai hingga 18 jam."
    },
    {
        id: "LP-006",
        name: "Lenovo Legion Pro 7i Ultimate",
        category: "Laptop",
        brand: "Lenovo",
        price: 45499000,
        stock: 3,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop&q=60",
        description: "Puncak laptop gaming bertenaga Intel Core i9 Generasi ke-14, kartu grafis diskrit kencang RTX 4090, dan pendingin logam cair cair."
    },
    {
        id: "LP-007",
        name: "Lenovo Legion 5 Slim",
        category: "Laptop",
        brand: "Lenovo",
        price: 22999000,
        stock: 7,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60",
        description: "Keseimbangan sempurna antara portabilitas tipis dan performa gaming tangguh berkat arsitektur termal termal dual-fan Coldfront."
    },
    {
        id: "LP-008",
        name: "Lenovo LOQ 15 Gaming AI",
        category: "Laptop",
        brand: "Lenovo",
        price: 12999000,
        stock: 14,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60",
        description: "Gerbang masuk dunia PC gaming hardcore dilengkapi chip AI Lenovo LA1 core khusus untuk mengoptimalkan frame rate (FPS) otomatis."
    },
    {
        id: "LP-009",
        name: "Lenovo ThinkPad E14 Business",
        category: "Laptop",
        brand: "Lenovo",
        price: 14299000,
        stock: 20,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&auto=format&fit=crop&q=60",
        description: "Legenda laptop korporat tangguh dengan keyboard terbaik di dunia kelas industri, enkripsi dTPM 2.0, dan trackpoint ikonik merah."
    },
    {
        id: "LP-010",
        name: "Acer Predator Helios Neo 16",
        category: "Laptop",
        brand: "Acer",
        price: 24499000,
        stock: 6,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop&q=60",
        description: "Sistem pendingin mutakhir kipas AeroBlade 3D generasi ke-5 berbilah besi logam, layar jernih sRGB 100%, performa grafis tinggi."
    },
    {
        id: "LP-011",
        name: "Acer Nitro V 15 Streamer",
        category: "Laptop",
        brand: "Acer",
        price: 10999000,
        stock: 19,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60",
        description: "Laptop pilihan gamer kasual dan pembuat konten pemula dengan kombinasi pas Intel Core i5 dan Nvidia RTX 2050/3050."
    },
    {
        id: "LP-012",
        name: "HP Victus 15 Ryzen Edition",
        category: "Laptop",
        brand: "HP",
        price: 11499000,
        stock: 13,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60",
        description: "Desain minimalis elegan tanpa kesan gaming berlebih, ventilasi udara belakang masif lebar, sangat nyaman untuk mengetik tugas kantor."
    },
    {
        id: "LP-013",
        name: "HP Omen 16 Professional",
        category: "Laptop",
        brand: "HP",
        price: 29499000,
        stock: 4,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop&q=60",
        description: "Teknologi pendinginan internal OMEN Tempest Cooling canggih, audio teretalase kustom Bang & Olufsen premium, kinerja komputasi mutakhir."
    },

    // --- ACCESSORIES ---
    {
        id: "AC-001",
        name: "Apple AirPods Pro Generasi 2",
        category: "Aksesoris",
        brand: "Apple",
        price: 3899000,
        stock: 40,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1588449668338-d1517824e44e?w=500&auto=format&fit=crop&q=60",
        description: "Peredam Kebisingan Aktif (ANC) 2x lebih cerdas dibanding pendahulunya, Audio Spasial personal terpersonalisasi pelacakan kepala."
    },
    {
        id: "AC-002",
        name: "Samsung Galaxy Buds3 Pro AI",
        category: "Aksesoris",
        brand: "Samsung",
        price: 3299000,
        stock: 35,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60",
        description: "Desain bilah lampu LED futuristik, codec audio Hi-Fi 24bit fidelitas ultra tinggi tanpa distorsi suara, optimasi akustik Galaxy AI."
    },
    {
        id: "AC-003",
        name: "Apple Watch Series 10 GPS",
        category: "Aksesoris",
        brand: "Apple",
        price: 7999000,
        stock: 18,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&auto=format&fit=crop&q=60",
        description: "Layar OLED melengkung terluas tipis, sensor pelacakan kebugaran medis elektrokardiogram (EKG), notifikasi gangguan tidur otomatis."
    },
    {
        id: "AC-004",
        name: "Anker Prime 20000mAh 200W",
        category: "Aksesoris",
        brand: "Anker",
        price: 1899000,
        stock: 50,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1609592424085-f5da4993bc91?w=500&auto=format&fit=crop&q=60",
        description: "Powerbank daya raksasa dengan keluaran pengisian ultra cepat 200W simultan multi port, layar digital monitoring sisa daya presisi."
    }
];