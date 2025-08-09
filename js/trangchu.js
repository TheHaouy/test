// Dữ liệu sản phẩm sẽ được tích hợp từ backend
const products = [
    {
        id: 1,
        name: 'Kem dưỡng ẩm thiên nhiên',
        category: 'skincare',
        price: 350000,
        soldCount: 1250,
        rating: 4.8,
        reviewCount: 125,
        image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        description: 'Kem dưỡng ẩm từ chiết xuất lô hội và vitamin E',
        createdAt: new Date('2025-01-01').getTime()
    },
    {
        id: 2,
        name: 'Son môi organic',
        category: 'makeup',
        price: 280000,
        soldCount: 890,
        rating: 4.6,
        reviewCount: 89,
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        description: 'Son môi từ thành phần hữu cơ 100%',
        createdAt: new Date('2025-08-06').getTime() // Sản phẩm mới (1 ngày trước)
    },
    {
        id: 3,
        name: 'Serum vitamin C',
        category: 'skincare',
        price: 420000,
        soldCount: 760,
        rating: 4.4,
        reviewCount: 76,
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        description: 'Serum dưỡng trắng từ vitamin C tự nhiên',
        createdAt: new Date('2025-02-15').getTime()
    },
    {
        id: 4,
        name: 'Kem chống nắng SPF 50',
        category: 'suncare',
        price: 320000,
        soldCount: 1520,
        rating: 4.9,
        reviewCount: 152,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        description: 'Kem chống nắng vật lý an toàn cho da',
        createdAt: new Date('2025-08-07').getTime() // Sản phẩm mới (hôm nay)
    },
    {
        id: 5,
        name: 'Tinh dầu trà tràm',
        category: 'essential-oils',
        price: 180000,
        soldCount: 430,
        rating: 4.3,
        reviewCount: 65,
        image: 'https://images.unsplash.com/photo-1594736797933-d0a9ba3a5db7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        description: 'Tinh dầu trà tràm thiên nhiên 100%',
        createdAt: new Date('2025-03-20').getTime()
    },
    {
        id: 6,
        name: 'Mặt nạ đất sét',
        category: 'skincare',
        price: 250000,
        soldCount: 680,
        rating: 4.2,
        reviewCount: 93,
        image: 'https://images.unsplash.com/photo-1556229174-f6451bc84cd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        description: 'Mặt nạ đất sét thanh lọc da sâu',
        createdAt: new Date('2025-01-10').getTime()
    },
    {
        id: 7,
        name: 'Dầu gội thảo dược',
        category: 'haircare',
        price: 195000,
        soldCount: 510,
        rating: 4.1,
        reviewCount: 78,
        image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        description: 'Dầu gội từ thảo dược tự nhiên',
        createdAt: new Date('2025-04-05').getTime()
    },
    {
        id: 8,
        name: 'Sữa rửa mặt tạo bọt',
        category: 'skincare',
        price: 180000,
        soldCount: 920,
        rating: 4.5,
        reviewCount: 134,
        image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        description: 'Sữa rửa mặt tạo bọt nhẹ nhàng',
        createdAt: new Date('2025-08-06').getTime() // Sản phẩm mới (1 ngày trước)
    }
];

