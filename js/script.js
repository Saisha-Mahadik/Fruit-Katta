/* ===== Fruit Katta details (edit here) ===== */
const CONFIG = {
  instagram: 'https://www.instagram.com/fruitkatta',
  phone: '+919769204427',    // used for every call link
  phoneDisplay: '097692 04427',
  sms: '',                   // optional official SMS number; the SMS button stays hidden while empty
  hours: '9 AM – 11:30 PM',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Fruit Katta, Shop No.8, Rajanigandha Apartment, near Nalanda College, Gorai 2, Borivali West, Mumbai 400091')
};

/* Menu as listed on the café's Swiggy page. Row: [category, name, price, description, photo (optional), mustTry (optional)] */
const CATS = {
  juices:{label:'Fresh Juices',icon:'bi-droplet-fill'}, shakes:{label:'Smoothies & Shakes',icon:'bi-cup-straw'},
  coffee:{label:'Coffee & Chai',icon:'bi-cup-hot-fill'}, bites:{label:'Quick Bites',icon:'bi-basket2'},
  salad:{label:'Fruit Salad',icon:'bi-apple'}
};
const MENU = [
  ['coffee','Grilled Bun Muska With Chai',89,'A timeless comfort pairing of buttery grilled bun maska served with a hot cup of chai. Simple, nostalgic, and perfect for any time of the day.','menu/bun-maska-chai.jpg',1],
  ['shakes','Dates, Peanut Butter And Banana Smoothie',200,'A creamy blend of the natural sweetness of dates, rich peanut butter and fresh banana.'],
  ['juices','Muskmelon Juice',149,'Creamy, mellow and super refreshing.','menu/muskmelon-juice.jpg'],
  ['juices','Pineapple Juice',129,'Fresh pineapple juice: sweet, tangy, and naturally refreshing. Served chilled.','menu/pineapple-juice.jpg'],
  ['juices','Pomegranate Juice',189,'Fresh, antioxidant-rich pomegranate juice, naturally sweet and refreshing.','menu/pomegranate-juice.jpg'],
  ['juices','Red Dragon + Watermelon Juice',170,'A vibrant blend of red dragon fruit and juicy watermelon with a beautiful burst of colour in every sip.','menu/red-dragon-watermelon-juice.jpg'],
  ['juices','Watermelon + Pomegranate Juice',179,'A refreshing blend with a perfect balance of sweetness and tanginess.','menu/watermelon-pomegranate-juice.jpg'],
  ['juices','Mosambi Masala Juice',120,'Mosambi juice blended with mint, lemon, and a dash of masala.','menu/mosambi-masala-juice.jpg'],
  ['juices','Watermelon + Pomegranate + Muskmelon Juice',199,'Juicy watermelon, sweet muskmelon, and vibrant pomegranate. Light and naturally sweet.', 'https://lh3.googleusercontent.com/food/AGNROFRe11008RlKGgnZhQCIga43VSR5WKLeQFHN7eGWI1vKhwfb7mgGVuinSo_Wng6SEfKSjBwjWCIh9zSJangM1w8nlWztSa9luXMN6s6mHsWHrBaRFccfaE5NvkGwSswZDT7RmdiymS7mJNAR3eEbmqMkHyMongoPd0xVpGcFBX0=s1360-w1360-h1020-rw'],
  ['bites','Vegetable Cheese Masala Toast',129,'Crispy, golden-brown toast layered with melted cheese and fresh vegetables.','menu/vegetable-cheese-masala-toast.jpg'],
  ['bites','Aloo Cheese Toast Slice',89,'Toasted bread topped with spiced potatoes and melted cheese. Crispy, cheesy, and delicious.','menu/aloo-cheese-toast-slice.jpg'],
  ['bites','Vegetable Masala Grilled',110,'Seasoned vegetables grilled to perfection between toasted bread.','menu/vegetable-masala-grilled.jpg'],
  ['bites','Schezwan Cheese Grilled Sandwich',199,'Onion, Capsicum, Cabbage, Cheese','menu/schezwan-cheese-grilled-sandwich.jpg'],
  ['bites','Open Corn Cheese Chilly Jumbo',269,'','menu/open-corn-cheese-chilly-jumbo.jpg'],
  ['bites','Pahadi Grilled Sandwich',220,'','menu/pahadi-grilled-sandwich.jpg'],
  ['bites','Corn Cheese Grilled Sandwich',189,'A gooey, cheesy delight with a sweet corn filling, grilled to golden perfection.'],
  ['bites','Fruitkatta Special Sandwich Jumbo',339,''],
  ['bites','Cheese Chilli Grilled Sandwich',179,'A melty, savory delight with layers of gooey cheese and vibrant flavours, grilled golden.','menu/cheese-chilli-grilled-sandwich.jpg'],
  ['bites','Vegetable Cheese Sandwich',99,'A medley of fresh vegetables and creamy cheese between perfectly toasted bread.','menu/vegetable-cheese-sandwich.jpg'],
  ['bites','Vegetable Sandwich',79,'Fresh, crisp vegetables nestled between two slices of soft bread.','menu/vegetable-sandwich.jpg'],
  ['coffee','Iced Coffee',130,'Creamy iced milk topped with rich, whipped coffee foam. Smooth, frothy, and refreshing.','menu/iced-coffee.jpg'],
  ['coffee','Biscoff Iced Coffee',180,'A creamy, lotus biscoff cookie, caramel-infused coffee delight.','menu/lotus-biscoff-milkshake.jpg',1],
  ['coffee','Vanilla Cold Coffee',160,'Freshly brewed coffee blended with milk, ice, and a touch of vanilla.','menu/vanilla-cold-coffee.jpg'],
  ['shakes','Oreo Milkshake',179,'Creamy Oreo shake loaded with vanilla ice cream and chocolate crunch.','menu/oreo-milkshake.jpg'],
  ['shakes','Kitkat Milkshake',189,'Creamy KitKat milkshake blended with ice cream and topped with chocolate chunks.','menu/kitkat-milkshake.jpg'],
  ['shakes','Lotus Biscoff Milkshake',210,'A thick and creamy milkshake loaded with the caramelised crunch of Lotus Biscoff.','menu/lotus-biscoff-milkshake.jpg'],
  ['shakes','Banana Milkshake',99,'A thick, creamy milkshake made with fresh ripe bananas and chilled milk.','menu/banana-milkshake.jpg'],
  ['shakes','Sitaphal - Custard Apple Milkshake',150,'Fresh sitaphal pulp, creamy milk, vanilla ice cream, and a sprinkle of dry fruits.','menu/sitaphal-milkshake.jpg'],
  ['salad','Fruit Salad',180,'Freshly cut, handpicked seasonal fruits with chat masala and mint for a zesty twist. A colourful seasonal mix.','menu/fruit-salad.jpg']
].map(([cat,name,price,desc,img,must],id) => ({id,cat,name,price,desc,img,must}));

