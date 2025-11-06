// sach.js - JavaScript cho trang Sách

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

// Dữ liệu sản phẩm SÁCH
const SachData = [
  { id: '051', price: '65k', game: 'Sách Toán 12', image: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png' },
  { id: '052', price: '60k', game: 'Sách Văn 12', image: 'https://cdn-icons-png.flaticon.com/512/3145/3145765.png' },
  { id: '053', price: '70k', game: 'Sách Tiếng Anh 12', image: 'https://cdn-icons-png.flaticon.com/512/3145/3145809.png' },
  { id: '054', price: '55k', game: 'Sách Vật Lý 12', image: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png' },
  { id: '055', price: '58k', game: 'Sách Hóa Học 12', image: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png' },
  { id: '056', price: '75k', game: 'Từ điển Anh-Việt', image: 'https://cdn-icons-png.flaticon.com/512/3145/3145809.png' },
  { id: '057', price: '80k', game: 'Sách tham khảo Toán', image: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png' },
  { id: '058', price: '65k', game: 'Sách bài tập Tiếng Anh', image: 'https://cdn-icons-png.flaticon.com/512/3145/3145809.png' },
  { id: '059', price: '90k', game: 'Sách luyện thi THPT', image: 'https://cdn-icons-png.flaticon.com/512/3145/3145765.png' },
  { id: '060', price: '85k', game: 'Sách văn học nước ngoài', image: 'https://cdn-icons-png.flaticon.com/512/3145/3145765.png' }
];

// Load sản phẩm
function loadSach() {
  const container = document.getElementById('acc-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  SachData.forEach(product => {
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
      const product = SachData.find(p => p.id === productId);
      if (product) {
        alert(`Bạn đã chọn mua: ${product.game} - Giá: ${product.price}\n\nLiên hệ: Zalo 094 5534 982`);
        window.open('/', '_blank');
      }
    });
  });
}

// Load khi trang sẵn sàng
loadSach();