import { useEffect, useRef, useState } from 'react';
import { supabase } from './supabase';
import './App.css';

const games = [
  { id: 'minecraft', name: 'Minecraft', short: 'MC', logo: '/logos/minecraft-grass.png', locked: false },
  { id: 'csgo', name: 'CS:GO', short: 'CS', logo: 'https://cdn.simpleicons.org/counterstrike/ffffff', locked: true },
  { id: 'valorant', name: 'VALORANT', short: 'V', logo: 'https://cdn.simpleicons.org/valorant/ffffff', locked: true },
  { id: 'brawl', name: 'Brawl Stars', short: 'BS', logo: '/logos/brawl-stars.svg', locked: true },
];

const questionBank = [
  {
    question: "Minecraft'ta gece ortaya çıkan ve patlayan düşmanın adı nedir?",
    options: ['Creeper', 'İskelet', 'Zombi', 'Örümcek'],
    correct: 'Creeper',
  },
  {
    question: "Minecraft'ta ağaç kırınca temel olarak ne elde ederiz?",
    options: ['Demir', 'Odun kütüğü', 'Taş', 'Kömür'],
    correct: 'Odun kütüğü',
  },
  {
    question: "Minecraft'ta karakterin açlık göstergesi hangisidir?",
    options: ['Kalkanlar', 'Kalpler', 'But simgeleri', 'Zırh simgeleri'],
    correct: 'But simgeleri',
  },
  {
    question: "Minecraft'ta yatağın temel işlevlerinden biri nedir?",
    options: ['Elmas üretmek', 'Geceyi geçirmek', 'Maden kazmak', 'Eşya büyülemek'],
    correct: 'Geceyi geçirmek',
  },
  {
    question: "Minecraft'ta suyun içinde yaşayan, mürekkep bırakabilen canlı hangisidir?",
    options: ['İnek', 'Koyun', 'Mürekkep balığı', 'Tavuk'],
    correct: 'Mürekkep balığı',
  },
  {
    question: "Minecraft'ta demir cevherini kullanılabilir demir külçesine çevirmek için genellikle ne kullanılır?",
    options: ['Üretim masası', 'Fırın', 'Örs', 'Dokuma tezgâhı'],
    correct: 'Fırın',
  },
  {
    question: "Minecraft'ta bir sandık yapmak için hangi malzeme kullanılır?",
    options: ['Demir külçesi', 'Taş tuğla', 'Odun kalasları', 'Cam blok'],
    correct: 'Odun kalasları',
  },
  {
    question: "Minecraft'ta kemik unu bitkilerde genellikle ne işe yarar?",
    options: ['Bitkileri hızla büyütür', 'Bitkileri yok eder', 'Suyu dondurur', 'Canavarları uzaklaştırır'],
    correct: 'Bitkileri hızla büyütür',
  },
  {
    question: "Minecraft'ta pusula normal şartlarda nereye yön gösterir?",
    options: ['Kuzeye', 'Güneye', 'Doğuya', 'Dünya doğuş noktasına'],
    correct: 'Dünya doğuş noktasına',
  },
  {
    question: "Minecraft'ta bir harita neyi görmene yardımcı olur?",
    options: ['Çevrenin ve keşfedilen alanların görünümünü', 'Gizli sandıkların tamamını', 'Tüm cevherlerin yerini', 'Canavarların canını'],
    correct: 'Çevrenin ve keşfedilen alanların görünümünü',
  },
  {
    question: "Minecraft'ta Nether portalını etkinleştirmek için genellikle ne kullanılır?",
    options: ['Kızıltaş meşalesi', 'Çakmak', 'Su kovası', 'Kemik unu'],
    correct: 'Çakmak',
  },
  {
    question: "Minecraft'ta iksir hazırlamak için hangi istasyon kullanılır?",
    options: ['Demirci masası', 'İksir standı', 'Kesici taş', 'Dokuma tezgâhı'],
    correct: 'İksir standı',
  },
  {
    question: "Minecraft'ta örs en çok hangi iş için kullanılır?",
    options: ['Eşyaları onarmak ve adlandırmak', 'Yemek pişirmek', 'Portal açmak', 'Bitki yetiştirmek'],
    correct: 'Eşyaları onarmak ve adlandırmak',
  },
  {
    question: "Minecraft'ta Ender Gözü hangi iki malzemenin birleşimiyle yapılır?",
    options: ['Elmas ve kömür', 'Blaze tozu ve Ender İncisi', 'Demir ve kızıltaş', 'Altın ve lapis lazuli'],
    correct: 'Blaze tozu ve Ender İncisi',
  },
  {
    question: "Minecraft'ta deniz fenerini etkinleştirmek için altında ne tür bir yapı gerekir?",
    options: ['Odun platformu', 'Cam kubbe', 'Uygun mineral bloklardan piramit', 'Taş merdiven'],
    correct: 'Uygun mineral bloklardan piramit',
  },
  {
    question: "Minecraft'ta bir Shulker Kutusu yapmak için hangi iki eşya gerekir?",
    options: ['Sandık ve obsidyen', 'Sandık ve Shulker kabukları', 'Varil ve Ender İncisi', 'Demir blok ve sandık'],
    correct: 'Sandık ve Shulker kabukları',
  },
  {
    question: "Minecraft'ta Elytra en yaygın olarak nerede bulunur?",
    options: ['Köy sandıklarında', 'End şehirlerindeki gemilerde', 'Nether kalelerinde', 'Maden kuyularında'],
    correct: 'End şehirlerindeki gemilerde',
  },
  {
    question: "Minecraft'ta bir gözlemci (Observer) hangi değişikliği algıladığında kızıltaş sinyali üretir?",
    options: ['Önündeki blok durumunda değişiklik olduğunda', 'Yakınında oyuncu uyuduğunda', 'Sadece gece olduğunda', 'Her zaman sürekli sinyal verir'],
    correct: 'Önündeki blok durumunda değişiklik olduğunda',
  },
  {
    question: "Minecraft'ta deniz kalbinin (Heart of the Sea) temel kullanım alanı nedir?",
    options: ['Deniz feneri yapmak', 'Kanalizatör (Conduit) yapmak', 'Trident onarmak', 'Su kovası yapmak'],
    correct: 'Kanalizatör (Conduit) yapmak',
  },
  {
    question: "Minecraft'ta büyü masasından en yüksek seviye seçeneklerini açmak için kaç kitaplık gerekir?",
    options: ['8', '12', '15', '20'],
    correct: '15',
  },
  {
    question: "Minecraft'ta bir deniz kaplumbağasının yumurtaları genellikle nerede bırakılır?",
    options: ['Kum üzerinde', 'Taşın altında', 'Su altında magma bloğunda', 'Ağaç yapraklarında'],
    correct: 'Kum üzerinde',
  },
  {
    question: "Minecraft'ta bir Sculk Sensörünün titreşim algılamasını engellemek için hangi malzeme etkili biçimde kullanılabilir?",
    options: ['Yün', 'Cam', 'Demir', 'Buz'],
    correct: 'Yün',
  },
  {
    question: "Minecraft'ta bir kaplumbağa yavrusu büyüdüğünde ne bırakabilir?",
    options: ['Kaplumbağa pulu', 'Prismarin kristali', 'Deniz kalbi', 'Slime topu'],
    correct: 'Kaplumbağa pulu',
  },
  {
    question: "Minecraft'ta bir harita duvarı oluştururken haritalar genellikle hangi eşya üzerine yerleştirilir?",
    options: ['Kalkan', 'Eşya çerçevesi', 'Kitaplık', 'Basınç plakası'],
    correct: 'Eşya çerçevesi',
  },
  {
    question: "Minecraft'ta karşılaştırıcı (Redstone Comparator) hangi işlevi de yapabilir?",
    options: ['Sinyal gücünü karşılaştırmak', 'Oyuncuyu ışınlamak', 'Suyu dondurmak', 'Madenleri eritmek'],
    correct: 'Sinyal gücünü karşılaştırmak',
  },
  {
    question: "Minecraft'ta bir piston en fazla kaç blokluk bir zinciri doğrudan itebilir?",
    options: ['8', '10', '12', '16'],
    correct: '12',
  },
  {
    question: "Minecraft'ta Nether'daki mavi orman biyomunun İngilizce adı nedir?",
    options: ['Crimson Forest', 'Warped Forest', 'Soul Sand Valley', 'Basalt Deltas'],
    correct: 'Warped Forest',
  },
  {
    question: "Minecraft'ta bir zırh standı hangi malzemelerle yapılır?",
    options: ['6 çubuk ve 1 taş levha', '4 çubuk ve 3 demir külçesi', '6 demir külçesi ve 1 levha', '3 tahta kalas ve 2 çubuk'],
    correct: '6 çubuk ve 1 taş levha',
  },
  {
    question: "Minecraft'ta bir hedef bloğuna (Target Block) isabet eden mermi, kızıltaş sinyalini neye göre üretir?",
    options: ['Merminin hedefin merkezine ne kadar yakın olduğuna', 'Merminin rengine', 'Oyuncunun seviyesine', 'Günün saatine'],
    correct: 'Merminin hedefin merkezine ne kadar yakın olduğuna',
  },
  {
    question: "Minecraft'ta bir feneri (Lantern) üretmek için hangi malzemeler gerekir?",
    options: ['Meşale ve demir külçecikler', 'Kömür ve cam', 'Kızıltaş ve altın', 'Alev çubuğu ve demir blok'],
    correct: 'Meşale ve demir külçecikler',
  },
  {
    question: "Minecraft'ta bir redstone tekrarlayıcısı (Repeater) sinyali ne yapabilir?",
    options: ['Sinyali geciktirip yeniden güçlendirebilir', 'Suyu lav yapabilir', 'Blokları otomatik kırabilir', 'Oyuncuyu ışınlayabilir'],
    correct: 'Sinyali geciktirip yeniden güçlendirebilir',
  },
  {
    question: "Minecraft'ta bir kanalizatörün (Conduit) etkinleşmesi için çevresinde hangi blok türleri kullanılabilir?",
    options: ['Prismarin türleri ve deniz feneri blokları (sea lantern)', 'Yalnızca obsidyen', 'Yalnızca demir blok', 'Nether tuğlası'],
    correct: 'Prismarin türleri ve deniz feneri blokları (sea lantern)',
  },
  {
    question: "Minecraft'ta bir Sculk Katalizörü ne zaman çevresine sculk yayabilir?",
    options: ['Yakınında bir canlı öldüğünde ve deneyim düşürdüğünde', 'Yağmur başladığında', 'Bir sandık açıldığında', 'Oyuncu uyuduğunda'],
    correct: 'Yakınında bir canlı öldüğünde ve deneyim düşürdüğünde',
  },
  {
    question: "Minecraft'ta bir harita duvara yerleştirildiğinde haritanın kenarlığı için hangi eşya kullanılır?",
    options: ['Eşya çerçevesi', 'Kalkan', 'Büyülü kitap', 'Basınç plakası'],
    correct: 'Eşya çerçevesi',
  },
  {
    question: "Minecraft'ta Ender Ejderhası yenildiğinde genellikle hangi geçit açılır?",
    options: ['End geçidi (End Gateway)', 'Nether portalı', 'Antik şehir kapısı', 'Deniz anıtı geçidi'],
    correct: 'End geçidi (End Gateway)',
  },
  {
    question: "Minecraft'ta bir redstone karşılaştırıcısı, bir sandığın doluluk oranını nasıl sinyale dönüştürür?",
    options: ['Sandığın içindeki eşya sayısını doğrudan sinyal gücü yapar', 'Doluluk oranına göre 0–15 arasında sinyal üretir', 'Her dolu sandık için sabit 15 güç verir', 'Yalnızca sandık tamamen doluyken sinyal verir'],
    correct: 'Doluluk oranına göre 0–15 arasında sinyal üretir',
  },
  {
    question: "Minecraft'ta Sculk Sensörü titreşimleri algılarken yün blokların önemli özelliği nedir?",
    options: ['Titreşimleri her durumda iki katına çıkarır', 'Titreşimlerin sensöre ulaşmasını engelleyebilir', 'Sensörün algılama menzilini sınırsız yapar', 'Sensörü otomatik olarak kırar'],
    correct: 'Titreşimlerin sensöre ulaşmasını engelleyebilir',
  },
  {
    question: "Minecraft'ta bir fenerin (Beacon) etkisinin ulaşabileceği seviye ve menzil hangi unsura bağlıdır?",
    options: ['Altındaki piramidin katman sayısına', 'Oyuncunun deneyim seviyesine', 'Dünyadaki gün sayısına', 'Yakındaki köylü sayısına'],
    correct: 'Altındaki piramidin katman sayısına',
  },
  {
    question: "Minecraft'ta bir huni (Hopper), üstündeki eşyalara erişirken hangi temel işlemi yapar?",
    options: ['Eşyaları otomatik olarak büyüler', 'Eşyaları uygun envantere aktarır', 'Eşyaları deneyim puanına dönüştürür', 'Eşyaları yalnızca yakındaki oyuncuya verir'],
    correct: 'Eşyaları uygun envantere aktarır',
  },
  {
    question: "Minecraft'ta bir redstone tekrarlayıcısının gecikmesi hangi aralıkta ayarlanabilir?",
    options: ['1–4 redstone tiki aralığında', '1–10 saniye aralığında', 'Yalnızca 1 veya 2 tik', '0–15 güç aralığında'],
    correct: '1–4 redstone tiki aralığında',
  },
  {
    question: "Minecraft'ta arka girişindeki sinyal gücü yan giriştekinden düşük olan bir karşılaştırıcı ne çıkış verir?",
    options: ['Arka sinyalin tamamını geçirir', 'Her zaman 15 güç verir', 'Çıkış sinyali vermez', 'Sinyali deneyim puanına çevirir'],
    correct: 'Çıkış sinyali vermez',
  },
  {
    question: "Minecraft'ta normal koşullarda bir huni, eşya aktarımı yaptıktan sonra kaç oyun tiki bekleme süresine girer?",
    options: ['4', '8', '10', '20'],
    correct: '8',
  },
  {
    question: "Minecraft'ta bir zombi köylü iyileştirildiğinde, oyuncuya uygulanan indirimlerle ilgili hangi ifade doğrudur?",
    options: ['İndirim her zaman yalnızca bir ticarette olur', 'İyileştirme ticaret fiyatlarında indirim sağlayabilir', 'İndirim yalnızca oyuncu elmas takarsa olur', 'İyileştirme köylünün mesleğini kalıcı olarak siler'],
    correct: 'İyileştirme ticaret fiyatlarında indirim sağlayabilir',
  },
  {
    question: "Minecraft'ta bir redstone tekrarlayıcısı hangi sinyal davranışını sağlayabilir?",
    options: ['Sinyali yenileyip ayarlanabilir gecikme eklemek', 'Sinyali doğrudan deneyim puanına dönüştürmek', 'Sinyali yalnızca su altında iletmek', 'Sinyali her zaman tersine çevirmek'],
    correct: 'Sinyali yenileyip ayarlanabilir gecikme eklemek',
  },
  {
    question: "Minecraft'ta bir gözlemcinin çıkış sinyali hangi durumda oluşur?",
    options: ['Algıladığı blok durumunda değişiklik olduğunda', 'Yakınında bir oyuncu envanter açtığında', 'Yalnızca yağmur başladığında', 'Her zaman sürekli olarak'],
    correct: 'Algıladığı blok durumunda değişiklik olduğunda',
  },
  {
    question: "Nether'da 1 blok ilerlemek, Overworld koordinatlarında yatay yönde kaç blokluk mesafeye karşılık gelir?",
    options: ['4 blok', '8 blok', '16 blok', '32 blok'],
    correct: '8 blok',
  },
  {
    question: "Bir kızıltaş karşılaştırıcısı, dolu bir sandığın sinyal gücünü hesaplarken temel olarak neyi dikkate alır?",
    options: ['Yalnızca içindeki eşya yığınlarının sayısını', 'Sandığın toplam ağırlığını', 'Envanterinin eşya yığınlarına göre doluluk oranını', 'Sandığın kaç kez açıldığını'],
    correct: 'Envanterinin eşya yığınlarına göre doluluk oranını',
  },
  {
    question: "Kızıltaş tozu, normal bir sinyal kaynağından uzaklaştıkça sinyal gücünü nasıl değiştirir?",
    options: ['Her blokta 1 azalır', 'Her iki blokta 1 azalır', 'Her blokta 2 azalır', 'Sinyal gücü mesafeyle azalmaz'],
    correct: 'Her blokta 1 azalır',
  },
  {
    question: "Bir deniz fenerinin (Beacon) en yüksek piramit seviyesi kaç katmandan oluşur?",
    options: ['2', '3', '4', '5'],
    correct: '4',
  },
  {
    question: "Bir kızıltaş tekrarlayıcısı, giriş sinyalini yeniden güçlendirmenin yanında hangi ayarı da sağlar?",
    options: ['Gecikmeyi 1–4 kızıltaş tiki arasında ayarlamak', 'Sinyalin rengini değiştirmek', 'Sinyali eşya olarak depolamak', 'Sinyali kalıcı olarak tersine çevirmek'],
    correct: 'Gecikmeyi 1–4 kızıltaş tiki arasında ayarlamak',
  },
];

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function prepareQuestions() {
  // Her rankın kendi 5 sorusu karıştırılır; rank sırası değişmez.
  const rankGroups = [];
  for (let start = 0; start < questionBank.length; start += 5) {
    rankGroups.push(
      shuffle(questionBank.slice(start, start + 5)).map((question) => ({
        ...question,
        options: shuffle(question.options),
      })),
    );
  }
  return rankGroups.flat();
}

