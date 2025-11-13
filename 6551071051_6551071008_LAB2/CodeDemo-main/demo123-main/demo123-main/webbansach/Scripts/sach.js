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
  { id: '021', price: '179k', game: 'Sách - Đắc Nhân Tâm [HOT]', image: 'https://tse1.mm.bing.net/th/id/OIP.z-ZWu0jmTdRnQWviQ6C8kgHaFL?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: '022', price: '89k', game: 'Sách - Nhà Giả Kim', image: 'https://tse2.mm.bing.net/th/id/OIP.vlX6Pec8eEGmwuayITNPxwHaFj?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: '023', price: '159k', game: 'Sách - Đọc Vị Bất Kỳ Ai [HOT]', image: 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/sach-hay-3.jpg' },
  { id: '024', price: '119k', game: 'Sách - Quản Trị Nhân Sự Đúng', image: 'https://diendaniso.com/wp-content/uploads/2023/03/reivews-sach-quan-tri-nhan-su-dung-321.jpg' },
  { id: '025', price: '139k', game: 'Sách - Để Trở Thành Người Bán Hàng Giỏi Nhất [HOT]', image: 'https://salt.tikicdn.com/ts/product/b1/47/b2/566da952a925145effb5f53a93eaacfd.jpg' },
  { id: '026', price: '99k', game: 'Sách - Hạt Giống Tâm Hồn', image: 'https://salt.tikicdn.com/cache/w1200/ts/product/a2/33/f3/98d8bdfe1f2bbdd8c2fc5631aaf0dcf9.jpg' },
  { id: '027', price: '79k', game: 'Sách - Ông Già Và Biển Cả', image: 'https://ben.com.vn/tin-tuc/wp-content/uploads/2021/08/nhung-cuon-sach-hay-nhat-moi-thoi-dai-1.jpg' },
  { id: '028', price: '69k', game: 'Sách - Chuyện Chi Đây', image: 'https://tse1.mm.bing.net/th/id/OIP.Xi0macVqKfOXd8AxQai2jwHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: '029', price: '199k', game: 'Sách - Nghệ Thuật Từ Chối [HOT]', image: 'https://down-my.img.susercontent.com/file/ecaae9a299c03578f6e4d45efd5759c3' },
  { id: '030', price: '199k', game: 'Sách - Khéo Ăn Nói Sẽ Có Được Thiên Hạ [HOT]', image: 'https://m.yodycdn.com/blog/nhung-cuon-sach-hay-ve-cuoc-song-yodyvn-16.jpg' }
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
        alert(`Bạn đã chọn mua: ${product.game} - Giá: ${product.price}\n\nCảm ơn bạn đã chọn mua sản phẩm của chúng tôi!\n*Nếu có thắc mắc vui lòng liên hệ qua Hotline: 0888 888 888 để được hỗ trợ.\nXin chân thành cảm ơn.`);
        window.open('/', '_blank');
      }
    });
  });
}

// Load khi trang sẵn sàng
loadSach();