const GALLERY = [
  {c:'tall',a:'Layered mango chia jar with fruit and nut topping'},{a:'Pomegranate juice with fresh pomegranate'},
  {c:'wide',a:'Freshly cut fruit salad'},{a:'Green mint cooler with cucumber'},
  {a:'Wooden tables, stools and the Fruit Katta sign'},{c:'tall',a:'Loaded fruit and nut bowl'},
  {a:'Watermelon drink with fresh mint'},{c:'wide',a:'Fruit bowl served in a coconut shell'},
  {a:'Painted wall art and shelf corner inside the café'},{a:'Fruit Katta counter with fresh fruit'},
  {a:'Creamy custard apple drink'},{a:'Fruit Katta storefront with its glowing sign'}
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = t => String(t).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const imgSrc = p => /^https?:/.test(p.img) ? p.img : 'assets/images/' + p.img;
const cart = new Map(); // id -> qty
let activeFilter = 'all';

function renderMenu() {
  $('#filters').innerHTML = [['all','All'],['must','Must Try'],...Object.entries(CATS).map(([k, v]) => [k, v.label])]
    .map(([k, l], i) => `<button class="filter-btn${i ? '' : ' active'}" data-filter="${k}">${l}</button>`).join('');
  $('#menuGrid').innerHTML = MENU.map(p => {
    const media = p.img
      ? `<div class="ph" data-label="${esc(p.name)}"><img src="${imgSrc(p)}" alt="${esc(p.name)}" loading="lazy" referrerpolicy="no-referrer"></div>`
      : `<div class="ph ph-icon" aria-hidden="true"><i class="bi ${CATS[p.cat].icon}"></i></div>`;
    return `<div class="col-6 col-md-4 col-xl-3 menu-item" data-id="${p.id}" data-cat="${p.cat}" data-must="${p.must ? 1 : 0}" data-text="${esc((p.name + ' ' + p.desc).toLowerCase())}">
      <article class="menu-card">${p.must ? '<span class="badge-must">Must Try</span>' : ''}${media}
      <div class="menu-body"><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p>
      <div class="menu-foot"><span class="price">₹${p.price}</span><button class="btn-add" data-add="${p.id}" aria-label="Add ${esc(p.name)} to cart"><i class="bi bi-plus-lg" aria-hidden="true"></i> Add</button></div></div></article></div>`;
  }).join('');
}

function applyFilters() {
  const q = $('#search').value.trim().toLowerCase();
  let shown = 0;
  $$('.menu-item').forEach(i => {
    const okCat = activeFilter === 'all' || (activeFilter === 'must' ? i.dataset.must === '1' : i.dataset.cat === activeFilter);
    const ok = okCat && (!q || i.dataset.text.includes(q));
    i.classList.toggle('hide', !ok); if (ok) shown++;
  });
  $('#noResults').hidden = shown > 0;
}

function setupFilters() {
  $('#filters').addEventListener('click', e => {
    const b = e.target.closest('.filter-btn'); if (!b) return;
    $$('.filter-btn').forEach(x => x.classList.remove('active')); b.classList.add('active');
    activeFilter = b.dataset.filter; applyFilters();
  });
  $('#search').addEventListener('input', applyFilters);
}

/* ===== Cart + call-to-order ===== */
const money = n => '₹' + n;
const total = () => [...cart].reduce((s, [id, q]) => s + MENU[id].price * q, 0);
const store = {
  get: k => { try { return sessionStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { sessionStorage.setItem(k, v); } catch {} }
};
const timeStr = t => new Date(t).toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'});
const currentOrder = () => ({
  items: [...cart].map(([id, q]) => ({name: MENU[id].name, qty: q, price: MENU[id].price})),
  total: total(), name: $('#custName').value.trim(), notes: $('#orderNotes').value.trim(), time: Date.now()
});
const orderText = o => ['Fruit Katta order (please confirm by phone)', '',
  ...o.items.map(i => `${i.qty} x ${i.name} - ${money(i.price)} each = ${money(i.price * i.qty)}`), '',
  `Total: ${money(o.total)}`, ...(o.name ? [`Name: ${o.name}`] : []), ...(o.notes ? [`Notes: ${o.notes}`] : [])].join('\n');

function fillSummary(listSel, totalSel, o) {
  $(listSel).innerHTML = o.items.map(i => `<li><span>${i.qty} × ${esc(i.name)}<small>${money(i.price)} each</small></span><b>${money(i.price * i.qty)}</b></li>`).join('');
  $(totalSel).textContent = money(o.total);
}

function renderCart() {
  const count = [...cart.values()].reduce((a, b) => a + b, 0);
  $('#cartCount').textContent = count;
  $('#cartTotal').textContent = money(total());
  $('#checkoutBtn').disabled = !count;
  $('#clearCart').classList.toggle('d-none', !count);
  $('#lastOrderBtn').classList.toggle('d-none', !store.get('fk_order'));
  $('#cartItems').innerHTML = count ? [...cart].map(([id, q]) => `
    <div class="cart-line"><div><div class="n">${esc(MENU[id].name)}</div><div class="p">${money(MENU[id].price)} each · ${money(MENU[id].price * q)}</div></div>
    <div class="qty"><button data-dec="${id}" aria-label="Remove one ${esc(MENU[id].name)}">&minus;</button><span aria-live="polite">${q}</span><button data-inc="${id}" aria-label="Add one ${esc(MENU[id].name)}">+</button></div></div>`).join('')
    : '<p class="cart-empty">Your cart is empty. Add something tasty from the menu.</p>';
}
function change(id, d) {
  const q = (cart.get(id) || 0) + d;
  q > 0 ? cart.set(id, q) : cart.delete(id);
  renderCart();
}

/* Close one Bootstrap overlay, then run showFn (runs straight away if it is not open) */
function swap(sel, showFn) {
  const el = $(sel), isOff = el.classList.contains('offcanvas');
  const inst = bootstrap[isOff ? 'Offcanvas' : 'Modal'].getInstance(el);
  if (inst && el.classList.contains('show')) {
    el.addEventListener(isOff ? 'hidden.bs.offcanvas' : 'hidden.bs.modal', showFn, {once: true});
    inst.hide();
  } else showFn();
}
const showModal = sel => bootstrap.Modal.getOrCreateInstance(sel).show();

async function copyText(text, btn) {
  try { await navigator.clipboard.writeText(text); }
  catch { const t = document.createElement('textarea'); t.value = text; t.style.cssText = 'position:fixed;opacity:0'; document.body.append(t); t.select(); try { document.execCommand('copy'); } catch {} t.remove(); }
  const old = btn.innerHTML; btn.innerHTML = '<i class="bi bi-check-lg" aria-hidden="true"></i> Copied'; setTimeout(() => btn.innerHTML = old, 1500);
}

function openCheckout() {
  fillSummary('#summary', '#summaryTotal', currentOrder());
  const call = $('#callBtn'), has = !!CONFIG.phone;
  call.href = has ? 'tel:' + CONFIG.phone : '#';
  call.classList.toggle('disabled', !has); call.setAttribute('aria-disabled', String(!has));
  $('#noPhone').classList.toggle('d-none', has);
  $('#callStatus').classList.add('d-none');
  $('#smsBtn').classList.toggle('d-none', !CONFIG.sms);
  swap('#cart', () => showModal('#checkout'));
}

function showLast() {
  let o; try { o = JSON.parse(store.get('fk_order')); } catch {}
  if (!o) return;
  fillSummary('#lastSummary', '#lastTotal', o);
  $('#lastMeta').textContent = `Call initiated at ${timeStr(o.time)}. Please make sure your order has been confirmed directly with our café team.`;
  $('#lastExtra').textContent = [o.name && `Name: ${o.name}`, o.notes && `Notes: ${o.notes}`].filter(Boolean).join(' · ');
  $('#lastCopy').onclick = e => copyText(orderText(o), e.currentTarget);
  showModal('#lastOrder');
}

let away = false; /* true once the customer has left the tab/app (e.g. to the dialler) */
function showThanks() { store.set('fk_pending', '0'); swap('#checkout', () => showModal('#thanks')); }
function returned() { if (away && store.get('fk_pending') === '1') { away = false; showThanks(); } }

function setupCart() {
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-add],[data-inc],[data-dec]'); if (!a) return;
    if (a.dataset.add !== undefined) { change(+a.dataset.add, 1); a.innerHTML = '<i class="bi bi-check-lg"></i> Added'; setTimeout(() => a.innerHTML = '<i class="bi bi-plus-lg" aria-hidden="true"></i> Add', 900); }
    else change(+(a.dataset.inc ?? a.dataset.dec), a.dataset.inc !== undefined ? 1 : -1);
  });
  $('#clearCart').addEventListener('click', () => { cart.clear(); renderCart(); });
  $('#checkoutBtn').addEventListener('click', openCheckout);
  $('#lastOrderBtn').addEventListener('click', () => swap('#cart', showLast));
  $('#viewOrderBtn').addEventListener('click', () => swap('#thanks', showLast));
  $('#copyBtn').addEventListener('click', e => copyText(orderText(currentOrder()), e.currentTarget));
  $('#smsBtn').addEventListener('click', e => { e.currentTarget.href = `sms:${CONFIG.sms}?body=${encodeURIComponent(orderText(currentOrder()))}`; });
  $('#callBtn').addEventListener('click', e => {
    if (!CONFIG.phone || !cart.size) { e.preventDefault(); return; }
    const o = currentOrder();
    store.set('fk_order', JSON.stringify(o));   /* saved BEFORE the dialler opens */
    store.set('fk_pending', '1');
    away = false; renderCart();
    $('#callStatus').textContent = `Call initiated at ${timeStr(o.time)}. If your phone didn't open, please dial ${CONFIG.phoneDisplay}. Your order isn't confirmed until our café team confirms it with you.`;
    $('#callStatus').classList.remove('d-none');
  });
  addEventListener('blur', () => { away = true; });
  addEventListener('focus', returned);
  document.addEventListener('visibilitychange', () => document.hidden ? (away = true) : returned());
  renderCart();
  if (store.get('fk_pending') === '1') showThanks(); /* page was reloaded or restored after the call */
}

