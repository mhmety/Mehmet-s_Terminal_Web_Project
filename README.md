# 🚀 Terminal / Retro Temalı Kişisel Portfolyo & İş Takip Sistemi (CRUD)

[cite_start]Bu proje, modern web geliştirme prensipleri ve hiyerarşik veri yönetimi kavramlarını harmanlayarak geliştirilmiş, terminal/retro temalı dinamik bir kişisel portfolyo ve proje/iş takip otomasyonudur[cite: 2, 4]. [cite_start]Kullanıcıların ana projelerini listelemesine, yeni projeler eklemesine, mevcut kayıtları güncellemesine ve silmesine (CRUD) olanak tanır[cite: 20, 21, 22, 23]. Ayrıca her projenin altında dinamik alt adımlar (One-to-Many ilişkisi) oluşturulabilmekte ve bu adımlar terminal tarzında tamamlandı olarak işaretlenebilmektedir.

---

## 🎯 Proje Özellikleri & Karşılanan Kriterler

[cite_start]Eğitim programı çerçevesinde istenen tüm yönerge adımları ve teknik çıktılar proje kapsamında eksiksiz olarak uygulanmıştır[cite: 2, 3]:

* [cite_start]**Modern JavaScript Framework'ü:** Proje, bileşen tabanlı (Component-based) mimari kullanılarak **ReactJS** kütüphanesi ile geliştirilmiştir[cite: 6, 19].
* [cite_start]**Hiyerarşik Dosya Ağacı Yapısı:** Projenin kaynak kodları, modülerliği ve sürdürülebilirliği artırmak adına `components` ve `pages` klasörleri altında yapılandırılmıştır[cite: 14].
* **Eksiksiz CRUD İşlemleri:** Sistem üzerinde ana projeler için;
    * [cite_start]**Create (Ekleme):** Yeni proje/kategori logu ekleme[cite: 20],
    * [cite_start]**Read (Listeleme):** Mevcut tüm aktif projeleri ve alt adımlarını dinamik listeleme[cite: 21],
    * [cite_start]**Update (Güncelleme):** Mevcut proje başlıklarını düzenleme[cite: 22],
    * [cite_start]**Delete (Silme):** Projeleri sistemden kaldırma işlemleri tıkır tıkır çalışmaktadır[cite: 23].
* **Gelişmiş Alt Görev (Sub-task) Yönetimi:** Her ana projenin yanında bulunan `▶ / ▼` ikonları ile hiyerarşik alt adımlar genişletilebilir, yeni adımlar eklenebilir, silinebilir veya tamamlandı `[✓]` olarak işaretlenebilir.
* [cite_start]**Kalıcı Veri Yönetimi (LocalStorage):** Tarayıcı hafızası (`LocalStorage`) entegrasyonu sayesinde, eklenen veya güncellenen tüm veriler sayfa yenilense dahi güvenle korunur[cite: 5].
* [cite_start]**Özgün Retro Tasarım (Tailwind CSS):** Görsel tasarım, klasik terminal arayüzlerinden esinlenerek **Tailwind CSS** kütüphanesiyle neon renk paleti, monospace fontlar ve özel kesikli alt çizgi efektleri kullanılarak pure retro konseptte hazırlanmıştır[cite: 16].

---

## 📂 Proje Dosya Yapısı

[cite_start]Yönergeye uygun olarak kurgulanan modüler klasör ağacı şu şekildedir[cite: 14]:

```text
retro-portfolyo/
├── src/
│   ├── components/       # Yeniden kullanılabilir atomik bileşenler
│   │   ├── Header.jsx    # Terminal başlığı ve navigasyon alanı
│   │   ├── ItemForm.jsx  # Dinamik CRUD form bileşeni
│   │   └── ItemList.jsx  # Hiyerarşik listeleme ve alt görev mekanizması
│   ├── pages/            # Ana sayfa görünümleri
│   │   └── Home.jsx      # State yönetimi ve LocalStorage köprü alanı
│   ├── App.jsx           # Kök bileşen entegrasyonu
│   └── index.css         # Tailwind direktifleri ve global stil tanımları
├── index.html            # Canlı çalışan ana DOM iskeleti
├── tailwind.config.js    # Tailwind CSS tarama ve konfigürasyon ayarları
├── postcss.config.js     # CSS ön işleyici yapılandırması
└── .gitignore            # node_modules ve dist klasörlerini filtreleme dosyası

```

---

## 🛠️ Kullanılan Teknolojiler

* 
**HTML5 & CSS3** (Semantik etiketler ve modern yerleşimler) 


* 
**JavaScript (ES6+) & ReactJS (v18)** (State, Effect hookları ve dinamik JSX yönetimi) 


* 
**Tailwind CSS** (Utility-first framework ile hızlı ve performanslı stil yönetimi) 


* **Babel Compiler** (Tarayıcı tabanlı anlık JSX derleme mekanizması)

---

## 💻 Kurulum ve Yerel Çalıştırma

Proje, tarayıcıların yerel güvenlik politikalarına (CORS) takılmadan ve herhangi bir ağır paket yükü indirilmeden en hafif haliyle çalıştırılabilecek şekilde optimize edilmiştir.

1. Bu repository'yi bilgisayarınıza indirin veya `git clone` ile kopyalayın.
2. Projenin ana dizininde bulunan `index.html` dosyasına sağ tıklayarak **Live Server** ile veya tarayıcınız üzerinden doğrudan açın.
3. Proje yerel sunucunuzda (`http://localhost:5500`) anında canlıya geçecektir.

---

## 📈 Proje Çıktıları & Kazanımlar

* HTML, CSS ve JavaScript temellerini bütüncül bir gerçek hayat senaryosunda uygulama deneyimi kazanıldı.


* ReactJS bileşen mimarisi, state yönetimi ve asenkron veri akışları (LocalStorage) pekiştirildi.


* Modüler dosya ağacı oluşturma ve kod kalitesini artırma pratikleri geliştirildi.


* Proje klasörleri Git standartlarına uygun olarak yapılandırılarak başarıyla GitHub platformuna aktarıldı.
