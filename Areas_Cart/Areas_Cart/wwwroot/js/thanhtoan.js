const addAddressBtn = document.getElementById('addAddressBtn');
const addressModal = document.getElementById('addressModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelAddressBtn = document.getElementById('cancelAddressBtn');
const saveAddressBtn = document.getElementById('saveAddressBtn');
const addressContainer = document.getElementById('addressList');

// Đảm bảo modal ẩn khi trang load
document.addEventListener('DOMContentLoaded', function() {
    if (addressModal) {
        addressModal.classList.add('d-none');
        addressModal.classList.remove('d-flex');
    }
});

// Hiển thị modal khi click nút "Thêm địa chỉ giao hàng"
addAddressBtn?.addEventListener('click', () => {
    addressModal.classList.remove('d-none');
    addressModal.classList.add('d-flex');
});

// Ẩn modal khi click nút đóng hoặc hủy
[closeModalBtn, cancelAddressBtn].forEach(btn => {
    btn?.addEventListener('click', () => {
        addressModal.classList.remove('d-flex');
        addressModal.classList.add('d-none');
    });
});

// Modern Toast Notification System
function showAlertModal(title, message, type = 'error', duration = 4000) {
  const container = document.getElementById('toastContainer');
  if (!container) {
    // Tạo container nếu chưa có
    const newContainer = document.createElement('div');
    newContainer.id = 'toastContainer';
    newContainer.className = 'toast-container';
    document.body.appendChild(newContainer);
  }
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icons = {
    error: 'fas fa-exclamation-triangle',
    warning: 'fas fa-exclamation-circle', 
    success: 'fas fa-check-circle'
  };
  
  toast.innerHTML = `
    <div class="toast-icon">
      <i class="${icons[type]}"></i>
    </div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <button class="toast-close">
      <i class="fas fa-times"></i>
    </button>
    <div class="toast-progress"></div>
  `;
  
  // Thêm vào container
  document.getElementById('toastContainer').appendChild(toast);
  
  // Hiển thị toast với animation
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);
  
  // Xử lý nút đóng
  toast.querySelector('.toast-close').addEventListener('click', () => {
    closeToast(toast);
  });
  
  // Tự động đóng sau duration
  setTimeout(() => {
    closeToast(toast);
  }, duration);
}

function closeToast(toast) {
  toast.style.transform = 'translateX(100%)';
  toast.style.opacity = '0';
  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 400);
}

// Kiểm tra họ và tên: tối đa 50 ký tự, không ký tự đặc biệt, chữ cái đầu viết hoa, tiếng Việt có dấu
function validateFullName(name) {
  name = name.trim();
  if (name.length === 0) {
    showAlertModal("Lỗi Nhập Liệu", "Vui lòng nhập họ và tên", "error");
    return false;
  }
  if (name.length > 50) {
    showAlertModal("Lỗi Nhập Liệu", "Họ và tên không được vượt quá 50 ký tự", "error");
    return false;
  }
  // Cho phép chữ hoa tiếng Việt đầu từ, các ký tự còn lại là thường hoặc dấu nháy đơn, nhiều từ cách nhau bởi 1 khoảng trắng
  const regex = /^([A-ZÀÁÂÃÄÅĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶÆÇĆĈĊČĐÐÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆÌÍÎÏĨĪĮİỈỊÑÒÓÔÕÖØŌŎŐƠỌỎỐỒỔỖỘỚỜỞỠỢÙÚÛÜŨŪŬŮŰŲƯỤỦỨỪỬỮỰÝŸỲỴỶỸ][a-zàáâãäåāăąạảấầẩẫậắằẳẵặæçćĉċčđðèéêëēĕėęěẹẻẽếềểễệìíîïĩīįiỉịñòóôõöøōŏőơọỏốồổỗộớờởỡợùúûüũūŭůűųưụủứừửữựýÿỳỵỷỹ']*)(\s([A-ZÀÁÂÃÄÅĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶÆÇĆĈĊČĐÐÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆÌÍÎÏĨĪĮİỈỊÑÒÓÔÕÖØŌŎŐƠỌỎỐỒỔỖỘỚỜỞỠỢÙÚÛÜŨŪŬŮŰŲƯỤỦỨỪỬỮỰÝŸỲỴỶỸ][a-zàáâãäåāăąạảấầẩẫậắằẳẵặæçćĉċčđðèéêëēĕėęěẹẻẽếềểễệìíîïĩīįiỉịñòóôõöøōŏőơọỏốồổỗộớờởỡợùúûüũūŭůűųưụủứừửữựýÿỳỵỷỹ']*))*$/u;
  if (!regex.test(name)) {
    showAlertModal("Định Dạng Không Hợp Lệ", "Họ và tên phải viết hoa chữ cái đầu mỗi từ và không chứa ký tự đặc biệt", "error");
    return false;
  }
  return true;
}

