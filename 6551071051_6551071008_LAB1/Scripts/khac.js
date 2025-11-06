// khac.js - JavaScript cho trang Dụng Cụ Khác

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

// Dữ liệu sản phẩm DỤNG CỤ KHÁC
const DungCuKhacData = [
  { id: '031', price: '10k', game: 'Thước kẻ 30cm', image: 'https://cdn-icons-png.flaticon.com/512/3176/3176307.png' },
  { id: '032', price: '25k', game: 'Compa kim loại', image: 'https://cdn-icons-png.flaticon.com/512/2920/2920349.png' },
  { id: '033', price: '5k', game: 'Tẩy trắng', image: 'https://cdn-icons-png.flaticon.com/512/2311/2311524.png' },
  { id: '034', price: '8k', game: 'Gọt bút chì', image: 'https://cdn-icons-png.flaticon.com/512/2311/2311565.png' },
  { id: '035', price: '15k', game: 'Kéo cắt giấy', image: 'https://cdn-icons-png.flaticon.com/512/889/889399.png' },
  { id: '036', price: '30k', game: 'Bộ thước 4 món', image: 'https://cdn-icons-png.flaticon.com/512/3176/3176307.png' },
  { id: '037', price: '20k', game: 'Compa học sinh', image: 'https://cdn-icons-png.flaticon.com/512/2920/2920349.png' },
  { id: '038', price: '12k', game: 'Keo dán stick', image: 'https://cdn-icons-png.flaticon.com/512/2920/2920154.png' },
  { id: '039', price: '18k', game: 'Băng keo trong', image: 'https://cdn-icons-png.flaticon.com/512/2920/2920381.png' },
  { id: '040', price: '35k', game: 'Máy tính cầm tay', image: 'https://cdn-icons-png.flaticon.com/512/4616/4616080.png' },
  { id: '041', price: '22k', game: 'Bấm kim số 10', image: 'https://cdn-icons-png.flaticon.com/512/3176/3176429.png' },
  { id: '042', price: '15k', game: 'Hộp bút nhựa', image: 'https://cdn-icons-png.flaticon.com/512/2920/2920205.png' },
  { id: '043', price: '40k', game: 'Bảng nhớ A4', image: 'https://cdn-icons-png.flaticon.com/512/3094/3094820.png' },
  { id: '044', price: '28k', game: 'Giấy note 3M', image: 'https://cdn-icons-png.flaticon.com/512/3094/3094820.png' },
  { id: '045', price: '50k', game: 'Bấm lỗ giấy', image: 'https://cdn-icons-png.flaticon.com/512/3176/3176429.png' }
];

// Load sản phẩm
function loadDungCuKhac() {
  const container = document.getElementById('acc-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  DungCuKhacData.forEach(product => {
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
      const product = DungCuKhacData.find(p => p.id === productId);
      if (product) {
        alert(`Bạn đã chọn mua: ${product.game} - Giá: ${product.price}\n\nLiên hệ: Zalo 094 5534 982`);
        window.open('', '_blank');
      }
    });
  });
}

// Load khi trang sẵn sàng
loadDungCuKhac();