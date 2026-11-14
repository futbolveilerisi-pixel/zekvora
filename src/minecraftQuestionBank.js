// ZEKVORA Minecraft soru havuzu
// correctIndex, options dizisindeki doğru cevabın 0 tabanlı indeksidir.
// Her katmanda 5 seçilmiş soru bulunur. Seçenekler oyun başında karıştırılabilir.

export const minecraftTiers = [
  {
    id: 1, name: 'Çok Kolay', firstLevel: 1, lastLevel: 5,
    questions: [
      { id: 'mc-001', text: "Minecraft'ta gece ortaya çıkan ve patlayan düşmanın adı nedir?", options: ['Creeper', 'İskelet', 'Zombi', 'Örümcek'], correctIndex: 0 },
      { id: 'mc-002', text: "Minecraft'ta ağaç kırınca temel olarak ne elde ederiz?", options: ['Demir', 'Odun kütüğü', 'Taş', 'Kömür'], correctIndex: 1 },
      { id: 'mc-003', text: "Minecraft'ta karakterin açlık göstergesi hangisidir?", options: ['Kalkanlar', 'Kalpler', 'But simgeleri', 'Zırh simgeleri'], correctIndex: 2 },
      { id: 'mc-004', text: "Minecraft'ta yatağın temel işlevlerinden biri nedir?", options: ['Elmas üretmek', 'Geceyi geçirmek', 'Maden kazmak', 'Eşya büyülemek'], correctIndex: 1 },
      { id: 'mc-005', text: "Minecraft'ta suyun içinde yaşayan, mürekkep bırakabilen canlı hangisidir?", options: ['İnek', 'Koyun', 'Mürekkep balığı', 'Tavuk'], correctIndex: 2 },
    ],
  },
  {
    id: 2, name: 'Kolay', firstLevel: 6, lastLevel: 10,
    questions: [
      { id: 'mc-006', text: "Minecraft'ta demir cevherini kullanılabilir demir külçesine çevirmek için genellikle ne kullanılır?", options: ['Üretim masası', 'Fırın', 'Örs', 'Dokuma tezgâhı'], correctIndex: 1 },
      { id: 'mc-007', text: "Minecraft'ta bir sandık yapmak için hangi malzeme kullanılır?", options: ['Demir külçesi', 'Taş tuğla', 'Odun kalasları', 'Cam blok'], correctIndex: 2 },
      { id: 'mc-008', text: "Minecraft'ta kemik unu bitkilerde genellikle ne işe yarar?", options: ['Bitkileri hızla büyütür', 'Bitkileri yok eder', 'Suyu dondurur', 'Canavarları uzaklaştırır'], correctIndex: 0 },
      { id: 'mc-009', text: "Minecraft'ta pusula normal şartlarda nereye yön gösterir?", options: ['Kuzeye', 'Güneye', 'Doğuya', 'Dünya doğuş noktasına'], correctIndex: 3 },
      { id: 'mc-010', text: "Minecraft'ta bir harita neyi görmene yardımcı olur?", options: ['Çevrenin ve keşfedilen alanların görünümünü', 'Gizli sandıkların tamamını', 'Tüm cevherlerin yerini', 'Canavarların canını'], correctIndex: 0 },
    ],
  },
  {
    id: 3, name: 'Kolay-Orta', firstLevel: 11, lastLevel: 15,
    questions: [
      { id: 'mc-011', text: "Minecraft'ta Nether portalını etkinleştirmek için genellikle ne kullanılır?", options: ['Kızıltaş meşalesi', 'Çakmak', 'Su kovası', 'Kemik unu'], correctIndex: 1 },
      { id: 'mc-012', text: "Minecraft'ta iksir hazırlamak için hangi istasyon kullanılır?", options: ['Demirci masası', 'İksir standı', 'Kesici taş', 'Dokuma tezgâhı'], correctIndex: 1 },
      { id: 'mc-013', text: "Minecraft'ta örs en çok hangi iş için kullanılır?", options: ['Eşyaları onarmak ve adlandırmak', 'Yemek pişirmek', 'Portal açmak', 'Bitki yetiştirmek'], correctIndex: 0 },
      { id: 'mc-014', text: "Minecraft'ta Ender Gözü hangi iki malzemenin birleşimiyle yapılır?", options: ['Elmas ve kömür', 'Blaze tozu ve Ender İncisi', 'Demir ve kızıltaş', 'Altın ve lapis lazuli'], correctIndex: 1 },
      { id: 'mc-015', text: "Minecraft'ta deniz fenerini etkinleştirmek için altında ne tür bir yapı gerekir?", options: ['Odun platformu', 'Cam kubbe', 'Uygun mineral bloklardan piramit', 'Taş merdiven'], correctIndex: 2 },
    ],
  },
  {
    id: 4, name: 'Orta', firstLevel: 16, lastLevel: 20,
    questions: [
      { id: 'mc-016', text: "Minecraft'ta bir Shulker Kutusu yapmak için hangi iki eşya gerekir?", options: ['Sandık ve obsidyen', 'Sandık ve Shulker kabukları', 'Varil ve Ender İncisi', 'Demir blok ve sandık'], correctIndex: 1 },
      { id: 'mc-017', text: "Minecraft'ta Elytra en yaygın olarak nerede bulunur?", options: ['Köy sandıklarında', 'End şehirlerindeki gemilerde', 'Nether kalelerinde', 'Maden kuyularında'], correctIndex: 1 },
      { id: 'mc-018', text: "Minecraft'ta bir gözlemci (Observer) hangi değişikliği algıladığında kızıltaş sinyali üretir?", options: ['Önündeki blok durumunda değişiklik olduğunda', 'Yakınında oyuncu uyuduğunda', 'Sadece gece olduğunda', 'Her zaman sürekli sinyal verir'], correctIndex: 0 },
      { id: 'mc-019', text: "Minecraft'ta deniz kalbinin (Heart of the Sea) temel kullanım alanı nedir?", options: ['Deniz feneri yapmak', 'Kanalizatör (Conduit) yapmak', 'Trident onarmak', 'Su kovası yapmak'], correctIndex: 1 },
      { id: 'mc-020', text: "Minecraft'ta büyü masasından en yüksek seviye seçeneklerini açmak için kaç kitaplık gerekir?", options: ['8', '12', '15', '20'], correctIndex: 2 },
    ],
  },
  {
    id: 5, name: 'Orta-Zor', firstLevel: 21, lastLevel: 25,
    questions: [
      { id: 'mc-021', text: "Minecraft'ta bir deniz kaplumbağasının yumurtaları genellikle nerede bırakılır?", options: ['Kum üzerinde', 'Taşın altında', 'Su altında magma bloğunda', 'Ağaç yapraklarında'], correctIndex: 0 },
      { id: 'mc-022', text: "Minecraft'ta bir Sculk Sensörünün titreşim algılamasını engellemek için hangi malzeme etkili biçimde kullanılabilir?", options: ['Yün', 'Cam', 'Demir', 'Buz'], correctIndex: 0 },
      { id: 'mc-023', text: "Minecraft'ta bir kaplumbağa yavrusu büyüdüğünde ne bırakabilir?", options: ['Kaplumbağa pulu', 'Prismarin kristali', 'Deniz kalbi', 'Slime topu'], correctIndex: 0 },
      { id: 'mc-024', text: "Minecraft'ta bir harita duvarı oluştururken haritalar genellikle hangi eşya üzerine yerleştirilir?", options: ['Kalkan', 'Eşya çerçevesi', 'Kitaplık', 'Basınç plakası'], correctIndex: 1 },
      { id: 'mc-025', text: "Minecraft'ta karşılaştırıcı (Redstone Comparator) hangi işlevi de yapabilir?", options: ['Sinyal gücünü karşılaştırmak', 'Oyuncuyu ışınlamak', 'Suyu dondurmak', 'Madenleri eritmek'], correctIndex: 0 },
    ],
  },
  {
    id: 6, name: 'Zor', firstLevel: 26, lastLevel: 30,
    questions: [
      { id: 'mc-026', text: "Minecraft'ta bir piston en fazla kaç blokluk bir zinciri doğrudan itebilir?", options: ['8', '10', '12', '16'], correctIndex: 2 },
      { id: 'mc-027', text: "Minecraft'ta Nether'daki mavi orman biyomunun İngilizce adı nedir?", options: ['Crimson Forest', 'Warped Forest', 'Soul Sand Valley', 'Basalt Deltas'], correctIndex: 1 },
      { id: 'mc-028', text: "Minecraft'ta bir zırh standı hangi malzemelerle yapılır?", options: ['6 çubuk ve 1 taş levha', '4 çubuk ve 3 demir külçesi', '6 demir külçesi ve 1 levha', '3 tahta kalas ve 2 çubuk'], correctIndex: 0 },
      { id: 'mc-029', text: "Minecraft'ta bir hedef bloğuna (Target Block) isabet eden mermi, kızıltaş sinyalini neye göre üretir?", options: ['Merminin hedefin merkezine ne kadar yakın olduğuna', 'Merminin rengine', 'Oyuncunun seviyesine', 'Günün saatine'], correctIndex: 0 },
      { id: 'mc-030', text: "Minecraft'ta bir feneri (Lantern) üretmek için hangi malzemeler gerekir?", options: ['Meşale ve demir külçecikler', 'Kömür ve cam', 'Kızıltaş ve altın', 'Alev çubuğu ve demir blok'], correctIndex: 0 },
    ],
  },
  {
    id: 7, name: 'Uzman', firstLevel: 31, lastLevel: 35,
    questions: [
      { id: 'mc-031', text: "Minecraft'ta bir redstone tekrarlayıcısı (Repeater) sinyali ne yapabilir?", options: ['Sinyali geciktirip yeniden güçlendirebilir', 'Suyu lav yapabilir', 'Blokları otomatik kırabilir', 'Oyuncuyu ışınlayabilir'], correctIndex: 0 },
      { id: 'mc-032', text: "Minecraft'ta bir kanalizatörün (Conduit) etkinleşmesi için çevresinde hangi blok türleri kullanılabilir?", options: ['Prismarin türleri ve deniz feneri blokları (sea lantern)', 'Yalnızca obsidyen', 'Yalnızca demir blok', 'Nether tuğlası'], correctIndex: 0 },
      { id: 'mc-033', text: "Minecraft'ta bir Sculk Katalizörü ne zaman çevresine sculk yayabilir?", options: ['Yakınında bir canlı öldüğünde ve deneyim düşürdüğünde', 'Yağmur başladığında', 'Bir sandık açıldığında', 'Oyuncu uyuduğunda'], correctIndex: 0 },
      { id: 'mc-034', text: "Minecraft'ta bir harita duvara yerleştirildiğinde haritanın kenarlığı için hangi eşya kullanılır?", options: ['Eşya çerçevesi', 'Kalkan', 'Büyülü kitap', 'Basınç plakası'], correctIndex: 0 },
      { id: 'mc-035', text: "Minecraft'ta Ender Ejderhası yenildiğinde genellikle hangi geçit açılır?", options: ['End geçidi (End Gateway)', 'Nether portalı', 'Antik şehir kapısı', 'Deniz anıtı geçidi'], correctIndex: 0 },
    ],
  },
  {
    id: 8, name: 'Profesör', firstLevel: 36, lastLevel: 40,
    questions: [
      { id: 'mc-036', text: "Minecraft'ta bir redstone karşılaştırıcısı, bir sandığın doluluk oranını nasıl sinyale dönüştürür?", options: ['Sandığın içindeki eşya sayısını doğrudan sinyal gücü yapar', 'Doluluk oranına göre 0–15 arasında sinyal üretir', 'Her dolu sandık için sabit 15 güç verir', 'Yalnızca sandık tamamen doluyken sinyal verir'], correctIndex: 1 },
      { id: 'mc-037', text: "Minecraft'ta Sculk Sensörü titreşimleri algılarken yün blokların önemli özelliği nedir?", options: ['Titreşimleri her durumda iki katına çıkarır', 'Titreşimlerin sensöre ulaşmasını engelleyebilir', 'Sensörün algılama menzilini sınırsız yapar', 'Sensörü otomatik olarak kırar'], correctIndex: 1 },
      { id: 'mc-038', text: "Minecraft'ta bir fenerin (Beacon) etkisinin ulaşabileceği seviye ve menzil hangi unsura bağlıdır?", options: ['Altındaki piramidin katman sayısına', 'Oyuncunun deneyim seviyesine', 'Dünyadaki gün sayısına', 'Yakındaki köylü sayısına'], correctIndex: 0 },
      { id: 'mc-039', text: "Minecraft'ta bir huni (Hopper), üstündeki eşyalara erişirken hangi temel işlemi yapar?", options: ['Eşyaları otomatik olarak büyüler', 'Eşyaları uygun envantere aktarır', 'Eşyaları deneyim puanına dönüştürür', 'Eşyaları yalnızca yakındaki oyuncuya verir'], correctIndex: 1 },
      { id: 'mc-040', text: "Minecraft'ta bir redstone tekrarlayıcısının gecikmesi hangi aralıkta ayarlanabilir?", options: ['1–4 redstone tiki aralığında', '1–10 saniye aralığında', 'Yalnızca 1 veya 2 tik', '0–15 güç aralığında'], correctIndex: 0 },
    ],
  },
  {
    id: 9, name: 'Minecraft Yetkilisi', firstLevel: 41, lastLevel: 45,
    questions: [
      { id: 'mc-041', text: "Minecraft'ta arka girişindeki sinyal gücü yan giriştekinden düşük olan bir karşılaştırıcı ne çıkış verir?", options: ['Arka sinyalin tamamını geçirir', 'Her zaman 15 güç verir', 'Çıkış sinyali vermez', 'Sinyali deneyim puanına çevirir'], correctIndex: 2 },
      { id: 'mc-042', text: "Minecraft'ta normal koşullarda bir huni, eşya aktarımı yaptıktan sonra kaç oyun tiki bekleme süresine girer?", options: ['4', '8', '10', '20'], correctIndex: 1 },
      { id: 'mc-043', text: "Minecraft'ta bir zombi köylü iyileştirildiğinde, oyuncuya uygulanan indirimlerle ilgili hangi ifade doğrudur?", options: ['İndirim her zaman yalnızca bir ticarette olur', 'İyileştirme ticaret fiyatlarında indirim sağlayabilir', 'İndirim yalnızca oyuncu elmas takarsa olur', 'İyileştirme köylünün mesleğini kalıcı olarak siler'], correctIndex: 1 },
      { id: 'mc-044', text: "Minecraft'ta bir redstone tekrarlayıcısı hangi sinyal davranışını sağlayabilir?", options: ['Sinyali yenileyip ayarlanabilir gecikme eklemek', 'Sinyali doğrudan deneyim puanına dönüştürmek', 'Sinyali yalnızca su altında iletmek', 'Sinyali her zaman tersine çevirmek'], correctIndex: 0 },
      { id: 'mc-045', text: "Minecraft'ta bir gözlemcinin çıkış sinyali hangi durumda oluşur?", options: ['Algıladığı blok durumunda değişiklik olduğunda', 'Yakınında bir oyuncu envanter açtığında', 'Yalnızca yağmur başladığında', 'Her zaman sürekli olarak'], correctIndex: 0 },
    ],
  },
  {
    id: 10, name: 'Mojang', firstLevel: 46, lastLevel: 50,
    questions: [
      { id: 'mc-046', text: "Nether'da 1 blok ilerlemek, Overworld koordinatlarında yatay yönde kaç blokluk mesafeye karşılık gelir?", options: ['4 blok', '8 blok', '16 blok', '32 blok'], correctIndex: 1 },
      { id: 'mc-047', text: "Bir kızıltaş karşılaştırıcısı, dolu bir sandığın sinyal gücünü hesaplarken temel olarak neyi dikkate alır?", options: ['Yalnızca içindeki eşya yığınlarının sayısını', 'Sandığın toplam ağırlığını', 'Envanterinin eşya yığınlarına göre doluluk oranını', 'Sandığın kaç kez açıldığını'], correctIndex: 2 },
      { id: 'mc-048', text: "Kızıltaş tozu, normal bir sinyal kaynağından uzaklaştıkça sinyal gücünü nasıl değiştirir?", options: ['Her blokta 1 azalır', 'Her iki blokta 1 azalır', 'Her blokta 2 azalır', 'Sinyal gücü mesafeyle azalmaz'], correctIndex: 0 },
      { id: 'mc-049', text: "Bir deniz fenerinin (Beacon) en yüksek piramit seviyesi kaç katmandan oluşur?", options: ['2', '3', '4', '5'], correctIndex: 2 },
      { id: 'mc-050', text: "Bir kızıltaş tekrarlayıcısı, giriş sinyalini yeniden güçlendirmenin yanında hangi ayarı da sağlar?", options: ['Gecikmeyi 1–4 kızıltaş tiki arasında ayarlamak', 'Sinyalin rengini değiştirmek', 'Sinyali eşya olarak depolamak', 'Sinyali kalıcı olarak tersine çevirmek'], correctIndex: 0 },
    ],
  },
];

