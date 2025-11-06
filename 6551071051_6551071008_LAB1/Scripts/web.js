// Hàm xử lý khi người dùng bấm nút "Mua ngay"
function muaAcc(tenAcc) {
  alert("Bạn đã chọn mua: " + tenAcc);
}

// Ghi chú: xử lý khi người dùng bấm nút CASH
const nutCash = document.getElementById("nut-cash");
if (nutCash) {
  nutCash.addEventListener("click", function() {
    alert("Cảm ơn bạn đã liên hệ với chúng tôi! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.");
  });
}

// menu (robust selector và kiểm tra tồn tại phần tử)
const menuToggle = document.getElementById('menuToggle') || document.getElementById('menu-toggle') || document.querySelector('.menu-toggle');
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
  menuToggle.addEventListener('click', function(e){ e.stopPropagation(); toggleMenu(); });
  overlay.addEventListener('click', toggleMenu);
  // close menu when clicking links inside
  Array.from(sideMenu.querySelectorAll('a')).forEach(a=> a.addEventListener('click', toggleMenu));
}

// Chỉ khởi tạo phần danh sách acc và phân trang nếu container tồn tại
const accContainer = document.getElementById('acc-container');
const paginationEl = document.getElementById('pagination');

if (accContainer) {
  // nut mua den fb: bind sau khi acc được render
  function bindBuyButtons() {
    document.querySelectorAll('.buy-btn').forEach(btn => {
      // remove previous listeners by cloning node
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);
      newBtn.addEventListener('click', () => {
        window.open('', '_blank');
      });
    });
  }
}
