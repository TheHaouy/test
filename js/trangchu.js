
        // Dữ liệu sản phẩm mẫu cho tìm kiếm
        const products = [
            { name: "Kem dưỡng ẩm thiên nhiên", category: "skincare", price: 200000, description: "Kem dưỡng ẩm từ chiết xuất lô hội" },
            { name: "Serum vitamin C", category: "skincare", price: 250000, description: "Serum dưỡng sáng da tự nhiên" },
            { name: "Sữa rửa mặt trà xanh", category: "skincare", price: 180000, description: "Làm sạch da từ chiết xuất trà xanh" },
            { name: "Mặt nạ mật ong", category: "skincare", price: 320000, description: "Mặt nạ dưỡng ẩm từ mật ong organic" },
            { name: "Toner hoa hồng", category: "skincare", price: 150000, description: "Cân bằng độ pH da từ hoa hồng tự nhiên" },
            { name: "Kem chống nắng SPF50", category: "suncare", price: 280000, description: "Bảo vệ da khỏi tia UV hiệu quả" },
            { name: "Dầu massage thiên nhiên", category: "essential-oils", price: 350000, description: "Thư giãn cơ thể với tinh dầu tự nhiên" },
            { name: "Son dưỡng môi organic", category: "makeup", price: 120000, description: "Dưỡng ẩm môi từ sáp ong tự nhiên" },
            { name: "Serum Niacinamide 10%", category: "skincare", price: 290000, description: "Thu nhỏ lỗ chân lông hiệu quả" },
            { name: "Dầu gội thảo dược", category: "haircare", price: 160000, description: "Làm sạch và nuôi dưỡng tóc" },
            { name: "Kem dưỡng tay lavender", category: "body-care", price: 90000, description: "Dưỡng ẩm tay với tinh dầu lavender" },
            { name: "Tẩy tế bào chết coffee", category: "body-care", price: 220000, description: "Làm mịn da với hạt cà phê tự nhiên" },
            { name: "Tinh dầu lavender", category: "essential-oils", price: 180000, description: "Thư giãn và giảm stress" },
            { name: "Phấn phủ tự nhiên", category: "makeup", price: 150000, description: "Kiềm dầu và che khuyết điểm" },
            { name: "Xịt khoáng", category: "skincare", price: 120000, description: "Cấp ẩm tức thì cho da" },
            { name: "Dầu xả phục hồi", category: "haircare", price: 180000, description: "Phục hồi tóc hư tổn" }
        ];

        // Quản lý lịch sử tìm kiếm
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        
        // Elements
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const searchSuggestions = document.getElementById('searchSuggestions');
        const searchFilters = document.getElementById('searchFilters');
        const advancedSearchToggle = document.getElementById('advancedSearchToggle');
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
                            filterByCategory(category);
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
            alert(`Danh mục: ${getCategoryName(category)}\nCó ${categoryResults.length} sản phẩm`);
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

        // Toggle advanced search
        advancedSearchToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const isVisible = searchFilters.style.display === 'block';
            searchFilters.style.display = isVisible ? 'none' : 'block';
            hideSearchSuggestions();
        });

        // Hide suggestions when clicking outside
        document.addEventListener('click', (e) => {
            // Kiểm tra xem click có phải từ search container không
            if (!e.target.closest('.search-container')) {
                hideSearchSuggestions();
                searchFilters.style.display = 'none';
            }
        });

        // Ngăn không cho suggestions bị ẩn khi click vào chính nó
        searchSuggestions.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Ngăn không cho filters bị ẩn khi click vào chính nó
        searchFilters.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Price slider functionality
        const priceSlider = document.getElementById('priceSlider');
        const priceValue = document.getElementById('priceValue');
        
        if (priceSlider && priceValue) {
            priceSlider.addEventListener('input', (e) => {
                const value = parseInt(e.target.value);
                if (value >= 500000) {
                    priceValue.textContent = '500.000₫+';
                } else {
                    priceValue.textContent = value.toLocaleString('vi-VN') + '₫';
                }
            });
        }

        // Advanced search filters
        document.getElementById('applyFilters').addEventListener('click', () => {
            const category = document.getElementById('categoryFilter').value;
            const sortBy = document.getElementById('sortBy').value;
            const maxPrice = parseInt(document.getElementById('priceSlider').value);
            
            let results = products;
            
            if (category) {
                results = results.filter(p => p.category === category);
            }
            
            // Lọc theo giá tối đa
            if (maxPrice < 500000) {
                results = results.filter(p => p.price <= maxPrice);
            }
            
            // Sắp xếp
            switch(sortBy) {
                case 'price-low':
                    results.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    results.sort((a, b) => b.price - a.price);
                    break;
                case 'newest':
                    // Sắp xếp theo mới nhất (giả định)
                    break;
                case 'bestseller':
                    // Sắp xếp theo bán chạy (giả định)
                    break;
                case 'rating':
                    // Sắp xếp theo đánh giá (giả định)
                    break;
            }
            
            alert(`Tìm thấy ${results.length} sản phẩm với bộ lọc đã chọn`);
            searchFilters.style.display = 'none';
        });

        // Category dropdown navigation
        document.querySelectorAll('[data-category]').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const category = e.target.getAttribute('data-category');
                filterByCategory(category);
            });
        });

        // Initialize
        displaySearchHistory();