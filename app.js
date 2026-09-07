// ---------- Data ----------
// каждый напиток: [название, форма упаковки] — can / bottle / sachet / shot
const COUNTRIES = [
  { key:'ru', flag:'🇷🇺', label:'Россия', drinks:[
    ['100кВт Original','bottle'],
    ['100кВт Tropic','bottle'],
    ['2K Energy Original','can'],
    ['Adrenaline Rush Original','can'],
    ['Adrenaline Rush Juicy Ягодная энергия','can'],
    ['Adrenaline Rush Extra','can'],
    ['Adrenaline Rush Silver Energy Zero Sugar','can'],
    ['Adrenaline Rush Vitamin Power Ягодная энергия','can'],
    ['Adrenaline Rush Game Fuel','can'],
    ['Adrenaline Rush Game Fuel Манго','can'],
    ['Adrenaline Rush Red Energy','can'],
    ['Adrenaline Rush Spicy Energy','can'],
    ['Adrenaline Rush Юдзу, клубника и каламанси','can'],
    ['Anarchy Original','can'],
    ['Aziano Energy Fly Zero','can'],
    ['Aziano Energy Power Zero','can'],
    ['Barinoff Alligator Original','can'],
    ['Barinoff Energy Манго-Кокос','bottle'],
    ['BIZON Original','can'],
    ['BIZON Малина','can'],
    ['Black Energy Original','can'],
    ['Black Monster Original','can'],
    ['Black Monster The Doctor','can'],
    ['Black Monster Ultra','can'],
    ['Bullit Original','can'],
    ['Burn Original','can'],
    ['Burn Original Zero Sugar','can'],
    ['Burn Dark Energy','can'],
    ['Burn Gold Rush','can'],
    ['Burn Апельсиновый микс','can'],
    ['Burn Арбуз без сахара','can'],
    ['Burn Гуава','can'],
    ['Burn Манго','can'],
    ['Burn Персик-Манго Zero','can'],
    ['Burn Сочная энергия','can'],
    ['Burn Тропический микс','can'],
    ['Burn Цитрусовая энергия без сахара','can'],
    ['Burn Яблоко-Киви','can'],
    ['Burn Лимонный лёд','can'],
    ['BY БАСТА Original Energy Drink','can'],
    ['BY БАСТА Zero Sugar Классический','can'],
    ['BY БАСТА Голубая малина','can'],
    ['BY БАСТА Гранат-Барбарис','can'],
    ['BY БАСТА Цитрус микс','can'],
    ['Double You Original','can'],
    ['Double You Гуава-Арбуз','can'],
    ['Dracula Original','can'],
    ['Drive Me Original','can'],
    ['Drive Me Max','bottle'],
    ['Drive Me Berry Kick','can'],
    ['Drive Me Citrus Smash','can'],
    ['Drive Me Nitro Boost','can'],
    ['Drive Me Гуава-Манго Zero Sugar','can'],
    ['Drive Me Яблоко-Карамбола','can'],
    ['Drive Me Экзотическая энергия','can'],
    ['E-ON Original','can'],
    ['E-ON Almond Rush','can'],
    ['Effect Original','can'],
    ['Effect Zero','can'],
    ['EnerGO Original','can'],
    ['Flash Energy Original','can'],
    ['Flash Up Original','can'],
    ['Flash Up Max Original','bottle'],
    ['Flash Up Max Мятный лайм','bottle'],
    ['Flash Up Ultra Energy','can'],
    ['Flash Up Game Mode MP','can'],
    ['Flash Up Game Mode XP','can'],
    ['Flash Up Bubble Gum Банан-Клубника','can'],
    ['Flash Up Апельсиновый ритм','can'],
    ['Flash Up Киви-Карамбола','can'],
    ['Flash Up Манго-Ананас','can'],
    ['Flash Up Маршмеллоу','can'],
    ['Flash Up Мятный лайм','can'],
    ['Flash Up Ягодный микс','can'],
    ['Genesis Original','can'],
    ['Gorilla Original','can'],
    ['Gorilla Berry Bloom','can'],
    ['Gorilla Cherry Berry','can'],
    ['Gorilla California','can'],
    ['Gorilla Green Boost','can'],
    ['Gorilla Lychee','can'],
    ['Gorilla Mango Coconut','can'],
    ['Gorilla Orange','can'],
    ['Gorilla Tropical Punch','can'],
    ['Gorilla Арбуз-Дыня','can'],
    ['Gorilla Мохито','can'],
    ['HotCat Original','can'],
    ['Invoke Original','can'],
    ['Jaguar Wild Energy Original','can'],
    ['Jaguar Wild Energy Ягодный','can'],
    ['JUSTER Вишня-Черешня','can'],
    ['JUSTER Юзу-Каламанси-Каму-каму','can'],
    ['JUSTER Яблоко-Ревень','can'],
    ['LIT Energy Original','can'],
    ['LIT Energy Original Zero Sugar','can'],
    ['LIT Energy Blueberry','can'],
    ['LIT Energy Citrus Punch','can'],
    ['LIT Energy Classic Клюква-Барбарис','can'],
    ['LIT Energy Strawberry','can'],
    ['Monster Energy Original','can'],
    ['Monster Energy Absolutely Zero','can'],
    ['Monster Energy Lewis Hamilton Zero Sugar','can'],
    ['Monster Energy Mango Loco','can'],
    ['Monster Energy Monarch','can'],
    ['Monster Energy Pacific Punch','can'],
    ['Monster Energy Pipeline Punch','can'],
    ['Monster Energy Ultra Fiesta Mango','can'],
    ['Monster Energy Ultra Paradise','can'],
    ['Monster Energy Ultra Peachy Keen','can'],
    ['Monster Energy Ultra Rosa','can'],
    ['Monster Energy Ultra Strawberry Dreams','can'],
    ['Monster Energy Ultra Watermelon','can'],
    ['Monster Energy Ultra White','can'],
    ['Nature Rush Энергия кофе Шоколад и апельсин','bottle'],
    ['Nature Rush Энергия сока Красный грейпфрут','bottle'],
    ['Nature Rush Энергия чая Малина и мята','bottle'],
    ['Power Torr Black Классический','can'],
    ['Power Torr Navy Чёрная смородина','can'],
    ['Power Torr Red Ягодно-фруктовый микс','can'],
    ['Power Torr Тропический','can'],
    ['Power Torr Черничный пончик','can'],
    ['Power Torr Ultra Манго','can'],
    ['PulseUp Original','can'],
    ['Coca-Cola Energy Original','can'],
    ['Coca-Cola Energy Zero','can'],
    ['Red Bull Original','can'],
    ['Red Bull Sugarfree','can'],
    ['Red Bull Zero','can'],
    ['Red Bull Apricot Edition','can'],
    ['Red Bull Blue Edition','can'],
    ['Red Bull Coconut Edition','can'],
    ['Red Bull Green Edition','can'],
    ['Red Bull Peach Edition','can'],
    ['Red Bull Red Edition Арбуз','can'],
    ['Red Bull Sea Blue Edition','can'],
    ['Red Bull Tropical Edition','can'],
    ['Red Bull White Edition','can'],
    ['Red Bull Yellow Edition','can'],
    ['Revo Energy Original','can'],
    ['SPAR Berry','can'],
    ['SPAR Kiwi-Apple','can'],
    ['Target Original','can'],
    ['Tassay Energy Original','can'],
    ['Tornado Energy Original','can'],
    ['Tornado Energy Asian Mix','can'],
    ['Tornado Energy Black','can'],
    ['Tornado Energy Bubble','can'],
    ['Tornado Energy Max Storm Original','bottle'],
    ['Tornado Energy Russian','can'],
    ['Tornado Energy Кокос','bottle'],
    ['Tornado Energy Яблоко','can'],
    ['Tornado Max Energy Mango','can'],
    ['Tornado Max Energy Razzberry','can'],
    ['Tornado Ice','can'],
    ['Tornado Skill','can'],
    ['VELOCITY Original','can'],
    ['VELOCITY Ускорение','can'],
    ['VELOCITY Тутти-фрутти','can'],
    ['VELOCITY Тутти-фрутти и малина','can'],
    ['Volt Energy Original','can'],
    ['Volt Energy Zero Sugar','can'],
    ['Volt Energy Апельсин-Маракуйя','can'],
    ['Volt Energy Виноград-Гуава','can'],
    ['Volt Energy Голубика-Гранат','can'],
    ['Volt Energy Кокос-Манго','can'],
    ['Volt Energy Киви-Фейхоа','can'],
    ['Volt Energy Манго-Лайм','can'],
    ['Volt Energy Помело-Мята','can'],
    ['Volt Energy Сакура-Персик','can'],
    ['Volt Energy Сливовый пирог','can'],
    ['Volt Energy Грейпфрут-Клубника','can'],
    ['Volt Energy Яблоко-Крыжовник','can'],
    ['WK UP Original','can'],
    ['X-Turbo Energy Active Ежевика-Малина','can'],
    ['X-Turbo Focus Energy Original','can'],
    ['Армия России Original','can'],
    ['Байкал Natural Energy Кофе-Лимон','can'],
    ['Байкал Natural Energy Малина-Дикая смородина','can'],
    ['Брянскпиво Energy Original','can'],
    ['Крым Energy Original','can'],
    ['НЕФТЬ Апельсин-Маракуйя','can'],
    ['НЕФТЬ Клюква-Арония','can'],
    ['НЕФТЬ Лайм','can'],
    ['НЕФТЬ Манго-Кокос','can'],
    ['ОЗВЕРИН Original','can'],
    ['Энергия Первых Original','can'],
  ]},
  { key:'asia', flag:'🌏', label:'Азия', drinks:[
    ['Sting','can'],
    ['Number 1','bottle'],
    ['Red Bull (Bò Húc)','can'],
    ['Warrior','can'],
    ['Carabao','can'],
    ['Samurai','can'],
    ['M-150','bottle'],
    ['Compact','can'],
    ['Monster','can'],
    ['Rhino','can'],
    ['Red Tiger','can'],
    ['Extra Joss','sachet'],
    ['Livita','bottle'],
    ['100PLUS','can'],
    ['Gorilla Energy','can'],
    ['Red Bull','can'],
    ['Kickapoo','can'],
    ['Boom Energy Shot','shot'],
    ['Sting','can'],
    ['Vitamin Well','bottle'],
    ['Celsius','can'],
    ['Monster','can'],
    ['Krating Daeng','can'],
    ['M-150','bottle'],
    ['Carabao Dang','can'],
    ['Sponsor','bottle'],
    ['Lipovitan-D','bottle'],
    ['Shark (Chalarm)','bottle'],
    ['Commando','bottle'],
    ['Red Bull','can'],
    ['Kuku Bima Ener-G','sachet'],
    ['Extra Joss','sachet'],
    ['Extra Joss Active','sachet'],
    ['Hemaviton Energy Drink','bottle'],
    ['M-150','bottle'],
  ]},
];

