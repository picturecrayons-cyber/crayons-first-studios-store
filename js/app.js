const products = {
  rentals: [
    { id: 1, title: "Camera Rental Package", price: 5000, unit: "/day", desc: "Professional camera kit for film & photo shoots." },
    { id: 2, title: "Lighting Kit Rental", price: 3000, unit: "/day", desc: "Full lighting setup for studio or location." }
  ],
  studio: [
    { id: 3, title: "Studio Space - Half Day", price: 10000, unit: "", desc: "Flexible studio booking for shoots." },
    { id: 4, title: "Studio Space - Full Day", price: 18000, unit: "", desc: "Full day studio access with equipment." }
  ],
  marketplace: [
    { id: 5, title: "List Your Gear / Service", price: 999, unit: "", desc: "Marketplace listing fee. Reach film creators." }
  ],
  store: [
    { id: 6, title: "Official T-Shirt", price: 899, unit: "", desc: "Crayons Pictures branded cotton tee.", sizes: ["M", "L"] }
  ]
};

function renderGrid(containerId, items) {
  const grid = document.getElementById(containerId);
  grid.innerHTML = items.map(p => `
    <div class="card">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="price">₹${p.price.toLocaleString()}${p.unit || ''}</div>
      <button class="btn-sm" onclick="alert('Booking / Order placed for: ${p.title}')">Book / Buy</button>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderGrid('rentals-grid', products.rentals);
  renderGrid('studio-grid', products.studio);
  renderGrid('marketplace-grid', products.marketplace);
  renderGrid('store-grid', products.store);
});