// Kiểm tra số điện thoại: bắt đầu bằng 0, 10 chữ số, chỉ số
function validatePhoneNumber(phone) {
  phone = phone.trim();
  if (phone.length === 0) {
    showAlertModal("Lỗi Nhập Liệu", "Vui lòng nhập số điện thoại", "error");
    return false;
  }
  if (!/^0\d{9}$/.test(phone)) {
    showAlertModal("Số Điện Thoại Không Hợp Lệ", "Số điện thoại phải bắt đầu bằng số 0 và có đúng 10 chữ số", "error");
    return false;
  }
  return true;
}

saveAddressBtn?.addEventListener('click', () => {
  const nickname = document.getElementById('inputNickname').value.trim();
  const name = document.getElementById('inputName').value.trim();
  const phone = document.getElementById('inputPhone').value.trim();
  const address = document.getElementById('inputAddress').value.trim();
  const city = document.getElementById('inputCity').value.trim();
  const ward = document.getElementById('inputWard').value.trim();

  if (!name || !phone || !address || !city || !ward) {
    showAlertModal("Thông Tin Chưa Đầy Đủ", "Vui lòng điền đầy đủ tất cả các trường bắt buộc để tiếp tục", "warning");
    return;
  }

  if (!validateFullName(name)) return;
  if (!validatePhoneNumber(phone)) return;

  // Ẩn phần empty state khi có địa chỉ đầu tiên
  const emptyState = addressContainer.querySelector('.text-center');
  if (emptyState) {
    emptyState.style.display = 'none';
  }

  const wrapper = document.createElement('div');
  wrapper.className = 'address-card p-4 rounded-3 mb-3 animate-fade-in position-relative';
  
  // Tạo nội dung hiển thị với tên gợi nhớ (nếu có)
  const nicknameDisplay = nickname ? `
    <div class="badge bg-success mb-2 px-3 py-2 fs-6 fw-semibold">
      <i class="fas fa-tag me-1"></i>${nickname}
    </div>
  ` : '';
  
  wrapper.innerHTML = `
    <div class="d-flex justify-content-between align-items-start">
      <label class="d-flex align-items-start flex-grow-1 cursor-pointer">
        <input type="radio" name="address" class="form-check-input me-3 mt-1" style="transform: scale(1.2); accent-color: #2E7D32;">
        <div class="flex-grow-1">
          ${nicknameDisplay ? `<div class="badge">${nickname}</div>` : ''}
          <h6 class="mb-2 fw-bold" style="color: var(--text-primary); font-size: 1.1rem;">
            <i class="fas fa-user-circle me-2" style="color: #2E7D32;"></i>
            ${name}
          </h6>
          <div class="address-details">
            <div class="address-info">
              <i class="fas fa-phone"></i>
              <span>${phone}</span>
            </div>
            <div class="address-info">
              <i class="fas fa-map-marker-alt"></i>
              <span>${address}, ${ward}, ${city}</span>
            </div>
          </div>
        </div>
      </label>
      <button type="button" class="delete-btn delete-address-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `;
  addressContainer.appendChild(wrapper);

  addressModal.classList.remove('d-flex');
  addressModal.classList.add('d-none');
  document.getElementById('addressForm').reset();

  setupAddressCardEvents();
});

function setupAddressCardEvents() {
  const addressCards = document.querySelectorAll('.address-card');
  addressCards.forEach(card => {
    const radio = card.querySelector('input[type="radio"]');
    const deleteBtn = card.querySelector('.delete-address-btn');

    card.onclick = null;
    if (deleteBtn) deleteBtn.onclick = null;

    card.addEventListener('click', () => {
      addressCards.forEach(c => {
        c.classList.remove('selected');
        c.querySelector('input[type="radio"]').checked = false;
      });
      card.classList.add('selected');
      radio.checked = true;
    });

    if (deleteBtn) {
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.style.animation = 'fadeInUp 0.3s ease reverse';
        setTimeout(() => {
          card.remove();
          // Hiện lại empty state nếu không còn địa chỉ nào
          const remainingAddresses = document.querySelectorAll('.address-card');
          if (remainingAddresses.length === 0) {
            const emptyState = addressContainer.querySelector('.text-center');
            if (emptyState) {
              emptyState.style.display = 'block';
            }
          }
        }, 300);
      });
    }
  });
}

