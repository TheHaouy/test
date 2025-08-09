// Dữ liệu sản phẩm mẫu
const productData = {
    '1': {
        title: 'Kem dưỡng ẩm thiên nhiên',
        badge: 'Best Seller',
        rating: '⭐⭐⭐⭐⭐',
        ratingCount: '4.8 (125 Đánh Giá)',
        currentPrice: '350.000₫',
        originalPrice: '450.000₫',
        categoryName: 'Chăm sóc da',
        brand: 'LittleFish Beauty',
        expiry: '24 tháng',
        origin: 'Việt Nam',
        ingredients: 'Chiết xuất lô hội, vitamin E, dầu jojoba, glycerin, nước tinh khiết',
        usage: 'Sử dụng hàng ngày sau khi làm sạch da. Massage nhẹ nhàng cho đến khi kem thấm hoàn toàn.',
        description: 'Kem dưỡng ẩm từ thiên nhiên với chiết xuất lô hội và vitamin E, giúp cung cấp độ ẩm tối ưu cho da, làm da mềm mại và khỏe mạnh.',
        image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'skincare',
        options: {
            size: ['50ml', '100ml', '150ml'],
            type: ['Da thường', 'Da khô', 'Da nhạy cảm']
        }
    },
    '2': {
        title: 'Son môi organic',
        badge: 'Mới',
        rating: '⭐⭐⭐⭐☆',
        ratingCount: '4.6 (89 Đánh Giá)',
        currentPrice: '280.000₫',
        originalPrice: '',
        categoryName: 'Trang điểm',
        brand: 'LittleFish Beauty',
        expiry: '18 tháng',
        origin: 'Việt Nam',
        ingredients: 'Sáp ong, dầu dừa, vitamin E, màu tự nhiên từ hoa quả',
        usage: 'Thoa đều lên môi. Có thể sử dụng nhiều lần trong ngày.',
        description: 'Son môi từ thành phần hữu cơ 100%, không chứa chất bảo quản có hại, giúp môi mềm mịn và có màu sắc tự nhiên.',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'makeup',
        options: {
            color: ['Đỏ tự nhiên', 'Hồng nhạt', 'Cam đất', 'Không màu'],
            finish: ['Matte', 'Glossy']
        }
    },
    '3': {
        title: 'Serum vitamin C',
        badge: 'Phổ biến',
        rating: '⭐⭐⭐⭐☆',
        ratingCount: '4.4 (76 Đánh Giá)',
        currentPrice: '420.000₫',
        originalPrice: '520.000₫',
        categoryName: 'Chăm sóc da',
        brand: 'LittleFish Beauty',
        expiry: '12 tháng',
        origin: 'Việt Nam',
        ingredients: 'Vitamin C, acid hyaluronic, niacinamide, nước tinh khiết',
        usage: 'Sử dụng vào buổi sáng sau bước làm sạch da. Thoa đều và massage nhẹ.',
        description: 'Serum dưỡng trắng từ vitamin C tự nhiên, giúp da sáng mịn, đều màu và chống lão hóa hiệu quả.',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'skincare',
        options: {
            concentration: ['10%', '15%', '20%'],
            size: ['30ml', '50ml']
        }
    },
    '4': {
        title: 'Kem chống nắng SPF 50',
        badge: 'Best Seller',
        rating: '⭐⭐⭐⭐⭐',
        ratingCount: '4.9 (152 Đánh Giá)',
        currentPrice: '320.000₫',
        originalPrice: '',
        categoryName: 'Chống nắng',
        brand: 'LittleFish Beauty',
        expiry: '24 tháng',
        origin: 'Việt Nam',
        ingredients: 'Zinc oxide, titanium dioxide, dầu dừa, vitamin E',
        usage: 'Thoa đều lên da 15-20 phút trước khi ra ngoài. Thoa lại mỗi 2-3 tiếng.',
        description: 'Kem chống nắng vật lý an toàn cho da, không gây bết dính, bảo vệ da khỏi tia UV có hại.',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'suncare',
        options: {
            spf: ['SPF 30', 'SPF 50'],
            size: ['50ml', '100ml']
        }
    },
    '5': {
        title: 'Tinh dầu trà tràm',
        badge: 'Organic',
        rating: '⭐⭐⭐⭐☆',
        ratingCount: '4.3 (43 Đánh Giá)',
        currentPrice: '180.000₫',
        originalPrice: '220.000₫',
        categoryName: 'Tinh dầu',
        brand: 'LittleFish Beauty',
        expiry: '36 tháng',
        origin: 'Việt Nam',
        ingredients: 'Tinh dầu trà tràm nguyên chất 100%',
        usage: 'Pha loãng với dầu nền trước khi sử dụng. Có thể dùng để xông hơi hoặc thoa lên da.',
        description: 'Tinh dầu trà tràm nguyên chất, kháng khuẩn và làm dịu da, hiệu quả trong việc điều trị mụn.',
        image: 'https://images.unsplash.com/photo-1594736797933-d0a9ba3a5db7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'essential-oils',
        options: {
            size: ['10ml', '20ml', '30ml'],
            purity: ['100% nguyên chất']
        }
    },
    '6': {
        title: 'Mặt nạ đất sét',
        badge: 'Mới',
        rating: '⭐⭐⭐⭐☆',
        ratingCount: '4.2 (67 Đánh Giá)',
        currentPrice: '250.000₫',
        originalPrice: '',
        categoryName: 'Chăm sóc da',
        brand: 'LittleFish Beauty',
        expiry: '18 tháng',
        origin: 'Việt Nam',
        ingredients: 'Đất sét bentonite, than hoạt tính, chiết xuất trà xanh',
        usage: 'Thoa đều lên mặt đã làm sạch, tránh vùng mắt. Để khô 10-15 phút rồi rửa sạch.',
        description: 'Mặt nạ đất sét tự nhiên, làm sạch sâu và se khít lỗ chân lông, phù hợp cho da dầu và da hỗn hợp.',
        image: 'https://images.unsplash.com/photo-1573461160327-b8d0cedbb19a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'skincare',
        options: {
            type: ['Da dầu', 'Da hỗn hợp'],
            size: ['50g', '100g']
        }
    }
};