function getUsername(user) {
  return user?.user_metadata?.username || user?.username || 'Oyuncu';
}

function EyeIcon({ visible }) {
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      {visible ? (
        <>
          <path d="M3 3 21 21" />
          <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
          <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5.5 0 9 7 9 7a15 15 0 0 1-3.1 3.9" />
          <path d="M6.2 6.2C3.9 7.8 3 12 3 12s3.5 7 9 7a9.8 9.8 0 0 0 3.1-.5" />
        </>
      ) : (
        <>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
    </svg>
  );
}

function GameLogo({ game, floating = false }) {
  const [failed, setFailed] = useState(false);

  if (game.id === 'brawl') {
    return (
      <div className={floating ? 'floating-logo' : 'game-logo'}>
        <svg viewBox="0 0 100 100" width="100%" height="100%" role="img" aria-label="Brawl Stars tarzı logo">
          <path d="M50 5 66 14 84 14 86 33 96 50 86 67 84 86 66 86 50 95 34 86 16 86 14 67 4 50 14 33 16 14 34 14Z" fill="#ffcc25" stroke="#9d4b13" strokeWidth="5" />
          <path d="M28 34 39 28 50 35 61 28 72 34 68 57 50 72 32 57Z" fill="#fff4cf" stroke="#6b3518" strokeWidth="4" />
          <path d="M36 43 45 43 43 52 35 51ZM55 43 64 43 65 51 57 52Z" fill="#422b28" />
          <path d="M40 61 46 56 54 56 60 61 50 67Z" fill="#422b28" />
          <path d="M8 18 21 22 14 31ZM92 18 79 22 86 31ZM8 82 21 78 14 69ZM92 82 79 78 86 69Z" fill="#f36b21" />
        </svg>
      </div>
    );
  }

  return (
    <div className={floating ? 'floating-logo' : 'game-logo'}>
      {!failed ? (
        <img src={game.logo} alt={game.name} onError={() => setFailed(true)} />
      ) : (
        <span className="logo-fallback">{game.short}</span>
      )}
    </div>
  );
}

function FloatingLogos() {
  const logoList = [...games, ...games, ...games, ...games];
  return (
    <div className="floating-logos" aria-hidden="true">
      {['left', 'right'].map((side) => (
        <div className={`logo-lane logo-lane-${side}`} key={side}>
          <div className={`logo-track ${side === 'right' ? 'logo-track-reverse' : ''}`}>
            {logoList.map((game, index) => (
              <GameLogo key={`${side}-${game.id}-${index}`} game={game} floating />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Home({ user, onLogin, onRegister, onGames }) {
  return (
    <main className="home-screen">
      <FloatingLogos />
      <div className="home-grid-glow" />
      <section className="home-center">
        <p className="eyebrow">OYUN BİLGİ YARIŞMASI</p>
        <h1 className="home-logo">ZEKVORA<span className="brand-dot"></span></h1>
        <p className="home-subtitle">
          Oyun bilgini test et, canlarını koru ve rekorunu yükselt.
        </p>
        <div className="home-buttons">
          <button type="button" className="home-button home-button-main" onClick={onGames}>
            OYUNLARA GİR <span className="button-arrow">→</span>
          </button>
          {!user && (
            <>
              <button type="button" className="home-button home-button-secondary" onClick={onLogin}>GİRİŞ YAP</button>
              <button type="button" className="home-button home-button-secondary" onClick={onRegister}>KAYIT OL</button>
            </>
          )}
        </div>
        <div className="home-bottom-note"><span className="status-dot" /> 3 CAN · 50 SORU · 10 RANK</div>
      </section>
    </main>
  );
}

function AuthScreen({ mode, onBack, onSuccess, onSwitch, notice }) {
  const isLogin = mode === 'login';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage('');
    setError(false);

    if (!isLogin && password !== confirmPassword) {
      setError(true);
      setMessage('Şifreler birbiriyle uyuşmuyor.');
      return;
    }

    setLoading(true);
    try {
      const { data, error: functionError } = await supabase.functions.invoke('username-auth', {
        body: { action: isLogin ? 'login' : 'register', username: username.trim(), password },
      });

      if (functionError) {
        let errorMessage = functionError.message;
        try {
          const details = await functionError.context.json();
          errorMessage = details.error || details.message || errorMessage;
        } catch {
          // Sunucudan okunabilir bir hata gelmediyse varsayılan mesaj kullanılır.
        }
        throw new Error(errorMessage);
      }

      if (!data?.session?.access_token || !data?.session?.refresh_token) {
        throw new Error('Oturum oluşturulamadı. Lütfen tekrar dene.');
      }

      const { error: sessionError } = await supabase.auth.setSession({
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
      });
      if (sessionError) throw sessionError;
      onSuccess(data.user || { username: username.trim() });
    } catch (err) {
      setError(true);
      setMessage(err?.message || 'Bir hata oluştu. Lütfen tekrar dene.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-screen">
      <div className="auth-backdrop" />
      <section className="auth-panel">
        <button type="button" className="back-link" onClick={onBack}><span>←</span> Geri dön</button>
        {notice && <p className="form-message form-success" role="status">{notice}</p>}
        <h1 className="panel-heading">{isLogin ? 'Tekrar hoş geldin.' : 'Hesap oluştur.'}</h1>
        <p className="panel-description">
          {isLogin ? 'Zekvora hesabına giriş yap ve rekorunu devam ettir.' : 'Zekvora hesabını oluştur ve oyun bilgini test etmeye başla.'}
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="field">
            <span>KULLANICI ADI</span>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
              placeholder="Kullanıcı adın" autoComplete="username" minLength={4} maxLength={20} required />
          </label>

          <label className="field">
            <span>ŞİFRE</span>
            <div className="password-box">
              <input type={showPassword ? 'text' : 'password'} value={password}
                onChange={(e) => setPassword(e.target.value)} placeholder="Şifren"
                autoComplete={isLogin ? 'current-password' : 'new-password'} minLength={6} required />
              <button type="button" className="password-toggle" onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}>
                <EyeIcon visible={showPassword} />
              </button>
            </div>
          </label>

          {!isLogin && (
            <label className="field">
              <span>ŞİFRE TEKRAR</span>
              <div className="password-box">
                <input type={showConfirmPassword ? 'text' : 'password'} value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Şifreni tekrar gir"
                  autoComplete="new-password" minLength={6} required />
                <button type="button" className="password-toggle"
                  onClick={() => setShowConfirmPassword((v) => !v)}
                  aria-label={showConfirmPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}>
                  <EyeIcon visible={showConfirmPassword} />
                </button>
              </div>
            </label>
          )}

          {message && <p className={`form-message ${error ? 'form-error' : 'form-success'}`} role="status">{message}</p>}
          <button className="primary-button" type="submit" disabled={loading}>
            {loading ? 'BEKLEYİN...' : isLogin ? 'GİRİŞ YAP' : 'HESAP OLUŞTUR'}
          </button>
        </form>

        <div className="auth-switch">
          {isLogin ? 'Hesabın yok mu?' : 'Zaten hesabın var mı?'}{' '}
          <button type="button" className="text-button" onClick={onSwitch}>{isLogin ? 'Kayıt ol' : 'Giriş yap'}</button>
        </div>
      </section>
    </main>
  );
}

function GamesScreen({ onBack, onSelectGame }) {
  return (
    <main className="games-screen">
      <div className="page-kicker">OYUNLAR</div>
      <h1 className="section-heading">Bir oyun seç<span></span></h1>
      <p className="section-description"></p>

      <div className="games-grid">
        {games.map((game, index) => (
          <button key={game.id} type="button"
            className={`game-card ${game.locked ? 'locked' : ''}`}
            disabled={game.locked} onClick={() => onSelectGame(game.id)}>
            <div className="game-card-top">
              <span className="game-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="available-label">{game.locked ? 'KİLİTLİ' : 'OYNA'}</span>
            </div>
            <GameLogo game={game} />
            <div className="game-card-bottom">
              <h2>{game.name}</h2>
              <span className="game-card-arrow">{game.locked ? '🔒' : '→'}</span>
            </div>
          </button>
        ))}
      </div>

      <button type="button" className="home-button home-button-secondary profile-back" onClick={onBack}>
        ← ANA SAYFA
      </button>
    </main>
  );
}

function QuizScreen({ user, onBack }) {
  const rankNames = [
    'Çok Kolay', 'Kolay', 'Kolay-Orta', 'Orta', 'Orta-Zor',
    'Zor', 'Uzman', 'Profesör', 'Minecraft Yetkilisi', 'Mojang',
  ];
  const [level, setLevel] = useState(1);
  const [questions, setQuestions] = useState(() => prepareQuestions());
  const [timeLeft, setTimeLeft] = useState(15);
  const [livesHalf, setLivesHalf] = useState(6);
  const [score, setScore] = useState(0);
  const [review, setReview] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [rankFlash, setRankFlash] = useState(false);
  const answeredRef = useRef(false);
  const saveQueueRef = useRef(Promise.resolve());

  const currentQuestion = questions[level - 1];
  const rankIndex = Math.min(9, Math.floor((level - 1) / 5));
  const rankProgress = feedback && level % 5 === 0 ? 5 : (level - 1) % 5;
  const questionInRank = ((level - 1) % 5) + 1;

  async function saveRecord(scoreValue, levelValue) {
    if (!user?.id) return;

    const task = async () => {
      const { data: existing, error: readError } = await supabase
        .from('game_records')
        .select('best_score,best_level')
        .eq('user_id', user.id)
        .eq('game_id', 'minecraft')
        .maybeSingle();
      if (readError) throw readError;

      const { error: writeError } = await supabase.from('game_records').upsert({
        user_id: user.id,
        game_id: 'minecraft',
        best_score: Math.max(existing?.best_score ?? 0, scoreValue),
        best_level: Math.max(existing?.best_level ?? 0, levelValue),
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id,game_id' });
      if (writeError) throw writeError;
    };

    saveQueueRef.current = saveQueueRef.current
      .catch(() => {})
      .then(task)
      .catch((err) => console.error('Rekor kaydedilemedi:', err));
    return saveQueueRef.current;
  }

  function handleAnswer(answer, timedOut = false) {
    if (answeredRef.current || gameOver || !currentQuestion) return;
    answeredRef.current = true;

    const isCorrect = !timedOut && answer === currentQuestion.correct;
    const lifeCost = timedOut ? 2 : isCorrect ? 0 : 2;
    const nextLives = Math.max(0, livesHalf - lifeCost);
    const nextScore = score + (isCorrect ? 100 : 0);
    const nextLevel = Math.min(50, level + 1);

    setReview((previous) => [...previous, {
      level,
      rank: rankNames[rankIndex],
      question: currentQuestion.question,
      selected: timedOut ? null : answer,
      correct: currentQuestion.correct,
      result: timedOut ? 'unanswered' : isCorrect ? 'correct' : 'wrong',
    }]);

    if (isCorrect) setScore(nextScore);
    setLivesHalf(nextLives);
    setSelectedAnswer(timedOut ? null : answer);
    setFeedback(timedOut ? 'timeout' : isCorrect ? 'correct' : 'wrong');
    void saveRecord(nextScore, level);

    window.setTimeout(() => {
      if (nextLives <= 0) {
        setGameOver(true);
      } else if (level >= 50) {
        setCompleted(true);
        setGameOver(true);
      } else {
        const oldRank = Math.floor((level - 1) / 5);
        const newRank = Math.floor(level / 5);
        if (newRank !== oldRank) {
          setRankFlash(true);
          window.setTimeout(() => setRankFlash(false), 1050);
        }
        setLevel((value) => value + 1);
      }
      setSelectedAnswer(null);
      setFeedback('');
    }, 650);
  }

  useEffect(() => {
    answeredRef.current = false;
    setTimeLeft(15);
    if (gameOver) return undefined;

    const timer = window.setInterval(() => {
      setTimeLeft((value) => {
        if (value <= 1) {
          window.clearInterval(timer);
          window.setTimeout(() => handleAnswer(null, true), 0);
          return 0;
        }
        return value - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
    // Her yeni soruda sayaç sıfırlanır.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level, gameOver]);

  function restartGame() {
    setLevel(1);
    setQuestions(prepareQuestions());
    setTimeLeft(15);
    setLivesHalf(6);
    setScore(0);
    setReview([]);
    setSelectedAnswer(null);
    setFeedback('');
    setGameOver(false);
    setCompleted(false);
    setRankFlash(false);
    answeredRef.current = false;
  }

  if (gameOver) {
    return (
      <main className="quiz-screen quiz-screen-enter">
        <section className="quiz-end-panel">
          <p className="page-kicker">{completed ? 'TEBRİKLER' : 'OYUN BİTTİ'}</p>
          <h1 className="section-heading">{completed ? '50 soruyu tamamladın!' : 'Serin sona erdi.'}</h1>
          <div className="quiz-final-score">
            <span>TOPLAM PUAN</span>
            <strong>{score}</strong>
            <span>Ulaşılan seviye: {review.length}/50</span>
          </div>
          <h2 className="review-heading">Cevapların</h2>
          <div className="review-list">
            {review.map((item, index) => (
              <article className="review-item review-item-enter" key={`${item.level}-${index}`} style={{ animationDelay: `${Math.min(index * 25, 350)}ms` }}>
                <div className="review-item-top">
                  <span>{item.rank} · Seviye {item.level}/50</span>
                  <span className={`review-result review-${item.result}`}>
                    {item.result === 'correct' ? 'DOĞRU' : item.result === 'wrong' ? 'YANLIŞ' : 'CEVAPLANMADI'}
                  </span>
                </div>
                <p>{item.question}</p>
                <span className="review-answer">Senin cevabın: {item.selected ?? 'Cevaplanmadı'}</span>
                {item.result !== 'correct' && <span className="review-correct">Doğru cevap: {item.correct}</span>}
              </article>
            ))}
          </div>
          <div className="quiz-end-actions">
            <button type="button" className="home-button home-button-main" onClick={restartGame}>YENİDEN BAŞLA</button>
            <button type="button" className="home-button home-button-secondary" onClick={onBack}>OYUNLARA DÖN</button>
          </div>
        </section>
      </main>
    );
  }

  if (!currentQuestion) return null;

  return (
    <main className="quiz-screen quiz-screen-enter">
      <div className="quiz-topline">
        <button type="button" className="quiz-back-button" onClick={onBack}>← OYUNLAR</button>
        <div className="quiz-level-label">MINECRAFT <span>•</span> BİLGİ YARIŞMASI</div>
        <div className="quiz-score"><span>PUAN</span><strong key={score} className="score-pop">{score}</strong></div>
      </div>

      <section className={`quiz-info-row ${rankFlash ? 'rank-level-up' : ''}`} aria-label="Oyun ilerlemesi">
        <article className="quiz-info-card quiz-rank-card">
          <span className="quiz-info-label">RANK</span>
          <strong key={rankIndex} className="rank-name-animate">{rankNames[rankIndex]}</strong>
          <small>RANK {rankIndex + 1} / 10</small>
        </article>
        <article className="quiz-info-card">
          <span className="quiz-info-label">SEVİYE</span>
          <strong>{rankProgress}/5</strong>
          <div className="rank-progress-track" aria-label={`Rank ilerlemesi ${rankProgress} / 5`}>
            <div className="rank-progress-fill" style={{ width: `${(rankProgress / 5) * 100}%` }} />
          </div>
        </article>
        <article className="quiz-info-card">
          <span className="quiz-info-label">SORU</span>
          <strong>{level}/50</strong>
          <small>{questionInRank}. soru · bu rank</small>
        </article>
      </section>

      <div className="quiz-progress-line">
        <span>RANK İLERLEMESİ</span>
        <span>{rankProgress}/5 tamamlandı</span>
      </div>

      <section className={`quiz-question-card ${feedback ? `question-feedback-${feedback}` : ''}`} aria-live="polite">
        <span className="question-overline">{rankNames[rankIndex].toUpperCase()} · MINECRAFT</span>
        <h1 key={level} className="question-text-animate">{currentQuestion.question}</h1>
        {feedback === 'correct' && <span className="question-feedback feedback-correct">✓ DOĞRU CEVAP · +100 PUAN</span>}
        {feedback === 'wrong' && <span className="question-feedback feedback-wrong">✕ YANLIŞ CEVAP · 1 CAN GİTTİ</span>}
        {feedback === 'timeout' && <span className="question-feedback feedback-timeout">SÜRE DOLDU · 1 CAN GİTTİ</span>}
      </section>

      <section className={`quiz-status ${feedback === 'wrong' || feedback === 'timeout' ? 'heart-loss' : ''}`}>
        <div className="quiz-timer-area">
          <div className="quiz-timer-heading"><span>KALAN SÜRE</span><strong className={timeLeft <= 5 ? 'timer-urgent' : ''}>{timeLeft}<small> sn</small></strong></div>
          <div className="quiz-timer-track">
            <div className={`quiz-timer-fill ${timeLeft <= 5 ? 'urgent' : ''}`} style={{ width: `${(timeLeft / 15) * 100}%` }} />
          </div>
        </div>
        <div className="quiz-hearts-area">
          <span className="quiz-info-label">CANLAR</span>
          <div className="quiz-hearts" aria-label="Kalan canlar">
            {[0, 1, 2].map((heartIndex) => {
              const remaining = livesHalf - heartIndex * 2;
              const heartClass = remaining >= 2 ? 'full' : remaining === 1 ? 'half' : 'empty';
              return <span key={heartIndex} className={`quiz-heart ${heartClass}`} aria-hidden="true">♥</span>;
            })}
          </div>
        </div>
      </section>

      <div className="quiz-options">
        {currentQuestion.options.map((option, index) => {
          const letter = ['A', 'B', 'C', 'D'][index];
          const isSelected = selectedAnswer === option;
          return (
            <button key={`${level}-${option}`} type="button"
              className={`quiz-option quiz-option-${letter.toLowerCase()} option-enter ${isSelected && feedback === 'correct' ? 'answer-correct' : isSelected && feedback === 'wrong' ? 'answer-wrong' : ''}`}
              style={{ animationDelay: `${index * 65}ms` }}
              onClick={() => handleAnswer(option)} disabled={answeredRef.current}>
              <span className="option-letter">{letter}</span>
              <span className="option-text">{option}</span>
              <span className="option-chevron">↗</span>
            </button>
          );
        })}
      </div>
      <p className="quiz-bottom-note">CEVABINI SEÇ <span>·</span> HER RANK 5 SORUDAN OLUŞUR</p>
    </main>
  );
}

function ProfileScreen({ user, onGames }) {
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    async function loadRecord() {
      if (!user?.id) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError('');
      const { data, error: queryError } = await supabase
        .from('game_records')
        .select('best_score,best_level')
        .eq('user_id', user.id)
        .eq('game_id', 'minecraft')
        .maybeSingle();

      if (!active) return;
      if (queryError) setError('Rekor bilgileri yüklenemedi.');
      else setRecord(data);
      setLoading(false);
    }

    loadRecord();
    return () => { active = false; };
  }, [user?.id]);

  const username = getUsername(user);

  return (
    <main className="profile-screen">
      <h1 className="section-heading profile-heading">Profil</h1>

      <div className="profile-identity">
        <div className="profile-avatar">{username.charAt(0).toUpperCase()}</div>
        <div>
          <p className="profile-label">KULLANICI</p>
          <h2 className="profile-username">{username}</h2>
          <p className="profile-muted">Zekvora oyuncusu</p>
        </div>
      </div>

      <section className="profile-record-section">
        <h2 className="profile-game-title">MINECRAFT</h2>
        {error && <p className="form-message form-error">{error}</p>}
        <div className="profile-stats">
          <div className="stat-card">
            <span className="stat-label">REKOR SEVİYE</span>
            <strong>{loading ? '…' : record?.best_level ?? 0}</strong>
            <span className="stat-note">En yüksek ulaşılan seviye</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">REKOR PUAN</span>
            <strong>{loading ? '…' : (record?.best_score ?? 0).toLocaleString('tr-TR')}</strong>
            <span className="stat-note">En yüksek puanın</span>
          </div>
        </div>
      </section>

      <button type="button" className="home-button home-button-secondary profile-back" onClick={onGames}>
        OYUNLARA DÖN →
      </button>
    </main>
  );
}

function LeaderboardScreen({ onBack }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    async function loadLeaderboard() {
      setLoading(true);
      setError('');

      const { data: records, error: recordsError } = await supabase
        .from('game_records')
        .select('user_id,best_score,best_level')
        .eq('game_id', 'minecraft')
        .order('best_score', { ascending: false })
        .limit(20);

      if (recordsError) {
        if (active) {
          setError('Liderlik tablosu yüklenemedi.');
          setLoading(false);
        }
        return;
      }

      if (!records?.length) {
        if (active) {
          setRows([]);
          setLoading(false);
        }
        return;
      }

      const ids = records.map((record) => record.user_id);
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('id,username')
        .in('id', ids);

      if (!active) return;

      if (profilesError) {
        setError('Oyuncu isimleri yüklenemedi.');
        setLoading(false);
        return;
      }

      const profileMap = new Map((profiles || []).map((profile) => [profile.id, profile.username]));
      const combined = records.map((record) => ({
        ...record,
        username: profileMap.get(record.user_id) || 'Oyuncu',
      })).sort((a, b) => b.best_score - a.best_score).slice(0, 20);

      setRows(combined);
      setLoading(false);
    }

    loadLeaderboard();
    return () => { active = false; };
  }, []);

  return (
    <main className="leaderboard-screen">
      <p className="page-kicker">REKABET</p>
      <h1 className="section-heading">Liderlik Tablosu<span></span></h1>
      <p className="section-description">Minecraft rekorlarına göre en iyi 20 oyuncu.</p>

      <section className="leaderboard-panel">
        <div className="leaderboard-header">
          <span>#</span><span>OYUNCU</span><span>SEVİYE</span><span>PUAN</span>
        </div>
        {loading ? (
          <p className="leaderboard-message">Liderlik tablosu yükleniyor…</p>
        ) : error ? (
          <p className="leaderboard-message form-error">{error}</p>
        ) : rows.length === 0 ? (
          <p className="leaderboard-message">Henüz kaydedilmiş bir rekor yok. İlk 20'ye giren sen ol!</p>
        ) : rows.map((row, index) => (
          <div className="leaderboard-row" key={row.user_id}>
            <span className={`leaderboard-rank rank-${index + 1}`}>{String(index + 1).padStart(2, '0')}</span>
            <span className="leaderboard-username">{row.username}</span>
            <span>{row.best_level}</span>
            <strong>{row.best_score.toLocaleString('tr-TR')}</strong>
          </div>
        ))}
      </section>

      <button type="button" className="home-button home-button-secondary profile-back" onClick={onBack}>
        ← ANA SAYFA
      </button>
    </main>
  );
}


function PrivacyScreen({ onBack }) {
  return (
    <main className="profile-screen">
      <section className="profile-record-section">
        <p className="page-kicker">BİLGİLENDİRME</p>
        <h1 className="section-heading">Gizlilik</h1>

        <div
          className="privacy-content"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'left',
            lineHeight: 1.8,
          }}
        >
          <h2>ZEKVORA'da hangi bilgiler kullanılır?</h2>
          <p>
            ZEKVORA hesabı oluştururken kullanıcı adın ve şifren kullanılır.
            Kullanıcı adın hesabını ve oyun içindeki rekorlarını göstermek için kullanılır.
          </p>

          <h2>Oyun rekorları</h2>
          <p>
            Oyunlarda elde ettiğin en yüksek puan ve ulaştığın en yüksek seviye,
            profilinde ve liderlik tablosunda gösterilebilir. Liderlik tablosunda
            kullanıcı adın, seviyen ve puanın diğer oyuncular tarafından görülebilir.
          </p>

          <h2>Şifren</h2>
          <p>
            Şifren ZEKVORA'nın normal sayfalarında görüntülenmez. Şifreni başka
            kişilerle paylaşmamalısın.
          </p>

          <h2>E-posta</h2>
          <p>
            ZEKVORA'nın kayıt ekranında senden e-posta adresi istenmez.
          </p>

          <h2>Verilerin kullanımı</h2>
          <p>
            Hesap ve oyun özelliklerinin çalışması, giriş yapılması ve rekorların
            kaydedilmesi için gerekli hesap ve oyun verileri kullanılır.
          </p>

          <h2>Hesabınla ilgili</h2>
          <p>
            Hesabınla veya verilerinle ilgili bir talebin olursa ZEKVORA'nın
            iletişim kanalından bize ulaşabilirsin.
          </p>

          <p style={{ marginTop: '2rem', opacity: 0.75 }}>
            Bu sayfa ZEKVORA'nın mevcut çalışma şekli hakkında genel
            bilgilendirme amacıyla hazırlanmıştır.
          </p>
        </div>

        <button
          type="button"
          className="home-button home-button-secondary profile-back"
          onClick={onBack}
        >
          ← ANA SAYFA
        </button>
      </section>
    </main>
  );
}

function App() {
  const [screen, setScreen] = useState('home');
  const [authMode, setAuthMode] = useState('login');
  const [user, setUser] = useState(null);
  const [checkingSession, setCheckingSession] = useState(true);
  const [authNotice, setAuthNotice] = useState('');

  useEffect(() => {
    let mounted = true;

    async function checkSession() {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (mounted) setUser(session?.user || null);
      } catch (err) {
        console.error('Oturum kontrolü başarısız:', err);
      } finally {
        if (mounted) setCheckingSession(false);
      }
    }

    checkSession();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) setUser(session?.user || null);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  function openLogin() {
    setAuthNotice('');
    setAuthMode('login');
    setScreen('auth');
  }

  function openRegister() {
    setAuthNotice('');
    setAuthMode('register');
    setScreen('auth');
  }

  function handleEnterGames() {
    if (!user) {
      setAuthMode('register');
      setAuthNotice('Oyuna girmek için önce kayıt olman lazım!');
      setScreen('auth');
      return;
    }
    setAuthNotice('');
    setScreen('games');
  }

  function handleAuthSuccess(authUser) {
    setUser(authUser);
    setAuthNotice('');
    setScreen('home');
  }

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Çıkış yapılamadı:', error);
      return;
    }
    setUser(null);
    setAuthNotice('');
    setScreen('home');
  }

  function openPrivacy() {
    setAuthNotice('');
    setScreen('privacy');
  }

  if (checkingSession) {
    return <div className="loading-screen"><p>YÜKLENİYOR...</p></div>;
  }

  return (
    <div className="app-shell">
      <header className="navbar">
        <button type="button" className="brand" onClick={() => { setAuthNotice(''); setScreen('home'); }}>
          ZEKVORA<span className="brand-dot"></span>
        </button>

        {user ? (
          <div className="nav-actions">
            {screen === 'profile' ? (
              <button type="button" className="nav-button" onClick={() => setScreen('games')}>OYUNLAR</button>
            ) : (
              <button type="button" className="nav-button" onClick={() => setScreen('profile')}>PROFİLİM</button>
            )}
            <button type="button" className="nav-button" onClick={() => setScreen('leaderboard')}>LİDERLİK TABLOSU</button>
            <button type="button" className="nav-button nav-button-exit" onClick={handleLogout}>ÇIKIŞ YAP</button>
          </div>
        ) : screen === 'home' ? (
          <div className="nav-actions">
            <button type="button" className="nav-button" onClick={openLogin}>GİRİŞ YAP</button>
            <button type="button" className="nav-button" onClick={openRegister}>KAYIT OL</button>
          </div>
        ) : null}
      </header>

      {screen === 'home' && <Home user={user} onLogin={openLogin} onRegister={openRegister} onGames={handleEnterGames} />}

      {screen === 'auth' && (
        <AuthScreen mode={authMode}
          onBack={() => { setAuthNotice(''); setScreen('home'); }}
          onSuccess={handleAuthSuccess}
          notice={authNotice}
          onSwitch={() => { setAuthNotice(''); setAuthMode((mode) => mode === 'login' ? 'register' : 'login'); }} />
      )}

      {screen === 'games' && <GamesScreen onBack={() => setScreen('home')} onSelectGame={(gameId) => {
        if (gameId === 'minecraft') setScreen('quiz');
      }} />}

      {screen === 'quiz' && <QuizScreen user={user} onBack={() => setScreen('games')} />}
      {screen === 'profile' && <ProfileScreen user={user} onGames={() => setScreen('games')} />}
      {screen === 'leaderboard' && <LeaderboardScreen onBack={() => setScreen('home')} />}
      {screen === 'privacy' && <PrivacyScreen onBack={() => setScreen('home')} />}

      <footer className="site-footer">
        <span className="footer-brand">ZEKVORA</span>
        <button type="button" className="text-button" onClick={openPrivacy}>GİZLİLİK</button>
        <span>OYUN BİLGİNİ TEST ET</span>
      </footer>
    </div>
  );
}

export default App;