// Payment method selection
document.querySelectorAll('.payment-method').forEach(method => {
  method.addEventListener('click', () => {
    document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
    method.classList.add('selected');
    method.querySelector('input[type="radio"]').checked = true;
  });
});

// Xử lý nút quay lại giỏ hàng
document.getElementById('backToCartBtn').addEventListener('click', () => {
  window.location.href = '/AreasCart/Cart/giohang';
});

// Xử lý hoàn tất đơn hàng
document.getElementById('completeOrderBtn').addEventListener('click', () => {
  const orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];
  
  if (orderItems.length === 0) {
    showAlertModal("Giỏ Hàng Trống", "Không có sản phẩm nào để thanh toán. Vui lòng thêm sản phẩm vào giỏ hàng!", "warning");
    return;
  }

  // Kiểm tra xem có địa chỉ nào được thêm vào chưa bằng cách kiểm tra radio buttons
  const addressRadios = document.querySelectorAll('input[name="address"]');
  if (addressRadios.length === 0) {
    // Hiện modal thông báo chưa có địa chỉ
    const noAddressModal = document.getElementById('noAddressModal');
    noAddressModal.classList.remove('d-none');
    noAddressModal.classList.add('d-flex');
    return;
  }

  // Kiểm tra địa chỉ giao hàng đã được chọn chưa
  const selectedAddress = document.querySelector('input[name="address"]:checked');
  if (!selectedAddress) {
    showAlertModal("Chưa Chọn Địa Chỉ", "Vui lòng chọn địa chỉ giao hàng để tiếp tục đặt hàng", "warning");
    return;
  }

  // Kiểm tra phương thức thanh toán
  const selectedPayment = document.querySelector('input[name="payment"]:checked');
  if (!selectedPayment) {
    showAlertModal("Chưa Chọn Phương Thức", "Vui lòng chọn phương thức thanh toán để hoàn tất đơn hàng", "warning");
    return;
  }

  // Hiển thị thông báo thành công
showAlertModal("Đang Xử Lý", "Đơn hàng của bạn đang được xử lý...", "fas fa-check-circle", true);

  // Xóa các sản phẩm đã thanh toán khỏi giỏ hàng
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartSelected = JSON.parse(localStorage.getItem('cartSelected')) || [];
  
  // Lọc ra những sản phẩm chưa được chọn để thanh toán
  const remainingCart = cart.filter((_, index) => !cartSelected.includes(index));
  
  // Cập nhật lại giỏ hàng và selection
  localStorage.setItem('cart', JSON.stringify(remainingCart));
  localStorage.setItem('cartSelected', JSON.stringify([]));
  
  // Xóa thông tin đơn hàng tạm
  localStorage.removeItem('orderItems');
  
  // Hiện modal thành công
  const successModal = document.getElementById('paymentSuccessModal');
  successModal.classList.remove('d-none');
  successModal.classList.add('d-flex');
});

// Xử lý đóng modal không có địa chỉ
const closeNoAddressModalBtn = document.getElementById('closeNoAddressModalBtn');
const closeNoAddressBtn = document.getElementById('closeNoAddressBtn');
const addAddressFromModalBtn = document.getElementById('addAddressFromModalBtn');
const noAddressModal = document.getElementById('noAddressModal');

[closeNoAddressModalBtn, closeNoAddressBtn].forEach(btn => {
  btn?.addEventListener('click', () => {
    noAddressModal.classList.remove('d-flex');
    noAddressModal.classList.add('d-none');
  });
});

// Xử lý nút thêm địa chỉ từ modal thông báo
addAddressFromModalBtn?.addEventListener('click', () => {
  // Đóng modal thông báo
  noAddressModal.classList.remove('d-flex');
  noAddressModal.classList.add('d-none');
  
  // Mở modal thêm địa chỉ
  addressModal.classList.remove('d-none');
  addressModal.classList.add('d-flex');
});