// Lấy ID sản phẩm từ URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || '1';
}

// Load thông tin sản phẩm
function loadProductInfo() {
    const productId = getProductIdFromURL();
    
    // TODO: Replace with actual API call
    // const product = await fetchProductById(productId);
    const product = productData[productId];
    
    if (product) {
        // Update DOM elements with product data
        document.getElementById('productTitle').textContent = product.title;
        document.getElementById('breadcrumbProduct').textContent = product.title;
        document.getElementById('productRating').textContent = product.rating;
        document.getElementById('productRatingCount').textContent = product.ratingCount;
        document.getElementById('productCurrentPrice').textContent = product.currentPrice;
        document.getElementById('productCategory').textContent = product.categoryName;
        document.getElementById('productBrand').textContent = product.brand;
        document.getElementById('productExpiry').textContent = product.expiry;
        document.getElementById('productOrigin').textContent = product.origin;
        document.getElementById('productIngredients').textContent = product.ingredients;
        document.getElementById('productUsage').textContent = product.usage;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('mainImage').src = product.image;
        
        // Load product options
        loadProductOptions(product.options);
        
        // Load suggested products
        loadSuggestedProducts(product.category, productId);
        
        // Update page title
        document.title = product.title + ' - LittleFish Beauty Mỹ Phẩm Thiên Nhiên';
    } else {
        // TODO: Handle product not found case
        console.log('Product not found');
        // Redirect to 404 page or show error message
    }
}