function renderGallery() {
  $('#galleryGrid').innerHTML = GALLERY.map((g, i) => `
    <div class="ph ${g.c || ''}" data-label="gallery-${i + 1}.jpg"><img src="assets/images/gallery/gallery-${i + 1}.jpg" alt="${esc(g.a)}" loading="lazy"></div>`).join('');
  $('#galleryGrid').addEventListener('click', e => {
    const img = e.target.closest('.ph')?.querySelector('img'); if (!img) return;
    $('#lbImg').src = img.currentSrc || img.src; $('#lbImg').alt = img.alt;
    bootstrap.Modal.getOrCreateInstance('#lightbox').show();
  });
}

/* Show a labelled placeholder instead of a broken image */
function watchImages() {
  $$('.ph img').forEach(img => {
    const miss = () => img.parentElement.classList.add('img-missing');
    img.addEventListener('error', miss);
    if (img.complete && img.naturalWidth === 0) miss();
  });
}

function fillContact() {
  $$('[data-instagram]').forEach(a => a.href = CONFIG.instagram);
  $$('[data-maps]').forEach(a => a.href = CONFIG.mapsUrl);
  $$('[data-phone]').forEach(a => { if (CONFIG.phone) a.href = 'tel:' + CONFIG.phone; if (!a.children.length) a.textContent = CONFIG.phoneDisplay; });
  $$('[data-field="hours"]').forEach(e => e.textContent = CONFIG.hours);
}

function setupUI() {
  const nav = $('.fk-nav'), top = $('#toTop');
  const onScroll = () => { nav.classList.toggle('scrolled', scrollY > 30); top.classList.toggle('show', scrollY > 500); };
  addEventListener('scroll', onScroll, {passive: true}); onScroll();
  top.addEventListener('click', () => scrollTo({top: 0, behavior: 'smooth'}));
  $$('.navbar-nav .nav-link').forEach(l => l.addEventListener('click', () => {
    const c = $('#nav'); if (c.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(c).hide();
  }));
  $('#year').textContent = new Date().getFullYear();
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold: .12});
  $$('.reveal').forEach(el => io.observe(el));
}

renderMenu(); renderGallery(); watchImages(); setupFilters(); setupCart(); fillContact(); setupUI();
