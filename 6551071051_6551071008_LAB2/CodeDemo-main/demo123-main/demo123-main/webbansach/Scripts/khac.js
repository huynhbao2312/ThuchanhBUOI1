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
  { id: '011', price: '27k', game: 'Thước kẻ Kim Nguyên 30cm', image: 'https://tse2.mm.bing.net/th/id/OIP.86HYHWMrJVMVggRrjJyPGQHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: '012', price: '59k', game: 'Compa kim loại Deli cao cấp (chì bấm)', image: 'https://down-vn.img.susercontent.com/file/sg-11134201-7qvf4-ljdq4w1lsbdb95' },
  { id: '013', price: '19k', game: 'Gôm/Tẩy Hi-Polymer cao cấp (nhỏ)', image: 'https://www.eovietnam.com/wp-content/uploads/2021/02/gomtlh05-6186.jpg' },
  { id: '014', price: '10k', game: 'Gọt bút chì Deli', image: 'https://tse2.mm.bing.net/th/id/OIP.x8OFjLqGwHxKmrR0U1COBAHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: '015', price: '22k', game: 'Dao rọc giấy', image: 'https://cf.shopee.vn/file/948df17a60f18fa618de0a8a885a08ec' },
  { id: '016', price: '39k', game: 'Bộ thước 4 món WIN-Q', image: 'https://down-vn.img.susercontent.com/file/vn-11134211-23030-1qizvcbcglov1c' },
  { id: '017', price: '35k', game: 'Bút xóa CP-02', image: 'https://tse1.mm.bing.net/th/id/OIP.6Pc1KZzkrgnLa4Cc76TLcQHaFj?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: '018', price: '20k', game: 'Dây đeo thẻ sinh viên loại tốt', image: 'https://cf.shopee.vn/file/7dfc51ff815dac971330af4b47137c66' },
  { id: '019', price: '7k', game: 'Băng keo trong (lẻ 1 cuộn)', image: 'https://baobithanhphat.com/wp-content/uploads/2023/03/bang-keo-trong-thanh-phat.jpg' },
  { id: '020', price: '499k', game: 'Máy tính Casio fx-580VN X ', image: 'https://vn-live-01.slatic.net/p/d1b81ecae49535a20675a0b970ba11e8.jpg' },
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
        alert(`Bạn đã chọn mua: ${product.game} - Giá: ${product.price}\n\nCảm ơn bạn đã chọn mua sản phẩm của chúng tôi!\n*Nếu có thắc mắc vui lòng liên hệ qua Hotline: 0888 888 888 để được hỗ trợ.\nXin chân thành cảm ơn.`);
        window.open('', '_blank');
      }
    });
  });
}

// Load khi trang sẵn sàng
loadDungCuKhac();