// Dữ liệu đánh giá nổi bật - chỉ những đánh giá 5 sao
const featuredReviews = [
    {
        id: 1,
        userName: 'Minh Anh',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        date: '2025-08-05',
        text: 'Sản phẩm rất tốt! Da tôi trở nên mềm mại và sáng khỏe hơn nhiều sau khi sử dụng. Mùi hương cũng rất dễ chịu, không gây kích ứng.',
        productName: 'Kem dưỡng ẩm thiên nhiên',
        verified: true,
        helpful: 15
    },
    {
        id: 2,
        userName: 'Thu Hương',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        date: '2025-08-03',
        text: 'Chất lượng tuyệt vời, hoàn toàn từ thiên nhiên. Không gây bết dính, thấm nhanh vào da. Sẽ tiếp tục ủng hộ shop!',
        productName: 'Serum vitamin C',
        verified: true,
        helpful: 22
    },
    {
        id: 3,
        userName: 'Hoàng Nam',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        date: '2025-07-30',
        text: 'Mua cho vợ, vợ dùng rất hài lòng. Da trở nên mịn màng hơn hẳn. Mùi hương nhẹ nhàng, không nồng như mấy loại kem khác.',
        productName: 'Kem dưỡng ẩm thiên nhiên',
        verified: true,
        helpful: 18
    },
    {
        id: 4,
        userName: 'Quỳnh Anh',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        date: '2025-07-25',
        text: 'Đây là lần thứ 3 mình mua sản phẩm này. Chất lượng ổn định, hiệu quả rõ rệt. Rất hài lòng với shop!',
        productName: 'Kem chống nắng SPF 50',
        verified: true,
        helpful: 28
    },
    {
        id: 5,
        userName: 'Lan Phương',
        avatar: 'https://images.unsplash.com/photo-1502767089025-6572583495b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        date: '2025-08-01',
        text: 'Giao hàng nhanh, đóng gói cẩn thận. Sản phẩm đúng như mô tả, chất lượng tuyệt vời!',
        productName: 'Son môi organic',
        verified: true,
        helpful: 12
    },
    {
        id: 6,
        userName: 'Đức Minh',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        date: '2025-07-28',
        text: 'Shop tư vấn rất nhiệt tình. Sản phẩm chất lượng cao, giá cả hợp lý. Sẽ giới thiệu cho bạn bè!',
        productName: 'Kem chống nắng SPF 50',
        verified: true,
        helpful: 20
    },
    {
        id: 7,
        userName: 'Mai Thảo',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        date: '2025-08-06',
        text: 'Sản phẩm này thật sự thay đổi làn da của tôi! Sau 2 tuần sử dụng, da đã mềm mịn và sáng hơn hẳn.',
        productName: 'Sữa rửa mặt tạo bọt',
        verified: true,
        helpful: 31
    },
    {
        id: 8,
        userName: 'Văn Hùng',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5,
        date: '2025-08-04',
        text: 'Chất lượng cao, giá cả phải chăng. Đóng gói rất cẩn thận và giao hàng nhanh chóng. 5 sao!',
        productName: 'Dầu gội thảo dược',
        verified: true,
        helpful: 14
    }
];

// Hàm đếm sản phẩm theo danh mục
function countProductsByCategory(category) {
    return products.filter(product => product.category === category).length;
}

// Hàm cập nhật số lượng sản phẩm trong danh mục
function updateCategoryProductCounts() {
    const categoryCountElements = document.querySelectorAll('.category-count');
    const categoryMappings = {
        'skincare': 'Chăm sóc da',
        'makeup': 'Trang điểm', 
        'haircare': 'Dưỡng tóc',
        'suncare': 'Chống nắng',
        'essential-oils': 'Tinh dầu',
        'body-care': 'Chăm sóc cơ thể'
    };

    // Cập nhật từng danh mục
    Object.keys(categoryMappings).forEach(category => {
        const count = countProductsByCategory(category);
        const categoryCard = document.querySelector(`a[href*="category=${category}"]`);
        if (categoryCard) {
            const countElement = categoryCard.querySelector('.category-count');
            if (countElement) {
                countElement.textContent = `${count} sản phẩm`;
            }
        }
    });
}

// Hàm lấy sản phẩm bán chạy nhất (sắp xếp theo lượt bán)
function getBestSellingProducts() {
    return [...products].sort((a, b) => b.soldCount - a.soldCount);
}

// Hàm lấy sản phẩm mới trong 24h
function getNewProducts() {
    const now = new Date().getTime();
    const twentyFourHoursAgo = now - (24 * 60 * 60 * 1000);
    
    return products.filter(product => product.createdAt >= twentyFourHoursAgo);
}

// Hàm kiểm tra có sản phẩm mới không
function hasNewProducts() {
    return getNewProducts().length > 0;
}

// Hàm format giá tiền
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN').format(price) + '₫';
}

// Hàm tạo HTML cho một sản phẩm
function createProductHTML(product) {
    const stars = '⭐'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    return `
        <div class="col-md-3 col-sm-6 mb-4">
            <a href="chitiet-sanpham.html?id=${product.id}" class="text-decoration-none">
                <div class="product-card">
                    <div class="product-image-container">
                        <img src="${product.image}" 
                             class="product-image" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h6 class="product-name">${product.name}</h6>
                        <p class="product-description">${product.description}</p>
                        <div class="product-rating">
                            <span class="star-rating">${stars}</span>
                            <span class="review-count">(${product.reviewCount})</span>
                        </div>
                        <div class="product-price">
                            <span class="current-price">${formatPrice(product.price)}</span>
                        </div>
                        <div class="product-actions">
                            <button class="btn btn-primary btn-sm flex-fill" onclick="addToCart(${product.id}, event)">Thêm giỏ hàng</button>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `;
}