// Load tùy chọn sản phẩm
function loadProductOptions(options) {
    const optionsContainer = document.getElementById('productOptions');
    optionsContainer.innerHTML = '';
    
    if (!options) return;
    
    Object.keys(options).forEach(optionName => {
        const optionGroup = document.createElement('div');
        optionGroup.className = 'option-group';
        
        const optionLabel = document.createElement('label');
        optionLabel.className = 'option-label';
        optionLabel.textContent = optionName + ':';
        
        const optionItems = document.createElement('div');
        optionItems.className = 'option-items';
        
        options[optionName].forEach((value, index) => {
            const optionItem = document.createElement('div');
            optionItem.className = 'option-item' + (index === 0 ? ' active' : '');
            optionItem.textContent = value;
            optionItem.onclick = () => selectOption(optionItem, optionName);
            optionItems.appendChild(optionItem);
        });
        
        optionGroup.appendChild(optionLabel);
        optionGroup.appendChild(optionItems);
        optionsContainer.appendChild(optionGroup);
    });
}

// Chọn tùy chọn sản phẩm
function selectOption(selectedItem, optionName) {
    const optionItems = selectedItem.parentNode.querySelectorAll('.option-item');
    optionItems.forEach(item => item.classList.remove('active'));
    selectedItem.classList.add('active');
    
    // TODO: Update price or product variant based on selection
    console.log(`Selected ${optionName}: ${selectedItem.textContent}`);
}

// Load sản phẩm gợi ý
function loadSuggestedProducts(category, currentProductId) {
    const suggestedContainer = document.getElementById('suggestedProductsGrid');
    suggestedContainer.innerHTML = '';
    
    // TODO: Replace with actual API call
    // const suggestedProducts = await fetchSuggestedProducts(category, currentProductId);
    
    // For now, show placeholder
    console.log(`Loading suggested products for category: ${category}`);
    
    // Placeholder for suggested products
    for (let i = 0; i < 4; i++) {
        const productCard = document.createElement('div');
        productCard.className = 'suggested-product-card';
        productCard.innerHTML = `
            <div style="width: 100%; height: 200px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; color: #666;">
                Sản phẩm gợi ý ${i + 1}
            </div>
            <div class="suggested-product-info">
                <h3 class="suggested-product-title">Tên sản phẩm sẽ được tải từ API</h3>
                <div class="suggested-product-price">0₫</div>
                <div class="suggested-product-rating">
                    <span class="suggested-rating-stars">⭐⭐⭐⭐⭐</span>
                    <span>0</span>
                </div>
            </div>
        `;
        
        productCard.onclick = () => {
            // TODO: Navigate to actual product
            console.log(`Navigate to suggested product ${i + 1}`);
        };
        
        suggestedContainer.appendChild(productCard);
    }
}

// Thay đổi hình ảnh chính
function changeMainImage(src) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = src;
    }
    
    // Cập nhật thumbnail active
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.src === src) {
            thumb.classList.add('active');
        }
    });
}

// Điều khiển số lượng
function increaseQuantity() {
    const input = document.getElementById('productQuantity');
    if (input) {
        let value = parseInt(input.value);
        if (value < 99) {
            input.value = value + 1;
        }
    }
}

function decreaseQuantity() {
    const input = document.getElementById('productQuantity');
    if (input) {
        let value = parseInt(input.value);
        if (value > 1) {
            input.value = value - 1;
        }
    }
}

// Thêm vào giỏ hàng
function addToCart() {
    const quantityInput = document.getElementById('productQuantity');
    const productTitleElement = document.getElementById('productTitle');
    
    if (quantityInput && productTitleElement) {
        const quantity = quantityInput.value;
        const productTitle = productTitleElement.textContent;
        
        // TODO: Integrate with actual cart API
        // await addProductToCart(productId, quantity, selectedOptions);
        
        console.log(`Adding to cart: ${quantity} x ${productTitle}`);
        alert(`Đã thêm ${quantity} x "${productTitle}" vào giỏ hàng!`);
    }
}

