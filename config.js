/* ============================================================
   PILOT GARAGE BODRUM - AYARLAR DOSYASI
   ------------------------------------------------------------
   TUM sitenin metin ve numaralarini BU dosyadan yonetirsiniz.
   Kaydettikten sonra tarayicida Ctrl+F5 ile yenilemek yeterlidir.
   ============================================================ */

window.PILOT_CONFIG = {
  // ------------------------------------------------------------
  // ILETISIM NUMARALARI
  // ------------------------------------------------------------

  // WhatsApp numarasi:
  //  - Basinda ulke kodu olacak (Turkiye icin 90)
  //  - Bosluk, parantez, tire KULLANMAYIN
  //  - Basindaki + isaretini YAZMAYIN
  //  - Ornek: 905321234567  (yani +90 532 123 45 67)
  whatsappNumber: "905324855189",

  // WhatsApp'a tiklandiginda otomatik gelen mesaj
  whatsappMessage:
    "Merhaba, Pilot Garage Bodrum için bilgi almak ve randevu oluşturmak istiyorum.",

  // Sabit / is telefonu (Hemen Ara butonlari icin)
  phoneNumber: "+902523170472",
  phoneDisplay: "0252 317 04 72",

  // ------------------------------------------------------------
  // GOOGLE PROFILI (Yorumlar bolumu icin)
  // ------------------------------------------------------------
  // Isletmenizin Google Haritalar / Google Business Profil linki.
  // Google Maps'te isletmenizi acin, "Paylas" -> "Baglantiyi kopyala".
  googleProfileUrl:
    "https://www.google.com/search?q=Pilot+Garage+Bodrum+Oto+Ekspertiz&stick=H4sIAAAAAAAAAONgkxIxNDa1NDExNzAxMzQ3NDI2N7KwtNzAyPiKUTMgMye_RME9sSgxPVXBKT-lqDRXwb8kX8E1u7ggtagks0ohKLUsM7W8eBEr8WoBR9GWV3MAAAA&rldimm=13594470461712372899#lkt=LocalPoiReviews",

  // Yorumlar sayfasina direkt gotursun diye:
  // Google Maps'te yorumunuzun uzerine tiklayip URL'yi kopyalayin.
  googleReviewsUrl:
    "https://www.google.com/search?q=Pilot+Garage+Bodrum+Oto+Ekspertiz&stick=H4sIAAAAAAAAAONgkxIxNDa1NDExNzAxMzQ3NDI2N7KwtNzAyPiKUTMgMye_RME9sSgxPVXBKT-lqDRXwb8kX8E1u7ggtagks0ohKLUsM7W8eBEr8WoBR9GWV3MAAAA&rldimm=13594470461712372899#lkt=LocalPoiReviews",

  googleRating: 4.9,        // Google'daki ortalama puan (ornek: 4.9)
  googleReviewCount: 120,   // Toplam yorum sayisi

  // Otomatik Google yorumlarini cekmek icin 3. parti widget (Elfsight/Trustindex vb.)
  // embed kodunu asagiya yapistirin. Bos birakirsaniz widget alani gosterilmez.
  // Ornek: "<div class=\"elfsight-app-xxxxxx\"></div><script src=\"https://static.elfsight.com/platform/platform.js\" async></script>"
  googleReviewsEmbed:
    '<script src="https://elfsightcdn.com/platform.js" async></script>' +
    '<div class="elfsight-app-9fc191af-c9a3-46ab-b71d-9af21aecdd5b" data-elfsight-app-lazy></div>',

  // ------------------------------------------------------------
  // KAMPANYA POP-UP
  // ------------------------------------------------------------
  popup: {
    enabled: false,                // Kapatmak icin: false  (acmak icin: true)
    title: "🎉 Özel Kampanya!",
    // HTML yazabilirsiniz (<strong>, <br> gibi etiketler calisir)
    body:
      "2500 ₺ başlayan hizmetlerle",
    ctaText: "WhatsApp'tan Yararlan",
    delaySeconds: 4,               // Kac saniye sonra gorunsun

    // Popup ne siklikla gosterilsin?
    //   "session"  -> Her ziyarette 1 kez (tarayici sekmesi acik oldugu surece tekrar cikmaz)  [ONERILIR]
    //   0          -> Her sayfa yuklenisinde cikar (agresif, sayfa degistirdikce bile cikar)
    //   1          -> Ayni kisiye 24 saatte 1 kez
    //   7          -> Haftada 1 kez
    cooldownDays: "session",
    whatsappMessage:
      "Merhaba, web sitesindeki özel kampanyadan yararlanmak istiyorum.",
  },

  // ------------------------------------------------------------
  // EKSPERTIZ PAKETLERI (hizmetler.html sayfasi icin)
  // ------------------------------------------------------------
  // PDF dosyalari site klasorunde olmali. "modal" acilinca icinde acilir.
  packages: [
    {
      key: "blackbox",
      name: "BLACKBOX",
      subtitle: "Temel Ekspertiz Paketi",
      description:
        "Aracın genel teknik durumunu hızlıca görmek isteyenler için temel kontrol paketi.",
      features: [
        "Motor genel kontrolü",
        "Boya-kaporta ön inceleme",
        "Fren ve süspansiyon kontrolü",
        "Dijital rapor",
      ],
      pdf: "BLACKBOX.pdf",
      accent: "#0b0b0b",
      popular: false,
    },
    {
      key: "business",
      name: "BUSINESS",
      subtitle: "Detaylı Ekspertiz Paketi",
      description:
        "İkinci el alım-satımda en çok tercih edilen, detaylı kontrolleri içeren iş paketi.",
      features: [
        "Full motor ve şanzıman kontrolü",
        "Mikronla boya kalınlık ölçümü",
        "Computest (elektronik tarama)",
        "Yol testi ve fren analizi",
        "Detaylı dijital rapor",
      ],
      pdf: "BUSINESS.pdf",
      accent: "#d90429",
      popular: true,
    },
    {
      key: "firstclass",
      name: "FIRSTCLASS",
      subtitle: "Premium Ekspertiz Paketi",
      description:
        "Üst segment araçlar için tam kapsamlı kontrol ve performans testlerini içeren premium paket.",
      features: [
        "Business paket içeriğinin tümü",
        "Dyno performans testi",
        "Detaylı şase analizi",
        "Klima ve elektrik sistem testi",
        "Öncelikli randevu",
      ],
      pdf: "FIRSTCLASS.pdf",
      accent: "#b8860b",
      popular: false,
    },
  ],
};