export function getMinecraftTierForLevel(level) {
  return minecraftTiers.find((tier) => level >= tier.firstLevel && level <= tier.lastLevel) ?? null;
}

function shuffle(items, random = Math.random) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Hazırladığı sorularda soru sırasını ve şıkları karıştırır.
 * Doğru cevap, şıklar karıştırıldıktan sonra yeniden hesaplanır.
 */
export function prepareMinecraftQuestions(level, random = Math.random) {
  const tier = getMinecraftTierForLevel(level);
  if (!tier) return [];

  return shuffle(tier.questions, random).map((question) => {
    const options = shuffle(
      question.options.map((text, index) => ({ text, correct: index === question.correctIndex })),
      random,
    );

    return {
      id: question.id,
      level,
      tierId: tier.id,
      tierName: tier.name,
      question: question.text,
      options: options.map((option) => option.text),
      correctIndex: options.findIndex((option) => option.correct),
    };
  });
}

// Geliştirme sırasında havuzdaki eksik veya bozuk soruları yakalamak için.
export function validateMinecraftQuestionBank() {
  const allQuestions = minecraftTiers.flatMap((tier) => tier.questions);
  const ids = allQuestions.map((question) => question.id);
  const errors = [];
  if (allQuestions.length !== 50) errors.push(`50 soru bekleniyordu, ${allQuestions.length} bulundu.`);
  if (new Set(ids).size !== ids.length) errors.push('Tekrarlanan soru ID’si bulundu.');
  for (const question of allQuestions) {
    if (!question.text?.trim()) errors.push(`${question.id}: soru metni boş.`);
    if (!Array.isArray(question.options) || question.options.length !== 4) errors.push(`${question.id}: tam 4 seçenek olmalı.`);
    if (!Number.isInteger(question.correctIndex) || question.correctIndex < 0 || question.correctIndex > 3) errors.push(`${question.id}: doğru cevap indeksi geçersiz.`);
  }
  return { valid: errors.length === 0, questionCount: allQuestions.length, errors };
}