// После объединения азиатских стран убираем повторяющиеся позиции.
COUNTRIES.forEach(c => {
  c.drinks = [...new Map(c.drinks.map(drink => [drink[0], drink])).values()];
  c.drinks.sort((a, b) => a[0].localeCompare(b[0], 'ru', { sensitivity:'base' }));
});

const TOTAL = COUNTRIES.reduce((s,c)=>s+c.drinks.length,0);

const RANKS = [
  { min:0,                       name:'Лох',                 emoji:'🔋' },
  { min:6,                       name:'Дегустатор',          emoji:'🥤' },
  { min:Math.ceil(TOTAL * .05),  name:'Любитель заряда',     emoji:'⚡' },
  { min:Math.ceil(TOTAL * .15),  name:'Знаток вольтажа',     emoji:'🔌' },
  { min:Math.ceil(TOTAL * .30),  name:'Коллекционер банок',  emoji:'🏆' },
  { min:Math.ceil(TOTAL * .50),  name:'Энергетический гуру', emoji:'👑' },
  { min:Math.ceil(TOTAL * .75),  name:'Министр энергетиков', emoji:'💥' },
  { min:TOTAL,                   name:'состою на 95% из энергетиков', emoji:'🌟' },
];

// Реальные фото/логотипы, найденные на сайтах магазинов-дистрибьюторов (карточки товаров).
// Порядок важен: сначала специфичные вкусы, затем общий бренд как запасной вариант —
// первое совпадение по вхождению в название напитка побеждает.
const CURATED_PHOTOS = [
  // Локальные фотографии объединённого раздела «Азия».
  { match:'Sting', exact:true, url:'assets/images/asia-001.jpg' },
  { match:'Number 1', exact:true, url:'assets/images/asia-002.jpg' },
  { match:'Red Bull (Bò Húc)', exact:true, url:'assets/images/asia-003.jpg' },
  { match:'Warrior', exact:true, url:'assets/images/asia-004.jpg' },
  { match:'Carabao', exact:true, url:'assets/images/asia-005.jpg' },
  { match:'Samurai', exact:true, url:'assets/images/asia-006.webp' },
  { match:'M-150', exact:true, url:'assets/images/asia-007.jpg' },
  { match:'Compact', exact:true, url:'assets/images/asia-009.png' },
  { match:'Monster', exact:true, url:'assets/images/asia-010.jpg' },
  { match:'Rhino', exact:true, url:'assets/images/asia-011.jpg' },
  { match:'Red Tiger', exact:true, url:'assets/images/asia-012.webp' },
  { match:'Extra Joss', exact:true, url:'assets/images/asia-013.jpg' },
  { match:'Livita', exact:true, url:'assets/images/fixed-asia-livita.jpg' },
  { match:'100PLUS', exact:true, url:'assets/images/fixed-asia-100plus.jpg' },
  { match:'Gorilla Energy', exact:true, url:'assets/images/asia-016.jpg' },
  { match:'Red Bull', exact:true, url:'assets/images/asia-017.jpg' },
  { match:'Kickapoo', exact:true, url:'assets/images/fixed-asia-kickapoo.png' },
  { match:'Boom Energy Shot', exact:true, url:'assets/images/asia-019.jpg' },
  { match:'Vitamin Well', exact:true, url:'assets/images/asia-021.jpg' },
  { match:'Celsius', exact:true, url:'assets/images/fixed-asia-celsius.jpg' },
  { match:'Krating Daeng', exact:true, url:'assets/images/asia-024.webp' },
  { match:'Carabao Dang', exact:true, url:'assets/images/fixed-asia-carabao.webp' },
  { match:'Sponsor', exact:true, url:'assets/images/fixed-asia-sponsor.png' },
  { match:'Lipovitan-D', exact:true, url:'assets/images/asia-028.jpg' },
  { match:'Shark (Chalarm)', exact:true, url:'assets/images/fixed-asia-shark.jpg' },
  { match:'Commando', exact:true, url:'assets/images/asia-030.jpg' },
  { match:'Kuku Bima Ener-G', exact:true, url:'assets/images/fixed-asia-kukubima.png' },
  { match:'Extra Joss Active', exact:true, url:'assets/images/fixed-asia-extra-joss-active.png' },
  { match:'Hemaviton Energy Drink', exact:true, url:'assets/images/asia-035.png' },
  // Новые позиции из актуальной витрины «Перекрёстка» — одиночные товарные фото.
  { match:'Gorilla California', exact:true, url:'assets/images/add-gorilla-california.jpg' },
  { match:'Coca-Cola Energy Original', exact:true, url:'assets/images/add-coca-cola-energy.jpg' },
  { match:'Coca-Cola Energy Zero', exact:true, url:'assets/images/add-coca-cola-energy-zero.jpg' },
  { match:'Tornado Max Energy Razzberry', exact:true, url:'assets/images/add-tornado-razzberry.png' },
  { match:'Tornado Max Energy Mango', exact:true, url:'assets/images/add-tornado-mango.png' },
  { match:'Tornado Ice', exact:true, url:'assets/images/add-tornado-ice.png' },
  { match:'Tornado Skill', exact:true, url:'assets/images/add-tornado-skill.jpg' },
  { match:'Drive Me Яблоко-Карамбола', exact:true, url:'assets/images/fixed-drive-apple-carambola.png' },
  { match:'Burn Лимонный лёд', exact:true, url:'assets/images/add-burn-lemon-ice.jpg' },
  { match:'Black Monster The Doctor', exact:true, url:'assets/images/add-black-monster-doctor.png' },
  { match:'Black Monster Ultra', exact:true, url:'assets/images/add-black-monster-ultra.jpg' },
  { match:'Байкал Natural Energy Малина-Дикая смородина', exact:true, url:'assets/images/add-baikal-raspberry-currant.png' },
  // Локальные фотографии остальных позиций — проверены визуально.
  { match:'100кВт Original', exact:true, url:'assets/images/extra-001.jpg' },
  { match:'100кВт Tropic', exact:true, url:'assets/images/fixed-100kw-tropic.jpg' },
  { match:'2K Energy Original', exact:true, url:'assets/images/extra-003.webp' },
  { match:'Adrenaline Rush Game Fuel Манго', exact:true, url:'assets/images/extra-004.jpg' },
  { match:'Adrenaline Rush Red Energy', exact:true, url:'assets/images/extra-005.jpg' },
  { match:'Adrenaline Rush Spicy Energy', exact:true, url:'assets/images/extra-006.jpg' },
  { match:'Anarchy Original', exact:true, url:'assets/images/extra-007.jpg' },
  { match:'Barinoff Alligator Original', exact:true, url:'assets/images/extra-008.jpg' },
  { match:'BIZON Original', exact:true, url:'assets/images/extra-009.jpg' },
  { match:'Black Energy Original', exact:true, url:'assets/images/fixed-black-energy.png' },
  { match:'Black Monster Original', exact:true, url:'assets/images/extra-011.jpg' },
  { match:'Bullit Original', exact:true, url:'assets/images/extra-012.jpg' },
  { match:'Burn Арбуз без сахара', exact:true, url:'assets/images/extra-013.jpg' },
  { match:'BY БАСТА Голубая малина', exact:true, url:'assets/images/extra-014.webp' },
  { match:'BY БАСТА Гранат-Барбарис', exact:true, url:'assets/images/extra-015.jpg' },
  { match:'BY БАСТА Цитрус микс', exact:true, url:'assets/images/extra-016.webp' },
  { match:'Double You Original', exact:true, url:'assets/images/extra-017.jpg' },
  { match:'Double You Гуава-Арбуз', exact:true, url:'assets/images/extra-018.jpg' },
  { match:'Dracula Original', exact:true, url:'assets/images/extra-019.png' },
  { match:'Drive Me Max', exact:true, url:'assets/images/extra-020.webp' },
  { match:'E-ON Original', exact:true, url:'assets/images/extra-021.jpg' },
  { match:'E-ON Almond Rush', exact:true, url:'assets/images/extra-022.jpg' },
  { match:'Effect Original', exact:true, url:'assets/images/extra-023.png' },
  { match:'Effect Zero', exact:true, url:'assets/images/extra-024.png' },
  { match:'EnerGO Original', exact:true, url:'assets/images/fixed-energo-original.png' },
  { match:'Flash Energy Original', exact:true, url:'assets/images/extra-026.png' },
  { match:'Genesis Original', exact:true, url:'assets/images/extra-027.png' },
  { match:'Gorilla Lychee', exact:true, url:'assets/images/extra-028.jpg' },
  { match:'Gorilla Orange', exact:true, url:'assets/images/extra-029.jpg' },
  { match:'Gorilla Мохито', exact:true, url:'assets/images/extra-030.png' },
  { match:'HotCat Original', exact:true, url:'assets/images/extra-031.jpg' },
  { match:'Invoke Original', exact:true, url:'assets/images/extra-032.jpg' },
  { match:'Jaguar Wild Energy Original', exact:true, url:'assets/images/extra-033.jpg' },
  { match:'Jaguar Wild Energy Ягодный', exact:true, url:'assets/images/extra-034.jpg' },
  { match:'LIT Energy Original', exact:true, url:'assets/images/extra-035.jpg' },
  { match:'Monster Energy Original', exact:true, url:'assets/images/extra-036.jpg' },
  { match:'Monster Energy Absolutely Zero', exact:true, url:'assets/images/fixed-monster-absolute.webp' },
  { match:'Monster Energy Lewis Hamilton Zero Sugar', exact:true, url:'assets/images/extra-038.jpg' },
  { match:'Monster Energy Mango Loco', exact:true, url:'assets/images/extra-039.jpg' },
  { match:'Monster Energy Monarch', exact:true, url:'assets/images/extra-040.jpg' },
  { match:'Monster Energy Pacific Punch', exact:true, url:'assets/images/fixed-monster-pacific.jpg' },
  { match:'Monster Energy Pipeline Punch', exact:true, url:'assets/images/extra-042.webp' },
  { match:'Monster Energy Ultra Fiesta Mango', exact:true, url:'assets/images/extra-043.jpg' },
  { match:'Monster Energy Ultra Paradise', exact:true, url:'assets/images/fixed-monster-paradise.jpg' },
  { match:'Monster Energy Ultra Peachy Keen', exact:true, url:'assets/images/extra-045.jpg' },
  { match:'Monster Energy Ultra Rosa', exact:true, url:'assets/images/extra-046.jpg' },
  { match:'Monster Energy Ultra Strawberry Dreams', exact:true, url:'assets/images/fixed-monster-strawberry.jpg' },
  { match:'Monster Energy Ultra Watermelon', exact:true, url:'assets/images/extra-048.jpg' },
  { match:'Monster Energy Ultra White', exact:true, url:'assets/images/fixed-monster-white.png' },
  { match:'Nature Rush Энергия кофе Шоколад и апельсин', exact:true, url:'assets/images/nature-rush-chocolate-orange.png' },
  { match:'Nature Rush Энергия сока Красный грейпфрут', exact:true, url:'assets/images/nature-rush-grapefruit.png' },
  { match:'Nature Rush Энергия чая Малина и мята', exact:true, url:'assets/images/nature-rush-raspberry-mint.png' },
  { match:'PulseUp Original', exact:true, url:'assets/images/extra-051.jpg' },
  { match:'Red Bull Original', exact:true, url:'assets/images/extra-052.jpg' },
  { match:'Red Bull Sugarfree', exact:true, url:'assets/images/extra-053.jpg' },
  { match:'Red Bull Zero', exact:true, url:'assets/images/extra-054.jpg' },
  { match:'Red Bull Apricot Edition', exact:true, url:'assets/images/extra-055.jpg' },
  { match:'Red Bull Blue Edition', exact:true, url:'assets/images/extra-056.jpg' },
  { match:'Red Bull Coconut Edition', exact:true, url:'assets/images/extra-057.jpg' },
  { match:'Red Bull Green Edition', exact:true, url:'assets/images/extra-058.jpg' },
  { match:'Red Bull Peach Edition', exact:true, url:'assets/images/extra-059.jpg' },
  { match:'Red Bull Red Edition Арбуз', exact:true, url:'assets/images/extra-060.jpg' },
  { match:'Red Bull Sea Blue Edition', exact:true, url:'assets/images/extra-061.jpg' },
  { match:'Red Bull Tropical Edition', exact:true, url:'assets/images/extra-062.jpg' },
  { match:'Red Bull White Edition', exact:true, url:'assets/images/extra-063.jpg' },
  { match:'Red Bull Yellow Edition', exact:true, url:'assets/images/extra-064.jpg' },
  { match:'Revo Energy Original', exact:true, url:'assets/images/extra-065.png' },
  { match:'SPAR Berry', exact:true, url:'assets/images/fixed-spar-berry.jpg' },
  { match:'SPAR Kiwi-Apple', exact:true, url:'assets/images/fixed-spar-kiwi-apple.png' },
  { match:'Target Original', exact:true, url:'assets/images/extra-068.jpg' },
  { match:'Tassay Energy Original', exact:true, url:'assets/images/extra-069.png' },
  { match:'Tornado Energy Original', exact:true, url:'assets/images/extra-070.webp' },
  { match:'Tornado Energy Asian Mix', exact:true, url:'assets/images/extra-071.webp' },
  { match:'Tornado Energy Russian', exact:true, url:'assets/images/extra-072.jpg' },
  { match:'Tornado Energy Кокос', exact:true, url:'assets/images/extra-073.jpg' },
  { match:'Tornado Energy Яблоко', exact:true, url:'assets/images/extra-074.jpg' },
  { match:'VELOCITY Original', exact:true, url:'assets/images/extra-075.jpg' },
  { match:'Volt Energy Яблоко-Крыжовник', exact:true, url:'assets/images/fixed-volt-wylsacom-apple-gooseberry.png' },
  { match:'WK UP Original', exact:true, url:'assets/images/fixed-wkup-original.jpg' },
  { match:'X-Turbo Energy Active Ежевика-Малина', exact:true, url:'assets/images/extra-078.jpg' },
  { match:'X-Turbo Focus Energy Original', exact:true, url:'assets/images/extra-079.webp' },
  { match:'Армия России Original', exact:true, url:'assets/images/extra-080.jpg' },
  { match:'Байкал Natural Energy Кофе-Лимон', exact:true, url:'assets/images/extra-081.jpg' },
  { match:'Брянскпиво Energy Original', exact:true, url:'assets/images/fixed-bryansk.png' },
  { match:'Крым Energy Original', exact:true, url:'assets/images/extra-083.jpg' },
  { match:'НЕФТЬ Лайм', exact:true, url:'assets/images/fixed-neft-mango-coconut.png' },
  { match:'НЕФТЬ Манго-Кокос', exact:true, url:'assets/images/fixed-neft-mango-coconut.png' },
  { match:'ОЗВЕРИН Original', exact:true, url:'assets/images/extra-086.png' },
  { match:'Энергия Первых Original', exact:true, url:'assets/images/extra-087.jpg' },
  // Локальные фотографии из каталога «Ленты» — точное соответствие позиции и вкуса.
  { match:'Adrenaline Rush Original', exact:true, url:'assets/images/501439.webp' },
  { match:'Adrenaline Rush Juicy Ягодная энергия', exact:true, url:'assets/images/501176.webp' },
  { match:'Adrenaline Rush Extra', exact:true, url:'assets/images/724155.webp' },
  { match:'Adrenaline Rush Silver Energy Zero Sugar', exact:true, url:'assets/images/611389.webp' },
  { match:'Adrenaline Rush Game Fuel', exact:true, url:'assets/images/501716.webp' },
  { match:'Adrenaline Rush Юдзу, клубника и каламанси', exact:true, url:'assets/images/895031.webp' },
  { match:'BIZON Малина', exact:true, url:'assets/images/891462.webp' },
  { match:'Burn Original', exact:true, url:'assets/images/534125.webp' },
  { match:'Burn Original Zero Sugar', exact:true, url:'assets/images/900246.webp' },
  { match:'Burn Апельсиновый микс', exact:true, url:'assets/images/740551.webp' },
  { match:'Burn Гуава', exact:true, url:'assets/images/720054.webp' },
  { match:'Burn Манго', exact:true, url:'assets/images/695860.webp' },
  { match:'Burn Персик-Манго Zero', exact:true, url:'assets/images/598004.webp' },
  { match:'Burn Сочная энергия', exact:true, url:'assets/images/694975.webp' },
  { match:'Burn Тропический микс', exact:true, url:'assets/images/534229.webp' },
  { match:'Burn Цитрусовая энергия без сахара', exact:true, url:'assets/images/741673.webp' },
  { match:'Burn Яблоко-Киви', exact:true, url:'assets/images/534084.webp' },
  { match:'BY БАСТА Original Energy Drink', exact:true, url:'assets/images/486991.webp' },
  { match:'BY БАСТА Zero Sugar Классический', exact:true, url:'assets/images/486992.webp' },
  { match:'Drive Me Original', exact:true, url:'assets/images/737064.webp' },
  { match:'Drive Me Berry Kick', exact:true, url:'assets/images/500794.webp' },
  { match:'Drive Me Citrus Smash', exact:true, url:'assets/images/717071.webp' },
  { match:'Drive Me Гуава-Манго Zero Sugar', exact:true, url:'assets/images/743764.webp' },
  { match:'Drive Me Экзотическая энергия', exact:true, url:'assets/images/883867.webp' },
  { match:'Flash Up Original', exact:true, url:'assets/images/467781.webp' },
  { match:'Flash Up Max Original', exact:true, url:'assets/images/234449.webp' },
  { match:'Flash Up Max Мятный лайм', exact:true, url:'assets/images/668158.webp' },
  { match:'Flash Up Ultra Energy', exact:true, url:'assets/images/611498.webp' },
  { match:'Flash Up Game Mode MP', exact:true, url:'assets/images/909898.webp' },
  { match:'Flash Up Game Mode XP', exact:true, url:'assets/images/909257.webp' },
  { match:'Flash Up Bubble Gum Банан-Клубника', exact:true, url:'assets/images/697410.webp' },
  { match:'Flash Up Апельсиновый ритм', exact:true, url:'assets/images/508652.webp' },
  { match:'Flash Up Киви-Карамбола', exact:true, url:'assets/images/729385.webp' },
  { match:'Flash Up Маршмеллоу', exact:true, url:'assets/images/771217.webp' },
  { match:'Flash Up Мятный лайм', exact:true, url:'assets/images/654733.webp' },
  { match:'Flash Up Ягодный микс', exact:true, url:'assets/images/508669.webp' },
  { match:'Gorilla Original', exact:true, url:'assets/images/501366.webp' },
  { match:'Gorilla Berry Bloom', exact:true, url:'assets/images/889231.webp' },
  { match:'Gorilla Green Boost', exact:true, url:'assets/images/884068.webp' },
  { match:'Gorilla Mango Coconut', exact:true, url:'assets/images/573140.webp' },
  { match:'Gorilla Tropical Punch', exact:true, url:'assets/images/746635.webp' },
  { match:'Gorilla Арбуз-Дыня', exact:true, url:'assets/images/864252.webp' },
  { match:'JUSTER Вишня-Черешня', exact:true, url:'assets/images/911635.webp' },
  { match:'JUSTER Юзу-Каламанси-Каму-каму', exact:true, url:'assets/images/911634.webp' },
  { match:'JUSTER Яблоко-Ревень', exact:true, url:'assets/images/911632.webp' },
  { match:'LIT Energy Original Zero Sugar', exact:true, url:'assets/images/734670.webp' },
  { match:'LIT Energy Blueberry', exact:true, url:'assets/images/716128.webp' },
  { match:'LIT Energy Citrus Punch', exact:true, url:'assets/images/900239.webp' },
  { match:'LIT Energy Classic Клюква-Барбарис', exact:true, url:'assets/images/720194.webp' },
  { match:'LIT Energy Strawberry', exact:true, url:'assets/images/803809.webp' },
  { match:'Power Torr Black Классический', exact:true, url:'assets/images/486299.webp' },
  { match:'Power Torr Navy Чёрная смородина', exact:true, url:'assets/images/518405.webp' },
  { match:'Power Torr Red Ягодно-фруктовый микс', exact:true, url:'assets/images/510786.webp' },
  { match:'Power Torr Ultra Манго', exact:true, url:'assets/images/723878.webp' },
  { match:'Tornado Energy Max Storm Original', exact:true, url:'assets/images/fixed-tornado-max-can.png' },
  { match:'VELOCITY Ускорение', exact:true, url:'assets/images/695611.webp' },
  { match:'VELOCITY Тутти-фрутти', exact:true, url:'assets/images/695610.webp' },
  { match:'VELOCITY Тутти-фрутти и малина', exact:true, url:'assets/images/695609.webp' },
  { match:'Volt Energy Original', exact:true, url:'assets/images/689726.webp' },
  { match:'Volt Energy Zero Sugar', exact:true, url:'assets/images/717395.webp' },
  { match:'Volt Energy Виноград-Гуава', exact:true, url:'assets/images/736022.webp' },
  { match:'Volt Energy Голубика-Гранат', exact:true, url:'assets/images/689725.webp' },
  { match:'Volt Energy Кокос-Манго', exact:true, url:'assets/images/717374.webp' },
  { match:'Volt Energy Манго-Лайм', exact:true, url:'assets/images/689727.webp' },
  { match:'Volt Energy Помело-Мята', exact:true, url:'assets/images/909899.webp' },
  { match:'Volt Energy Сакура-Персик', exact:true, url:'assets/images/911629.webp' },
  { match:'Volt Energy Сливовый пирог', exact:true, url:'assets/images/911630.webp' },
  // Точные фотографии вкусов
  { match:'Adrenaline Rush Game Fuel', exact:true, url:'https://static.price.ru/images/models/401x401/energeticheskiy-napitok/adrenaline-rush-napitok-game-fuel-energeticheskiy-449ml/1c9a385d0f77faa7b0934834d98ad45f.JPEG' },
  { match:'Burn Апельсиновый микс', exact:true, url:'https://imgproxy.kuper.ru/imgproxy/size-500-500/czM6Ly9zYi1vYnMtcHJvZC1jb250ZW50LWltYWdlczAxL3Byb2R1Y3RzLzQ2NDMwNTYyL29yaWdpbmFsLzIvMjAyNi0wNC0yMSUyMDE1JTNBMjglM0ExMC4wNjExODIlMkIwMCUzQTAwLzQ2NDMwNTYyXzIuanBn.jpg' },
  { match:'Burn Манго', exact:true, url:'https://images-foodtech.magnit.ru/tdvpMnEXxAPNP_27Kk9dQ4Ww529C76kykM0NZ6yuSag/rs%3Afit%3A1600%3A1600/plain/s3%3A/img-dostavka/catalog/uf/9ae/9aeccd8aef7514497f3298b172968706/c6668bee885e524baf4b08e476710d36.jpeg%40webp' },
  { match:'Burn Гуава', exact:true, url:'https://xn----jtbzuinr8d.xn--p1ai/storage/.thumbs/preview500x500_bern-guava.jpg' },
  { match:'Burn Яблоко-Киви', exact:true, url:'https://cdn.metro-cc.ru/ru/ru_pim_66051001001_01.png' },
  { match:'Burn Персик-Манго Zero', exact:true, url:'https://cdn.metro-cc.ru/ru/ru_pim_112920001001_01.png' },
  { match:'Burn Dark Energy', exact:true, url:'https://img.megastroycdn.ru/YXx4GL31shE/products/9ebdd8342048d33d67fc79412547a0aa7ab77b66833b5343be610b5564f847c8/423212_1_70b4534555b6592cb154c2132c88f6d2.jpg' },
  { match:'Burn Gold Rush', exact:true, url:'https://cdn.metro-cc.ru/ru/ru_pim_161882001001_01.png' },
  { match:'Burn Сочная энергия', exact:true, url:'https://cdn.metro-cc.ru/ru/ru_pim_194229001001_01.png' },
  { match:'Burn Тропический микс', exact:true, url:'https://cdn.metro-cc.ru/ru/ru_pim_66904001001_02.png?format=jpg&height=460&maxheight=460&maxwidth=460&quality=90&width=460' },
  { match:'Flash Up Мятный лайм', exact:true, url:'https://bknd.kardo55.ru/storage/606/1200%D1%851600_Solo_Lime.png' },
  { match:'Flash Up Киви-Карамбола', exact:true, url:'https://cdn.metro-cc.ru/ru/ru_pim_207777001001_01.png' },
  { match:'Flash Up Манго-Ананас', exact:true, url:'https://cdn.api.lenta.com/resample/webp/250x250/photo/717217/94f2b91c-5b16-4521-815a-3526f25a3e7e.png' },
  { match:'Flash Up Ягодный микс', exact:true, url:'https://backend.magnit.tj/uploads/images/b6a29dac3044ca59839d20bea94b7d16-1024x1024.jpg' },
  { match:'Adrenaline Rush Silver Energy Zero Sugar', exact:true, url:'https://cdn.metro-cc.ru/ru/ru_pim_127854001002_02.png' },
  { match:'Adrenaline Rush Vitamin Power Ягодная энергия', exact:true, url:'https://cdn.metro-cc.ru/ru/ru_pim_558507001001_01.png' },
  { match:'Adrenaline Rush Юдзу, клубника и каламанси', exact:true, url:'https://cdn.metro-cc.ru/ru/ru_pim_414791001001_01.png' },
  { match:'Gorilla Green Boost', exact:true, url:'https://cdn.metro-cc.ru/ru/ru_pim_307353001001_01.png' },
  { match:'Gorilla Cherry Berry', exact:true, url:'https://cdn.metro-cc.ru/ru/ru_pim_267426001002_01.png' },
  { match:'LIT Energy Blueberry', exact:true, url:'https://images-foodtech.magnit.ru/EurkB-SHKp1n8VOt3T52_ZoFDr-S0TOfDu8lmo3X8SI/rs%3Afit%3A1600%3A1600/plain/s3%3A/img-dostavka/catalog/uf/da5/da5a91616412789f2f195b2e364864b9/57cd5187467d5e3c59e17c9a78a5756c.jpeg%40webp' },
  { match:'LIT Energy Citrus Punch', exact:true, url:'https://mdkprod.ru/thumb/2/gyd06cj-qu3tJL2U1SOT5w/r/d/lit_energy_citrus_punch.jpg' },
  { match:'Drive Me Berry Kick', exact:true, url:'https://cdn.metro-cc.ru/ru/ru_pim_560093001001_01.png' },
  { match:'Drive Me Citrus Smash', exact:true, url:'https://cdn.metro-cc.ru/ru/ru_pim_220182001001_01.png' },
  { match:'Drive Me Nitro Boost', exact:true, url:'https://veganrussian.ru/content/images/2021/10/-4-4.webp' },
  { match:'Drive Me Гуава-Манго Zero Sugar', exact:true, url:'https://cdn.metro-cc.ru/ru/ru_pim_167124001001_01.png' },
  { match:'Tornado Energy Black', exact:true, url:'https://www.barista-ltd.ru/components/com_jshopping/files/img_products/energy-tonic-tornado-black-450ml-can_0.jpg' },
  { match:'Tornado Energy Bubble', exact:true, url:'assets/images/fixed-tornado-bubble.png' },
  { match:'Power Torr Black Классический', exact:true, url:'https://static.tildacdn.com/tild6463-3763-4537-b134-643436336231/Frame_18675_1.webp' },
  { match:'Power Torr Red Ягодно-фруктовый микс', exact:true, url:'https://static.tildacdn.com/tild3734-3931-4131-a565-613561646364/Frame_9.png' },
  { match:'Power Torr Navy Чёрная смородина', exact:true, url:'https://static.tildacdn.com/tild3236-3432-4830-b361-373365646138/Frame_18681_1.webp' },
  { match:'Power Torr Черничный пончик', exact:true, url:'https://static.tildacdn.com/tild3339-3139-4335-a130-643064336338/Donut_1L-1_2.png' },
  { match:'Power Torr Тропический', exact:true, url:'assets/images/fixed-power-torr.png' },
  { match:'Power Torr Ultra Манго', exact:true, url:'https://static.tildacdn.com/tild3531-3031-4333-b231-373633373762/cylinder-1_2.png' },
  { match:'Volt Energy Голубика-Гранат', exact:true, url:'https://cdn.metro-cc.ru/ru/ru_pim_167131001001_01.png' },
  { match:'Volt Energy Апельсин-Маракуйя', exact:true, url:'https://img.nedostavka.net/66fd3b6e4248d30ea2564400' },
  { match:'Volt Energy Киви-Фейхоа', exact:true, url:'https://imgproxy.kuper.ru/imgproxy/size-500-500/czM6Ly9zYi1vYnMtcHJvZC1jb250ZW50LWltYWdlczAxL3Byb2R1Y3RzLzQ3MTU2ODg0L29yaWdpbmFsLzEvMjAyNS0wNi0yNCUyMDEzJTNBMzMlM0E1Mi4zMzE5ODklMkIwMCUzQTAwLzQ3MTU2ODg0XzEuanBn.jpg' },
  { match:'Volt Energy Грейпфрут-Клубника', exact:true, url:'https://images-foodtech.magnit.ru/Gtz6HN6FOpvO13AL5coMxMclLndcle9SykzowxsnLng/rs%3Afit%3A1600%3A1600/plain/s3%3A/img-dostavka/catalog/uf/ce9/ce9a6b7e2db2f16c3be2d303fc0eace9/6016b3e38a73f91265ef4c63344d3dc0.jpeg%40webp' },
  // Россия — Barinoff
  { match:'Barinoff Energy Манго-Кокос', exact:true, url:'assets/images/fixed-barinoff-energy-mango-coconut.png' },
  { match:'Barinoff Alligator', url:'https://www.barista-ltd.ru/components/com_jshopping/files/img_products/Barinoff-energy-drink_Alligator-Original_1.jpg' },
  { match:'Aziano Energy Fly Zero', exact:true, url:'https://napitkiopt.ru/wa-data/public/shop/products/35/30/3035/images/2609/2609.970.jpg' },
  { match:'Aziano Energy Power Zero', exact:true, url:'https://images.satu.kz/239270829_w640_h640_239270829.jpg' },
  // Россия — Adrenaline Rush
  { match:'Adrenaline Rush', url:'https://www.barista-ltd.ru/components/com_jshopping/files/img_products/thumb_adrenalin-rash-05l.jpeg' },
  // Россия — Burn
  { match:'Burn Zero Sugar', url:'https://www.barista-ltd.ru/components/com_jshopping/files/img_products/thumb_burn-peach-zero-sugar-449ml-21270-01.jpg' },
  { match:'Burn Original',   url:'https://www.barista-ltd.ru/components/com_jshopping/files/img_products/thumb_burn-energeticheskiy-napitok-bern-500ml-zhb-3900-011.jpg' },
  { match:'Burn',            url:'https://www.barista-ltd.ru/components/com_jshopping/files/img_products/thumb_burn-energeticheskiy-napitok-bern-500ml-zhb-3900-011.jpg' },
  // Россия — Gorilla
  { match:'Gorilla Mango Coconut', exact:true, url:'https://catalog-img.x5static.net/400x400-fit/product/1518541-main/800x800.jpeg' },
  { match:'Gorilla',               url:'https://catalog-img.x5static.net/400x400-fit/product/1190244-main/800x800.jpeg' },
  // Россия — Red Bull
  { match:'Red Bull Sugarfree', url:'https://www.barista-ltd.ru/components/com_jshopping/files/img_products/thumb_Red-Bull-SugarFREE_250ml_00.jpg' },
  // Россия — Tornado
  { match:'Tornado Energy', url:'https://www.barista-ltd.ru/components/com_jshopping/files/img_products/thumb_Energy-tonic_Tornado_ORIGINAL_Max-Energy_450ml_0.jpg' },
  // Россия — Flash Up
  { match:'Flash Up', url:'https://www.barista-ltd.ru/components/com_jshopping/files/img_products/thumb_FlashUP-energy-original-450ml-can1.jpg' },
  // Россия — Drive Me
  { match:'Drive Me', url:'https://www.barista-ltd.ru/components/com_jshopping/files/img_products/thumb_Drive-Me_energy-drink_449_green.jpg' },
  // Россия — LIT Energy
  { match:'LIT Energy Malina', url:'https://catalog-img.x5static.net/400x400-fit/product/1576938-main/800x800.jpeg' },
  { match:'LIT Energy Peach',  url:'https://www.barista-ltd.ru/components/com_jshopping/files/img_products/thumb_lit-energy-peach-energy-drink-450-20539-01.jpg' },
  { match:'LIT Energy',        url:'https://catalog-img.x5static.net/400x400-fit/product/1575088-main/800x800.jpeg' },
  // Россия — Genesis, Jaguar
  { match:'Genesis', url:'https://www.barista-ltd.ru/components/com_jshopping/files/img_products/thumb_Genesis_EnergyTonic_Green-Star.jpg' },
  { match:'Jaguar',   url:'https://www.barista-ltd.ru/components/com_jshopping/files/img_products/thumb_Jaguar_Cult_0_5l.jpg' },
  // Россия — НЕФТЬ
  { match:'НЕФТЬ Клюква-Арония', exact:true, url:'https://yastatic.net/avatars/get-grocery-goods/2791769/eb739aee-d35f-4a55-9093-2a30082dc7a2/464x464-origin' },
  { match:'НЕФТЬ Апельсин-Маракуйя', exact:true, url:'https://mosprivoz.ru/upload/iblock/4bd/4bda10c8019f70a4bfedb110bd646723.jpeg' },
  { match:'НЕФТЬ', url:'https://mosprivoz.ru/upload/iblock/4bd/4bda10c8019f70a4bfedb110bd646723.jpeg' },
  // Россия — Black Monster (проверяем раньше общего Monster)
  { match:'Black Monster', url:'https://images.openfoodfacts.org/images/products/506/063/912/5395/front_ru.19.400.jpg' },
  // Monster — общий (Вьетнам, Малайзия)
  { match:'Monster', url:'https://www.barista-ltd.ru/components/com_jshopping/files/img_products/thumb_Monster_Energy-Mango-Loco_tin-can-500ml.jpg' },
  // Россия — Volt Energy, Target
  { match:'Volt Energy', url:'https://catalog-img.x5static.net/400x400-fit/product/1500511-main/800x800.jpeg' },
  { match:'Target',      url:'https://drinks-energy.ru/wp-content/uploads/2024/09/t-o-10.png' },
  // Вьетнам / Таиланд / общие бренды (найдены как логотипы поставщика)
  { match:'Number 1',        url:'https://fmcg-viet.com/wp-content/uploads/2021/05/Number-1-Enrgy-Drink-Bottle-330ml-x24-2-300x300.jpg' },
  { match:'Warrior',         url:'https://fmcg-viet.com/wp-content/uploads/2020/12/brand_warrior_logo.png' },
  { match:'Carabao',         url:'https://fmcg-viet.com/wp-content/uploads/2020/05/brand-carabao-logo.png' },
  { match:'M-150',           url:'https://fmcg-viet.com/wp-content/uploads/2020/09/brand-M-150-Logo.jpg' },
  { match:'Sting',           url:'https://fmcg-viet.com/wp-content/uploads/2020/07/brand-sting-logo.jpg' },
  // Red Bull — общий (после специфичного Sugarfree выше)
  { match:'Red Bull', url:'https://www.barista-ltd.ru/components/com_jshopping/files/img_products/thumb_banka-red-bull-250-for-vending.jpg' },
];
function curatedPhotoFor(name){
  const lowered = name.toLowerCase();
  const exact = CURATED_PHOTOS.find(p => p.exact && lowered === p.match.toLowerCase());
  if(exact) return exact.url;
  const parts = drinkNameParts(name);
  if(parts.flavor !== 'Original') return null;
  const found = CURATED_PHOTOS.find(p => !p.exact && lowered.includes(p.match.toLowerCase()));
  return found ? found.url : null;
}