// Hàm cập nhật carousel sản phẩm bán chạy
function updateBestSellingProductsCarousel() {
    const bestSelling = getBestSellingProducts();
    const carouselInner = document.querySelector('#productCarousel .carousel-inner');
    
    if (!carouselInner) return;
    
    // Xóa nội dung cũ
    carouselInner.innerHTML = '';
    
    // Chia sản phẩm thành các slide (4 sản phẩm/slide)
    const productsPerSlide = 4;
    const totalSlides = Math.ceil(bestSelling.length / productsPerSlide);
    
    for (let i = 0; i < totalSlides; i++) {
        const slideProducts = bestSelling.slice(i * productsPerSlide, (i + 1) * productsPerSlide);
        const isActive = i === 0 ? 'active' : '';
        
        const slideHTML = `
            <div class="carousel-item ${isActive}">
                <div class="row justify-content-center">
                    ${slideProducts.map(product => createProductHTML(product)).join('')}
                </div>
            </div>
        `;
        
        carouselInner.innerHTML += slideHTML;
    }
    
    // Cập nhật carousel indicators
    const indicatorsContainer = document.querySelector('#productCarousel .carousel-indicators');
    if (indicatorsContainer && totalSlides > 1) {
        indicatorsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const isActive = i === 0 ? 'active' : '';
            const ariaCurrent = i === 0 ? 'aria-current="true"' : '';
            indicatorsContainer.innerHTML += `
                <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="${i}" 
                        class="${isActive}" ${ariaCurrent} aria-label="Slide ${i + 1}"></button>
            `;
        }
    }
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    const product = products.find(p => p.id === productId);
    if (product) {
        // TODO: Tích hợp với backend API để thêm vào giỏ hàng
        console.log('Thêm vào giỏ hàng:', product);
        
        // Hiển thị thông báo thành công
        showNotification(`Đã thêm "${product.name}" vào giỏ hàng!`, 'success');
        
        // Cập nhật UI nút tạm thời
        const button = event.target;
        const originalText = button.innerHTML;
        button.disabled = true;
        button.innerHTML = '<i class="fas fa-check"></i> Đã thêm!';
        button.classList.remove('btn-primary');
        button.classList.add('btn-success');
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
            button.classList.remove('btn-success');
            button.classList.add('btn-primary');
        }, 2000);
    }
}

// Hàm hiển thị thông báo
function showNotification(message, type = 'info') {
    // Tạo thông báo
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'info'} alert-dismissible fade show position-fixed`;
    notification.style.cssText = `
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        max-width: 400px;
    `;
    
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    // Thêm vào body
    document.body.appendChild(notification);
    
    // Tự động xóa sau 3 giây
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Quản lý lịch sử tìm kiếm
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

// Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchSuggestions = document.getElementById('searchSuggestions');
const historyItems = document.getElementById('historyItems');
const clearHistory = document.getElementById('clearHistory');

// Hiển thị lịch sử tìm kiếm
function displaySearchHistory() {
    historyItems.innerHTML = '';
    searchHistory.slice(-5).reverse().forEach(term => {
        const historyItem = document.createElement('span');
        historyItem.className = 'history-item';
        historyItem.textContent = term;
        historyItem.onclick = () => {
            searchInput.value = term;
            performSearch(term);
            hideSearchSuggestions();
        };
        historyItems.appendChild(historyItem);
    });
}

// Hiển thị gợi ý tìm kiếm
function showSearchSuggestions(query = '') {
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
                searchInput.value = term;
                performSearch(term);
                hideSearchSuggestions();
            };
            historyItemsInner.appendChild(historyItem);
        });
    } else {
        // Hiển thị gợi ý sản phẩm
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 8);

        filteredProducts.forEach(product => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.innerHTML = `
                <div><strong>${product.name}</strong></div>
                <div class="suggestion-category">${getCategoryName(product.category)} • ${formatPrice(product.price)}</div>
            `;
            suggestionItem.onclick = () => {
                searchInput.value = product.name;
                performSearch(product.name);
                hideSearchSuggestions();
            };
            searchSuggestions.appendChild(suggestionItem);
        });

        // Thêm gợi ý danh mục
        const categories = [...new Set(filteredProducts.map(p => p.category))];
        if (categories.length > 0) {
            categories.forEach(category => {
                const categoryItem = document.createElement('div');
                categoryItem.className = 'suggestion-item';
                categoryItem.innerHTML = `
                    <div><i class="fas fa-tag"></i> Xem tất cả trong <strong>${getCategoryName(category)}</strong></div>
                `;
                categoryItem.onclick = () => {
                    // Chuyển đến trang sản phẩm với category filter
                    window.location.href = `sanpham.html?category=${category}`;
                    hideSearchSuggestions();
                };
                searchSuggestions.appendChild(categoryItem);
            });
        }
    }
    
    searchSuggestions.style.display = 'block';
}

function hideSearchSuggestions() {
    searchSuggestions.style.display = 'none';
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
        
        // Hiển thị kết quả tìm kiếm (có thể chuyển hướng đến trang kết quả)
        alert(`Tìm kiếm: "${query}"\nKết quả: ${getSearchResults(query).length} sản phẩm`);
    }
}

function getSearchResults(query) {
    return products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
}

function filterByCategory(category) {
    const categoryResults = products.filter(p => p.category === category);
    // Loại bỏ alert để không hiện thông báo
    console.log(`Danh mục: ${getCategoryName(category)}\nCó ${categoryResults.length} sản phẩm`);
}

function clearSearchHistory() {
    searchHistory = [];
    localStorage.removeItem('searchHistory');
    hideSearchSuggestions();
}

// Event listeners
searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    showSearchSuggestions(query);
});

searchInput.addEventListener('focus', () => {
    showSearchSuggestions(searchInput.value);
});

searchBtn.addEventListener('click', () => {
    performSearch(searchInput.value);
    hideSearchSuggestions();
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch(searchInput.value);
        hideSearchSuggestions();
    }
});

// Hide suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        hideSearchSuggestions();
    }
});

// Ngăn không cho suggestions bị ẩn khi click vào chính nó
searchSuggestions.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Category dropdown navigation đã được xử lý trong phần dropdown menu navbar ở trên

// Product interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add to cart functionality
    document.querySelectorAll('.product-actions .btn-primary').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            
            // Show success message
            showNotification(`Đã thêm "${productName}" vào giỏ hàng!`, 'success');
            
            // Add cart animation
            animateAddToCart(this);
        });
    });
});

// Show notification function
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.custom-notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `custom-notification alert alert-${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'info'}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        max-width: 300px;
        animation: slideInRight 0.3s ease;
    `;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        ${message}
        <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
    `;
    
    // Add CSS for animation
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            .custom-notification {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 15px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// Animate add to cart
function animateAddToCart(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang thêm...';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Đã thêm!';
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 1000);
    }, 500);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
