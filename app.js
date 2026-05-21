/* ==========================================================================
   Kngu Flower Shop - Core JavaScript Interactions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // --- Global Store / Mock Database ---
    const products = [
        {
            id: 1,
            name: "Spring Snowflake",
            category: "New Arrivals",
            tag: "Soldout",
            badgeClass: "badge-soldout",
            rating: 4,
            price: 19.00,
            oldPrice: 29.00,
            image: "assets/product-1.jpg",
            desc: "A beautiful arrangement of fresh spring snowflakes. Delicately styled to bring clean minimalist vibes to your living space."
        },
        {
            id: 2,
            name: "Rock Soapwort",
            category: "New Arrivals",
            tag: "",
            badgeClass: "",
            rating: 4,
            price: 50.00,
            oldPrice: null,
            image: "assets/product-2.jpg",
            desc: "Bright rock soapwort blossoms sourced directly from natural meadows, presented in a clean aesthetic vase."
        },
        {
            id: 3,
            name: "Scarlet Sage",
            category: "New Arrivals",
            tag: "-35%",
            badgeClass: "badge-discount",
            rating: 4,
            price: 39.00,
            oldPrice: 60.00,
            image: "assets/product-3.jpg",
            desc: "Vibrant scarlet sage highlights carefully matched with delicate elements. A perfect gift for special celebrations."
        },
        {
            id: 4,
            name: "Foxglove Flower",
            category: "New Arrivals",
            tag: "",
            badgeClass: "",
            rating: 4,
            price: 79.00,
            oldPrice: null,
            image: "assets/product-4.jpg",
            desc: "Exquisite tall foxglove flower stalk, presenting a classic cottage garden feel. Fits perfectly on windowsills and patios."
        },
        {
            id: 5,
            name: "Amaryllis Coral Stem",
            category: "Best Sellers",
            tag: "Amaryllis",
            badgeClass: "badge-sale",
            rating: 5,
            price: 38.00,
            oldPrice: 48.00,
            image: "assets/product-5.jpg",
            desc: "A stunning hand-selected Amaryllis coral stem, perfect for adding a touch of elegance and vibrant warmth to any room."
        },
        {
            id: 6,
            name: "Sweetheart Mini Roses",
            category: "Best Sellers",
            tag: "Roses",
            badgeClass: "",
            rating: 4,
            price: 29.99,
            oldPrice: null,
            image: "assets/product-6.jpg",
            desc: "A hand-tied colorful mix of fresh sweetheart mini roses. Expresses pure romantic inspiration and long-lasting devotion."
        },
        {
            id: 7,
            name: "Spring Gerberas Mix",
            category: "Best Sellers",
            tag: "Gerbera",
            badgeClass: "badge-sale",
            rating: 5,
            price: 45.00,
            oldPrice: 55.00,
            image: "assets/product-7.jpg",
            desc: "A gorgeous selection of fresh spring gerberas mixed with lush green leaves to convey pure warmth and happiness."
        },
        {
            id: 8,
            name: "Elegant Peony Stem",
            category: "Best Sellers",
            tag: "Peony Stem",
            badgeClass: "",
            rating: 5,
            price: 32.50,
            oldPrice: null,
            image: "assets/product-8.jpg",
            desc: "Soft, lush pink peonies hand-picked and arranged to bring a premium, high-end feel to your home decor."
        },
        {
            id: 9,
            name: "Carnation Cloud Bouquet",
            category: "New Arrivals",
            tag: "Carnation",
            badgeClass: "",
            rating: 4,
            price: 39.99,
            oldPrice: null,
            image: "assets/product-9.jpg",
            desc: "Pillowy soft carnation bouquet in elegant shades, reminiscent of pink clouds. Sourced daily for long-lasting freshness."
        },
        {
            id: 10,
            name: "Violet Aster Starburst",
            category: "Best Sellers",
            tag: "Aster",
            badgeClass: "badge-new",
            rating: 4,
            price: 48.00,
            oldPrice: null,
            image: "assets/product-10.jpg",
            desc: "Vibrant violet aster blooms arranged in a starburst pattern, adding bright color and joyful energy to any desk or shelf."
        },
        {
            id: 11,
            name: "Pink Peony Bouquet",
            category: "Best Sellers",
            tag: "Peonies",
            badgeClass: "",
            rating: 5,
            price: 64.99,
            oldPrice: null,
            image: "assets/product-11.jpg",
            desc: "A premium arrangement of multi-layered pink peony blossoms, hand-crafted by our expert florists for special occasions."
        },
        {
            id: 12,
            name: "Purple Tulip Velvet",
            category: "New Arrivals",
            tag: "Tulips",
            badgeClass: "badge-sale",
            rating: 5,
            price: 36.99,
            oldPrice: 45.00,
            image: "assets/product-12.jpg",
            desc: "A rich mix of deep purple tulips with velvety petals, expressing elegance and premium luxury."
        }
    ];

    // --- State Variables ---
    let cart = [];

    // --- DOM Elements ---
    const mainHeader = document.querySelector('.main-header');
    const cartBadge = document.querySelector('.cart-count-badge');
    
    // Sliders
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.hero-dot');
    const heroPrevBtn = document.querySelector('.hero-arrow-prev');
    const heroNextBtn = document.querySelector('.hero-arrow-next');
    
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialPrevBtn = document.querySelector('.testi-arrow-prev');
    const testimonialNextBtn = document.querySelector('.testi-arrow-next');

    // Cart Drawer Elements
    const cartOverlay = document.getElementById('cartOverlay');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOpenBtns = document.querySelectorAll('.js-open-cart');
    const cartCloseBtn = document.getElementById('cartCloseBtn');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartSubtotalEl = document.getElementById('cartSubtotal');

    // Quick View Modal Elements
    const quickviewOverlay = document.getElementById('quickviewOverlay');
    const quickviewModal = document.getElementById('quickviewModal');
    const quickviewCloseBtn = document.getElementById('quickviewCloseBtn');
    const qvImage = document.getElementById('qvImage');
    const qvTag = document.getElementById('qvTag');
    const qvTitle = document.getElementById('qvTitle');
    const qvPriceBox = document.getElementById('qvPriceBox');
    const qvDesc = document.getElementById('qvDesc');
    const qvQtyMinus = document.getElementById('qvQtyMinus');
    const qvQtyPlus = document.getElementById('qvQtyPlus');
    const qvQtyVal = document.getElementById('qvQtyVal');
    const qvAddToCartBtn = document.getElementById('qvAddToCartBtn');
    let activeQvProductId = null;

    // Toast Container
    const toastContainer = document.getElementById('toastContainer');

    // Newsletter Elements
    const newsletterForm = document.getElementById('newsletterForm');

    // ==========================================================================
    // 1. Header Scroll Effect
    // ==========================================================================
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

    // ==========================================================================
    // 2. Hero Carousel Slider
    // ==========================================================================
    let currentHeroSlide = 0;
    const heroSlideCount = heroSlides.length;
    let heroAutoplayTimer = null;

    function showHeroSlide(index) {
        // Reset old active
        heroSlides[currentHeroSlide].classList.remove('active');
        heroDots[currentHeroSlide].classList.remove('active');

        // Calculate new index wrapping
        currentHeroSlide = (index + heroSlideCount) % heroSlideCount;

        // Apply new active
        heroSlides[currentHeroSlide].classList.add('active');
        heroDots[currentHeroSlide].classList.add('active');
    }

    function startHeroAutoplay() {
        stopHeroAutoplay();
        heroAutoplayTimer = setInterval(() => {
            showHeroSlide(currentHeroSlide + 1);
        }, 6000);
    }

    function stopHeroAutoplay() {
        if (heroAutoplayTimer) {
            clearInterval(heroAutoplayTimer);
        }
    }

    if (heroPrevBtn && heroNextBtn) {
        heroPrevBtn.addEventListener('click', () => {
            showHeroSlide(currentHeroSlide - 1);
            startHeroAutoplay();
        });

        heroNextBtn.addEventListener('click', () => {
            showHeroSlide(currentHeroSlide + 1);
            startHeroAutoplay();
        });

        heroDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showHeroSlide(index);
                startHeroAutoplay();
            });
        });

        // Initialize Slider
        startHeroAutoplay();
    }

    // ==========================================================================
    // 3. Testimonials Carousel
    // ==========================================================================
    let currentTestiSlide = 0;
    const testiSlideCount = testimonialSlides.length;

    function showTestiSlide(index) {
        testimonialSlides[currentTestiSlide].classList.remove('active');
        currentTestiSlide = (index + testiSlideCount) % testiSlideCount;
        testimonialSlides[currentTestiSlide].classList.add('active');
    }

    if (testimonialPrevBtn && testimonialNextBtn) {
        testimonialPrevBtn.addEventListener('click', () => {
            showTestiSlide(currentTestiSlide - 1);
        });

        testimonialNextBtn.addEventListener('click', () => {
            showTestiSlide(currentTestiSlide + 1);
        });

        // Auto transition testimonials
        setInterval(() => {
            showTestiSlide(currentTestiSlide + 1);
        }, 8000);
    }

    // ==========================================================================
    // 4. Featured Items Tabbed Filtering
    // ==========================================================================
    const filterTabs = document.querySelectorAll('.filter-tab');
    const featuredGridItems = document.querySelectorAll('#featuredGrid .product-card');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // Add active to this tab
            tab.classList.add('active');

            const filterVal = tab.getAttribute('data-filter');

            featuredGridItems.forEach(card => {
                const cardCat = card.getAttribute('data-category') || '';

                if (filterVal === 'all') {
                    card.classList.remove('hidden');
                } else if (cardCat.includes(filterVal)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // ==========================================================================
    // 5. Toast Notifications
    // ==========================================================================
    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        let iconHtml = '<i class="ri-checkbox-circle-line toast-icon"></i>';
        if (type === 'error') {
            iconHtml = '<i class="ri-error-warning-line toast-icon"></i>';
        }

        toast.innerHTML = `
            ${iconHtml}
            <span>${message}</span>
        `;

        toastContainer.appendChild(toast);

        // Slide out and remove
        setTimeout(() => {
            toast.classList.add('toast-out');
            toast.addEventListener('animationend', () => {
                toast.remove();
            });
        }, 3000);
    }

    // ==========================================================================
    // 6. Shopping Cart Sidebar Drawer System
    // ==========================================================================
    function openCart() {
        cartOverlay.classList.add('active');
        cartDrawer.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent scrolling behind
    }

    function closeCart() {
        cartOverlay.classList.remove('active');
        cartDrawer.classList.remove('active');
        document.body.style.overflow = '';
    }

    cartOpenBtns.forEach(btn => btn.addEventListener('click', openCart));
    cartCloseBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Sync Cart Drawer UI with state
    function updateCartUI() {
        // Update badge count
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadge.textContent = totalItems;
        cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="cart-empty-message">
                    <i class="ri-shopping-bag-line cart-empty-icon"></i>
                    <p>Your shopping cart is empty.</p>
                </div>
            `;
            cartSubtotalEl.textContent = "$0.00";
            return;
        }

        // Populate items
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                    <div class="quantity-control">
                        <button class="qty-btn js-cart-qty-minus" aria-label="Decrease quantity">
                            <i class="ri-subtract-line"></i>
                        </button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn js-cart-qty-plus" aria-label="Increase quantity">
                            <i class="ri-add-line"></i>
                        </button>
                    </div>
                </div>
                <button class="cart-item-remove-btn js-cart-remove" aria-label="Remove item">
                    <i class="ri-delete-bin-6-line"></i>
                </button>
            </div>
        `).join('');

        // Math calculations
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    }

    // Add item to cart state
    function addToCart(productId, qtyToAdd = 1) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        if (product.tag === "Soldout") {
            showToast(`Sorry, "${product.name}" is currently sold out.`, "error");
            return;
        }

        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += qtyToAdd;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: qtyToAdd
            });
        }

        updateCartUI();
        showToast(`Added "${product.name}" to cart.`);
    }

    // Handle button clicks in Cart Drawer (Event delegation)
    cartItemsContainer.addEventListener('click', (e) => {
        const itemEl = e.target.closest('.cart-item');
        if (!itemEl) return;

        const productId = parseInt(itemEl.getAttribute('data-id'));
        const cartItem = cart.find(item => item.id === productId);

        if (!cartItem) return;

        // Minus click
        if (e.target.closest('.js-cart-qty-minus')) {
            if (cartItem.quantity > 1) {
                cartItem.quantity--;
            } else {
                cart = cart.filter(item => item.id !== productId);
            }
            updateCartUI();
        }

        // Plus click
        if (e.target.closest('.js-cart-qty-plus')) {
            cartItem.quantity++;
            updateCartUI();
        }

        // Remove trash click
        if (e.target.closest('.js-cart-remove')) {
            cart = cart.filter(item => item.id !== productId);
            updateCartUI();
            showToast("Item removed from cart.", "error");
        }
    });

    // Wire up Add to Cart triggers across the document (Event delegation)
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.js-add-to-cart');
        if (btn) {
            const id = parseInt(btn.getAttribute('data-id'));
            addToCart(id, 1);
        }
    });

    // ==========================================================================
    // 7. Quick View Modal System
    // ==========================================================================
    function openQuickView(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        activeQvProductId = productId;
        qvQtyVal.textContent = "1"; // reset quantity to 1

        // Populate details
        qvImage.src = product.image;
        qvImage.alt = product.name;
        qvTag.textContent = product.category;
        qvTitle.textContent = product.name;
        qvDesc.textContent = product.desc;

        let pricesHtml = `<span class="price-regular">$${product.price.toFixed(2)}</span>`;
        if (product.oldPrice) {
            pricesHtml += `<span class="price-old">$${product.oldPrice.toFixed(2)}</span>`;
        }
        qvPriceBox.innerHTML = pricesHtml;

        // Disable button if product is sold out
        if (product.tag === "Soldout") {
            qvAddToCartBtn.disabled = true;
            qvAddToCartBtn.innerHTML = `<i class="ri-close-circle-line"></i> Sold Out`;
            qvAddToCartBtn.style.backgroundColor = "#8c8c8c";
            qvAddToCartBtn.style.cursor = "not-allowed";
        } else {
            qvAddToCartBtn.disabled = false;
            qvAddToCartBtn.innerHTML = `<i class="ri-shopping-bag-line"></i> Add To Cart`;
            qvAddToCartBtn.style.backgroundColor = "";
            qvAddToCartBtn.style.cursor = "";
        }

        // Show overlay & modal
        quickviewOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeQuickView() {
        quickviewOverlay.classList.remove('active');
        document.body.style.overflow = '';
        activeQvProductId = null;
    }

    // Modal action listener (Event delegation for card quick views)
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.js-quick-view');
        if (btn) {
            const id = parseInt(btn.getAttribute('data-id'));
            openQuickView(id);
        }
    });

    quickviewCloseBtn.addEventListener('click', closeQuickView);
    quickviewOverlay.addEventListener('click', (e) => {
        if (e.target === quickviewOverlay) closeQuickView();
    });

    // Qv plus / minus clicks
    if (qvQtyMinus && qvQtyPlus) {
        qvQtyMinus.addEventListener('click', () => {
            let currentQty = parseInt(qvQtyVal.textContent);
            if (currentQty > 1) {
                qvQtyVal.textContent = currentQty - 1;
            }
        });

        qvQtyPlus.addEventListener('click', () => {
            let currentQty = parseInt(qvQtyVal.textContent);
            qvQtyVal.textContent = currentQty + 1;
        });
    }

    // Add to cart from Quick View Modal
    if (qvAddToCartBtn) {
        qvAddToCartBtn.addEventListener('click', () => {
            if (activeQvProductId) {
                const qty = parseInt(qvQtyVal.textContent);
                addToCart(activeQvProductId, qty);
                closeQuickView();
            }
        });
    }

    // ==========================================================================
    // 8. Newsletter Subscription (Mock)
    // ==========================================================================
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('.newsletter-input');
            const emailValue = emailInput.value.trim();

            // Simple regex validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailValue) {
                showToast("Please enter your email address.", "error");
                return;
            }

            if (!emailRegex.test(emailValue)) {
                showToast("Please enter a valid email address.", "error");
                return;
            }

            // Success state simulation
            showToast("Successfully subscribed to the newsletter!");
            emailInput.value = '';
        });
    }

    // ==========================================================================
    // 9. Announcement Bar Close
    // ==========================================================================
    const topAnnouncement = document.getElementById('topAnnouncement');
    const closeAnnouncement = document.getElementById('closeAnnouncement');
    if (closeAnnouncement && topAnnouncement) {
        closeAnnouncement.addEventListener('click', () => {
            topAnnouncement.classList.add('collapsed');
            mainHeader.classList.add('announcement-closed');
            document.body.classList.add('announcement-closed');
        });
    }

    // ==========================================================================
    // 10. Mobile Menu Navigation Drawer Toggle
    // ==========================================================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            
            // Toggle hamburger icon to close icon
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.className = 'ri-close-line';
                } else {
                    icon.className = 'ri-menu-line';
                }
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && e.target !== mobileMenuToggle) {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) icon.className = 'ri-menu-line';
            }
        });

        // Close mobile menu when clicking on nav link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) icon.className = 'ri-menu-line';
            });
        });
    }

    // ==========================================================================
    // 11. Dynamic Product Countdown Timer
    // ==========================================================================
    function initCountdownTimer() {
        const cdDays = document.getElementById('cd-days');
        const cdHours = document.getElementById('cd-hours');
        const cdMins = document.getElementById('cd-mins');
        const cdSecs = document.getElementById('cd-secs');

        if (!cdDays || !cdHours || !cdMins || !cdSecs) return;

        // Try to get stored countdown target, otherwise create a new one for 3 days from now
        let countdownTarget = localStorage.getItem('kngu_countdown_target');
        let targetTime = parseInt(countdownTarget);

        const now = new Date().getTime();

        if (!targetTime || targetTime < now) {
            // Set 3 days from now
            targetTime = now + (3 * 24 * 60 * 60 * 1000);
            localStorage.setItem('kngu_countdown_target', targetTime.toString());
        }

        function updateClock() {
            const currentTime = new Date().getTime();
            const timeRemaining = targetTime - currentTime;

            if (timeRemaining <= 0) {
                cdDays.textContent = "00";
                cdHours.textContent = "00";
                cdMins.textContent = "00";
                cdSecs.textContent = "00";
                clearInterval(clockInterval);
                return;
            }

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            cdDays.textContent = days.toString().padStart(2, '0');
            cdHours.textContent = hours.toString().padStart(2, '0');
            cdMins.textContent = minutes.toString().padStart(2, '0');
            cdSecs.textContent = seconds.toString().padStart(2, '0');
        }

        updateClock();
        const clockInterval = setInterval(updateClock, 1000);
    }
    initCountdownTimer();

    // ==========================================================================
    // 12. Interactive Search Bar Functionality
    // ==========================================================================
    const searchBarInput = document.getElementById('searchBarInput');
    const btnSearchSubmit = document.getElementById('btnSearchSubmit');
    const allProductCards = document.querySelectorAll('.product-card');

    function performSearch() {
        const query = searchBarInput.value.trim().toLowerCase();
        if (!query) {
            allProductCards.forEach(card => card.classList.remove('hidden'));
            showToast("Showing all premium bouquets.");
            return;
        }

        let matchCount = 0;
        allProductCards.forEach(card => {
            const titleEl = card.querySelector('.product-title');
            const tagEl = card.querySelector('.product-tag');
            const titleText = titleEl ? titleEl.textContent.toLowerCase() : '';
            const tagText = tagEl ? tagEl.textContent.toLowerCase() : '';

            if (titleText.includes(query) || tagText.includes(query)) {
                card.classList.remove('hidden');
                matchCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        if (matchCount > 0) {
            showToast(`Found ${matchCount} matching bouquet(s) for "${query}".`);
            // Smoothly scroll to the products section so the user sees the filtered results
            const featuredSection = document.getElementById('featured');
            const newProductsSection = document.getElementById('newProducts');
            const scrollToSection = featuredSection || newProductsSection;
            if (scrollToSection) {
                scrollToSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            showToast(`No bouquets found matching "${query}".`, "error");
        }
    }

    if (searchBarInput && btnSearchSubmit) {
        // Trigger search on button click
        btnSearchSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            performSearch();
        });

        // Trigger search on Enter key press
        searchBarInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });

        // Real-time responsive filtering as the user types
        searchBarInput.addEventListener('input', () => {
            const query = searchBarInput.value.trim().toLowerCase();
            if (!query) {
                allProductCards.forEach(card => card.classList.remove('hidden'));
            } else {
                allProductCards.forEach(card => {
                    const titleEl = card.querySelector('.product-title');
                    const tagEl = card.querySelector('.product-tag');
                    const titleText = titleEl ? titleEl.textContent.toLowerCase() : '';
                    const tagText = tagEl ? tagEl.textContent.toLowerCase() : '';

                    if (titleText.includes(query) || tagText.includes(query)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            }
        });
    }

    // Initialize blank UI
    updateCartUI();
});