const DRINK_BRANDS = [
  'Adrenaline Rush','Barinoff Alligator','Barinoff Energy','Jaguar Wild Energy','Monster Energy',
  'Tornado Max Energy','Tornado Energy','X-Turbo Energy','X-Turbo Focus Energy','BY БАСТА',
  'Power Torr','Flash Energy','Flash Up','LIT Energy','Volt Energy','Drive Me',
  'Aziano Energy','Coca-Cola Energy','Red Bull','Black Monster','Black Energy','Revo Energy',
  'Tassay Energy','2K Energy','100кВт','BIZON','Bullit','Burn','Double You',
  'Dracula','E-ON','Effect','EnerGO','Genesis','Gorilla','HotCat','Invoke',
  'JUSTER','Monster','Nature Rush','PulseUp','SPAR','Target','VELOCITY','WK UP',
  'Армия России','Байкал Natural Energy','Брянскпиво Energy',
  'Крым Energy','НЕФТЬ','ОЗВЕРИН','Энергия Первых'
].sort((a,b) => b.length - a.length);

function drinkNameParts(name){
  const loweredName = name.toLowerCase();
  const brand = DRINK_BRANDS.find(candidate => loweredName.startsWith(candidate.toLowerCase()));
  if(!brand) return { brand:name, flavor:'' };
  return { brand, flavor:name.slice(brand.length).trim() || 'Original' };
}

