export type ServiceIcon = 'box' | 'building' | 'briefcase' | 'truck' | 'wrap' | 'wrench' | 'warehouse';

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  icon: ServiceIcon;
  shortDescription: string;
  description: string;
  faqs: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: 'evden-eve-nakliyat',
    title: 'Evden Eve Nakliyat',
    icon: 'box',
    shortDescription:
      'Manisa ve tüm ilçelerinde eşyalarınız özenli paketleme ve deneyimli ekiple güvenle yeni adresinize taşınır.',
    description:
      'Evinizi taşımak stresli ve zahmetli bir süreç olabilir. Enes Nakliyat olarak yılların deneyimiyle, taşınma sürecinizin başından sonuna kadar tüm detaylarıyla ilgileniyor; ambalajlama, yükleme, taşıma ve yerleştirme adımlarının her birini özenle yönetiyoruz.\n\nEşyalarınızı kendi eşyalarımız gibi özenle taşıyan profesyonel ekibimiz, mobilyalarınızın demontaj ve montaj işlemlerini titizlikle gerçekleştirir, hassas eşyalarınızı özel ambalaj malzemeleriyle sararak güvence altına alır. Taşıma öncesinde ücretsiz keşif yaparak size net ve şeffaf bir fiyat teklifi sunuyoruz.',
    faqs: [
      {
        question: 'Evden eve nakliyat ne kadar sürede tamamlanır?',
        answer:
          'Ortalama bir ev taşıması, eşya miktarına ve mesafeye bağlı olarak genellikle 1 gün içinde tamamlanır.',
      },
      {
        question: 'Ücretsiz keşif nasıl yapılıyor?',
        answer:
          'Bizi arayarak veya WhatsApp üzerinden yazarak randevu oluşturabilirsiniz, ekibimiz adresinize gelerek yerinde keşif yapar ve net fiyat verir.',
      },
      {
        question: 'Evden eve nakliyat fiyatları neye göre belirlenir?',
        answer:
          'Eşya miktarı, taşınacak mesafe, kat durumu ve talep edilen ek hizmetlere göre değişir. Ücretsiz keşif sonrası size net bir fiyat teklifi sunuyoruz.',
      },
    ],
  },
  {
    slug: 'asansorlu-nakliyat',
    title: 'Asansörlü Nakliyat',
    icon: 'building',
    shortDescription:
      'Yüksek katlı binalarda eşyalarınızı merdiven kullanmadan, hızlı ve hasarsız şekilde taşıyoruz.',
    description:
      'Özellikle yüksek katlı binalarda taşınma süreci zorlu ve zaman alıcı olabilir. Enes Nakliyat olarak asansörlü nakliyat hizmetimizle bu süreci kolaylaştırıyoruz: özel asansör sistemlerimiz sayesinde eşyalarınız binanın dış cephesinden doğrudan ve güvenle taşınır.\n\nBu yöntem merdivenlerden taşıma sırasında oluşabilecek çizilme, kırılma ve düşme risklerini ortadan kaldırırken, taşınma sürecini de büyük ölçüde hızlandırır. Modern ve yüksek taşıma kapasiteli asansör sistemlerimizle büyük ve ağır eşyalarınızı bile kolayca taşıyoruz.',
    faqs: [
      {
        question: 'Asansörlü nakliyat hangi durumlarda gereklidir?',
        answer:
          'Özellikle 3. kat ve üzeri, dar merdivenli veya merdiven boşluğu büyük eşyalara uygun olmayan binalarda asansörlü taşıma önerilir.',
      },
      {
        question: 'Asansörlü nakliyat fiyatları daha mı yüksek olur?',
        answer:
          'Merdivenden taşımaya kıyasla daha az iş gücü ve zaman gerektirdiği için genellikle maliyet avantajı sağlar; net fiyat için ücretsiz keşif hizmetimizden yararlanabilirsiniz.',
      },
    ],
  },
  {
    slug: 'ofis-tasimaciligi',
    title: 'Ofis Taşımacılığı',
    icon: 'briefcase',
    shortDescription:
      'İş sürekliliğinizi aksatmadan, planlı ve hızlı ofis taşıma çözümleri sunuyoruz.',
    description:
      'Ofis taşımacılığı, ev taşımacılığına göre daha fazla planlama ve koordinasyon gerektirir. İş sürekliliğinizi en az kesintiye uğratacak şekilde, mesai saatleri dışında veya hafta sonuna göre planlama yaparak süreci yönetiyoruz.\n\nOfis mobilyalarınız, elektronik cihazlarınız ve diğer ekipmanlarınız özel koruyucu malzemelerle paketlenir; demontaj ve montaj işlemleri uzman ekibimiz tarafından titizlikle gerçekleştirilir. Tüm taşımacılık işlemlerimiz sigorta güvencesi altındadır.',
    faqs: [
      {
        question: 'Ofis taşımasını hafta sonu yapabilir misiniz?',
        answer:
          'Evet, iş sürekliliğinizi etkilememesi için hafta sonu ve mesai sonrası taşıma planlaması yapabiliyoruz.',
      },
      {
        question: 'Elektronik cihazlarımız güvende mi?',
        answer:
          'Bilgisayar, sunucu ve diğer elektronik ekipmanlarınız özel koruyucu ambalaj malzemeleriyle paketlenir ve sigortalı olarak taşınır.',
      },
    ],
  },
  {
    slug: 'sehirlerarasi-nakliyat',
    title: 'Şehirlerarası Nakliyat',
    icon: 'truck',
    shortDescription:
      'Manisa\'dan Türkiye\'nin her iline güvenli, sigortalı ve takip edilebilir şehirlerarası taşımacılık.',
    description:
      "Manisa'dan Türkiye'nin her iline, modern ve geniş araç filomuzla güvenli taşımacılık hizmeti sunuyoruz. Taşınma öncesinde yaptığımız ücretsiz ekspertiz ile eşyalarınızı ve taşınma sürecini analiz ederek en uygun taşıma planını oluşturuyoruz.\n\nEşyalarınız kaliteli ambalaj malzemeleriyle özenle paketlenir, araçta özel ekipmanlarla sabitlenir ve varış noktasına kadar sigorta güvencesiyle taşınır. Taşıma sürecinin her aşamasında sizi bilgilendiriyoruz.",
    faqs: [
      {
        question: 'Şehirlerarası taşımada teslimat süresi ne kadar?',
        answer: 'Mesafeye bağlı olarak genellikle 1-3 gün içinde teslimat gerçekleştiriyoruz.',
      },
      {
        question: 'Uzun mesafeli taşımada eşyalarım nasıl korunuyor?',
        answer: 'Eşyalarınız özel ambalaj malzemeleriyle paketlenir, araç içinde sabitlenir ve sigorta güvencesiyle taşınır.',
      },
    ],
  },
  {
    slug: 'ambalaj-paketleme',
    title: 'Ambalaj & Paketleme',
    icon: 'wrap',
    shortDescription:
      'Kırılabilir ve hassas eşyalarınız, profesyonel ambalaj malzemeleriyle taşımaya hazır hale getirilir.',
    description:
      'Eşyalarınızın güvenli taşınması, doğru ambalajlama ve paketleme yöntemleriyle başlar. Dayanıklı karton kutular, balonlu naylon, streç film ve özel köşe koruyucularla her eşya türüne uygun paketleme yapıyoruz.\n\nCam, porselen, elektronik eşya ve mobilyalarınız tek tek özenle paketlenir. İsteğe bağlı olarak taşıma hizmeti almadan yalnızca ambalaj/paketleme desteği de alabilirsiniz.',
    faqs: [
      {
        question: 'Sadece paketleme hizmeti alabilir miyim?',
        answer: 'Evet, taşıma hizmeti almadan yalnızca ambalaj/paketleme desteği de sunuyoruz.',
      },
      {
        question: 'Hangi ambalaj malzemelerini kullanıyorsunuz?',
        answer: 'Dayanıklı karton kutular, balonlu naylon, streç film ve kırılabilir eşyalar için özel köşe koruyucular kullanıyoruz.',
      },
    ],
  },
  {
    slug: 'esya-depolama',
    title: 'Eşya Depolama',
    icon: 'warehouse',
    shortDescription:
      'Kısa veya uzun süreli depolama ihtiyaçlarınız için güvenli, kameralı ve düzenli kontrol edilen depolarımızda eşyalarınızı saklıyoruz.',
    description:
      'Taşınma sürecinde ya da ihtiyaç duyduğunuz herhangi bir dönemde eşyalarınızı güvenli ve temiz depolama alanlarımızda muhafaza ediyoruz. Depolama alanlarımız 7/24 güvenlik kameralarıyla izlenir ve düzenli olarak kontrol edilir.\n\nEşyalarınızı özenle paketleyerek depoluyor, istediğiniz süre boyunca güvenle saklamanızı sağlıyoruz. İhtiyaç duyduğunuzda kolayca ulaşabilir, geçici veya uzun süreli depolama seçeneklerinden size uygun olanı tercih edebilirsiniz.',
    faqs: [
      {
        question: 'Minimum depolama süresi var mı?',
        answer: 'Depolama hizmetimizi ihtiyacınıza göre kısa veya uzun süreli olarak sunuyoruz, size en uygun seçeneği birlikte belirleriz.',
      },
      {
        question: 'Depoladığım eşyalarıma ulaşabilir miyim?',
        answer: 'Evet, depoladığınız eşyalarınıza ihtiyaç duyduğunuzda kolayca ulaşabilirsiniz.',
      },
    ],
  },
  {
    slug: 'montaj-kurulum',
    title: 'Montaj ve Kurulum',
    icon: 'wrench',
    shortDescription:
      'Dolap, yatak ve mobilyalarınızın montajını uzman ekibimiz özenle tamamlar, yeni evinizde kurulum stresi yaşamazsınız.',
    description:
      'Taşınma sonrası dolap, gardırop, yatak, masa gibi mobilyalarınızın montaj ve kurulumunu deneyimli ekibimiz gerçekleştirir. Eşyalarınız yeni evinizde veya ofisinizde kullanıma hazır hale getirilir.\n\nİsterseniz taşıma hizmeti almadan yalnızca montaj desteği de alabilirsiniz; ekibimiz gerekli tüm alet ve ekipmanla adresinize gelip kurulumu baştan sona tamamlar.',
    faqs: [
      {
        question: 'Montaj hizmetini taşıma olmadan tek başına alabilir miyim?',
        answer: 'Evet, sadece montaj ve kurulum hizmeti almak isteyen müşterilerimize de hizmet veriyoruz.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