// Mua ngay
function buyNow() {
    const quantityInput = document.getElementById('productQuantity');
    const productTitleElement = document.getElementById('productTitle');
    
    if (quantityInput && productTitleElement) {
        const quantity = quantityInput.value;
        const productTitle = productTitleElement.textContent;
        
        // TODO: Integrate with checkout process
        console.log(`Buy now: ${quantity} x ${productTitle}`);
        alert(`Mua ngay ${quantity} x "${productTitle}". Chuyển đến trang thanh toán...`);
    }
}

// Search functionality
// Quản lý lịch sử tìm kiếm
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

// Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchSuggestions = document.getElementById('searchSuggestions');
const searchFilters = document.getElementById('searchFilters');
const advancedSearchToggle = document.getElementById('advancedSearchToggle');
const priceSlider = document.getElementById('priceSlider');
const priceValue = document.getElementById('priceValue');

// Update price display when slider changes
if (priceSlider && priceValue) {
    priceSlider.addEventListener('input', function() {
        const value = parseInt(this.value);
        priceValue.textContent = value.toLocaleString('vi-VN') + '₫';
    });
}

// Hiển thị gợi ý tìm kiếm
function showSearchSuggestions(query = '') {
    if (!searchSuggestions) return;
    
    searchSuggestions.innerHTML = '';
    
    // Hiển thị lịch sử nếu không có query
    if (!query.trim()) {
        const historyDiv = document.createElement('div');
        historyDiv.className = 'search-history';
        historyDiv.innerHTML = `
            <div class="search-history-title">
                Tìm kiếm gần đây 
                <span class="clear-history" onclick="clearSearchHistory()">Xóa</span>
            </div>
            <div id="historyItemsInner"></div>
        `;
        searchSuggestions.appendChild(historyDiv);
        
        const historyItemsInner = document.getElementById('historyItemsInner');
        searchHistory.slice(-5).reverse().forEach(term => {
            const historyItem = document.createElement('span');
            historyItem.className = 'history-item';
            historyItem.textContent = term;
            historyItem.onclick = () => {
                if (searchInput) {
                    searchInput.value = term;
                    performSearch(term);
                    hideSearchSuggestions();
                }
            };
            historyItemsInner.appendChild(historyItem);
        });
    } else {
        // TODO: Integrate with real product search API
        // For now, show basic search functionality
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        suggestionItem.innerHTML = `
            <div><strong>Tìm kiếm: "${query}"</strong></div>
            <div class="suggestion-category">Nhấn Enter để tìm kiếm</div>
        `;
        suggestionItem.onclick = () => {
            performSearch(query);
            hideSearchSuggestions();
        };
        searchSuggestions.appendChild(suggestionItem);
    }
    
    searchSuggestions.style.display = 'block';
}

function hideSearchSuggestions() {
    if (searchSuggestions) {
        searchSuggestions.style.display = 'none';
    }
}

function getCategoryName(category) {
    const categoryNames = {
        'skincare': 'Chăm sóc da',
        'makeup': 'Trang điểm',
        'haircare': 'Dưỡng tóc',
        'suncare': 'Chống nắng',
        'essential-oils': 'Tinh dầu',
        'body-care': 'Chăm sóc cơ thể'
    };
    return categoryNames[category] || category;
}

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN').format(price) + ' VNĐ';
}

// Thực hiện tìm kiếm
function performSearch(query) {
    if (query.trim()) {
        // Lưu vào lịch sử
        if (!searchHistory.includes(query)) {
            searchHistory.push(query);
            if (searchHistory.length > 10) {
                searchHistory.shift();
            }
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        }
        
        // Redirect to products page with search query
        window.location.href = `sanpham.html?search=${encodeURIComponent(query)}`;
    }
    hideSearchSuggestions();
}

function filterByCategory(category) {
    window.location.href = `sanpham.html?category=${category}`;
}

function clearSearchHistory() {
    searchHistory = [];
    localStorage.removeItem('searchHistory');
    hideSearchSuggestions();
}