function idFor(countryKey, name){
  return countryKey + '__' + name.toLowerCase().replace(/[^a-z0-9а-яё]+/gi,'-');
}

const DRINK_INDEX = new Map(
  COUNTRIES.flatMap(country => country.drinks.map(drink => [idFor(country.key, drink[0]), { country, drink }]))
);

// ---------- State ----------
let tried = new Set();       // set of ids
let photos = {};             // id -> dataURL (base64, resized)
let top3 = [null, null, null];
let ratings = {};            // id -> 1..5
let hidden = new Set();      // drinks the user does not plan to try
let activeCountry = COUNTRIES[0].key;
let activeTab = 'browse';
let searchQuery = '';
let showHidden = false;
let lastRankMin = null;

const ratingDialog = document.getElementById('ratingDialog');
const ratingName = document.getElementById('ratingName');
const ratingStars = Array.from(document.querySelectorAll('.rating-star'));
const ratingClose = document.getElementById('ratingClose');
const ratingRemove = document.getElementById('ratingRemove');
const ratingSkip = document.getElementById('ratingSkip');
let ratingTargetId = null;
let ratingReturnFocus = null;

function paintRatingStars(value){
  ratingStars.forEach((star, index) => {
    const filled = index < value;
    star.classList.toggle('filled', filled);
    star.textContent = filled ? '★' : '☆';
  });
}

