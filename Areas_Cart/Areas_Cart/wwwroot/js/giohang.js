function formatVND(n) {
      return n.toLocaleString('vi-VN') + ' ₫';
    }

    function getCart() {
      return JSON.parse(localStorage.getItem('cart')) || [];
    }

    function setCart(cart) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    function getSelected() {
      return JSON.parse(localStorage.getItem('cartSelected')) || [];
    }

    function setSelected(selected) {
      localStorage.setItem('cartSelected', JSON.stringify(selected));
    }

    function renderCart() {
      const cart = getCart();
      const selected = getSelected();
      const cartBody = document.getElementById('cartBody');
      const cartTitle = document.getElementById('cartTitle');
      const btnSelectAll = document.getElementById('btnSelectAll');
      let subtotal = 0;
      // Đếm số sản phẩm (không tính số lượng), chỉ đếm sản phẩm được chọn
      let totalItems = cart.length;
      let selectedCount = selected.length;
      
      if (cart.length === 0) {
        cartTitle.textContent = "Giỏ hàng trống";
        cartBody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#888; font-size:16px;">Không có sản phẩm nào trong giỏ hàng.</td></tr>`;
        document.getElementById('subtotal').textContent = formatVND(0);
        document.getElementById('total').textContent = formatVND(0);
        document.getElementById('btnSelectAll').style.display = 'none';
        document.getElementById('btnDeleteAll').style.display = 'none';
        return;
      }
      
      document.getElementById('btnSelectAll').style.display = '';
      cartTitle.textContent = `Giỏ hàng (${totalItems} sản phẩm) - Đã chọn (${selectedCount} sản phẩm)`;
      
      // Cập nhật text của nút Select All
      if (selected.length === cart.length) {
        btnSelectAll.textContent = "Bỏ chọn tất cả";
        btnSelectAll.className = "btn btn-sm btn-outline-secondary";
      } else {
        btnSelectAll.textContent = "Chọn tất cả";
        btnSelectAll.className = "btn btn-sm btn-outline-primary";
      }
      
      cartBody.innerHTML = cart.map((item, idx) => {
        const attrsHtml = Object.keys(item.attrs || {}).map(key =>
          `<div style="font-size:13px;color:#555;"><strong>${key}:</strong> ${item.attrs[key]}</div>`
        ).join('');
        const checked = selected.includes(idx) ? 'checked' : '';
        const itemTotal = item.price * item.quantity;
        if (selected.includes(idx)) subtotal += itemTotal;
        return `
          <tr>
            <td style="padding-left: 15px;">
              <input type="checkbox" class="select-item" data-idx="${idx}" ${checked} />
            </td>
            <td>
             <div class="d-flex align-items-start" style="padding-left: 25px;">
                <img src="https://placehold.co/70x70" alt="${item.name}" class="product-img" />
                <div class="product-info">
                  <strong>${item.name}</strong>
                  ${attrsHtml}
                </div>
              </div>
            </td>
            <td>
              <span class="price-current" data-price="${item.price}">${formatVND(item.price)}</span>
            </td>
            <td>
              <div class="quantity-wrapper">
                <input type="number" class="quantity-input" min="1" max="99" value="${item.quantity}" aria-label="Số lượng ${item.name}" data-idx="${idx}" readonly />
                <div class="quantity-arrows">
                  <button type="button" class="quantity-arrow quantity-up" data-idx="${idx}"></button>
                  <button type="button" class="quantity-arrow quantity-down" data-idx="${idx}"></button>
                </div>
              </div>
            </td>
            <td class="price-current" data-price="${item.price}">${formatVND(itemTotal)}</td>
            <td>
                <button class="btn-delete" data-idx="${idx}" aria-label="Xóa sản phẩm">
                  <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        `;
      }).join('');
      
      document.getElementById('subtotal').textContent = formatVND(subtotal);
      document.getElementById('total').textContent = formatVND(subtotal);

      // Hiện nút "Xóa tất cả" nếu đã chọn tất cả
      const btnDeleteAll = document.getElementById('btnDeleteAll');
      if (selected.length === cart.length && cart.length > 0) {
        btnDeleteAll.style.display = '';
      } else {
        btnDeleteAll.style.display = 'none';
      }
    }

    function updateCart() {
      const cart = getCart();
      let rows = document.querySelectorAll('#cartBody tr');
      let subtotal = 0;
      const selected = getSelected();

      rows.forEach((row, idx) => {
        const priceCell = row.querySelector('span.price-current[data-price]');
        const qtyInput = row.querySelector('.quantity-input');
        const totalCell = row.cells[4];

        if (!priceCell || !qtyInput || !totalCell) return;

        let price = parseInt(priceCell.getAttribute('data-price'), 10);
        let qty = parseInt(qtyInput.value, 10);

        if (isNaN(qty) || qty < 1) qty = 1;
        if (qty > 99) qty = 99;

        qtyInput.value = qty;

        let itemTotal = price * qty;
        totalCell.textContent = formatVND(itemTotal);

        // Cập nhật số lượng trong localStorage
        cart[idx].quantity = qty;

        if (selected.includes(idx)) subtotal += itemTotal;
      });

      setCart(cart);
      renderCart();
      bindQuantityInputs();
      bindDeleteButtons();
      bindSelectItems();
    }

    function bindQuantityInputs() {
      document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('input', updateCart);
        input.addEventListener('change', updateCart);
      });
      
      // Bind quantity arrow buttons
      document.querySelectorAll('.quantity-up').forEach(btn => {
        btn.addEventListener('click', function() {
          const idx = parseInt(btn.getAttribute('data-idx'), 10);
          const input = document.querySelector(`.quantity-input[data-idx="${idx}"]`);
          let qty = parseInt(input.value, 10);
          if (qty < 99) {
            input.value = qty + 1;
            updateCart();
          }
        });
      });
      
      document.querySelectorAll('.quantity-down').forEach(btn => {
        btn.addEventListener('click', function() {
          const idx = parseInt(btn.getAttribute('data-idx'), 10);
          const input = document.querySelector(`.quantity-input[data-idx="${idx}"]`);
          let qty = parseInt(input.value, 10);
          if (qty > 1) {
            input.value = qty - 1;
            updateCart();
          }
        });
      });
    }

    function bindDeleteButtons() {
      document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', function () {
          const idx = parseInt(btn.getAttribute('data-idx'), 10);
          let cart = getCart();
          let selected = getSelected();
          cart.splice(idx, 1);
          selected = selected.filter(i => i !== idx).map(i => i > idx ? i - 1 : i);
          setCart(cart);
          setSelected(selected);
          renderCart();
          bindQuantityInputs();
          bindDeleteButtons();
          bindSelectItems();
        });
      });
    }

    function bindSelectItems() {
      document.querySelectorAll('.select-item').forEach(chk => {
        chk.addEventListener('change', function () {
          const idx = parseInt(chk.getAttribute('data-idx'), 10);
          let selected = getSelected();
          if (chk.checked) {
            if (!selected.includes(idx)) selected.push(idx);
          } else {
            selected = selected.filter(i => i !== idx);
          }
          setSelected(selected);
          
          // Cập nhật ngay lập tức text của nút khi user click checkbox
          const cart = getCart();
          const btnSelectAll = document.getElementById('btnSelectAll');
          if (selected.length === cart.length) {
            btnSelectAll.textContent = "Bỏ chọn tất cả";
            btnSelectAll.className = "btn btn-sm btn-outline-secondary";
          } else {
            btnSelectAll.textContent = "Chọn tất cả";
            btnSelectAll.className = "btn btn-sm btn-outline-primary";
          }
          
          renderCart();
          bindQuantityInputs();
          bindDeleteButtons();
          bindSelectItems();
        });
      });
    }

    function bindSelectAll() {
      const btnSelectAll = document.getElementById('btnSelectAll');
      btnSelectAll.addEventListener('click', function () {
        const cart = getCart();
        const selected = getSelected();
        if (cart.length === 0) return;
        // Nếu đã chọn tất cả thì bỏ chọn, ngược lại thì chọn tất cả
        if (selected.length === cart.length) {
          setSelected([]);
        } else {
          setSelected(cart.map((_, idx) => idx));
        }
        renderCart();
        bindQuantityInputs();
        bindDeleteButtons();
        bindSelectItems();
      });
    }

    function bindDeleteAll() {
      const btnDeleteAll = document.getElementById('btnDeleteAll');
      btnDeleteAll.addEventListener('click', function () {
        setCart([]);
        setSelected([]);
        renderCart();
        bindQuantityInputs();
        bindDeleteButtons();
        bindSelectItems();
      });
    }

    function bindCheckoutButton() {
      const btnCheckout = document.getElementById('btnCheckout');
      if (btnCheckout) {
        btnCheckout.addEventListener('click', function () {
          const cart = getCart();
          const selected = getSelected();
          
          if (cart.length === 0) {
            // Hiện modal thông báo giỏ hàng trống
            const modal = new bootstrap.Modal(document.getElementById('emptyCartModal'));
            modal.show();
            return;
          }
          
          if (selected.length === 0) {
            // Hiện modal thông báo chưa chọn sản phẩm
            const modal = new bootstrap.Modal(document.getElementById('noSelectedModal'));
            modal.show();
            return;
          }
          
          // Lưu thông tin sản phẩm đã chọn để thanh toán
          const selectedItems = cart.filter((_, idx) => selected.includes(idx));
          localStorage.setItem('orderItems', JSON.stringify(selectedItems));
          
          // Chuyển đến trang thanh toán
          window.location.href = '/AreasCart/Pay/thanhtoan';
        });
      }
    }

    function bindContinueShopping() {
      const btnContinue = document.getElementById('btnContinueShopping');
      if (btnContinue) {
        btnContinue.addEventListener('click', function (e) {
          e.preventDefault();
          window.location.href = '/AreasCart/Product/sanpham';
        });
      }
    }

    // Thêm hàm cleanup backdrop
    function removeBackdrop() {
      const backdrops = document.querySelectorAll('.modal-backdrop');
      backdrops.forEach(backdrop => {
        backdrop.remove();
      });
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    // Thêm hàm setup modal events - chỉ cleanup backdrop, không ảnh hưởng chức năng khác
    function setupModalEvents() {
      // Event cho empty cart modal
      const emptyCartModal = document.getElementById('emptyCartModal');
      if (emptyCartModal) {
        emptyCartModal.addEventListener('hidden.bs.modal', function () {
          setTimeout(removeBackdrop, 100); // Delay nhỏ để đảm bảo modal đã đóng hoàn toàn
        });
      }

      // Event cho no selected modal
      const noSelectedModal = document.getElementById('noSelectedModal');
      if (noSelectedModal) {
        noSelectedModal.addEventListener('hidden.bs.modal', function () {
          setTimeout(removeBackdrop, 100);
        });
      }

      // Event cho order success modal
      const orderSuccessModal = document.getElementById('orderSuccessModal');
      if (orderSuccessModal) {
        orderSuccessModal.addEventListener('hidden.bs.modal', function () {
          setTimeout(removeBackdrop, 100);
        });
      }
    }

    document.addEventListener('DOMContentLoaded', function () {
      // Nếu chưa có selected thì mặc định chọn tất cả
      if (getSelected().length === 0 && getCart().length > 0) {
        setSelected(getCart().map((_, idx) => idx));
      }
      renderCart();
      bindQuantityInputs();
      bindDeleteButtons();
      bindSelectItems();
      bindCheckoutButton();
      bindContinueShopping();
      bindSelectAll();
      bindDeleteAll();
      setupModalEvents();
    });