// Event listeners
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        showSearchSuggestions(query);
    });

    searchInput.addEventListener('focus', () => {
        showSearchSuggestions(searchInput.value);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
            hideSearchSuggestions();
        }
    });
}

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        if (searchInput) {
            performSearch(searchInput.value);
            hideSearchSuggestions();
        }
    });
}

// Toggle advanced search
if (advancedSearchToggle) {
    advancedSearchToggle.addEventListener('click', (e) => {
        e.preventDefault();
        if (searchFilters) {
            const isVisible = searchFilters.style.display === 'block';
            searchFilters.style.display = isVisible ? 'none' : 'block';
            hideSearchSuggestions();
        }
    });
}

// Apply filters
const applyFiltersBtn = document.getElementById('applyFilters');
if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', () => {
        const category = document.getElementById('categoryFilter')?.value;
        const maxPrice = document.getElementById('priceSlider')?.value;
        const sortBy = document.getElementById('sortBy')?.value;
        
        let url = 'sanpham.html?';
        if (category) url += `category=${category}&`;
        if (maxPrice && maxPrice < 500000) url += `maxPrice=${maxPrice}&`;
        if (sortBy && sortBy !== 'relevance') url += `sort=${sortBy}&`;
        
        window.location.href = url;
    });
}

// Dropdown menu trong navbar - chuyển trang ngay lập tức
document.querySelectorAll('.navbar .dropdown-item[data-category]').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const category = e.target.getAttribute('data-category');
        // Chuyển trang ngay lập tức
        window.location.href = `sanpham.html?category=${category}`;
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        hideSearchSuggestions();
        if (searchFilters) {
            searchFilters.style.display = 'none';
        }
    }
});

