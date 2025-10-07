// ===== MOBILE MENU TOGGLE =====
const menuButton = document.getElementById('menu-icon');
const nav = document.querySelector('nav');

if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
        menuButton.classList.toggle('open');
    });
}

// ===== PHONE DATA =====
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
        discount: 8
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
        discount: 7
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
        discount: 10
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
        discount: 13
    },
    {
        id: 5,
        brand: "itel",
        name: "Itel S23+",
        price: 149,
        originalPrice: 179,
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=300&fit=crop",
        storage: 128,
        ram: 4,
        camera: "50MP AI Triple Camera",
        display: "6.6-inch HD+ Display",
        battery: "5000 mAh",
        rating: 4.0,
        reviews: 203,
        discount: 17
    },
    {
        id: 6,
        brand: "apple",
        name: "iPhone 14",
        price: 799,
        originalPrice: 829,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
        storage: 128,
        ram: 6,
        camera: "12MP Dual Camera System",
        display: "6.1-inch Super Retina XDR",
        battery: "3279 mAh",
        rating: 4.6,
        reviews: 428,
        discount: 4
    }
];

// ===== BRANDS DATA =====
const featuredBrands = [
    {
        id: 1,
        name: "Apple",
        logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=200&h=200&fit=crop",
        description: "Premium smartphones with cutting-edge technology",
        productCount: 4,
        startingPrice: 429,
        featured: true,
        category: "premium",
        popularModels: ["iPhone 15 Pro Max", "iPhone 14", "iPhone SE", "iPhone 13 Mini"]
    },
    {
        id: 2,
        name: "Samsung",
        logo: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop",
        description: "Innovative Android devices for every lifestyle",
        productCount: 4,
        startingPrice: 199,
        featured: true,
        category: "flagship",
        popularModels: ["Galaxy S24 Ultra", "Galaxy A54 5G", "Galaxy Z Flip5", "Galaxy M14 5G"]
    },
    {
        id: 3,
        name: "Tecno",
        logo: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=200&h=200&fit=crop",
        description: "Feature-packed smartphones at affordable prices",
        productCount: 4,
        startingPrice: 159,
        featured: true,
        category: "mid-range",
        popularModels: ["Phantom V Fold", "Camon 20 Premier", "Pova 5 Pro", "Spark 10 Pro"]
    },
    {
        id: 4,
        name: "Infinix",
        logo: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=200&h=200&fit=crop",
        description: "Budget-friendly phones with impressive features",
        productCount: 4,
        startingPrice: 89,
        featured: true,
        category: "budget",
        popularModels: ["Zero 30 5G", "Note 30 Pro", "Hot 30i", "Smart 8"]
    },
    {
        id: 5,
        name: "Itel",
        logo: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=200&h=200&fit=crop",
        description: "Ultra-affordable devices for everyday use",
        productCount: 4,
        startingPrice: 79,
        featured: true,
        category: "entry-level",
        popularModels: ["S23+", "Vision 5 Plus", "A70", "S24"]
    }
];

// ===== CART SYSTEM =====
let cart = JSON.parse(localStorage.getItem('atbriz-cart')) || [];

// ===== INITIALIZE APPLICATION =====
function init() {
    updateCartCount();
    
    // Load featured brands on homepage
    if (document.getElementById('featured-brands')) {
        displayFeaturedBrands();
    }
    
    // Load popular phones on homepage
    if (document.getElementById('popular-phones')) {
        displayPopularPhones();
    }
    
    // Load all phones on products page
    if (document.getElementById('products-grid')) {
        displayAllPhones();
        setupFilters();
    }
    
    // Setup cart functionality
    setupCart();
    
    // Setup contact form
    setupContactForm();
}

// ===== DISPLAY FEATURED BRANDS =====
function displayFeaturedBrands() {
    const container = document.getElementById('featured-brands');
    if (!container) return;
    
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
            <button class="add-to-cart-btn" onclick="addBrandToCart(${brand.id})">
                View Products
            </button>
        </div>
    `).join('');
}

// ===== DISPLAY POPULAR PHONES =====
function displayPopularPhones() {
    const container = document.getElementById('popular-phones');
    if (!container) return;
    
    // Show first 4 phones as popular
    const popularPhones = phones.slice(0, 4);
    
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
            <div class="phone-actions">
                <button class="btn-primary" onclick="addPhoneToCart(${phone.id})">Add to Cart</button>
                <button class="btn-secondary" onclick="viewPhoneDetails(${phone.id})">Details</button>
            </div>
        </div>
    `).join('');
}

