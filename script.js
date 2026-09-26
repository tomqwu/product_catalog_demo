// Demonstration catalog data. Names, specifications and CAD prices are illustrative.
const products = [
  {
    id: 'gathering-suite', name: 'Gathering Suite', category: 'Space sets', price: 11800,
    image: 'images/conference.png', alt: 'Conference table and chairs in a modern meeting room',
    description: 'A complete setting for considered meetings and big conversations.',
    specs: { Capacity: '8 people', 'Suggested area': '25 m²', 'Concept includes': 'Table, eight chairs, pendant lighting', Palette: 'Walnut, charcoal, warm grey' }
  },
  {
    id: 'focus-office-set', name: 'Focus Office Set', category: 'Space sets', price: 6950,
    image: 'images/private-office.png', alt: 'Private office with a dark desk and chair',
    description: 'A calm, self-contained office for focused work.',
    specs: { Capacity: '1 person', 'Suggested area': '14 m²', 'Concept includes': 'Desk, task chair, storage', Palette: 'Graphite, stone, smoked oak' }
  },
  {
    id: 'flex-workstation-set', name: 'Flex Workstation Set', category: 'Space sets', price: 3850,
    image: 'images/adaptable-desk.png', alt: 'Adaptable office desks with a city view',
    description: 'An adaptable work setting with room to move between tasks.',
    specs: { Capacity: '1 person', 'Suggested area': '10 m²', 'Concept includes': 'Desk, task chair, side surface', Palette: 'Graphite, warm grey, oak' }
  },
  {
    id: 'collaboration-studio-set', name: 'Collaboration Studio Set', category: 'Space sets', price: 8450,
    image: 'images/collaboration.png', alt: 'Open collaborative office with meeting tables and presentation screen',
    description: 'A shared environment for discussion, presentation and teamwork.',
    specs: { Capacity: '4–6 people', 'Suggested area': '20 m²', 'Concept includes': 'Tables, seating, presentation zone', Palette: 'Stone, charcoal, muted green' }
  },
  {
    id: 'arc-executive-desk', name: 'Arc Executive Desk', category: 'Desks', price: 2890,
    image: 'images/products/arc-executive-desk.jpg', alt: 'Dark oak executive desk with integrated side storage',
    description: 'A generous desk with integrated storage and quiet architectural lines.',
    specs: { Dimensions: '220 × 90 × 75 cm', Surface: 'Smoked oak veneer', Frame: 'Powder-coated steel', Features: 'Cable access; integrated return storage' }
  },
  {
    id: 'stride-sit-stand-desk', name: 'Stride Sit-Stand Desk', category: 'Desks', price: 1690,
    image: 'images/products/stride-sit-stand-desk.jpg', alt: 'Light grey adjustable desk on black telescoping legs',
    description: 'A height-adjustable surface that moves with the workday.',
    specs: { Desktop: '180 × 80 cm', 'Height range': '65–125 cm', Frame: 'Powder-coated steel', Features: 'Electric adjustment; cable grommet' }
  },
  {
    id: 'contour-task-chair', name: 'Contour Task Chair', category: 'Seating', price: 895,
    image: 'images/products/contour-task-chair.jpg', alt: 'Charcoal mesh ergonomic task chair',
    description: 'Breathable support for long stretches of focused work.',
    specs: { Dimensions: '68 × 68 × 105–118 cm', Upholstery: 'Charcoal mesh', Base: 'Five-star caster base', Features: 'Adjustable arms and lumbar support' }
  },
  {
    id: 'harbor-lounge-chair', name: 'Harbor Lounge Chair', category: 'Seating', price: 1250,
    image: 'images/products/harbor-lounge-chair.jpg', alt: 'Grey upholstered lounge chair with curved walnut shell',
    description: 'A softer place for a pause or an informal conversation.',
    specs: { Dimensions: '84 × 78 × 80 cm', Upholstery: 'Warm grey fabric', Shell: 'Walnut veneer', Base: 'Black powder-coated steel' }
  },
  {
    id: 'span-conference-table', name: 'Span Conference Table', category: 'Tables', price: 3950,
    image: 'images/products/span-conference-table.jpg', alt: 'Long walnut conference table with angled dark metal legs',
    description: 'A broad shared surface built around discussion.',
    specs: { Dimensions: '300 × 110 × 75 cm', Capacity: '8–10 seats', Surface: 'Walnut veneer', Features: 'Two integrated cable ports' }
  },
  {
    id: 'line-meeting-chair', name: 'Line Meeting Chair', category: 'Seating', price: 540,
    image: 'images/products/line-meeting-chair.jpg', alt: 'Upholstered grey meeting chair on slim black legs',
    description: 'A comfortable, restrained chair for shared spaces.',
    specs: { Dimensions: '60 × 60 × 82 cm', Upholstery: 'Grey woven fabric', Frame: 'Black powder-coated steel', Features: 'Fixed arms; four-leg base' }
  },
  {
    id: 'slate-credenza', name: 'Slate Credenza', category: 'Storage', price: 1850,
    image: 'images/products/slate-credenza.jpg', alt: 'Low smoked oak credenza with fluted panel detail',
    description: 'Low-profile storage that keeps a workspace composed.',
    specs: { Dimensions: '200 × 45 × 75 cm', Finish: 'Smoked oak veneer', Storage: 'Four concealed compartments', Detail: 'Fluted front panel' }
  },
  {
    id: 'veil-acoustic-screen', name: 'Veil Acoustic Screen', category: 'Acoustics', price: 990,
    image: 'images/products/veil-acoustic-screen.jpg', alt: 'Three freestanding grey felt acoustic panels',
    description: 'A flexible visual and acoustic boundary for open spaces.',
    specs: { Dimensions: '240 × 42 × 170 cm overall', Panels: 'Three modular sections', Material: 'Felt-clad panels', Frame: 'Freestanding black steel' }
  },
  {
    id: 'halo-linear-pendant', name: 'Halo Linear Pendant', category: 'Lighting', price: 720,
    image: 'images/products/halo-linear-pendant.jpg', alt: 'Slim bronze linear pendant light glowing above an office setting',
    description: 'An even, warm line of light over a shared table.',
    specs: { Dimensions: '150 × 8 × 6 cm', Finish: 'Brushed dark bronze', Light: 'Warm-white LED', Installation: 'Hardwired ceiling mount' }
  },
  {
    id: 'beam-task-lamp', name: 'Beam Task Lamp', category: 'Lighting', price: 360,
    image: 'images/products/beam-task-lamp.jpg', alt: 'Adjustable graphite task lamp on a dark oak desk',
    description: 'Focused light with a clean, adjustable silhouette.',
    specs: { Reach: 'Up to 72 cm', Finish: 'Matte graphite', Light: 'Warm-white LED', Features: 'Adjustable arm and shade' }
  }
];

