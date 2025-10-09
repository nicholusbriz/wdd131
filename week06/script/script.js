// Array of navigation items for dynamic generation
const navItems = [
    { name: "home", url: "index.html", id: "home-link" },
    { name: "product catalog", url: "products.html", id: "products-link" },
    { name: "contact us", url: "contact.html", id: "contact-link" },
    { name: "view cart", url: "#", id: "cart-link", isCart: true }
];

// Object to store site statistics
const siteStats = {
    visitCount: 0,
    lastVisit: null,
    favoriteBrand: null
};

// Array methods demonstration
function initializeNavigation() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    //I Used map to create navigation HTML with template literals
    const navHTML = navItems.map(item => {
        if (item.isCart) {
            return `<a href="${item.url}" id="${item.id}">${item.name} (<span id="cart-count">0</span>)</a>`;
        }
        return `<a href="${item.url}" id="${item.id}">${item.name}</a>`;
    }).join('');

    nav.innerHTML = navHTML;
}

// Phone data with array of objects
const phones = [
    {
        id: 1,
        brand: "apple",
        name: "iPhone 15 Pro Max",
        price: 1199,
        originalPrice: 1299,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        storage: 256,
        ram: 8,
        camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
        display: "6.7-inch Super Retina XDR",
        battery: "4422 mAh",
        rating: 4.8,
        reviews: 284,
        discount: 8,
        features: ["5G", "Face ID", "Wireless Charging", "Water Resistant"]
    },
    {
        id: 2,
        brand: "samsung",
        name: "Samsung Galaxy S24 Ultra",
        price: 1299,
        originalPrice: 1399,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        storage: 512,
        ram: 12,
        camera: "200MP Main + 50MP Telephoto + 12MP Ultra Wide",
        display: "6.8-inch Dynamic AMOLED 2X",
        battery: "5000 mAh",
        rating: 4.7,
        reviews: 192,
        discount: 7,
        features: ["S Pen", "5G", "Wireless Charging", "Water Resistant"]
    },
    {
        id: 3,
        brand: "tecno",
        name: "Tecno Phantom V Fold",
        price: 899,
        originalPrice: 999,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
        storage: 512,
        ram: 12,
        camera: "50MP Main + 50MP Telephoto + 13MP Ultra Wide",
        display: "7.85-inch Foldable LTPO AMOLED",
        battery: "5000 mAh",
        rating: 4.3,
        reviews: 87,
        discount: 10,
        features: ["Foldable", "5G", "Dual Screen", "Fast Charging"]
    },
    {
        id: 4,
        brand: "infinix",
        name: "Infinix Zero 30 5G",
        price: 349,
        originalPrice: 399,
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=300&fit=crop",
        storage: 256,
        ram: 8,
        camera: "108MP Main + 13MP Ultra Wide + 2MP Depth",
        display: "6.78-inch AMOLED",
        battery: "5000 mAh",
        rating: 4.2,
        reviews: 156,
        discount: 13,
        features: ["5G", "AMOLED Display", "Fast Charging", "High Refresh Rate"]
    }
];

// Brands data array
const featuredBrands = [
    {
        id: 1,
        name: "Apple",
        logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=200&h=200&fit=crop",
        description: "Premium smartphones with cutting-edge technology",
        productCount: 4,
        startingPrice: 429,
        popularModels: ["iPhone 15 Pro Max", "iPhone 14", "iPhone SE", "iPhone 13 Mini"],
        features: ["iOS Ecosystem", "Premium Build", "Long-term Support"]
    },
    {
        id: 2,
        name: "Samsung",
        logo: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop",
        description: "Innovative Android devices for every lifestyle",
        productCount: 4,
        startingPrice: 199,
        popularModels: ["Galaxy S24 Ultra", "Galaxy A54 5G", "Galaxy Z Flip5", "Galaxy M14 5G"],
        features: ["Android OS", "Innovative Designs", "Wide Price Range"]
    }
];

// Cart system with localStorage
let cart = JSON.parse(localStorage.getItem('atbriz-cart')) || [];