// Thêm hiệu ứng hover cho nút quay lại
const backBtn = document.getElementById('backToCartBtn');
backBtn.addEventListener('mouseenter', () => {
  backBtn.style.background = 'var(--lighter)';
  backBtn.style.borderColor = 'var(--primary)';
  backBtn.style.transform = 'translateY(-2px)';
});

backBtn.addEventListener('mouseleave', () => {
  backBtn.style.background = 'var(--white)';
  backBtn.style.borderColor = 'var(--border)';
  backBtn.style.transform = 'translateY(0)';
});

function formatVND(n) {
  return n.toLocaleString('vi-VN') + '₫';
}

const container = document.getElementById('orderItemsContainer');
const orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];

if (orderItems.length === 0) {
  container.innerHTML = '<div class="text-center py-5"><i class="fas fa-shopping-cart mb-3" style="font-size: 3rem; color: #2E7D32; opacity: 0.5;"></i><p class="text-muted fs-5">Không có sản phẩm nào trong đơn hàng.</p></div>';
} else {
  let subtotal = 0;
  container.innerHTML = orderItems.map(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    return `
      <div class="product-item d-flex align-items-center p-3 mb-2 rounded-3">
        <div class="product-image-wrapper me-3">
          <div class="d-flex align-items-center justify-content-center rounded-3 overflow-hidden border-2" 
               style="width: 70px; height: 70px; background: var(--lighter); border-color: var(--border);">
            <img src="https://placehold.co/60x60?text=🌿" alt="Product" class="img-fluid" style="max-width: 50px; max-height: 50px; object-fit: contain;" />
          </div>
        </div>
        <div class="flex-grow-1">
          <h6 class="fw-semibold mb-1" style="color: var(--primary); font-size: 1rem;">${item.name}</h6>
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center text-muted">
              <i class="fas fa-cube me-1" style="color: var(--primary); font-size: 0.8rem;"></i>
              <small>${item.quantity} x ${formatVND(item.price)}</small>
            </div>
            <div class="fw-bold text-end" style="color: var(--primary); font-size: 1.1rem;">${formatVND(itemTotal)}</div>
          </div>
        </div>
      </div>`;
  }).join('');

  // Cập nhật tổng tiền
  document.getElementById('subtotalAmount').textContent = formatVND(subtotal);
  document.getElementById('totalAmount').textContent = formatVND(subtotal + 30000);
}

document.getElementById("backToCartBtn")?.addEventListener("click", function () {
    window.location.href = "/AreasCart/Cart/giohang";
});

document.getElementById("backToCartFromSuccessBtn")?.addEventListener("click", function () {
    window.location.href = "/AreasCart/Product/sanpham";
});

function showAlertModal(title, message, icon = 'fas fa-exclamation-circle') {
    document.getElementById('alertModalTitle').textContent = title;
    document.getElementById('alertModalMessage').textContent = message;
    document.getElementById('alertModalIcon').className = icon;
    document.getElementById('alertModal').classList.remove('d-none');
    document.getElementById('alertModal').classList.add('d-flex');
}

// Đóng modal
document.getElementById('alertModalClose').addEventListener('click', closeAlertModal);
document.getElementById('alertModalOk').addEventListener('click', closeAlertModal);

function closeAlertModal() {
    document.getElementById('alertModal').classList.remove('d-flex');
    document.getElementById('alertModal').classList.add('d-none');
}

function showAlertModal(title, message, icon = 'fas fa-exclamation-circle', autoClose = false) {
    document.getElementById('alertModalTitle').textContent = title;
    document.getElementById('alertModalMessage').textContent = message;
    document.getElementById('alertModalIcon').className = icon;

    const footer = document.querySelector('#alertModal .modal-footer');
    const closeBtn = document.getElementById('alertModalClose');

    if (autoClose) {
        footer.style.display = 'none';      // Ẩn footer
        closeBtn.style.display = 'none';    // Ẩn nút X
        setTimeout(() => {
            closeAlertModal();
        }, 2000);
    } else {
        footer.style.display = 'flex';      // Hiện footer
        closeBtn.style.display = '';        // Hiện nút X
    }

    document.getElementById('alertModal').classList.remove('d-none');
    document.getElementById('alertModal').classList.add('d-flex');
}

function closeAlertModal() {
    document.getElementById('alertModal').classList.remove('d-flex');
    document.getElementById('alertModal').classList.add('d-none');
}

document.getElementById('alertModalClose').addEventListener('click', closeAlertModal);
document.getElementById('alertModalOk').addEventListener('click', closeAlertModal);