displaySearchHistory();

// Hàm lấy đánh giá nổi bật (chỉ 5 sao)
function getFeaturedReviews() {
    // Lọc chỉ những đánh giá 5 sao và sắp xếp theo độ hữu ích
    return featuredReviews
        .filter(review => review.rating === 5)
        .sort((a, b) => b.helpful - a.helpful)
        .slice(0, 3); // Chỉ lấy 3 đánh giá hàng đầu
}

// Hàm tạo HTML cho đánh giá nổi bật
function createFeaturedReviewHTML(review) {
    const formattedDate = new Date(review.date).toLocaleDateString('vi-VN', {
        month: 'long',
        day: 'numeric'
    });
    
    const customerType = review.helpful > 25 ? 'Khách hàng VIP' : 
                        review.helpful > 15 ? 'Khách hàng thân thiết' : 'Khách hàng';
    
    const stars = '⭐'.repeat(review.rating);
    
    return `
        <div class="col-md-4 mb-4">
            <div class="review-card">
                <div class="d-flex align-items-center mb-3">
                    <img src="${review.avatar}" 
                         class="rounded-circle me-3" width="50" height="50" alt="Avatar">
                    <div>
                        <h6 class="mb-0 text-primary-green">${review.userName}</h6>
                        <small class="text-muted">${customerType}</small>
                        <div class="product-name-small text-muted mt-1" style="font-size: 0.75rem;">
                            ${review.productName}
                        </div>
                    </div>
                </div>
                <p class="card-text">"${review.text}"</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="stars">${stars}</div>
                    <small class="text-muted">${formattedDate}</small>
                </div>
                ${review.verified ? '<div class="mt-2"><span class="badge bg-success" style="font-size: 0.7rem;">Đã xác minh mua hàng</span></div>' : ''}
            </div>
        </div>
    `;
}

// Hàm cập nhật đánh giá nổi bật
function updateFeaturedReviews() {
    const reviewsContainer = document.querySelector('.reviews-section .row.justify-content-center');
    if (!reviewsContainer) return;

    const topReviews = getFeaturedReviews();
    reviewsContainer.innerHTML = topReviews.map(createFeaturedReviewHTML).join('');
}

// Xử lý click cho dropdown menu danh mục
document.addEventListener('DOMContentLoaded', function() {
    // Cập nhật số lượng sản phẩm trong danh mục
    updateCategoryProductCounts();
    
    // Cập nhật carousel sản phẩm bán chạy
    updateBestSellingProductsCarousel();
    
    // Cập nhật đánh giá nổi bật
    updateFeaturedReviews();

    // Dropdown menu trong navbar - chuyển trang ngay lập tức
    const dropdownItems = document.querySelectorAll('.navbar .dropdown-item[data-category]');
    
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const category = this.getAttribute('data-category');
            // Chuyển trang ngay lập tức
            window.location.href = `sanpham.html?category=${category}`;
        });
    });

    // Category cards trong danh mục nổi bật - đã có href sẵn trong HTML
    // Không cần thêm JavaScript vì đã có link trực tiếp
});
