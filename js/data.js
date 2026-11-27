/* Lokali sample data — one source so the same listing, host, booking and amount look identical on guest, host and admin screens.
   Fees (configurable in admin › Fees & policies): guest service fee 5%, host commission 15%. Currency MYR. Today in the prototype: Wed 2 Dec 2026. */
(function () {
  var L = window.L = window.L || {};
  L.fees = { service: 0.05, commission: 0.15 };
  L.cats = [
    { key: 'nature', name: 'Nature & eco-tours', icon: 'ph-tree-evergreen', count: 42 },
    { key: 'culture', name: 'Culture, craft & heritage', icon: 'ph-palette', count: 31 },
    { key: 'farm', name: 'Farm & food', icon: 'ph-plant', count: 24 },
    { key: 'retreat', name: 'Retreats & stays', icon: 'ph-tent', count: 9 }   // 4th category assumed (brief says four, lists three) — REQUIREMENTS Q1
  ];
  L.people = {
    // hosts
    rahim:  { name: 'Pak Rahim Osman', first: 'Rahim', img: '1492562080023-ab3db95bfbce', home: 'Kampung Kuantan, Kuala Selangor', since: 2025, lang: 'English, Malay' },
    siti:   { name: 'Siti Aminah Yusof', first: 'Siti', img: '1695757002354-8bca71d087c7', home: 'Kuala Terengganu', since: 2025, lang: 'English, Malay' },
    kumar:  { name: 'Kumar Selvaraj', first: 'Kumar', img: '1611403119860-57c4937ef987', home: 'Air Itam, Penang', since: 2024, lang: 'English, Malay, Tamil' },
    meiling:{ name: 'Lim Mei Ling', first: 'Mei Ling', img: '1758600587815-b654d1405e83', home: 'Sekinchan, Selangor', since: 2025, lang: 'English, Mandarin, Malay' },
    jenny:  { name: 'Jenny Tan', first: 'Jenny', img: '1773899337978-b8d83bd9b783', home: 'George Town, Penang', since: 2025, lang: 'English, Hokkien' },
    jaineh: { name: 'Jaineh Mosiun', first: 'Jaineh', img: '1757744705465-ea08b0ddc38a', home: 'Bilit, Kinabatangan, Sabah', since: 2025, lang: 'English, Malay, Kadazan' },
    // guests
    emma:   { name: 'Emma Clarke', first: 'Emma', img: '1513097633097-329a3a64e0d4', home: 'Bristol, UK' },
    daniel: { name: 'Daniel Wong', first: 'Daniel', img: '1701980889802-55ff39e2e973', home: 'Singapore' },
    aisyah: { name: 'Nur Aisyah Kamal', first: 'Aisyah', img: '1600481176431-47ad2ab2745d', home: 'Shah Alam' }
  };
  L.exp = {
    mangrove: { id: 'mangrove', title: 'Mangrove & fireflies by kampung boat', promise: 'Paddle the Selangor River at dusk and watch the mangroves light up.', cat: 'nature', place: 'Kuala Selangor, Selangor',
      img: '1589556183130-530470785fab', gallery: ['1589556183130-530470785fab', '1779399642977-7c6bfd7bc472', '1784751449882-c2c28ca2dd78', '1646513378626-23493fccf7c9', '1786717667687-2f05e422d6f9'],
      price: 145, child: 95, priv: 980, rating: 4.96, reviews: 128, duration: '3.5 hours', group: '2–10', host: 'rahim', policy: 'Moderate', type: 'day', impact: '20% of each ticket plants mangroves', lang: 'English, Malay' },
    batik: { id: 'batik', title: 'Hand-drawn batik with a Terengganu artisan', promise: 'Wax, dye and take home a piece you made with Kak Siti.', cat: 'culture', place: 'Kuala Terengganu',
      img: '1695306441929-0082158cfc27', gallery: ['1695306441929-0082158cfc27', '1761516659766-c092d4b1209d', '1762111908768-f49f42610859', '1604973104381-870c92f10343', '1743210343060-97602cbcc04d'],
      price: 120, child: 80, priv: 720, rating: 4.92, reviews: 86, duration: '3 hours', group: '1–8', host: 'siti', policy: 'Flexible', type: 'day', impact: 'Keeps a 3rd-generation craft alive' },
    canopy: { id: 'canopy', title: 'Rainforest canopy walk & hornbill watch', promise: 'Walk a 130-million-year-old forest with a naturalist at first light.', cat: 'nature', place: 'Penang Hill, Penang',
      img: '1657463420259-1c92c609f89e', gallery: ['1657463420259-1c92c609f89e', '1592080231635-58456a85c693', '1698802933641-b185747ae391', '1786530876393-8ad44d32e2de', '1760044604355-458eef15ac64'],
      price: 180, child: 120, priv: 1150, rating: 4.89, reviews: 214, duration: '4 hours', group: '2–12', host: 'kumar', policy: 'Moderate', type: 'day', impact: '15% of each ticket aids research' },
    paddy: { id: 'paddy', title: 'Paddy-to-plate farm day', promise: 'Plant rice knee-deep in the field, then eat what the farm grows.', cat: 'farm', place: 'Sekinchan, Selangor',
      img: '1595974482597-4b8da8879bc5', gallery: ['1595974482597-4b8da8879bc5', '1505471768190-275e2ad7b3f9', '1530507629858-e4977d30e9e0', '1633410195091-bd66114cef5f', '1528693404014-b13ebe6e723e'],
      price: 160, child: 90, priv: 950, rating: 4.85, reviews: 63, duration: '5 hours', group: '2–15', host: 'meiling', policy: 'Moderate', type: 'day', impact: 'Supports 6 local family farms' },
    nyonya: { id: 'nyonya', title: 'Nyonya kitchen: zero-waste cooking class', promise: 'Cook four Peranakan dishes and learn to waste nothing.', cat: 'farm', place: 'George Town, Penang',
      img: '1679541946014-a47f1ec0dc1a', gallery: ['1679541946014-a47f1ec0dc1a', '1778439800378-6f67fd8ec219', '1789475387509-8e62ba3beb09', '1722995690313-9ef561d30143', '1658218615053-955e8af55947'],
      price: 210, child: 140, priv: 1300, rating: 4.97, reviews: 152, duration: '4 hours', group: '2–8', host: 'jenny', policy: 'Firm', type: 'day', impact: 'Leftovers go to a community farm' },
    reef: { id: 'reef', title: 'Reef restoration snorkel', promise: 'Help plant coral fragments on a living reef nursery.', cat: 'nature', place: 'Pulau Tioman, Pahang',
      img: '1708649290066-5f617003b93f', gallery: ['1708649290066-5f617003b93f', '1637308109237-4ea1a7dd22f5', '1682686581663-179efad3cd2f', '1651871756929-09d7bde4e97d', '1637308107080-82cf40953742'],
      price: 260, child: 180, priv: 1600, rating: 4.9, reviews: 97, duration: '5 hours', group: '2–8', host: 'kumar', policy: 'Moderate', type: 'day', impact: '25% of each ticket regrows the reef' },
    orangutan: { id: 'orangutan', title: 'Orangutan & river safari, Kinabatangan', promise: 'Look for wild orangutans and pygmy elephants from a quiet electric boat.', cat: 'nature', place: 'Kinabatangan, Sabah',
      img: '1690668107430-6529392858b0', gallery: ['1690668107430-6529392858b0', '1705332441014-4315b1bd7deb', '1495434350527-8f3d63bf008f', '1727079183356-9a24f87a3f70', '1646513378626-23493fccf7c9'],
      price: 320, child: 220, priv: 2100, rating: 4.98, reviews: 71, duration: '6 hours', group: '2–6', host: 'jaineh', policy: 'Moderate', type: 'day', impact: 'Pays the wages of 2 village rangers' },
    weaving: { id: 'weaving', title: 'Mengkuang weaving & kampung lunch', promise: 'Weave a pandan-leaf mat and share lunch in a village home.', cat: 'culture', place: 'Marang, Terengganu',
      img: '1534953342533-7711c98712be', gallery: ['1534953342533-7711c98712be', '1598967350872-db48a9d86a2c', '1599303000936-1cf21eac4456', '1591015744878-793b76c1163e', '1569909115134-a0426936c879'],
      price: 95, child: 60, priv: 560, rating: 4.88, reviews: 44, duration: '3 hours', group: '1–10', host: 'siti', policy: 'Flexible', type: 'day', impact: 'All craft sales go to the weavers' },
    retreat: { id: 'retreat', title: '3-day rainforest retreat, Belum', promise: 'Two nights deep in one of the oldest rainforests on earth.', cat: 'retreat', place: 'Royal Belum, Perak',
      img: '1581253563647-3ebad3c2f559', gallery: ['1581253563647-3ebad3c2f559', '1721151599824-ca38a4b73292', '1495434350527-8f3d63bf008f', '1698802933641-b185747ae391', '1592080231635-58456a85c693'],
      price: 1450, child: 980, priv: 9800, rating: 4.95, reviews: 28, duration: '3 days', group: '4–12', host: 'kumar', policy: 'Firm', type: 'retreat', deposit: 0.3, impact: 'Pays local Orang Asli guides' }
  };
  // The booking that runs through the whole prototype (guest books it, host sees it, admin manages it)
  L.booking = { ref: 'LK-24817', exp: 'mangrove', guest: 'emma', date: 'Sun, 6 Dec 2026', time: '5:00 PM – 8:30 PM', adults: 2, children: 1,
    subtotal: 385, fee: 19.25, total: 404.25, commission: 57.75, payout: 327.25, method: 'Visa •• 4242', status: 'Confirmed',
    meet: 'Jeti Kampung Kuantan, Jalan Kuantan, 45000 Kuala Selangor', dietary: '1 vegetarian' };
  L.policies = {
    day: {
      Flexible: { full: '24 hours or more before start', partial: null, none: 'Under 24 hours' },
      Moderate: { full: '72 hours or more before start', partial: null, none: 'Under 72 hours', default: true },
      Firm:     { full: '12 days or more before start', partial: '50% from 5 to under 12 days', none: 'Under 5 days' }
    },
    retreat: {
      Flexible: { full: '7 days or more before start', partial: null, none: 'Under 7 days' },
      Moderate: { full: '30 days or more before start', partial: '50% at 14–29 days', none: 'Under 14 days' },
      Firm:     { full: '60 days or more before start', partial: '50% at 30–59 days', none: 'Under 30 days', default: true }
    }
  };
  L.stamps = { mangrove: ['20%', 'to trees'], batik: ['3rd', 'gen craft'], canopy: ['15%', 'research'], paddy: ['6', 'farms'], nyonya: ['0', 'waste'],
    reef: ['25%', 'to reef'], orangutan: ['2', 'rangers'], weaving: ['100%', 'weavers'], retreat: ['10%', 'guides'] };
  /* heart on cards: toggles red and shows a toast, without opening the card */
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('.exp-card__fav'); if (!b) return;
    ev.preventDefault(); ev.stopPropagation();
    var on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', on);
    b.querySelector('i').className = (on ? 'ph-fill' : 'ph') + ' ph-heart';
    L.toast && L.toast(on ? 'Saved to your likes' : 'Removed from your likes', on ? 'ph-heart' : 'ph-heart-break');
  }, true);
  L.cardHTML = function (key, opts) {
    var e = L.exp[key], o = opts || {}, st = L.stamps[key] || ['', ''];
    var c = L.cats.filter(function (x) { return x.key === e.cat; })[0];
    var catName = { nature: 'Nature', culture: 'Culture', farm: 'Food & farm', retreat: 'Retreat' }[e.cat] || '';
    return '<a class="exp-card' + (o.full ? ' full' : '') + '" href="g-listing.html" data-go="g-listing">' +
      '<div class="exp-card__img"><img src="' + L.img(e.img, o.full ? 900 : 600) + '" alt="" loading="lazy">' +
      '<span class="exp-card__rate ' + (e.rating >= 4.5 ? 'r-hi' : e.rating >= 3.5 ? 'r-mid' : 'r-lo') + '" aria-label="Rated ' + e.rating.toFixed(2) + '"><i class="ph-fill ph-star" aria-hidden="true"></i>' + e.rating.toFixed(2) + '</span>' +
      '<button type="button" class="exp-card__fav" aria-pressed="false" aria-label="Save ' + e.title + '"><i class="ph ph-heart" aria-hidden="true"></i></button>' +
      '<div class="exp-card__over">' +
        (o.badge !== false ? '<span class="exp-card__give"><i class="ph-fill ph-leaf" aria-hidden="true"></i>' + e.impact + '</span>' : '') +
        (c ? '<span class="exp-card__tag"><i class="ph ' + c.icon + '" aria-hidden="true"></i>' + c.name + '</span>' : '') +
      '</div></div>' +
      '<div class="exp-card__body">' +
      '<div class="exp-card__title">' + e.title + '</div>' +
      '<div class="exp-card__facts"><span><i class="ph-fill ph-map-pin" aria-hidden="true"></i>' + e.place.split(',')[0] + '</span><span><i class="ph-fill ph-clock" aria-hidden="true"></i>' + e.duration + '</span></div>' +
      (o.badge !== false ? '<span class="exp-card__impact"><i class="ph-fill ph-leaf" aria-hidden="true"></i>' + e.impact + '</span>' : '') +
      '<div class="exp-card__price">From <b>' + L.rm(e.price) + '</b> <small>/ adult</small></div>' +
      '</div></a>';
  };
})();
