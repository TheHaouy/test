const modal = document.getElementById('productModal');
    const customFields = document.getElementById('customFields');
    let currentProduct = null;
    let currentCategory = null;

    const attributeMap = {
      'Serum': {
        'Dung tích': ['15ml', '30ml', '50ml'],
        'Loại da': ['Da dầu', 'Da khô', 'Da hỗn hợp', 'Da nhạy cảm']
      },
      'Sữa rửa mặt': {
        'Dung tích': ['100ml', '150ml', '200ml'],
        'Mùi hương': ['Có mùi', 'Không mùi']
      },
      'Kem dưỡng': {
        'Dung tích': ['30ml', '50ml', '100ml'],
        'Loại da phù hợp': ['Da khô', 'Da dầu', 'Da nhạy cảm']
      },
      'Tẩy tế bào chết': {
        'Dung tích': ['30ml', '50ml', '100ml'],
        'Loại da phù hợp': ['Da khô', 'Da dầu', 'Da nhạy cảm']
      },
      'Kem chống nắng': {
        'Dung tích': ['30ml', '50ml', '70ml'],
        'Loại da phù hợp': ['Da khô', 'Da dầu', 'Da nhạy cảm']
      },
      'Son': {
        'Mã màu': ['Đỏ cam', 'Hồng đất', 'Cam cháy', 'Đỏ ruby']
      }
    };

    function openModal(category, productName = null) {
      customFields.innerHTML = '';
      currentCategory = category;
      currentProduct = productName;
      const attrs = attributeMap[category] || {};
      for (let label in attrs) {
        const select = document.createElement('select');
        select.className = 'form-select mb-2';
        attrs[label].forEach(option => {
          const opt = document.createElement('option');
          opt.value = opt.textContent = option;
          select.appendChild(opt);
        });
        const labelEl = document.createElement('label');
        labelEl.textContent = label;
        labelEl.className = 'form-label mt-2';
        customFields.appendChild(labelEl);
        customFields.appendChild(select);
      }
      // Hiển thị modal Bootstrap
      const bsModal = new bootstrap.Modal(document.getElementById('productModal'));
      bsModal.show();
    }

    function closeModal() {
      const bsModal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
      if (bsModal) bsModal.hide();
    }

    function openCart() {
      window.location.href = '/AreasCart/Cart/giohang';
    }

    const products = {
      'Tất cả': [],
      'Serum': [
        'The Ordinary Niacinamide 10% + Zinc 1%',
        "Paula's Choice C15 Super Booster",
        'La Roche-Posay Hyalu B5 Serum',
        'Vichy Mineral 89',
        'Timeless Vitamin C + E Ferulic Acid',
        'Kiehl’s Clearly Corrective Dark Spot Solution',
        'Some By Mi AHA-BHA-PHA 30 Days Miracle Serum',
        'Estee Lauder Advanced Night Repair',
        'Innisfree Green Tea Seed Serum',
        'Skinceuticals C E Ferulic',
        "L'Oréal Revitalift 1.5% Pure Hyaluronic Acid Serum",
        'Benton Snail Bee Ultimate Serum'
      ],
      'Sữa rửa mặt': [
        'Cetaphil Gentle Skin Cleanser',
        'La Roche-Posay Effaclar Purifying Foaming Gel',
        'Senka Perfect Whip',
        'Simple Kind to Skin Refreshing Facial Wash',
        'Neutrogena Hydro Boost Cleanser',
        'Cosrx Low pH Good Morning Gel Cleanser',
        'CeraVe Foaming Facial Cleanser',
        'Innisfree Green Tea Foam Cleanser',
        'Hada Labo Gokujyun Hyaluronic Acid Cleanser',
        'Vichy Normaderm Phytosolution Gel',
        "Kiehl's Calendula Deep Cleansing Foaming Face Wash", 
        'Eucerin ProACNE Solution Cleansing Gel'
      ],
      'Kem dưỡng': [
        'CeraVe Moisturizing Cream',
        'Neutrogena Hydro Boost Water Gel',
        'La Roche-Posay Toleriane Sensitive',
        'Kiehl’s Ultra Facial Cream',
        'Vichy Aqualia Thermal Light Cream',
        'Avene Hydrance Aqua-Gel',
        'Hada Labo Advanced Nourish Cream',
        "Paula's Choice Omega+ Complex Moisturizer",
        'Bioderma Atoderm Crème',
        'Innisfree Jeju Cherry Blossom Jelly Cream',
        'Laneige Water Bank Cream',
        'The Ordinary Natural Moisturizing Factors + HA'
      ],
      'Tẩy tế bào chết': [
        "Paula's Choice Skin Perfecting 2% BHA Liquid",
        'The Ordinary AHA 30% + BHA 2% Peeling Solution',
        'Some By Mi AHA-BHA-PHA 30 Days Miracle Toner',
        'Cosrx BHA Blackhead Power Liquid',
        'Neutrogena Deep Clean Gentle Scrub',
        'St. Ives Fresh Skin Apricot Scrub',
        'L’Oreal Revitalift Bright Reveal Peel Pads',
        'Sukin Revitalising Facial Scrub',
        'The Body Shop Tea Tree Squeaky-Clean Scrub',
        'Dermalogica Daily Microfoliant',
        'Innisfree Jeju Volcanic Pore Scrub Foam',
        'Benton PHA Peeling Gel'
      ],
      'Kem chống nắng': [
        'Anessa Perfect UV Sunscreen Skincare Milk',
        'La Roche-Posay Anthelios SPF 50+',
        'Biore UV Aqua Rich Watery Essence',
        'Vichy Ideal Soleil SPF 50',
        'Avene Very High Protection SPF 50+',
        'Innisfree Intensive Triple Care Sunscreen',
        'Neutrogena Ultra Sheer Dry-Touch SPF 50',
        'The Saem Eco Earth Power Pink Sun Cream',
        'Sunplay Skin Aqua Tone Up UV Essence',
        'Some By Mi Truecica Mineral 100 Calming Suncream',
        'Skin1004 Madagascar Centella Air-Fit Suncream',
        'Eucerin Sun Gel-Cream Oil Control SPF 50+'
      ],
      'Son': [
        '3CE Velvet Lip Tint',
        'MAC Retro Matte Lipstick - Ruby Woo',
        'Black Rouge Air Fit Velvet Tint Version A12',
        'Maybelline SuperStay Matte Ink',
        'Romand Zero Velvet Tint',
        'Chanel Rouge Allure Ink Fusion',
        'YSL Rouge Pur Couture',
        "L'Oreal Rouge Signature Matte Ink",
        "ColourPop Lippie Stix",
        'Dior Rouge Dior Lipstick',
        'Bbia Last Velvet Lip Tint',
        'Merzy The First Velvet Tint'
      ]
    };

    const productPrices = {};
    Object.keys(products).forEach(category => {
      products[category].forEach(name => {
        if (!productPrices[name]) {
          productPrices[name] = Math.floor(Math.random() * 600000 + 200000);
        }
      });
    });

    products['Tất cả'] = Object.values(products).flat();

    const productGrid = () => document.querySelector('.product-grid');

    // Sử dụng Bootstrap cho nút lọc danh mục
    function renderCategoryButtons() {
      const container = document.querySelector(".filters");
      container.innerHTML = Object.keys(products).map((category, idx) => `
        <button type="button" class="btn btn-outline-success fw-bold px-3 py-2${idx === 0 ? ' active' : ''}" 
          onclick="displayProducts(products['${category}'], '${category}'); setActiveCategory(this)">
          ${category}
        </button>
      `).join('');
    }
    window.setActiveCategory = function(btn) {
      document.querySelectorAll('.filters .btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    };

    // Card sản phẩm đẹp mắt
    function displayProducts(list, category = '') {
      productGrid().innerHTML = list.map(name => {
        const price = productPrices[name].toLocaleString('vi-VN') + 'đ';
        return `
          <div>
            <div class="product-card position-relative" onclick="openModal('${category}', '${name}')"
              style="transition:all .3s;cursor:pointer;" title="${name}">
              <div class="card-body d-flex flex-column align-items-center justify-content-center">
                <div class="product-image-placeholder mb-3 d-flex align-items-center justify-content-center"
                  style="width:110px;height:110px;background:linear-gradient(135deg, #c8e6c9, #e8f5e8);border-radius:16px;border:2px solid #4caf50;box-shadow:0 4px 12px rgba(46,125,50,0.15);transition:all .3s;">
                  <img src="https://placehold.co/90x90?text=🌿" alt="${name}" style="width:90px;height:90px;object-fit:contain;border-radius:12px;">
                </div>
                <h5 class="card-title product-title fw-bold text-success text-center mb-2"
                    style="font-size:1.1rem;max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#2e7d32 !important;"
                    title="${name}">
                  ${name}
                </h5>
                <div class="product-price fw-bold mb-2" style="font-size:1.15rem;color:#4caf50;">${price}</div>
                <button class="btn btn-outline-success rounded-pill px-3 mt-auto" style="pointer-events:none;font-weight:600;">
                  <i class="bi bi-cart-plus"></i> Chọn mua
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    // Thêm sản phẩm vào localStorage
    function addToCart() {
      if (!currentProduct) return;
      const quantity = parseInt(document.getElementById('quantity').value, 10) || 1;
      const attrs = {};
      Array.from(customFields.querySelectorAll('label')).forEach((labelEl, idx) => {
        const select = customFields.querySelectorAll('select')[idx];
        if (select) attrs[labelEl.textContent] = select.value;
      });
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      // Kiểm tra sản phẩm đã có chưa (cùng tên và thuộc tính)
      const existingIdx = cart.findIndex(item =>
        item.name === currentProduct &&
        JSON.stringify(item.attrs) === JSON.stringify(attrs)
      );
      if (existingIdx > -1) {
        cart[existingIdx].quantity += quantity;
      } else {
        cart.push({
          name: currentProduct,
          category: currentCategory,
          price: productPrices[currentProduct],
          quantity,
          attrs
        });
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      closeModal();
    }

    document.getElementById('btnAddToCart').onclick = addToCart;

    window.onload = () => {
      renderCategoryButtons();
      displayProducts(products['Tất cả'], 'Tất cả');
    };