// Ngăn không cho suggestions bị ẩn khi click vào chính nó
if (searchSuggestions) {
    searchSuggestions.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Bootstrap dropdown support for categories
const categoryDropdown = document.getElementById('categoryDropdown');
if (categoryDropdown) {
    categoryDropdown.addEventListener('show.bs.dropdown', function() {
        hideSearchSuggestions();
        if (searchFilters) {
            searchFilters.style.display = 'none';
        }
    });
}

// Dữ liệu đánh giá mẫu
const reviewsData = [
    {
        id: 1,
        userName: 'Minh Anh',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        date: '2025-08-05',
        text: 'Sản phẩm rất tốt! Da tôi trở nên mềm mại và sáng khỏe hơn nhiều sau khi sử dụng. Mùi hương cũng rất dễ chịu, không gây kích ứng. Sẽ mua lại chắc chắn!',
        images: [
            'https://images.unsplash.com/photo-1556229010-e5ac1b9e5e47?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            'https://images.unsplash.com/photo-1585652757141-032b1374cf12?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
        ],
        helpful: 15,
        verified: true
    },
    {
        id: 2,
        userName: 'Thu Hương',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        date: '2025-08-03',
        text: 'Chất lượng tuyệt vời, hoàn toàn từ thiên nhiên. Không gây bết dính, thấm nhanh vào da. Shop gói hàng cẩn thận, giao hàng nhanh.',
        images: [
            'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
        ],
        helpful: 12,
        verified: true
    },
    {
        id: 3,
        userName: 'Phương Linh',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 4,
        date: '2025-08-01',
        text: 'Sản phẩm ổn, đúng như mô tả. Da tôi thuộc loại nhạy cảm nhưng dùng không bị kích ứng gì. Giá cả hợp lý. Sẽ theo dõi thêm các sản phẩm khác của shop.',
        images: [],
        helpful: 8,
        verified: true
    },
    {
        id: 4,
        userName: 'Hoàng Nam',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        date: '2025-07-30',
        text: 'Mua cho vợ, vợ dùng rất hài lòng. Da trở nên mịn màng hơn hẳn. Mùi hương nhẹ nhàng, không nồng như mấy loại kem khác.',
        images: [
            'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
        ],
        helpful: 22,
        verified: true
    },
    {
        id: 5,
        userName: 'Mai Chi',
        avatar: 'https://images.unsplash.com/photo-1502767089025-6572583495b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 4,
        date: '2025-07-28',
        text: 'Sản phẩm khá tốt, thấm vào da nhanh. Tuy nhiên mình thấy hội có hiệu quả nhưng không được nhanh lắm. Có thể do da mình khá khô.',
        images: [],
        helpful: 5,
        verified: false
    },
    {
        id: 6,
        userName: 'Quỳnh Anh',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        date: '2025-07-25',
        text: 'Đây là lần thứ 3 mình mua sản phẩm này. Chất lượng ổn định, da mình dùng từ khô chuyển thành da thường. Rất hài lòng với shop!',
        images: [
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
        ],
        helpful: 18,
        verified: true
    }
];

// Biến để quản lý đánh giá
let currentFilter = 'all';
let displayedReviews = 3;

// Tạo HTML cho đánh giá
function createReviewHTML(review) {
    const stars = '⭐'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    const formattedDate = new Date(review.date).toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: 'long', 
        day: 'numeric'
    });
    
    const imagesHTML = review.images.length > 0 ? `
        <div class="review-images">
            ${review.images.map(img => `
                <img src="${img}" alt="Review image" class="review-image" onclick="openImageModal('${img}')">
            `).join('')}
        </div>
    ` : '';

    const verifiedHTML = review.verified ? '<span class="verified-purchase">Đã mua hàng</span>' : '';

    return `
        <div class="review-item" data-rating="${review.rating}">
            <div class="review-header">
                <img src="${review.avatar}" alt="${review.userName}" class="reviewer-avatar">
                <div class="reviewer-info">
                    <div class="reviewer-name">${review.userName}</div>
                    <div class="review-date">${formattedDate}</div>
                </div>
                <div class="review-rating">
                    <div class="review-stars">${stars}</div>
                    ${verifiedHTML}
                </div>
            </div>
            <div class="review-content">
                <p class="review-text">${review.text}</p>
                ${imagesHTML}
            </div>
            <div class="review-actions">
                <div class="review-helpful" onclick="toggleHelpful(${review.id})">
                    <i class="far fa-thumbs-up"></i>
                    <span class="helpful-count">Hữu ích (${review.helpful})</span>
                </div>
            </div>
        </div>
    `;
}

// Hiển thị đánh giá
function displayReviews() {
    const reviewsList = document.getElementById('reviewsList');
    if (!reviewsList) return;

    let filteredReviews = reviewsData;
    
    // Lọc theo rating
    if (currentFilter !== 'all') {
        if (currentFilter === 'with-photos') {
            filteredReviews = reviewsData.filter(review => review.images.length > 0);
        } else {
            filteredReviews = reviewsData.filter(review => review.rating == currentFilter);
        }
    }

    // Hiển thị số lượng đánh giá theo filter
    const reviewsToShow = filteredReviews.slice(0, displayedReviews);
    reviewsList.innerHTML = reviewsToShow.map(createReviewHTML).join('');

    // Ẩn/hiện nút "Xem thêm"
    const loadMoreBtn = document.querySelector('.btn-load-more');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = displayedReviews >= filteredReviews.length ? 'none' : 'block';
    }
}

// Xử lý filter đánh giá
function setupReviewFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            currentFilter = this.getAttribute('data-filter');
            displayedReviews = 3; // Reset số lượng hiển thị
            displayReviews();
        });
    });
}

// Load thêm đánh giá
function loadMoreReviews() {
    displayedReviews += 3;
    displayReviews();
}

// Toggle helpful
function toggleHelpful(reviewId) {
    const review = reviewsData.find(r => r.id === reviewId);
    if (review) {
        review.helpful += 1;
        displayReviews();
    }
}

// Modal xem ảnh
function openImageModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Đóng modal khi click outside
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Load thông tin khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    loadProductInfo();
    displayReviews();
    setupReviewFilters();
});