function openRatingDialog(id, returnFocus){
  const found = drinkById(id);
  if(!found) return;
  ratingTargetId = id;
  ratingReturnFocus = returnFocus || null;
  ratingName.textContent = found.drink[0];
  paintRatingStars(Number(ratings[id]) || 0);
  ratingRemove.classList.toggle('visible', tried.has(id));
  ratingSkip.textContent = hidden.has(id) ? 'Вернуть в общий список' : 'Я не буду это пробовать';
  ratingDialog.classList.add('open');
  ratingDialog.setAttribute('aria-hidden', 'false');
  document.body.classList.add('dialog-open');
  ratingClose.focus({ preventScroll:true });
}

function closeRatingDialog(){
  ratingDialog.classList.remove('open');
  ratingDialog.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('dialog-open');
  ratingTargetId = null;
  if(ratingReturnFocus && ratingReturnFocus.isConnected) ratingReturnFocus.focus({ preventScroll:true });
  ratingReturnFocus = null;
}

ratingStars.forEach(star => {
  const value = Number(star.dataset.value);
  star.addEventListener('mouseenter', () => paintRatingStars(value));
  star.addEventListener('focus', () => paintRatingStars(value));
  star.addEventListener('click', async () => {
    if(!ratingTargetId) return;
    ratings[ratingTargetId] = value;
    tried.add(ratingTargetId);
    hidden.delete(ratingTargetId);
    await Promise.all([saveRatings(), saveTried(), saveHidden()]);
    closeRatingDialog();
    renderAll();
  });
});
document.getElementById('ratingStars').addEventListener('mouseleave', () => {
  paintRatingStars(Number(ratings[ratingTargetId]) || 0);
});
ratingClose.addEventListener('click', closeRatingDialog);
ratingDialog.addEventListener('click', event => {
  if(event.target === ratingDialog) closeRatingDialog();
});
ratingRemove.addEventListener('click', async () => {
  if(!ratingTargetId) return;
  const removedId = ratingTargetId;
  tried.delete(removedId);
  delete ratings[removedId];
  top3 = top3.map(id => id === removedId ? null : id);
  await Promise.all([saveTried(), saveRatings(), saveTop3()]);
  closeRatingDialog();
  renderAll();
});
ratingSkip.addEventListener('click', async () => {
  if(!ratingTargetId) return;
  const id = ratingTargetId;
  if(hidden.has(id)){
    hidden.delete(id);
  }else{
    hidden.add(id);
    tried.delete(id);
    delete ratings[id];
    top3 = top3.map(topId => topId === id ? null : topId);
  }
  await Promise.all([saveHidden(), saveTried(), saveRatings(), saveTop3()]);
  closeRatingDialog();
  renderAll();
});