// Form validation object
const formValidator = {
    errors: [],
    
    validateName: function(name) {
        if (!name.trim()) {
            this.errors.push("Name is required");
            return false;
        }
        if (name.length < 2) {
            this.errors.push("Name must be at least 2 characters long");
            return false;
        }
        return true;
    },
    
    validateEmail: function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            this.errors.push("Email is required");
            return false;
        }
        if (!emailRegex.test(email)) {
            this.errors.push("Please enter a valid email address");
            return false;
        }
        return true;
    },
    
    validateMessage: function(message) {
        if (!message.trim()) {
            this.errors.push("Message is required");
            return false;
        }
        if (message.length < 10) {
            this.errors.push("Message must be at least 10 characters long");
            return false;
        }
        return true;
    },
    
    clearErrors: function() {
        this.errors = [];
    },
    
    displayErrors: function() {
        const errorContainer = document.getElementById('form-errors');
        if (!errorContainer) return;
        
        if (this.errors.length > 0) {
            errorContainer.innerHTML = this.errors.map(error => 
                `<div class="error-message">${error}</div>`
            ).join('');
            errorContainer.style.display = 'block';
        } else {
            errorContainer.style.display = 'none';
        }
    }
};

// Footer dynamic content
function updateFooter() {
    const currentYear = document.getElementById('year');
    const lastModified = document.getElementById('lastModified');

    if (currentYear) {
        const year = new Date().getFullYear();
        currentYear.textContent = year;
    }

    if (lastModified) {
        const lastMod = new Date(document.lastModified);
        lastModified.textContent = `Last Updated: ${lastMod.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`;
    }
}

// Track visits with localStorage
function trackVisit() {
    const stats = JSON.parse(localStorage.getItem('atbriz-stats')) || siteStats;
    stats.visitCount = (stats.visitCount || 0) + 1;
    stats.lastVisit = new Date().toISOString();
    localStorage.setItem('atbriz-stats', JSON.stringify(stats));
    
    // Display visit count on homepage
    const visitCounter = document.getElementById('visit-counter');
    if (visitCounter) {
        visitCounter.textContent = `Site Visits: ${stats.visitCount}`;
    }
}

// Mobile menu toggle
function setupMobileMenu() {
    const menuButton = document.getElementById('menu-icon');
    const nav = document.querySelector('nav');

    if (menuButton && nav) {
        menuButton.addEventListener('click', () => {
            nav.classList.toggle('open');
            menuButton.classList.toggle('open');
        });
    }
}

// Initialize application with array methods
function init() {
    initializeNavigation();
    updateFooter();
    trackVisit();
    setupMobileMenu();
    updateCartCount();
    
    // Used forEach to initialize different sections
    const initFunctions = [
        initFeaturedBrands,
        initPopularPhones,
        initProductsGrid,
        initCartSystem,
        initContactForm
    ];
    
    initFunctions.forEach(func => {
        try {
            func();
        } catch (error) {
            console.log(`${func.name} not needed on this page`);
        }
    });
}

// Display featured brands using array methods
function initFeaturedBrands() {
    const container = document.getElementById('featured-brands');
    if (!container) return;
    
    // Used map to create brand cards with template literals
    container.innerHTML = featuredBrands.map(brand => `
        <div class="brand-card">
            <img src="${brand.logo}" alt="${brand.name}" loading="lazy">
            <h3>${brand.name}</h3>
            <p>${brand.description}</p>
            <div class="brand-stats">
                <div class="stat">
                    <span class="stat-label">Products</span>
                    <span class="stat-value">${brand.productCount}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Starting at</span>
                    <span class="stat-value">$${brand.startingPrice}</span>
                </div>
            </div>
            <div class="brand-features">
                ${brand.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
            <button class="add-to-cart-btn" onclick="addBrandToCart(${brand.id})">
                View Products
            </button>
        </div>
    `).join('');
}

// Display popular phones using array methods
function initPopularPhones() {
    const container = document.getElementById('popular-phones');
    if (!container) return;
    
    // Used filter and map to display popular phones
    const popularPhones = phones.filter(phone => phone.rating >= 4.5);
    
    container.innerHTML = popularPhones.map(phone => `
        <div class="phone-card">
            <img src="${phone.image}" alt="${phone.name}" loading="lazy">
            <h3>${phone.name}</h3>
            <div class="phone-price">$${phone.price}</div>
            <div class="phone-specs">
                <div>Storage: ${phone.storage}GB</div>
                <div>RAM: ${phone.ram}GB</div>
                <div>Camera: ${phone.camera.split('+')[0].trim()}</div>
            </div>
            <div class="phone-features">
                ${phone.features.slice(0, 2).map(feature => `<span class="feature-badge">${feature}</span>`).join('')}
            </div>
            <div class="phone-actions">
                <button class="btn-primary" onclick="addPhoneToCart(${phone.id})">Add to Cart</button>
                <button class="btn-secondary" onclick="viewPhoneDetails(${phone.id})">Details</button>
            </div>
        </div>
    `).join('');
}

