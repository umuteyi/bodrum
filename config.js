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
  mobilePhoneNumber: "+905324855189",
  mobilePhoneDisplay: "+90 532 485 51 89",

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
      key: "business",
      name: "BUSINESS",
      subtitle: "Başlangıç Ekspertiz Paketi",
      description:
        "Standart kontrollerle aracın genel durumunu görmek isteyenler için giriş seviyesi paket.",
      features: [
        "Motor genel kontrolü",
        "Boya-kaporta ön inceleme",
        "Fren ve süspansiyon kontrolü",
        "Dijital rapor",
      ],
      pdf: "BUSINESS.pdf",
      accent: "#d90429",
      popular: false,
    },
    {
      key: "firstclass",
      name: "FIRSTCLASS",
      subtitle: "Gelişmiş Ekspertiz Paketi",
      description:
        "Business paketine ek ileri testler ve detaylı analizler içeren orta-üst seviye paket.",
      features: [
        "Business paket içeriğinin tümü",
        "Mikronla boya kalınlık ölçümü",
        "Computest (elektronik tarama)",
        "Yol testi ve fren analizi",
        "Detaylı dijital rapor",
      ],
      pdf: "FIRSTCLASS.pdf",
      accent: "#b8860b",
      popular: true,
    },
    {
      key: "blackbox",
      name: "BLACKBOX",
      subtitle: "Maksimum Ekspertiz Paketi",
      description:
        "En kapsamlı kontrol ve performans testlerini isteyenler için en detaylı ekspertiz paketi.",
      features: [
        "Firstclass paket içeriğinin tümü",
        "Dyno performans testi",
        "Detaylı şase analizi",
        "Klima ve elektrik sistem testi",
        "Öncelikli randevu",
      ],
      pdf: "BLACKBOX.pdf",
      accent: "#0b0b0b",
      popular: false,
    },
  ],
};