const imageViewer = document.getElementById('imageViewer');
const imageViewerPhoto = document.getElementById('imageViewerPhoto');
const imageViewerCaption = document.getElementById('imageViewerCaption');
const imageViewerClose = document.getElementById('imageViewerClose');

function openImageViewer(src, name){
  imageViewerPhoto.src = src;
  imageViewerPhoto.alt = name;
  imageViewerCaption.textContent = name;
  imageViewer.classList.add('open');
  imageViewer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('viewer-open');
  imageViewerClose.focus({ preventScroll:true });
}

function closeImageViewer(){
  imageViewer.classList.remove('open');
  imageViewer.setAttribute('aria-hidden', 'true');
  imageViewerPhoto.removeAttribute('src');
  imageViewerPhoto.alt = '';
  imageViewerCaption.textContent = '';
  document.body.classList.remove('viewer-open');
}

imageViewerClose.addEventListener('click', closeImageViewer);
imageViewer.addEventListener('click', event => {
  if(event.target === imageViewer) closeImageViewer();
});
document.getElementById('brandMarkButton').addEventListener('click', () => {
  openImageViewer('assets/icon.png', 'SashEnergy');
});
document.addEventListener('keydown', event => {
  if(event.key === 'Escape' && imageViewer.classList.contains('open')) closeImageViewer();
  if(event.key === 'Escape' && ratingDialog.classList.contains('open')) closeRatingDialog();
});