// Display all phones with array methods
function initProductsGrid() {
    const container = document.getElementById('products-grid');
    if (!container) return;
    
    displayAllPhones();
    setupFilters();
}

function displayAllPhones(filteredPhones = phones) {
    const container = document.getElementById('products-grid');
    if (!container) return;
    
    if (filteredPhones.length === 0) {
        container.innerHTML = '<p class="no-results">No phones found matching your criteria.</p>';
        return;
    }
    
    // Used map with template literals
    container.innerHTML = filteredPhones.map(phone => `
        <div class="phone-card">
            <img src="${phone.image}" alt="${phone.name}" loading="lazy">
            <h3>${phone.name}</h3>
            <div class="phone-price">$${phone.price}</div>
            <div class="phone-specs">
                <div><strong>Brand:</strong> ${phone.brand}</div>
                <div><strong>Storage:</strong> ${phone.storage}GB</div>
                <div><strong>RAM:</strong> ${phone.ram}GB</div>
                <div><strong>Display:</strong> ${phone.display}</div>
            </div>
            <div class="phone-features">
                ${phone.features.map(feature => `<span class="feature-badge">${feature}</span>`).join('')}
            </div>
            <div class="phone-actions">
                <button class="btn-primary" onclick="addPhoneToCart(${phone.id})">Add to Cart</button>
                <button class="btn-secondary" onclick="viewPhoneDetails(${phone.id})">Details</button>
            </div>
        </div>
    `).join('');
}

// Filter functions with array methods
function setupFilters() {
    const brandFilter = document.getElementById('brand-filter');
    const priceFilter = document.getElementById('price-filter');
    const searchFilter = document.getElementById('search-filter');
    
    if (brandFilter) brandFilter.addEventListener('change', filterPhones);
    if (priceFilter) priceFilter.addEventListener('change', filterPhones);
    if (searchFilter) searchFilter.addEventListener('input', filterPhones);
}

function filterPhones() {
    const brandValue = document.getElementById('brand-filter').value;
    const priceValue = document.getElementById('price-filter').value;
    const searchValue = document.getElementById('search-filter').value.toLowerCase();
    
    // Used filter method with multiple conditions
    let filtered = phones.filter(phone => {
        const brandMatch = brandValue === 'all' || phone.brand === brandValue;
        const searchMatch = !searchValue || 
            phone.name.toLowerCase().includes(searchValue) || 
            phone.brand.toLowerCase().includes(searchValue);
        
        let priceMatch = true;
        if (priceValue !== 'all') {
            const [min, max] = priceValue === '1000+' ? [1000, Infinity] : priceValue.split('-').map(Number);
            priceMatch = phone.price >= min && phone.price <= max;
        }
        
        return brandMatch && priceMatch && searchMatch;
    });
    
    displayAllPhones(filtered);
}

// Cart system
function initCartSystem() {
    const cartLink = document.getElementById('cart-link');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.querySelector('.close-modal');
    const checkoutBtn = document.getElementById('checkout-btn');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    
    if (cartLink && cartModal) {
        cartLink.addEventListener('click', (e) => {
            e.preventDefault();
            openCartModal();
        });
    }
    
    if (closeModal) closeModal.addEventListener('click', closeCartModal);
    if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);
    if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);
    
    window.addEventListener('click', (e) => {
        if (e.target === document.getElementById('cart-modal')) {
            closeCartModal();
        }
    });
}

function addBrandToCart(brandId) {
    const brand = featuredBrands.find(b => b.id === brandId);
    if (brand) {
        showToast(`Viewing ${brand.name} products!`);
    }
}

function addPhoneToCart(phoneId) {
    const phone = phones.find(p => p.id === phoneId);
    if (!phone) return;
    
    const existingItem = cart.find(item => item.id === phoneId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: phone.id,
            name: phone.name,
            price: phone.price,
            quantity: 1,
            image: phone.image
        });
    }
    
    saveCart();
    updateCartCount();
    showToast(`${phone.name} added to cart!`);
}

