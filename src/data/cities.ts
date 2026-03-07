import type { Lang } from "../config";

export interface City {
  id: string;
  // Position on SVG map (viewBox 0 0 600 500)
  x: number;
  y: number;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  highlights: Record<Lang, string[]>;
}

export const cities: City[] = [
  {
    id: "beijing",
    x: 390, y: 135,
    name: {
      en: "Beijing", es: "Pekín", de: "Peking", fr: "Pékin", ja: "北京", ko: "베이징",
    },
    description: {
      en: "China's capital city, a blend of ancient history and modern grandeur.",
      es: "La capital de China, una mezcla de historia antigua y grandeza moderna.",
      de: "Chinas Hauptstadt, eine Mischung aus alter Geschichte und moderner Größe.",
      fr: "La capitale de la Chine, un mélange d'histoire ancienne et de grandeur moderne.",
      ja: "中国の首都。古代の歴史と現代の壮大さが融合する都市。",
      ko: "중국의 수도, 고대 역사와 현대적 웅장함이 어우러진 도시.",
    },
    highlights: {
      en: ["Great Wall", "Forbidden City", "Temple of Heaven"],
      es: ["Gran Muralla", "Ciudad Prohibida", "Templo del Cielo"],
      de: ["Große Mauer", "Verbotene Stadt", "Himmelstempel"],
      fr: ["Grande Muraille", "Cité Interdite", "Temple du Ciel"],
      ja: ["万里の長城", "紫禁城", "天壇"],
      ko: ["만리장성", "자금성", "천단"],
    },
  },
  {
    id: "shanghai",
    x: 455, y: 230,
    name: {
      en: "Shanghai", es: "Shanghái", de: "Shanghai", fr: "Shanghai", ja: "上海", ko: "상하이",
    },
    description: {
      en: "China's largest city, a dazzling metropolis where East meets West.",
      es: "La ciudad más grande de China, una metrópolis deslumbrante donde Oriente se encuentra con Occidente.",
      de: "Chinas größte Stadt, eine schillernde Metropole, wo Ost auf West trifft.",
      fr: "La plus grande ville de Chine, une métropole éblouissante où l'Orient rencontre l'Occident.",
      ja: "中国最大の都市。東洋と西洋が出会う眩い大都市。",
      ko: "중국 최대의 도시, 동양과 서양이 만나는 눈부신 대도시.",
    },
    highlights: {
      en: ["The Bund", "Yu Garden", "Pudong Skyline"],
      es: ["El Bund", "Jardín Yuyuan", "Horizonte de Pudong"],
      de: ["Der Bund", "Yu-Garten", "Pudong Skyline"],
      fr: ["Le Bund", "Jardin Yuyuan", "Skyline de Pudong"],
      ja: ["外灘", "豫園", "浦東スカイライン"],
      ko: ["와이탄", "예원", "푸동 스카이라인"],
    },
  },
  {
    id: "guangzhou",
    x: 380, y: 370,
    name: {
      en: "Guangzhou", es: "Cantón", de: "Guangzhou", fr: "Canton", ja: "広州", ko: "광저우",
    },
    description: {
      en: "The heart of southern China, famous for its food and Cantonese culture.",
      es: "El corazón del sur de China, famoso por su gastronomía y cultura cantonesa.",
      de: "Das Herz Südchinas, berühmt für seine Küche und kantonesische Kultur.",
      fr: "Le cœur du sud de la Chine, célèbre pour sa cuisine et sa culture cantonaise.",
      ja: "中国南部の中心地。広東料理と広東文化で有名。",
      ko: "중국 남부의 중심지, 광둥 요리와 광둥 문화로 유명한 도시.",
    },
    highlights: {
      en: ["Canton Tower", "Dim Sum", "Pearl River Night Cruise"],
      es: ["Torre de Cantón", "Dim Sum", "Crucero nocturno por el río Perla"],
      de: ["Kantonturm", "Dim Sum", "Perlfluss-Nachtkreuzfahrt"],
      fr: ["Tour de Canton", "Dim Sum", "Croisière nocturne sur la rivière des Perles"],
      ja: ["広州タワー", "飲茶", "珠江ナイトクルーズ"],
      ko: ["광저우 타워", "딤섬", "주강 야간 크루즈"],
    },
  },
  {
    id: "chengdu",
    x: 280, y: 280,
    name: {
      en: "Chengdu", es: "Chengdú", de: "Chengdu", fr: "Chengdu", ja: "成都", ko: "청두",
    },
    description: {
      en: "Home of giant pandas and fiery Sichuan cuisine.",
      es: "Hogar de los pandas gigantes y la ardiente cocina de Sichuán.",
      de: "Heimat der Großen Pandas und der feurigen Sichuan-Küche.",
      fr: "Patrie des pandas géants et de la cuisine épicée du Sichuan.",
      ja: "ジャイアントパンダと四川料理の本場。",
      ko: "자이언트 판다와 매운 쓰촨 요리의 본고장.",
    },
    highlights: {
      en: ["Giant Panda Base", "Sichuan Hotpot", "Jinli Ancient Street"],
      es: ["Base de Pandas Gigantes", "Hotpot de Sichuán", "Calle Antigua Jinli"],
      de: ["Panda-Aufzuchtstation", "Sichuan-Feuertopf", "Jinli-Altstadt"],
      fr: ["Base des Pandas Géants", "Fondue du Sichuan", "Rue ancienne de Jinli"],
      ja: ["パンダ基地", "四川火鍋", "錦里古街"],
      ko: ["판다 기지", "쓰촨 훠궈", "진리 고대 거리"],
    },
  },
  {
    id: "xian",
    x: 310, y: 210,
    name: {
      en: "Xi'an", es: "Xi'an", de: "Xi'an", fr: "Xi'an", ja: "西安", ko: "시안",
    },
    description: {
      en: "The ancient capital, gateway to the Silk Road and home of the Terracotta Warriors.",
      es: "La antigua capital, puerta de la Ruta de la Seda y hogar de los Guerreros de Terracota.",
      de: "Die alte Hauptstadt, Tor zur Seidenstraße und Heimat der Terrakotta-Armee.",
      fr: "L'ancienne capitale, porte de la Route de la Soie et patrie des Guerriers en terre cuite.",
      ja: "古都。シルクロードの玄関口であり、兵馬俑の故郷。",
      ko: "고대 수도, 실크로드의 관문이자 병마용의 고향.",
    },
    highlights: {
      en: ["Terracotta Warriors", "City Wall", "Muslim Quarter"],
      es: ["Guerreros de Terracota", "Muralla de la Ciudad", "Barrio Musulmán"],
      de: ["Terrakotta-Armee", "Stadtmauer", "Muslimisches Viertel"],
      fr: ["Guerriers en terre cuite", "Remparts", "Quartier Musulman"],
      ja: ["兵馬俑", "城壁", "回民街"],
      ko: ["병마용", "성벽", "무슬림 거리"],
    },
  },
  {
    id: "guilin",
    x: 350, y: 345,
    name: {
      en: "Guilin", es: "Guilin", de: "Guilin", fr: "Guilin", ja: "桂林", ko: "구이린",
    },
    description: {
      en: "Famous for its breathtaking karst mountain landscape along the Li River.",
      es: "Famoso por su impresionante paisaje de montañas kársticas a lo largo del río Li.",
      de: "Berühmt für seine atemberaubende Karstlandschaft entlang des Li-Flusses.",
      fr: "Célèbre pour ses paysages karstiques à couper le souffle le long de la rivière Li.",
      ja: "漓江沿いの息を呑むカルスト地形で有名。",
      ko: "리강을 따라 펼쳐지는 장관의 카르스트 산악 풍경으로 유명.",
    },
    highlights: {
      en: ["Li River Cruise", "Yangshuo", "Reed Flute Cave"],
      es: ["Crucero por el río Li", "Yangshuo", "Cueva de la Flauta de Caña"],
      de: ["Li-Fluss-Kreuzfahrt", "Yangshuo", "Schilfrohrflöten-Höhle"],
      fr: ["Croisière sur la rivière Li", "Yangshuo", "Grotte de la Flûte de Roseau"],
      ja: ["漓江クルーズ", "陽朔", "蘆笛岩"],
      ko: ["리강 크루즈", "양숴", "갈대피리 동굴"],
    },
  },
  {
    id: "hangzhou",
    x: 445, y: 240,
    name: {
      en: "Hangzhou", es: "Hangzhou", de: "Hangzhou", fr: "Hangzhou", ja: "杭州", ko: "항저우",
    },
    description: {
      en: "A paradise on earth, known for the serene West Lake and tea culture.",
      es: "Un paraíso en la tierra, conocido por el sereno Lago del Oeste y la cultura del té.",
      de: "Ein Paradies auf Erden, bekannt für den ruhigen Westsee und die Teekultur.",
      fr: "Un paradis sur terre, connu pour le serein Lac de l'Ouest et la culture du thé.",
      ja: "地上の楽園。静かな西湖と茶文化で知られる。",
      ko: "지상의 낙원, 고요한 서호와 차 문화로 유명한 도시.",
    },
    highlights: {
      en: ["West Lake", "Longjing Tea", "Lingyin Temple"],
      es: ["Lago del Oeste", "Té Longjing", "Templo Lingyin"],
      de: ["Westsee", "Longjing-Tee", "Lingyin-Tempel"],
      fr: ["Lac de l'Ouest", "Thé Longjing", "Temple de Lingyin"],
      ja: ["西湖", "龍井茶", "霊隠寺"],
      ko: ["서호", "룽징차", "링인사"],
    },
  },
  {
    id: "chongqing",
    x: 295, y: 275,
    name: {
      en: "Chongqing", es: "Chongqing", de: "Chongqing", fr: "Chongqing", ja: "重慶", ko: "충칭",
    },
    description: {
      en: "The mountain city, famous for its spicy hotpot and dramatic hillside cityscape.",
      es: "La ciudad de las montañas, famosa por su hotpot picante y su paisaje urbano en las colinas.",
      de: "Die Bergstadt, berühmt für ihren scharfen Feuertopf und die dramatische Stadtlandschaft.",
      fr: "La ville-montagne, célèbre pour sa fondue épicée et son paysage urbain spectaculaire.",
      ja: "山城。激辛火鍋と丘陵の街並みで有名。",
      ko: "산의 도시, 매운 훠궈와 극적인 언덕 도시 풍경으로 유명.",
    },
    highlights: {
      en: ["Hongya Cave", "Yangtze River Cruise", "Chongqing Hotpot"],
      es: ["Cueva Hongya", "Crucero por el río Yangtsé", "Hotpot de Chongqing"],
      de: ["Hongya-Höhle", "Jangtse-Kreuzfahrt", "Chongqing-Feuertopf"],
      fr: ["Grotte de Hongya", "Croisière sur le Yangtsé", "Fondue de Chongqing"],
      ja: ["洪崖洞", "長江クルーズ", "重慶火鍋"],
      ko: ["훙야둥", "양쯔강 크루즈", "충칭 훠궈"],
    },
  },
  {
    id: "kunming",
    x: 260, y: 340,
    name: {
      en: "Kunming", es: "Kunming", de: "Kunming", fr: "Kunming", ja: "昆明", ko: "쿤밍",
    },
    description: {
      en: "The Spring City, blessed with year-round mild weather and ethnic diversity.",
      es: "La Ciudad de la Primavera, bendecida con clima templado todo el año y diversidad étnica.",
      de: "Die Frühlingsstadt, gesegnet mit ganzjährig mildem Wetter und ethnischer Vielfalt.",
      fr: "La Ville du Printemps, bénie par un climat doux toute l'année et une diversité ethnique.",
      ja: "春城。一年中穏やかな気候と民族の多様性に恵まれた都市。",
      ko: "봄의 도시, 연중 온화한 날씨와 민족적 다양성으로 축복받은 곳.",
    },
    highlights: {
      en: ["Stone Forest", "Dianchi Lake", "Ethnic Villages"],
      es: ["Bosque de Piedra", "Lago Dianchi", "Aldeas Étnicas"],
      de: ["Steinwald", "Dianchi-See", "Ethnische Dörfer"],
      fr: ["Forêt de Pierre", "Lac Dianchi", "Villages Ethniques"],
      ja: ["石林", "滇池", "民族村"],
      ko: ["석림", "뎬치호", "민족 마을"],
    },
  },
  {
    id: "harbin",
    x: 460, y: 65,
    name: {
      en: "Harbin", es: "Harbin", de: "Harbin", fr: "Harbin", ja: "ハルビン", ko: "하얼빈",
    },
    description: {
      en: "The Ice City, home to the world's largest ice and snow festival.",
      es: "La Ciudad del Hielo, sede del festival de hielo y nieve más grande del mundo.",
      de: "Die Eisstadt, Heimat des größten Eis- und Schneefestivals der Welt.",
      fr: "La Ville de Glace, qui accueille le plus grand festival de glace et de neige au monde.",
      ja: "氷の都。世界最大の氷雪祭りの開催地。",
      ko: "얼음의 도시, 세계 최대의 빙설 축제가 열리는 곳.",
    },
    highlights: {
      en: ["Ice & Snow Festival", "Saint Sophia Cathedral", "Russian Architecture"],
      es: ["Festival de Hielo y Nieve", "Catedral de Santa Sofía", "Arquitectura Rusa"],
      de: ["Eis- und Schneefestival", "Sophienkathedrale", "Russische Architektur"],
      fr: ["Festival de Glace et de Neige", "Cathédrale Sainte-Sophie", "Architecture Russe"],
      ja: ["氷雪祭り", "聖ソフィア大聖堂", "ロシア建築"],
      ko: ["빙설 축제", "성 소피아 대성당", "러시아 건축"],
    },
  },
  {
    id: "sanya",
    x: 340, y: 420,
    name: {
      en: "Sanya", es: "Sanya", de: "Sanya", fr: "Sanya", ja: "三亜", ko: "싼야",
    },
    description: {
      en: "China's tropical paradise with stunning beaches and crystal-clear waters.",
      es: "El paraíso tropical de China con playas impresionantes y aguas cristalinas.",
      de: "Chinas tropisches Paradies mit atemberaubenden Stränden und kristallklarem Wasser.",
      fr: "Le paradis tropical de la Chine avec des plages magnifiques et des eaux cristallines.",
      ja: "美しいビーチと透き通った海が広がる中国の熱帯リゾート。",
      ko: "아름다운 해변과 수정처럼 맑은 바다가 있는 중국의 열대 낙원.",
    },
    highlights: {
      en: ["Yalong Bay", "Nanshan Temple", "Wuzhizhou Island"],
      es: ["Bahía de Yalong", "Templo Nanshan", "Isla Wuzhizhou"],
      de: ["Yalong-Bucht", "Nanshan-Tempel", "Wuzhizhou-Insel"],
      fr: ["Baie de Yalong", "Temple de Nanshan", "Île de Wuzhizhou"],
      ja: ["亜龍湾", "南山寺", "蜈支洲島"],
      ko: ["야룽만", "난산사", "우즈저우섬"],
    },
  },
  {
    id: "nanjing",
    x: 430, y: 225,
    name: {
      en: "Nanjing", es: "Nanjing", de: "Nanjing", fr: "Nankin", ja: "南京", ko: "난징",
    },
    description: {
      en: "A historic capital with rich cultural heritage and beautiful scenery.",
      es: "Una capital histórica con rico patrimonio cultural y hermosos paisajes.",
      de: "Eine historische Hauptstadt mit reichem Kulturerbe und wunderschöner Landschaft.",
      fr: "Une capitale historique au riche patrimoine culturel et aux beaux paysages.",
      ja: "豊かな文化遺産と美しい景観を持つ古都。",
      ko: "풍부한 문화유산과 아름다운 경관을 가진 역사적인 수도.",
    },
    highlights: {
      en: ["Sun Yat-sen Mausoleum", "Confucius Temple", "Purple Mountain"],
      es: ["Mausoleo de Sun Yat-sen", "Templo de Confucio", "Montaña Púrpura"],
      de: ["Sun-Yat-sen-Mausoleum", "Konfuzius-Tempel", "Purpurberg"],
      fr: ["Mausolée de Sun Yat-sen", "Temple de Confucius", "Montagne Pourpre"],
      ja: ["中山陵", "孔子廟", "紫金山"],
      ko: ["중산릉", "공자묘", "자금산"],
    },
  },
  {
    id: "suzhou",
    x: 448, y: 232,
    name: {
      en: "Suzhou", es: "Suzhou", de: "Suzhou", fr: "Suzhou", ja: "蘇州", ko: "쑤저우",
    },
    description: {
      en: "The Venice of the East, celebrated for its classical gardens and silk culture.",
      es: "La Venecia del Este, célebre por sus jardines clásicos y su cultura de la seda.",
      de: "Das Venedig des Ostens, berühmt für seine klassischen Gärten und Seidenkultur.",
      fr: "La Venise de l'Orient, célèbre pour ses jardins classiques et sa culture de la soie.",
      ja: "東洋のベネチア。古典庭園と絹文化で名高い。",
      ko: "동양의 베네치아, 고전 정원과 비단 문화로 유명한 도시.",
    },
    highlights: {
      en: ["Classical Gardens", "Silk Museum", "Zhouzhuang Water Town"],
      es: ["Jardines Clásicos", "Museo de la Seda", "Pueblo Acuático Zhouzhuang"],
      de: ["Klassische Gärten", "Seidenmuseum", "Wasserstadt Zhouzhuang"],
      fr: ["Jardins Classiques", "Musée de la Soie", "Ville d'eau de Zhouzhuang"],
      ja: ["古典庭園", "シルク博物館", "周荘水郷"],
      ko: ["고전 정원", "실크 박물관", "저우좡 수향마을"],
    },
  },
  {
    id: "lhasa",
    x: 175, y: 265,
    name: {
      en: "Lhasa", es: "Lhasa", de: "Lhasa", fr: "Lhassa", ja: "ラサ", ko: "라싸",
    },
    description: {
      en: "The holy city on the roof of the world, spiritual heart of Tibetan Buddhism.",
      es: "La ciudad santa en el techo del mundo, corazón espiritual del budismo tibetano.",
      de: "Die heilige Stadt auf dem Dach der Welt, spirituelles Herz des tibetischen Buddhismus.",
      fr: "La ville sainte sur le toit du monde, cœur spirituel du bouddhisme tibétain.",
      ja: "世界の屋根にある聖なる都市。チベット仏教の精神的中心地。",
      ko: "세계의 지붕 위 성스러운 도시, 티베트 불교의 영적 중심지.",
    },
    highlights: {
      en: ["Potala Palace", "Jokhang Temple", "Barkhor Street"],
      es: ["Palacio de Potala", "Templo Jokhang", "Calle Barkhor"],
      de: ["Potala-Palast", "Jokhang-Tempel", "Barkhor-Straße"],
      fr: ["Palais du Potala", "Temple de Jokhang", "Rue Barkhor"],
      ja: ["ポタラ宮", "ジョカン寺", "バルコル通り"],
      ko: ["포탈라궁", "조캉사원", "바르코르 거리"],
    },
  },
  {
    id: "xiamen",
    x: 420, y: 335,
    name: {
      en: "Xiamen", es: "Xiamen", de: "Xiamen", fr: "Xiamen", ja: "アモイ", ko: "샤먼",
    },
    description: {
      en: "A charming coastal city known for its pleasant climate and Gulangyu Island.",
      es: "Una encantadora ciudad costera conocida por su agradable clima y la isla Gulangyu.",
      de: "Eine charmante Küstenstadt, bekannt für ihr angenehmes Klima und die Insel Gulangyu.",
      fr: "Une charmante ville côtière connue pour son climat agréable et l'île de Gulangyu.",
      ja: "穏やかな気候とコロンス島で知られる魅力的な海辺の都市。",
      ko: "쾌적한 기후와 구랑위섬으로 유명한 매력적인 해안 도시.",
    },
    highlights: {
      en: ["Gulangyu Island", "Nanputuo Temple", "Zhongshan Road"],
      es: ["Isla Gulangyu", "Templo Nanputuo", "Calle Zhongshan"],
      de: ["Gulangyu-Insel", "Nanputuo-Tempel", "Zhongshan-Straße"],
      fr: ["Île de Gulangyu", "Temple Nanputuo", "Rue Zhongshan"],
      ja: ["コロンス島", "南普陀寺", "中山路"],
      ko: ["구랑위섬", "난푸퉈사", "중산로"],
    },
  },
];