const STORAGE_PREFIX = 'voltage:';
const storage = window.storage?.get && window.storage?.set
  ? window.storage
  : {
      async get(key){ return { value:localStorage.getItem(STORAGE_PREFIX + key) }; },
      async set(key, value){ localStorage.setItem(STORAGE_PREFIX + key, value); }
    };

const LEGACY_IDS = new Map([
  [idFor('asia', 'Kratingdaeng'), idFor('asia', 'Krating Daeng')],
  [idFor('asia', 'Lipovitan'), idFor('asia', 'Lipovitan-D')],
  [idFor('ru', 'Barinoff Alligator Манго-Кокос'), idFor('ru', 'Barinoff Energy Манго-Кокос')]
]);

function migrateId(id){
  return LEGACY_IDS.get(id) || id;
}

async function readStoredJSON(key, fallback){
  try{
    const result = await storage.get(key);
    return result?.value ? JSON.parse(result.value) : fallback;
  }catch(error){
    console.warn(`Не удалось прочитать «${key}» из хранилища.`, error);
    return fallback;
  }
}

async function writeStoredJSON(key, value){
  try{
    await storage.set(key, JSON.stringify(value));
  }catch(error){
    console.warn(`Не удалось сохранить «${key}».`, error);
  }
}

async function loadState(){
  const [savedTried, savedPhotos, savedTop3, savedRatings, savedHidden] = await Promise.all([
    readStoredJSON('tried-ids', []),
    readStoredJSON('photos', {}),
    readStoredJSON('top3', [null, null, null]),
    readStoredJSON('ratings', {}),
    readStoredJSON('hidden-ids', [])
  ]);

  photos = savedPhotos && typeof savedPhotos === 'object' ? savedPhotos : {};
  ratings = {};
  Object.entries(savedRatings && typeof savedRatings === 'object' ? savedRatings : {}).forEach(([rawId, rawValue]) => {
    const id = migrateId(rawId);
    const value = Number(rawValue);
    if(DRINK_INDEX.has(id) && value >= 1 && value <= 5) ratings[id] = value;
  });

  tried = new Set(
    (Array.isArray(savedTried) ? savedTried : [])
      .map(migrateId)
      .filter(id => DRINK_INDEX.has(id))
  );
  Object.keys(ratings).forEach(id => tried.add(id));

  const seenTop3 = new Set();
  const storedTop3 = Array.isArray(savedTop3) ? savedTop3 : [];
  top3 = Array.from({ length:3 }, (_, index) => {
    const id = migrateId(storedTop3[index]);
    if(!id || !DRINK_INDEX.has(id) || seenTop3.has(id)) return null;
    seenTop3.add(id);
    return id;
  });

  hidden = new Set(
    (Array.isArray(savedHidden) ? savedHidden : [])
      .map(migrateId)
      .filter(id => DRINK_INDEX.has(id))
  );
  hidden.forEach(id => {
    tried.delete(id);
    delete ratings[id];
    top3 = top3.map(topId => topId === id ? null : topId);
  });

  renderAll();
}

function saveTried(){ return writeStoredJSON('tried-ids', Array.from(tried)); }
function savePhotos(){ return writeStoredJSON('photos', photos); }
function saveTop3(){ return writeStoredJSON('top3', top3); }
function saveRatings(){ return writeStoredJSON('ratings', ratings); }
function saveHidden(){ return writeStoredJSON('hidden-ids', Array.from(hidden)); }