const productById = new Map(products.map(product => [product.id, product]));
const money = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
const storageKey = 'form-workspace-plan-v1';
const grid = document.querySelector('#product-grid');
const count = document.querySelector('#product-count');
const search = document.querySelector('#product-search');
const category = document.querySelector('#product-category');
const sort = document.querySelector('#product-sort');
const empty = document.querySelector('#catalog-empty');
const productDialog = document.querySelector('#product-dialog');
const planDialog = document.querySelector('#plan-dialog');
const announcement = document.querySelector('#catalog-announcement');
let lastDialogTrigger = null;

function loadPlan() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved || typeof saved !== 'object' || Array.isArray(saved)) return {};
    return Object.fromEntries(Object.entries(saved).filter(([id, quantity]) =>
      productById.has(id) && Number.isInteger(quantity) && quantity > 0 && quantity <= 99
    ));
  } catch {
    return {};
  }
}

let plan = loadPlan();

function savePlan() {
  try { localStorage.setItem(storageKey, JSON.stringify(plan)); } catch { /* Browsing still works when storage is unavailable. */ }
}

function announce(message) { announcement.textContent = message; }

function card(product) {
  const keySpecs = Object.entries(product.specs).slice(0, 2)
    .map(([label, value]) => `<li><span>${label}</span><strong>${value}</strong></li>`).join('');
  return `<article class="product-card">
    <button type="button" class="product-photo" data-action="details" data-id="${product.id}" aria-label="View details for ${product.name}">
      <img src="${product.image}" alt="${product.alt}" width="1448" height="1086" loading="lazy" decoding="async" />
      <span>Details ↗</span>
    </button>
    <div class="product-card-body">
      <div class="product-card-heading"><span class="product-category">${product.category}</span><strong class="product-price">${money.format(product.price)}</strong></div>
      <h3>${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <ul class="product-specs">${keySpecs}</ul>
      <div class="product-actions">
        <button type="button" class="secondary-button" data-action="details" data-id="${product.id}">Full specs</button>
        <button type="button" class="primary-button" data-action="add" data-id="${product.id}">${plan[product.id] ? 'Add another' : 'Add to plan'}</button>
      </div>
    </div>
  </article>`;
}

function renderProducts() {
  const term = search.value.trim().toLocaleLowerCase();
  const shown = products.filter(product => {
    if (category.value !== 'all' && product.category !== category.value) return false;
    const searchable = [product.name, product.category, product.description, ...Object.values(product.specs)].join(' ').toLocaleLowerCase();
    return searchable.includes(term);
  });
  if (sort.value === 'price-asc') shown.sort((a, b) => a.price - b.price);
  if (sort.value === 'price-desc') shown.sort((a, b) => b.price - a.price);
  if (sort.value === 'name') shown.sort((a, b) => a.name.localeCompare(b.name));
  grid.innerHTML = shown.map(card).join('');
  count.textContent = `Showing ${shown.length} of ${products.length} products`;
  empty.hidden = shown.length !== 0;
}

function planQuantity() { return Object.values(plan).reduce((sum, quantity) => sum + quantity, 0); }
function planSubtotal() { return Object.entries(plan).reduce((sum, [id, quantity]) => sum + productById.get(id).price * quantity, 0); }
function updatePlanCount() { document.querySelector('#plan-count').textContent = planQuantity(); }

