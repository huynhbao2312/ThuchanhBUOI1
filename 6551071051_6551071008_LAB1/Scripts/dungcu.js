// dungcu.js - JavaScript cho trang Bút - Viết

// Xử lý nút CSKH
const nutCash = document.getElementById("nut-cash");
if (nutCash) {
  nutCash.addEventListener("click", function() {
    alert("Cảm ơn bạn đã liên hệ với chúng tôi! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.");
  });
}

// Menu toggle
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('side-menu');

const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

function toggleMenu() {
  if (!menuToggle || !sideMenu) return;
  menuToggle.classList.toggle('active');
  sideMenu.classList.toggle('active');
  overlay.classList.toggle('active');

  if (sideMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}

if (menuToggle && sideMenu) {
  menuToggle.addEventListener('click', function(e){ 
    e.stopPropagation(); 
    toggleMenu(); 
  });
  overlay.addEventListener('click', toggleMenu);
  Array.from(sideMenu.querySelectorAll('a')).forEach(a => {
    a.addEventListener('click', toggleMenu);
  });
}

// Dữ liệu sản phẩm BÚT - VIẾT
constButVietData = [
  { id: '001', price: '5k', game: 'Bút bi xanh', image: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png' },
  { id: '002', price: '5k', game: 'Bút bi đen', image: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png' },
  { id: '003', price: '5k', game: 'Bút bi đỏ', image: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png' },
  { id: '004', price: '8k', game: 'Bút chì 2B', image: 'https://cdn-icons-png.flaticon.com/512/2909/2909779.png' },
  { id: '005', price: '8k', game: 'Bút chì HB', image: 'https://cdn-icons-png.flaticon.com/512/2909/2909779.png' },
  { id: '006', price: '10k', game: 'Bút gel xanh', image: 'https://cdn-icons-png.flaticon.com/512/3094/3094359.png' },
  { id: '007', price: '10k', game: 'Bút gel đen', image: 'https://cdn-icons-png.flaticon.com/512/3094/3094359.png' },
  { id: '008', price: '15k', game: 'Bút mực cao cấp', image: 'https://cdn-icons-png.flaticon.com/512/2909/2909742.png' },
  { id: '009', price: '12k', game: 'Bút dạ quang', image: 'https://cdn-icons-png.flaticon.com/512/3094/3094365.png' },
  { id: '010', price: '20k', game: 'Bút ký tên', image: 'https://cdn-icons-png.flaticon.com/512/2909/2909742.png' }
];

// Load sản phẩm
function loadButViet() {
  const container = document.getElementById('acc-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  ButVietData.forEach(product => {
    const card = document.createElement('div');
    card.className = 'acc-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.game}">
      <h3>${product.game}</h3>
      <p style="color: #666; font-size: 14px; margin: 5px 0;">SP #${product.id}</p>
      <div class="btn-group">
        <button class="price-btn">${product.price}</button>
        <button class="buy-btn" data-acc="${product.id}">🛒 Mua</button>
      </div>
    `;
    container.appendChild(card);
  });
  
  // Bind nút mua
  bindBuyButtons();
}

function bindBuyButtons() {
  document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const productId = this.getAttribute('data-acc');
      const product = ButVietData.find(p => p.id === productId);
      if (product) {
        alert(`Bạn đã chọn mua: ${product.game} - Giá: ${product.price}\n\nLiên hệ: Zalo 094 5534 982`);
        window.open('', '_blank');
      }
    });
  });
}

// Load khi trang sẵn sàng
loadButViet();