// Сжимаем загруженное фото до маленького квадрата, чтобы уложиться в лимиты хранилища
function resizeImage(file){
  return new Promise((resolve, reject)=>{
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const size = 220;
        const canvas = document.createElement('canvas');
        canvas.width = size; canvas.height = size;
        const ctx = canvas.getContext('2d');
        const scale = Math.max(size / img.width, size / img.height);
        const w = img.width * scale, h = img.height * scale;
        ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);
        resolve(canvas.toDataURL('image/jpeg', 0.72));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function pickPhoto(id){
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.addEventListener('change', async () => {
    const file = input.files && input.files[0];
    if(!file) return;
    try{
      const dataUrl = await resizeImage(file);
      photos[id] = dataUrl;
      await savePhotos();
      renderAll();
    }catch(e){ console.error('photo error', e); }
  });
  input.click();
}

function removePhoto(id){
  delete photos[id];
  savePhotos();
  renderAll();
}

// ---------- Rank logic ----------
function currentRank(count){
  let r = RANKS[0];
  for(const rk of RANKS){ if(count >= rk.min) r = rk; }
  return r;
}
function nextRank(count){
  for(const rk of RANKS){ if(rk.min > count) return rk; }
  return null;
}

function renderRankChip(){
  const count = tried.size;
  const r = currentRank(count);
  const chip = document.querySelector('.rank-chip');
  if(lastRankMin !== null && r.min > lastRankMin){
    chip.classList.remove('level-up');
    void chip.offsetWidth;
    chip.classList.add('level-up');
  }
  lastRankMin = r.min;
  document.getElementById('rankEmoji').textContent = r.emoji;
  document.getElementById('rankName').textContent = r.name;
  document.getElementById('rankCount').textContent = count + ' из ' + TOTAL + ' попробовано';
  const overallProgress = Math.min(100, Math.round((count / TOTAL) * 100));
  document.getElementById('rankBar').style.width = overallProgress + '%';
  document.getElementById('mineTabCount').textContent = count ? '(' + count + ')' : '';
}

// ---------- Card builder ----------
const PHOTO_SCALE = {
  'Monster Energy Ultra Paradise': 1.32,
  'Invoke Original': 1.28,
  'BY БАСТА Цитрус микс': 1.24,
};

function buildCard(countryKey, drink){
  const [name] = drink;
  const id = idFor(countryKey, name);
  const isTried = tried.has(id);
  const isHidden = hidden.has(id);
  const rating = Number(ratings[id]) || 0;
  const nameParts = drinkNameParts(name);

  const userPhoto = photos[id];
  const brandPhoto = curatedPhotoFor(name);
  const photoUrl = userPhoto || brandPhoto;

  const card = document.createElement('div');
  card.className = 'card' + (isTried ? ' tried' : '') + (rating ? ' has-rating' : '') + (isHidden ? ' is-hidden' : '');
  card.draggable = true;
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-pressed', isTried ? 'true' : 'false');
  card.setAttribute('aria-label', `${name}: ${rating ? `оценка ${rating} из 5, изменить` : 'оценить'}`);

  // Показываем только реальное найденное фото. Если его нет — честный статус.
  const photoScale = PHOTO_SCALE[name] || 1;
  const media = photoUrl
    ? `<img class="photo" src="${photoUrl}" alt="${name}" loading="lazy" decoding="async" referrerpolicy="no-referrer" style="--photo-scale:${photoScale}">`
    : '<div class="no-photo">Фото нет</div>';

  card.innerHTML = `
    <div class="icon-wrap">
      ${media}
      <div class="image-label">
        <span class="label-brand">${nameParts.brand}</span>
        <span class="label-flavor">${nameParts.flavor}</span>
      </div>
      <div class="card-rating" aria-hidden="true">★ ${rating}</div>
      <div class="badge-check">✓</div>
    </div>
  `;
  card.addEventListener('dragstart', event => {
    event.dataTransfer.setData('text/plain', id);
    event.dataTransfer.effectAllowed = 'copy';
  });

  // Если источник заблокировал хотлинк, не имитируем фотографию.
  const imgEl = card.querySelector('img.photo');
  if(imgEl){
    imgEl.addEventListener('error', () => {
      const noPhoto = document.createElement('div');
      noPhoto.className = 'no-photo';
      noPhoto.textContent = 'Фото нет';
      imgEl.replaceWith(noPhoto);
    }, { once:true });
  }

  let longPressTimer = null;
  let longPressOpened = false;
  const cancelLongPress = () => {
    if(longPressTimer){
      clearTimeout(longPressTimer);
      longPressTimer = null;
    }
  };
  if(photoUrl){
    card.addEventListener('pointerdown', event => {
      if(event.pointerType === 'mouse' && event.button !== 0) return;
      cancelLongPress();
      longPressOpened = false;
      window.addEventListener('pointerup', () => {
        cancelLongPress();
        if(longPressOpened) setTimeout(() => { longPressOpened = false; }, 500);
      }, { once:true });
      longPressTimer = setTimeout(() => {
        longPressTimer = null;
        longPressOpened = true;
        openImageViewer(photoUrl, name);
        if(navigator.vibrate) navigator.vibrate(20);
      }, 550);
    });
    card.addEventListener('pointerup', () => {
      cancelLongPress();
      if(longPressOpened) setTimeout(() => { longPressOpened = false; }, 500);
    });
    card.addEventListener('pointercancel', cancelLongPress);
    card.addEventListener('pointerleave', cancelLongPress);
    card.addEventListener('contextmenu', event => {
      if(longPressOpened || longPressTimer) event.preventDefault();
    });
  }
  card.addEventListener('click', (event) => {
    if(longPressOpened){
      event.preventDefault();
      event.stopPropagation();
      longPressOpened = false;
      return;
    }
    openRatingDialog(id, card);
  });
  card.addEventListener('keydown', (event) => {
    if(event.key === 'Enter' || event.key === ' '){
      event.preventDefault();
      openRatingDialog(id, card);
    }
  });
  return card;
}

// ---------- Render: country pills ----------
function renderCountryRow(){
  const row = document.getElementById('countryRow');
  row.innerHTML = '';
  COUNTRIES.forEach(c=>{
    const count = c.drinks.filter(d=>tried.has(idFor(c.key,d[0]))).length;
    const pill = document.createElement('button');
    pill.className = 'country-pill' + (c.key===activeCountry && activeTab==='browse' ? ' active':'');
    pill.innerHTML = `<span class="flag">${c.flag}</span> ${c.label} <span class="n">${count}/${c.drinks.length}</span>`;
    pill.addEventListener('click', ()=>{
      activeCountry = c.key;
      showHidden = false;
      setTab('browse');
    });
    row.appendChild(pill);
  });
  const search = document.createElement('label');
  search.className = 'catalog-search';
  search.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg>';
  const input = document.createElement('input');
  input.type = 'search';
  input.value = searchQuery;
  input.placeholder = 'Поиск';
  input.setAttribute('aria-label', 'Поиск энергетика');
  input.addEventListener('input', event => {
    searchQuery = event.target.value;
    renderGrid();
  });
  search.appendChild(input);
  row.appendChild(search);
}

// ---------- Render: browse grid ----------
function renderGrid(){
  const country = COUNTRIES.find(c=>c.key===activeCountry);
  document.getElementById('countryTitle').textContent = country.flag + '  ' + country.label;
  const count = country.drinks.filter(d=>tried.has(idFor(country.key,d[0]))).length;
  document.getElementById('countryMeta').textContent = count + ' из ' + country.drinks.length + ' попробовано';
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  const normalizedQuery = searchQuery.trim().toLocaleLowerCase('ru');
  const matchingDrinks = normalizedQuery
    ? country.drinks.filter(drink => drink[0].toLocaleLowerCase('ru').includes(normalizedQuery))
    : country.drinks;
  const visibleDrinks = matchingDrinks.filter(drink => !hidden.has(idFor(country.key, drink[0])));
  const hiddenDrinks = matchingDrinks.filter(drink => hidden.has(idFor(country.key, drink[0])));

  visibleDrinks.forEach(drink => grid.appendChild(buildCard(country.key, drink)));
  if(hiddenDrinks.length){
    const toggle = document.createElement('button');
    toggle.className = 'hidden-toggle';
    toggle.type = 'button';
    toggle.textContent = showHidden ? 'Скрыть скрытые' : 'Показать скрытые';
    toggle.setAttribute('aria-expanded', String(showHidden));
    toggle.addEventListener('click', () => {
      showHidden = !showHidden;
      renderGrid();
    });
    grid.appendChild(toggle);
    if(showHidden){
      hiddenDrinks.forEach(drink => grid.appendChild(buildCard(country.key, drink)));
    }
  }
  if(!matchingDrinks.length){
    grid.innerHTML = '<div class="my-empty" style="grid-column:1/-1">Ничего не найдено</div>';
  }
}

// ---------- Render: mine ----------
function renderMine(){
  const meta = document.getElementById('mineMeta');
  const wrap = document.getElementById('mineContent');
  meta.textContent = tried.size + ' банок в коллекции';
  wrap.innerHTML = '';
  renderTop3();

  if(tried.size === 0){
    wrap.innerHTML = `<div class="my-empty"><div class="big">🫙</div>Пока пусто — откройте энергетик и поставьте ему оценку.</div>`;
    return;
  }

  const items = [];
  COUNTRIES.forEach(country => {
    country.drinks.forEach(drink => {
      const id = idFor(country.key, drink[0]);
      if(tried.has(id)) items.push({ country, drink, rating:Number(ratings[id]) || 0 });
    });
  });
  items.sort((a, b) => b.rating - a.rating || a.drink[0].localeCompare(b.drink[0], 'ru'));
  const grid = document.createElement('div');
  grid.className = 'grid';
  items.forEach(item => grid.appendChild(buildCard(item.country.key, item.drink)));
  wrap.appendChild(grid);
}

function drinkById(id){
  return DRINK_INDEX.get(id) || null;
}

function renderTop3(){
  const grid = document.getElementById('podiumGrid');
  if(!grid) return;
  grid.innerHTML = '';
  [0,1,2].forEach(index => {
    const slot = document.createElement('div');
    slot.className = 'podium-slot' + (top3[index] ? ' filled' : '');
    const found = top3[index] && drinkById(top3[index]);
    if(found){
      const [name] = found.drink;
      const parts = drinkNameParts(name);
      const photo = photos[top3[index]] || curatedPhotoFor(name);
      const item = document.createElement('div');
      item.className = 'podium-card';
      item.draggable = true;
      item.innerHTML = `${photo ? `<img src="${photo}" alt="${name}" loading="lazy" decoding="async" referrerpolicy="no-referrer">` : '<div class="no-photo">Фото нет</div>'}<div class="podium-name">${parts.brand}</div><div class="podium-flavor">${parts.flavor}</div>`;
      item.addEventListener('dragstart', event => event.dataTransfer.setData('text/plain', top3[index]));
      slot.appendChild(item);
    }else{
      const empty = document.createElement('div');
      empty.className = 'podium-empty';
      empty.textContent = 'Перетащите сюда энергетик';
      slot.appendChild(empty);
    }
    slot.addEventListener('dragover', event => { event.preventDefault(); slot.classList.add('over'); });
    slot.addEventListener('dragleave', () => slot.classList.remove('over'));
    slot.addEventListener('drop', async event => {
      event.preventDefault();
      slot.classList.remove('over');
      const id = event.dataTransfer.getData('text/plain');
      if(!drinkById(id)) return;
      top3 = top3.map(existingId => existingId === id ? null : existingId);
      top3[index] = id;
      await saveTop3();
      renderTop3();
    });
    grid.appendChild(slot);
  });
}

// ---------- Render: ranks ----------
function renderRanks(){
  const wrap = document.getElementById('ranksWrap');
  wrap.innerHTML = '';
  const count = tried.size;
  const current = currentRank(count);
  const next = nextRank(count);
  const overallProgress = Math.min(100, Math.round((count / TOTAL) * 100));
  const summary = document.getElementById('levelSummary');
  summary.innerHTML = `
    <div class="level-summary-top">
      <div class="level-summary-icon">${current.emoji}</div>
      <div>
        <div class="level-summary-name">${current.name}</div>
        <div class="level-summary-count">${count} из ${TOTAL} · ${overallProgress}% каталога</div>
      </div>
    </div>
    <div class="level-summary-track"><div class="level-summary-fill" style="width:${overallProgress}%"></div></div>
    <div class="level-summary-next">${next ? `До уровня «${next.name}» — ещё ${next.min - count}` : 'Максимальный уровень достигнут'}</div>
  `;
  RANKS.forEach((r, i)=>{
    const isCurrent = current.name === r.name;
    const isReached = count >= r.min;
    const nextMin = RANKS[i+1] ? RANKS[i+1].min : null;
    const range = nextMin ? `${r.min}–${nextMin-1} энергетиков` : `${TOTAL} из ${TOTAL} · весь каталог`;
    const status = isCurrent ? 'Сейчас' : isReached ? '✓' : `ещё ${r.min - count}`;
    const row = document.createElement('div');
    row.className = 'rank-row' + (isCurrent ? ' current' : '') + (isReached ? ' reached' : '');
    row.innerHTML = `
      <div class="rank-icon">${r.emoji}</div>
      <div>
        <div class="rank-info-name">${r.name}</div>
        <div class="rank-info-range">${range}</div>
      </div>
      <div class="rank-status">${status}</div>
    `;
    wrap.appendChild(row);
  });
}

// ---------- Tabs ----------
function setTab(tab){
  activeTab = tab;
  document.querySelectorAll('.tab-btn').forEach(button => {
    const isActive = button.dataset.tab === tab;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  document.getElementById('view-browse').style.display = tab==='browse' ? '' : 'none';
  document.getElementById('view-mine').style.display = tab==='mine' ? '' : 'none';
  document.getElementById('view-ranks').style.display = tab==='ranks' ? '' : 'none';
  document.getElementById('countryRow').hidden = tab !== 'browse';
  renderAll();
}

document.querySelectorAll('.tab-btn').forEach(b=>{
  b.addEventListener('click', ()=>setTab(b.dataset.tab));
});

// ---------- Master render ----------
function renderAll(){
  renderRankChip();
  renderCountryRow();
  if(activeTab==='browse') renderGrid();
  if(activeTab==='mine') renderMine();
  if(activeTab==='ranks') renderRanks();
}

loadState();
