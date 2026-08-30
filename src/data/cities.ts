export interface City {
  slug: string;
  name: string;
  region: string;
  highlights: string[];
  intro: string;
}

export const cities: City[] = [
  {
    slug: 'yunusemre',
    name: 'Yunusemre',
    region: 'Manisa',
    highlights: ['Aynı gün taşıma', 'Asansörlü hizmet', 'Ücretsiz keşif'],
    intro:
      'Yunusemre\'nin her noktasında evden eve nakliyat, ofis taşımacılığı ve asansörlü nakliyat hizmeti veriyoruz. Ücretsiz keşif sonrası net fiyatla, planlı ve güvenli bir taşıma süreci sunuyoruz.',
  },
  {
    slug: 'sehzadeler',
    name: 'Şehzadeler',
    region: 'Manisa',
    highlights: ['Sigortalı taşımacılık', 'Profesyonel paketleme', 'Randevulu keşif'],
    intro:
      'Şehzadeler\'de ev ve ofis taşımalarında deneyimli ekibimizle yanınızdayız. Eşyalarınız özel ambalaj malzemeleriyle paketlenir, sigorta güvencesiyle yeni adresinize taşınır.',
  },
  {
    slug: 'saruhanli',
    name: 'Saruhanlı',
    region: 'Manisa',
    highlights: ['Şehirlerarası bağlantı', 'Esnek randevu saatleri', 'Şeffaf fiyatlandırma'],
    intro:
      'Saruhanlı\'da hem şehir içi hem şehirlerarası nakliyat ihtiyaçlarınız için hızlı ve güvenilir hizmet sunuyoruz.',
  },
  {
    slug: 'turgutlu',
    name: 'Turgutlu',
    region: 'Manisa',
    highlights: ['Geniş araç filosu', 'Hasarsız taşıma garantisi', 'Aynı gün keşif'],
    intro:
      'Turgutlu\'da ev ve iş yeri taşımalarınızda titizlikle çalışan, deneyimli bir ekiple hizmet veriyoruz.',
  },
  {
    slug: 'akhisar',
    name: 'Akhisar',
    region: 'Manisa',
    highlights: ['Uzun mesafe deneyimi', 'Profesyonel ambalajlama', 'Ücretsiz keşif'],
    intro:
      'Akhisar ve çevresinde evden eve nakliyat, ofis taşımacılığı ve ambalaj/paketleme hizmetlerimizle yanınızdayız.',
  },
];

export function getCityBySlug(slug: string) {
  return cities.find((city) => city.slug === slug);
}