function removeFromCart(phoneId) {
    cart = cart.filter(item => item.id !== phoneId);
    saveCart();
    updateCartCount();
    updateCartDisplay();
}

function updateQuantity(phoneId, change) {
    const item = cart.find(item => item.id === phoneId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(phoneId);
        } else {
            saveCart();
            updateCartDisplay();
        }
    }
}

function saveCart() {
    localStorage.setItem('atbriz-cart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    
    if (!cartItems || !cartTotalPrice) return;
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotalPrice.textContent = '0';
        return;
    }
    
    let total = 0;
    
    // Used forEach to process cart items
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price} x ${item.quantity} = $${itemTotal}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotalPrice.textContent = total.toFixed(2);
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartCount();
    updateCartDisplay();
}

function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Saved order history to localStorage
    const orderHistory = JSON.parse(localStorage.getItem('atbriz-orders')) || [];
    orderHistory.push({
        items: [...cart],
        total: total,
        date: new Date().toISOString(),
        id: Date.now()
    });
    localStorage.setItem('atbriz-orders', JSON.stringify(orderHistory));
    
    showToast(`Order placed successfully! Total: $${total.toFixed(2)}`, 'success');
    clearCart();
    closeCartModal();
}

function openCartModal() {
    updateCartDisplay();
    document.getElementById('cart-modal').style.display = 'block';
}

function closeCartModal() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Contact form with validation
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        // Create error container
        const errorContainer = document.createElement('div');
        errorContainer.id = 'form-errors';
        errorContainer.className = 'form-errors';
        contactForm.insertBefore(errorContainer, contactForm.firstChild);
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Validate form
            formValidator.clearErrors();
            formValidator.validateName(formData.name);
            formValidator.validateEmail(formData.email);
            formValidator.validateMessage(formData.message);
            
            if (formValidator.errors.length === 0) {
                saveContactForm(formData);
                showToast('Thank you for your message! We will get back to you soon.', 'success');
                this.reset();
            } else {
                formValidator.displayErrors();
                showToast('Please fix the form errors', 'error');
            }
        });
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                formValidator.clearErrors();
                
                if (this.id === 'name') formValidator.validateName(this.value);
                if (this.id === 'email') formValidator.validateEmail(this.value);
                if (this.id === 'message') formValidator.validateMessage(this.value);
                
                formValidator.displayErrors();
            });
        });
    }
}

function saveContactForm(formData) {
    let contactSubmissions = JSON.parse(localStorage.getItem('atbriz-contact')) || [];
    contactSubmissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now()
    });
    localStorage.setItem('atbriz-contact', JSON.stringify(contactSubmissions));
}

// Phone details with template literals
function viewPhoneDetails(phoneId) {
    const phone = phones.find(p => p.id === phoneId);
    if (!phone) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h2>${phone.name}</h2>
            <div class="phone-details">
                <img src="${phone.image}" alt="${phone.name}" class="phone-detail-image">
                <div class="phone-detail-info">
                    <div class="phone-price-large">$${phone.price}</div>
                    <div class="specs-grid">
                        <div><strong>Brand:</strong> ${phone.brand}</div>
                        <div><strong>Storage:</strong> ${phone.storage}GB</div>
                        <div><strong>RAM:</strong> ${phone.ram}GB</div>
                        <div><strong>Display:</strong> ${phone.display}</div>
                        <div><strong>Camera:</strong> ${phone.camera}</div>
                        <div><strong>Battery:</strong> ${phone.battery}</div>
                        <div><strong>Rating:</strong> ${phone.rating}/5 (${phone.reviews} reviews)</div>
                    </div>
                    <div class="phone-features-detailed">
                        <h4>Key Features:</h4>
                        ${phone.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                    </div>
                    <button class="btn-primary" onclick="addPhoneToCart(${phone.id}); this.parentElement.parentElement.parentElement.parentElement.remove()">
                        Add to Cart - $${phone.price}
                    </button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.className = 'toast show';
    
    if (type === 'error') {
        toast.style.background = '#dc3545';
    } else if (type === 'success') {
        toast.style.background = '#28a745';
    }
    
    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);
}

// Initialize when document loads
document.addEventListener('DOMContentLoaded', init);

// Global functions
window.addBrandToCart = addBrandToCart;
window.addPhoneToCart = addPhoneToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.viewPhoneDetails = viewPhoneDetails;