function addToPlan(product, button) {
  plan[product.id] = Math.min((plan[product.id] || 0) + 1, 99);
  savePlan();
  updatePlanCount();
  if (button) button.textContent = 'Add another';
  if (planDialog.open) renderPlan();
  announce(`${product.name} added to your planning list. ${planQuantity()} items selected.`);
}

function openProduct(product, trigger) {
  lastDialogTrigger = trigger;
  const specs = Object.entries(product.specs)
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('');
  document.querySelector('#product-detail').innerHTML = `<div class="detail-layout">
    <img src="${product.image}" alt="${product.alt}" />
    <div class="detail-copy">
      <p class="eyebrow">${product.category} / Concept product</p>
      <h2 id="detail-title">${product.name}</h2>
      <p class="detail-description">${product.description}</p>
      <dl class="detail-specs">${specs}</dl>
      <div class="detail-bottom"><strong>${money.format(product.price)}</strong><span>Illustrative CAD price</span></div>
      <button type="button" class="primary-button" data-action="add" data-id="${product.id}">Add to planning list</button>
    </div>
  </div>`;
  productDialog.showModal();
}

function renderPlan() {
  const entries = Object.entries(plan).filter(([id]) => productById.has(id));
  const items = document.querySelector('#plan-items');
  items.innerHTML = entries.map(([id, quantity]) => {
    const product = productById.get(id);
    return `<div class="plan-item">
      <img src="${product.image}" alt="" loading="lazy" />
      <div class="plan-item-main"><strong>${product.name}</strong><span>${money.format(product.price)} each</span>
        <div class="quantity-controls">
          <button type="button" data-action="decrease" data-id="${id}" aria-label="Decrease quantity of ${product.name}">−</button>
          <span aria-label="Quantity ${quantity}">${quantity}</span>
          <button type="button" data-action="increase" data-id="${id}" aria-label="Increase quantity of ${product.name}">+</button>
          <button type="button" class="remove-item" data-action="remove" data-id="${id}">Remove</button>
        </div>
      </div>
      <strong class="plan-line-total">${money.format(product.price * quantity)}</strong>
    </div>`;
  }).join('');
  const hasItems = entries.length > 0;
  document.querySelector('#plan-empty').hidden = hasItems;
  document.querySelector('#plan-summary').hidden = !hasItems;
  document.querySelector('#download-plan').disabled = !hasItems;
  document.querySelector('#plan-total').textContent = money.format(planSubtotal());
  updatePlanCount();
}

function updateQuantity(id, action) {
  const product = productById.get(id);
  if (!product) return;
  if (action === 'remove' || (action === 'decrease' && plan[id] === 1)) delete plan[id];
  else if (action === 'increase') plan[id] = Math.min(plan[id] + 1, 99);
  else if (action === 'decrease') plan[id] -= 1;
  savePlan();
  renderPlan();
  renderProducts();
  announce(`${product.name} updated. Estimated subtotal ${money.format(planSubtotal())}.`);
}

function downloadPlan() {
  const quote = value => `"${String(value).replaceAll('"', '""')}"`;
  const rows = [['Product', 'Category', 'Quantity', 'Unit price CAD', 'Line total CAD']];
  for (const [id, quantity] of Object.entries(plan)) {
    const product = productById.get(id);
    rows.push([product.name, product.category, quantity, product.price, product.price * quantity]);
  }
  rows.push(['Estimated subtotal', '', '', '', planSubtotal()]);
  rows.push(['Illustrative concept prices; taxes, delivery and installation excluded', '', '', '', '']);
  const csv = '\uFEFF' + rows.map(row => row.map(quote).join(',')).join('\r\n');
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'form-workspace-plan.csv';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  announce('Planning list downloaded as CSV.');
}

search.addEventListener('input', renderProducts);
category.addEventListener('change', renderProducts);
sort.addEventListener('change', renderProducts);
document.querySelector('#reset-filters').addEventListener('click', () => {
  search.value = '';
  category.value = 'all';
  sort.value = 'featured';
  renderProducts();
  search.focus();
});
grid.addEventListener('click', event => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const product = productById.get(button.dataset.id);
  if (button.dataset.action === 'details') openProduct(product, button);
  if (button.dataset.action === 'add') addToPlan(product, button);
});
document.querySelector('#product-detail').addEventListener('click', event => {
  const button = event.target.closest('button[data-action="add"]');
  if (button) addToPlan(productById.get(button.dataset.id), button);
});
document.querySelector('#open-plan').addEventListener('click', event => {
  lastDialogTrigger = event.currentTarget;
  renderPlan();
  planDialog.showModal();
});
document.querySelector('#plan-items').addEventListener('click', event => {
  const button = event.target.closest('button[data-action]');
  if (button) updateQuantity(button.dataset.id, button.dataset.action);
});
document.querySelector('#download-plan').addEventListener('click', downloadPlan);
document.querySelector('#close-product').addEventListener('click', () => productDialog.close());
document.querySelector('#close-plan').addEventListener('click', () => planDialog.close());
for (const dialog of [productDialog, planDialog]) {
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { if (lastDialogTrigger?.isConnected) lastDialogTrigger.focus(); });
}

renderProducts();
updatePlanCount();