// ===== DISPLAY ALL PHONES =====
function displayAllPhones(filteredPhones = phones) {
    const container = document.getElementById('products-grid');
    if (!container) return;
    
    if (filteredPhones.length === 0) {
        container.innerHTML = '<p class="no-results">No phones found matching your criteria.</p>';
        return;
    }
    
    container.innerHTML = filteredPhones.map(phone => `
        <div class="phone-card">
            <img src="${phone.image}" alt="${phone.name}" loading="lazy">
            ${phone.discount > 0 ? `<div class="discount-badge">${phone.discount}% OFF</div>` : ''}
            <h3>${phone.name}</h3>
            <div class="phone-price">
                $${phone.price}
                ${phone.originalPrice > phone.price ? 
                    `<span class="original-price">$${phone.originalPrice}</span>` : ''}
            </div>
            <div class="phone-specs">
                <div><strong>Brand:</strong> ${phone.brand}</div>
                <div><strong>Storage:</strong> ${phone.storage}GB</div>
                <div><strong>RAM:</strong> ${phone.ram}GB</div>
                <div><strong>Display:</strong> ${phone.display}</div>
                <div><strong>Rating:</strong> ${phone.rating} ⭐ (${phone.reviews} reviews)</div>
            </div>
            <div class="phone-actions">
                <button class="btn-primary" onclick="addPhoneToCart(${phone.id})">Add to Cart</button>
                <button class="btn-secondary" onclick="viewPhoneDetails(${phone.id})">Details</button>
            </div>
        </div>
    `).join('');
}

// ===== FILTER FUNCTIONS =====
function setupFilters() {
    const brandFilter = document.getElementById('brand-filter');
    const priceFilter = document.getElementById('price-filter');
    const searchFilter = document.getElementById('search-filter');
    
    if (brandFilter) {
        brandFilter.addEventListener('change', filterPhones);
    }
    if (priceFilter) {
        priceFilter.addEventListener('change', filterPhones);
    }
    if (searchFilter) {
        searchFilter.addEventListener('input', filterPhones);
    }
}

function filterPhones() {
    const brandValue = document.getElementById('brand-filter').value;
    const priceValue = document.getElementById('price-filter').value;
    const searchValue = document.getElementById('search-filter').value.toLowerCase();
    
    let filtered = phones.filter(phone => {
        // Brand filter
        if (brandValue !== 'all' && phone.brand !== brandValue) {
            return false;
        }
        
        // Price filter
        if (priceValue !== 'all') {
            if (priceValue === '0-100' && phone.price > 100) return false;
            if (priceValue === '100-300' && (phone.price < 100 || phone.price > 300)) return false;
            if (priceValue === '300-600' && (phone.price < 300 || phone.price > 600)) return false;
            if (priceValue === '600-1000' && (phone.price < 600 || phone.price > 1000)) return false;
            if (priceValue === '1000+' && phone.price < 1000) return false;
        }
        
        // Search filter
        if (searchValue && !phone.name.toLowerCase().includes(searchValue) && 
            !phone.brand.toLowerCase().includes(searchValue)) {
            return false;
        }
        
        return true;
    });
    
    displayAllPhones(filtered);
}

// ===== CART FUNCTIONS =====
function setupCart() {
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
    
    if (closeModal) {
        closeModal.addEventListener('click', closeCartModal);
    }
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
    
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }
    
    // Close modal when clicking outside
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
        // In a real app, this would filter products by brand
        if (window.location.pathname.includes('products.html')) {
            document.getElementById('brand-filter').value = brand.name.toLowerCase();
            filterPhones();
        } else {
            window.location.href = 'products.html';
        }
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
            image: phone.image,
            brand: phone.brand,
            quantity: 1
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
    showToast('Item removed from cart');
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
    showToast('Cart cleared');
}

function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
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

// ===== PHONE DETAILS =====
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
                        <div><strong>Rating:</strong> ${phone.rating} ⭐ (${phone.reviews} reviews)</div>
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

// ===== CONTACT FORM =====
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Save to localStorage
            saveContactForm(formData);
            
            // Show success message
            showToast('Thank you for your message! We will get back to you soon.', 'success');
            
            // Reset form
            this.reset();
        });
    }
}

function saveContactForm(formData) {
    let contactSubmissions = JSON.parse(localStorage.getItem('atbriz-contact')) || [];
    contactSubmissions.push({
        ...formData,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('atbriz-contact', JSON.stringify(contactSubmissions));
}

// ===== TOAST NOTIFICATION =====
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

// ===== INITIALIZE WHEN DOCUMENT LOADS =====
document.addEventListener('DOMContentLoaded', init);

// ===== GLOBAL FUNCTIONS =====
window.addBrandToCart = addBrandToCart;
window.addPhoneToCart = addPhoneToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.viewPhoneDetails = viewPhoneDetails;