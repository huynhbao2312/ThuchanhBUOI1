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
const ButVietData = [
  { id: '001', price: '5k', game: 'Bút bi xanh Thiên Long TL-08', image: 'https://down-vn.img.susercontent.com/file/246e1d0e6110c243fa264e0e91db05f6' },
  { id: '002', price: '5k', game: 'Bút bi đen Thiên Long TL-023', image: 'https://down-vn.img.susercontent.com/file/18ef2332888c282bed6dda9737167d26' },
  { id: '003', price: '5k', game: 'Bút bi đỏ Thiên Long TL-025', image: 'https://cdn.lottemart.vn/media/catalog/product/cache/0x0/8/9/8935001806059.jpg.webp' },
  { id: '004', price: '8k', game: 'Bút chì 2B Đức', image: 'https://cf.shopee.vn/file/79a16d8bf37924a4627d69b9b9436e19' },
  { id: '005', price: '11k', game: 'Bút chì HB Queen', image: 'https://product.hstatic.net/200000792327/product/upload_1633968ee5744272adbf822b96b6dad2.jpg' },
  { id: '006', price: '12k', game: 'Bút Gel xanh Thiên Long GEL-08', image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lo9d6pu77h872b' },
  { id: '007', price: '19k', game: 'Bút Gel đen Deli cao cấp', image: 'https://sonca.vn/wp-content/uploads/2023/07/but-gel-den-trong-suot.jpg' },
  { id: '008', price: '89k', game: 'Bút máy cao cấp', image: 'https://product.hstatic.net/1000230347/product/artboard_1_7499415d04334ca0bc932e73e7ab5c9a_large.jpg' },
  { id: '009', price: '39k', game: 'Bút dạ quang FlexOffice', image: 'https://down-vn.img.susercontent.com/file/f802a1681b6f6b0261e70d718da54517' },
  { id: '010', price: '409k', game: 'Bút màu nước cao cấp Deli (48 màu)', image: 'https://down-vn.img.susercontent.com/file/sg-11134201-22090-aae02p6ozuhv3e' }
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
        alert(`Bạn đã chọn mua: ${product.game} - Giá: ${product.price}\n\nCảm ơn bạn đã chọn mua sản phẩm của chúng tôi!\n*Nếu có thắc mắc vui lòng liên hệ qua Hotline: 0888 888 888 để được hỗ trợ.\nXin chân thành cảm ơn.`);
        window.open('', '_blank');
      }
    });
  });
}

// Load khi trang sẵn sàng
loadButViet();