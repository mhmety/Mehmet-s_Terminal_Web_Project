# 🚀 Terminal / Retro Temalı Kişisel Portfolyo & İş Takip Sistemi (CRUD)

Bu proje, modern web geliştirme prensipleri ve hiyerarşik veri yönetimi kavramlarını harmanlayarak geliştirilmiş, terminal/retro temalı dinamik bir kişisel portfolyo ve proje/iş takip otomasyonudur. Kullanıcıların ana projelerini listelemesine, yeni projeler eklemesine, mevcut kayıtları güncellemesine ve silmesine (CRUD) olanak tanır. Ayrıca her projenin altında dinamik alt adımlar (One-to-Many ilişkisi) oluşturulabilmekte ve bu adımlar terminal tarzında tamamlandı olarak işaretlenebilmektedir.

---

## 🎯 Proje Özellikleri & Karşılanan Kriterler

Eğitim programı çerçevesinde istenen tüm yönerge adımları ve teknik çıktılar proje kapsamında eksiksiz olarak uygulanmıştır:

* **Modern JavaScript Framework'ü:** Proje, bileşen tabanlı (Component-based) mimari kullanılarak **ReactJS** kütüphanesi ile geliştirilmiştir.
* **Hiyerarşik Dosya Ağacı Yapısı:** Projenin kaynak kodları, modülerliği ve sürdürülebilirliği artırmak adına `components` ve `pages` klasörleri altında yapılandırılmıştır.
* **Eksiksiz CRUD İşlemleri:** Sistem üzerinde ana projeler için;
    * **Create (Ekleme):** Yeni proje/kategori logu ekleme,
    * **Read (Listeleme):** Mevcut tüm aktif projeleri ve alt adımlarını dinamik listeleme,
    * **Update (Güncelleme):** Mevcut proje başlıklarını düzenleme,
    * **Delete (Silme):** Projeleri sistemden kaldırma işlemleri tıkır tıkır çalışmaktadır.
* **Gelişmiş Alt Görev (Sub-task) Yönetimi:** Her ana projenin yanında bulunan `▶ / ▼` ikonları ile hiyerarşik alt adımlar genişletilebilir, yeni adımlar eklenebilir, silinebilir veya tamamlandı `[✓]` olarak işaretlenebilir.
* **Kalıcı Veri Yönetimi (LocalStorage):** Tarayıcı hafızası (`LocalStorage`) entegrasyonu sayesinde, eklenen veya güncellenen tüm veriler sayfa yenilense dahi güvenle korunur.
* **Özgün Retro Tasarım (Tailwind CSS):** Görsel tasarım, klasik terminal arayüzlerinden esinlenerek **Tailwind CSS** kütüphanesiyle neon renk paleti, monospace fontlar ve özel kesikli alt çizgi efektleri kullanılarak pure retro konseptte hazırlanmıştır.

---

## 📂 Proje Dosya Yapısı

Yönergeye uygun olarak kurgulanan modüler klasör ağacı şu şekildedir:

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
4. Projeyi hiç indirmeden doğrudan canlı ortamda test etmek için [Netlify Canlı Önizleme](https://teal-souffle-c3b822.netlify.app/) bağlantısını kullanabilirsiniz.

---

## 📈 Proje Çıktıları & Kazanımlar

* HTML, CSS ve JavaScript temellerini gerçek hayat senaryosunda uygulama deneyimi.


* ReactJS bileşen mimarisi, state yönetimi ve asenkron veri akışları (LocalStorage) pekiştirildi.


* Modüler dosya ağacı oluşturma ve kod kalitesini artırma pratikleri.


* Proje klasörleri Git standartlarına uygun olarak yapılandırılarak başarıyla GitHub platformuna aktarıldı.
