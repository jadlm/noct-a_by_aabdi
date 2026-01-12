// ============================================
// SWEETDREAMS - BOUTIQUE DE PYJAMAS POUR FILLES
// ============================================
// Fichier JavaScript complet
// Contient toutes les fonctions pour :
// - Gestion des produits
// - Gestion du panier
// - Gestion administrative
// ============================================

// ============================================
// SECTION 1: INITIALISATION ET FONCTIONS UTILITAIRES
// ============================================

// Initialiser l'application au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    console.log('SweetDreams - Boutique de pyjamas chargée');
    
    // Initialiser les produits par défaut si nécessaire
    // Pour forcer la réinitialisation, décommentez la ligne suivante :
    localStorage.removeItem('products');
    
    if (!localStorage.getItem('products')) {
        initializeProducts();
    }
    
    // Initialiser le panier s'il n'existe pas
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
    
    // Initialiser l'ID du prochain produit
    if (!localStorage.getItem('nextProductId')) {
        localStorage.setItem('nextProductId', '9');
    }
    
    // Mettre à jour le compteur du panier
    updateCartCount();
    
    // Configurer les événements globaux
    setupGlobalEvents();
    
    // Charger les éléments spécifiques à la page
    loadPageSpecificContent();
});

// Initialiser les produits par défaut
function initializeProducts() {
    const defaultProducts = [
        {
            id: 1,
            name: "Pyjama Licorne Magique",
            price: 199, // Prix promo (20% de réduction)
            originalPrice: 249, // Prix normal
            image: "images/pyjama2.png",
            description: "Pyjama doux avec motif licorne, parfait pour des rêves magiques.",
            stock: { S: 15, M: 12, L: 10, XL: 8 }
        },
        {
            id: 2,
            name: "Pyjama Étoiles Brillantes",
            price: 199,
            originalPrice: 249,
            image: "images/pyjama3.png",
            description: "Pyjama bleu nuit avec étoiles brillantes, pour des nuits sous les étoiles.",
            stock: { S: 10, M: 15, L: 12, XL: 5 }
        },
        {
            id: 3,
            name: "Pyjama Fleurs Printanières",
            price: 199,
            originalPrice: 249,
            image: "images/pyjama4.png",
            description: "Pyjama rose avec motif fleuri, doux et confortable.",
            stock: { S: 8, M: 10, L: 15, XL: 10 }
        },
        {
            id: 4,
            name: "Pyjama Lapin Doux",
            price: 199,
            originalPrice: 249,
            image: "images/pyjama5.png",
            description: "Pyjama gris avec motif lapin, doux comme un nuage.",
            stock: { S: 12, M: 10, L: 8, XL: 6 }
        },
        {
            id: 5,
            name: "Pyjama Arc-en-Ciel",
            price: 199,
            originalPrice: 249,
            image: "images/pyjama6.png",
            description: "Pyjama coloré arc-en-ciel pour égayer les nuits.",
            stock: { S: 5, M: 8, L: 10, XL: 12 }
        },
        {
            id: 6,
            name: "Pyjama Princesse Féerique",
            price: 199,
            originalPrice: 249,
            image: "images/pyjama7.png",
            description: "Pyjama violet avec motifs princesse, pour les petites rêveuses.",
            stock: { S: 7, M: 9, L: 11, XL: 5 }
        },
        {
            id: 7,
            name: "Pyjama Panda Mignon",
            price: 199,
            originalPrice: 249,
            image: "images/pyjama8.png",
            description: "Pyjama noir et blanc avec motif panda, trop mignon!",
            stock: { S: 10, M: 12, L: 10, XL: 8 }
        },
        {
            id: 8,
            name: "Pyjama Cœur Rose",
            price: 199,
            originalPrice: 249,
            image: "images/pyjama1.png",
            description: "Pyjama rose pâle avec petits cœurs, doux et romantique.",
            stock: { S: 15, M: 10, L: 5, XL: 3 }
        }
    ];
    
    localStorage.setItem('products', JSON.stringify(defaultProducts));
    console.log('Produits par défaut initialisés');
}

// Configurer les événements globaux
function setupGlobalEvents() {
    // Gestion du menu hamburger pour mobile
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Fermer le menu mobile en cliquant sur un lien
    const navItems = document.querySelectorAll('.nav-menu a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });
    
    // Fermer le menu en cliquant en dehors
    document.addEventListener('click', function(e) {
        if (hamburger && navMenu && 
            !hamburger.contains(e.target) && 
            !navMenu.contains(e.target) &&
            navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
    
    // Gestionnaires pour les modals (admin)
    const closeModalBtn = document.querySelector('.close-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }
    
    // Gestion du formulaire de newsletter
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input[type="email"]');
            if (input && input.value) {
                showNotification('Merci pour votre inscription à notre newsletter !');
                input.value = '';
            }
        });
    });
}

// Charger le contenu spécifique à chaque page
function loadPageSpecificContent() {
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('index.html') || currentPage.endsWith('/')) {
        loadFeaturedProducts();
        hideLoader();
    } else if (currentPage.includes('shop.html')) {
        loadShopProducts();
        setupShopFilters();
        hideLoader();
    } else if (currentPage.includes('cart.html')) {
        loadCartPage();
        hideLoader();
    } else if (currentPage.includes('admin.html')) {
        loadStats();
        loadAdminProducts();
        setupAdminEvents();
        hideLoader();
    } else {
        hideLoader();
    }
}

// Masquer le loader
function hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 800);
    }
}

// ============================================
// SECTION 2: GESTION DES PRODUITS
// ============================================

// Récupérer tous les produits
function getProducts() {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
}

// Sauvegarder les produits
function saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
}

// Obtenir un produit par son ID
function getProductById(id) {
    const products = getProducts();
    return products.find(product => product.id == id);
}

// Obtenir la taille avec le stock le plus élevé
function getMaxStockSize(stock) {
    let maxSize = 'S';
    let maxStock = stock.S;
    
    if (stock.M > maxStock) {
        maxSize = 'M';
        maxStock = stock.M;
    }
    
    if (stock.L > maxStock) {
        maxSize = 'L';
        maxStock = stock.L;
    }
    
    if (stock.XL > maxStock) {
        maxSize = 'XL';
    }
    
    return maxSize;
}

// Vérifier si un produit est en rupture de stock
function isOutOfStock(stock) {
    return stock.S <= 0 && stock.M <= 0 && stock.L <= 0 && stock.XL <= 0;
}

// Charger les produits en vedette sur la page d'accueil
function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('home-products');
    if (!featuredContainer) return;
    
    const products = getProducts();
    const featuredProducts = products.slice(0, 4); // Prendre les 4 premiers produits
    
    featuredContainer.innerHTML = '';
    
    if (featuredProducts.length === 0) {
        featuredContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px;">
                <i class="fas fa-box-open" style="font-size: 3rem; color: #ccc; margin-bottom: 20px;"></i>
                <h3>Aucun pyjama disponible</h3>
                <p>Revenez plus tard pour découvrir notre collection</p>
            </div>
        `;
        return;
    }
    
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        featuredContainer.appendChild(productCard);
    });
}

// Charger tous les produits sur la page boutique
function loadShopProducts() {
    const productsGrid = document.getElementById('shop-products');
    const noProductsMessage = document.getElementById('no-products-message');
    
    if (!productsGrid) return;
    
    const products = getProducts();
    
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        productsGrid.style.display = 'none';
        if (noProductsMessage) noProductsMessage.style.display = 'block';
        return;
    }
    
    productsGrid.style.display = 'grid';
    if (noProductsMessage) noProductsMessage.style.display = 'none';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Créer une carte produit
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.id = product.id;
    
    // Utiliser une image par défaut si aucune URL n'est fournie
    const imageUrl = product.image || `https://via.placeholder.com/300x300/F8BBD0/FFFFFF?text=Pyjama+${product.id}`;
    
    // Déterminer la taille avec le stock le plus élevé par défaut
    const defaultSize = getMaxStockSize(product.stock);
    const outOfStock = isOutOfStock(product.stock);
    
    // Calculer le stock total
    const totalStock = product.stock.S + product.stock.M + product.stock.L + product.stock.XL;
    let stockClass = 'in-stock';
    let stockText = 'En stock';
    
    if (outOfStock) {
        stockClass = 'out-of-stock';
        stockText = 'Rupture de stock';
    } else if (totalStock < 5) {
        stockClass = 'low-stock';
        stockText = 'Stock faible';
    }
    
    // Calculer la réduction en pourcentage
    const hasPromo = product.originalPrice && product.originalPrice > product.price;
    const discountPercent = hasPromo ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    card.innerHTML = `
        <div class="product-image">
            ${hasPromo ? '<span class="promo-badge">-20%</span>' : ''}
            <img src="${imageUrl}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price-container">
                ${hasPromo ? `<span class="product-price-original">${product.originalPrice.toFixed(0)} DH</span>` : ''}
                <span class="product-price">${product.price.toFixed(0)} DH</span>
            </div>
            <div class="product-sizes">
                <button class="size-btn ${defaultSize === 'S' ? 'active' : ''} ${product.stock.S === 0 ? 'disabled' : ''}" data-size="S">S</button>
                <button class="size-btn ${defaultSize === 'M' ? 'active' : ''} ${product.stock.M === 0 ? 'disabled' : ''}" data-size="M">M</button>
                <button class="size-btn ${defaultSize === 'L' ? 'active' : ''} ${product.stock.L === 0 ? 'disabled' : ''}" data-size="L">L</button>
                <button class="size-btn ${defaultSize === 'XL' ? 'active' : ''} ${product.stock.XL === 0 ? 'disabled' : ''}" data-size="XL">XL</button>
            </div>
            <div class="product-stock ${stockClass}">
                <i class="fas ${outOfStock ? 'fa-times-circle' : totalStock < 5 ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i>
                ${stockText}
            </div>
            <button class="add-to-cart-btn" ${outOfStock ? 'disabled' : ''}>
                <i class="fas fa-shopping-cart"></i>
                ${outOfStock ? 'Rupture de stock' : 'Ajouter au panier'}
            </button>
        </div>
    `;
    
    // Gérer la sélection des tailles
    const sizeBtns = card.querySelectorAll('.size-btn:not(.disabled)');
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('disabled')) return;
            
            // Désélectionner toutes les tailles
            card.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            // Sélectionner la taille cliquée
            this.classList.add('active');
        });
    });
    
    // Gérer l'ajout au panier
    const addToCartBtn = card.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', function() {
        if (this.disabled) return;
        
        const selectedSizeBtn = card.querySelector('.size-btn.active:not(.disabled)');
        if (!selectedSizeBtn) {
            showCartNotification('Veuillez sélectionner une taille disponible');
            return;
        }
        
        const selectedSize = selectedSizeBtn.dataset.size;
        
        if (product.stock[selectedSize] <= 0) {
            showCartNotification(`Désolé, ce pyjama en taille ${selectedSize} est en rupture de stock.`);
            return;
        }
        
        addToCart(product.id, selectedSize);
        
        // Animation de succès
        this.innerHTML = '<i class="fas fa-check"></i> Ajouté !';
        this.style.background = 'var(--success-color)';
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-shopping-cart"></i> Ajouter au panier';
            this.style.background = '';
        }, 1500);
    });
    
    return card;
}

// Configurer les filtres de la boutique
function setupShopFilters() {
    const priceFilter = document.getElementById('price-filter');
    const sizeFilter = document.getElementById('size-filter');
    const searchInput = document.getElementById('product-search');
    
    // Recherche en temps réel
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterShopProducts();
        });
        
        searchInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                filterShopProducts();
            }
        });
    }
    
    // Filtre par prix
    if (priceFilter) {
        priceFilter.addEventListener('change', function() {
            filterShopProducts();
        });
    }
    
    // Filtre par taille
    if (sizeFilter) {
        sizeFilter.addEventListener('change', function() {
            filterShopProducts();
        });
    }
}

// Filtrer les produits de la boutique
function filterShopProducts() {
    const productsGrid = document.getElementById('shop-products');
    const noProductsMessage = document.getElementById('no-products-message');
    const searchInput = document.getElementById('product-search');
    const priceFilter = document.getElementById('price-filter');
    const sizeFilter = document.getElementById('size-filter');
    
    if (!productsGrid) return;
    
    const products = getProducts();
    let filteredProducts = [...products];
    
    // Filtre par recherche
    if (searchInput && searchInput.value.trim()) {
        const query = searchInput.value.toLowerCase();
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(query) ||
            (product.description && product.description.toLowerCase().includes(query))
        );
    }
    
    // Filtre par taille
    if (sizeFilter && sizeFilter.value) {
        filteredProducts = filteredProducts.filter(product => 
            product.stock[sizeFilter.value] > 0
        );
    }
    
    // Tri par prix
    if (priceFilter && priceFilter.value) {
        if (priceFilter.value === 'low') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (priceFilter.value === 'high') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }
    }
    
    // Afficher les résultats
    productsGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productsGrid.style.display = 'none';
        if (noProductsMessage) noProductsMessage.style.display = 'block';
    } else {
        productsGrid.style.display = 'grid';
        if (noProductsMessage) noProductsMessage.style.display = 'none';
        
        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }
}


// ============================================
// SECTION 3: GESTION DU PANIER
// ============================================

// Ajouter un produit au panier
function addToCart(productId, size) {
    const products = getProducts();
    const product = products.find(p => p.id == productId);
    
    if (!product) {
        console.error('Produit non trouvé');
        return;
    }
    
    // Vérifier le stock
    if (product.stock[size] <= 0) {
        showNotification(`Désolé, le pyjama ${product.name} en taille ${size} est en rupture de stock.`);
        return;
    }
    
    // Récupérer le panier
    let cart = JSON.parse(localStorage.getItem('cart'));
    
    // Vérifier si le produit avec la même taille est déjà dans le panier
    const existingItemIndex = cart.findIndex(item => item.id == productId && item.size === size);
    
    if (existingItemIndex !== -1) {
        // Augmenter la quantité
        cart[existingItemIndex].quantity += 1;
    } else {
        // Ajouter un nouvel article
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            size: size,
            quantity: 1,
            image: product.image
        });
    }
    
    // Mettre à jour le panier
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Mettre à jour le compteur
    updateCartCount();
    
    // Si le panier est ouvert, mettre à jour l'affichage
    if (document.querySelector('.cart-sidebar.active')) {
        loadCartItems();
    }
}

// Mettre à jour le compteur d'articles dans le panier
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCounts = document.querySelectorAll('.cart-count');
    
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    cartCounts.forEach(cartCount => {
        if (cartCount) {
            cartCount.textContent = totalItems;
            if (totalItems > 0) {
                cartCount.style.display = 'inline-flex';
            } else {
                cartCount.style.display = 'none';
            }
        }
    });
}

// Ouvrir le panier
function openCart() {
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartOverlay = document.querySelector('.cart-overlay');
    
    if (cartSidebar && cartOverlay) {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Charger les articles du panier
        loadCartItems();
    }
}

// Fermer le panier
function closeCart() {
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartOverlay = document.querySelector('.cart-overlay');
    
    if (cartSidebar && cartOverlay) {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Charger la page panier (pour cart.html)
function loadCartPage() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    
    if (!cartItemsContainer) {
        // Si on n'est pas sur la page panier, on ne fait rien
        return;
    }
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        if (emptyCartMessage) emptyCartMessage.style.display = 'block';
        cartItemsContainer.innerHTML = '';
        updateCartSummary();
        return;
    }
    
    if (emptyCartMessage) emptyCartMessage.style.display = 'none';
    cartItemsContainer.innerHTML = '';
    
    cart.forEach((item, index) => {
        const products = getProducts();
        const product = products.find(p => p.id == item.id);
        const imageUrl = item.image || product?.image || `https://via.placeholder.com/100x100/F8BBD0/FFFFFF?text=Pyjama+${item.id}`;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${imageUrl}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-size">Taille: ${item.size}</p>
                <div class="cart-item-price">${item.price.toFixed(2)} DH</div>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-control">
                    <button class="quantity-btn" data-index="${index}" data-action="decrease">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-index="${index}" data-action="increase">+</button>
                </div>
                <button class="remove-item" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Ajouter les gestionnaires d'événements
    const quantityBtns = cartItemsContainer.querySelectorAll('.quantity-btn');
    const removeBtns = cartItemsContainer.querySelectorAll('.remove-item');
    
    quantityBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            const action = this.dataset.action;
            updateCartItemQuantity(index, action === 'increase' ? 1 : -1);
        });
    });
    
    removeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            removeCartItem(index);
        });
    });
    
    // Mettre à jour le récapitulatif
    updateCartSummary();
    
    // Configurer le formulaire de commande
    setupCheckoutForm();
}

// Mettre à jour le récapitulatif de commande
function updateCartSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const subtotalEl = document.getElementById('subtotal');
    const totalPriceEl = document.getElementById('total-price');
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = 30; // Frais de livraison fixes
    const total = subtotal + delivery;
    
    if (subtotalEl) subtotalEl.textContent = `${subtotal.toFixed(2)} DH`;
    if (totalPriceEl) totalPriceEl.textContent = `${total.toFixed(2)} DH`;
}

// Mettre à jour la quantité d'un article du panier
function updateCartItemQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (index < 0 || index >= cart.length) return;
    
    const newQuantity = cart[index].quantity + change;
    
    if (newQuantity <= 0) {
        removeCartItem(index);
        return;
    }
    
    // Vérifier le stock
    const products = getProducts();
    const product = products.find(p => p.id == cart[index].id);
    
    if (!product) {
        showNotification('Produit non trouvé dans l\'inventaire.');
        return;
    }
    
    const size = cart[index].size;
    if (newQuantity > product.stock[size]) {
        showNotification(`Stock insuffisant. Il ne reste que ${product.stock[size]} unité(s) de ce pyjama en taille ${size}.`);
        return;
    }
    
    cart[index].quantity = newQuantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCartCount();
    loadCartPage();
}

// Supprimer un article du panier
function removeCartItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (index < 0 || index >= cart.length) return;
    
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCartCount();
    loadCartPage();
    showNotification('Article supprimé du panier.');
}

// Configurer le formulaire de commande
function setupCheckoutForm() {
    const checkoutForm = document.getElementById('customer-info-form');
    if (!checkoutForm) return;
    
    // Supprimer les anciens gestionnaires pour éviter les doublons
    const newForm = checkoutForm.cloneNode(true);
    checkoutForm.parentNode.replaceChild(newForm, checkoutForm);
    
    newForm.addEventListener('submit', function(e) {
        e.preventDefault();
        processCheckout();
    });
}

// Charger les articles du panier (pour sidebar si nécessaire)
function loadCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalElement = document.querySelector('.total-price');
    const checkoutBtn = document.querySelector('.checkout-btn');
    const emptyCartMessage = document.querySelector('.empty-cart-message');
    
    if (!cartItemsContainer) return;
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Vérifier si le panier est vide
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-message">
                <i class="fas fa-shopping-cart"></i>
                <p>Votre panier est vide</p>
            </div>
        `;
        
        if (cartTotalElement) cartTotalElement.textContent = '0.00 DH';
        if (checkoutBtn) {
            checkoutBtn.disabled = true;
            checkoutBtn.textContent = 'Valider la commande';
        }
        return;
    }
    
    // Afficher les articles du panier
    cartItemsContainer.innerHTML = '';
    
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image || `https://via.placeholder.com/80x80/F8BBD0/FFFFFF?text=Pyjama+${item.id}`}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-size">Taille: ${item.size}</div>
                <div class="cart-item-price">${item.price.toFixed(2)} DH</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease-quantity" data-index="${index}">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn increase-quantity" data-index="${index}">+</button>
                    <button class="cart-item-remove" data-index="${index}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Mettre à jour le total
    if (cartTotalElement) cartTotalElement.textContent = `${total.toFixed(2)} DH`;
    
    // Activer le bouton de validation
    if (checkoutBtn) {
        checkoutBtn.disabled = false;
        checkoutBtn.textContent = `Valider la commande (${total.toFixed(2)} DH)`;
        
        // Ajouter un gestionnaire d'événements pour la validation
        checkoutBtn.onclick = function() {
            processCheckout();
        };
    }
    
    // Ajouter des gestionnaires d'événements pour les boutons de quantité
    const decreaseButtons = document.querySelectorAll('.decrease-quantity');
    const increaseButtons = document.querySelectorAll('.increase-quantity');
    const removeButtons = document.querySelectorAll('.cart-item-remove');
    
    decreaseButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            updateQuantity(parseInt(this.dataset.index), -1);
        });
    });
    
    increaseButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            updateQuantity(parseInt(this.dataset.index), 1);
        });
    });
    
    removeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            removeItem(parseInt(this.dataset.index));
        });
    });
}

// Mettre à jour la quantité d'un article
function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    
    if (index < 0 || index >= cart.length) return;
    
    const newQuantity = cart[index].quantity + change;
    
    if (newQuantity <= 0) {
        // Supprimer l'article si la quantité est <= 0
        removeItem(index);
        return;
    }
    
    // Vérifier le stock
    const products = getProducts();
    const product = products.find(p => p.id == cart[index].id);
    
    if (!product) {
        showNotification('Produit non trouvé dans l\'inventaire.');
        return;
    }
    
    // Vérifier si la nouvelle quantité dépasse le stock disponible
    const size = cart[index].size;
    if (newQuantity > product.stock[size]) {
        showNotification(`Stock insuffisant. Il ne reste que ${product.stock[size]} unité(s) de ce pyjama en taille ${size}.`);
        return;
    }
    
    // Mettre à jour la quantité
    cart[index].quantity = newQuantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Mettre à jour l'affichage
    updateCartCount();
    loadCartItems();
}

// Supprimer un article du panier
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    
    if (index < 0 || index >= cart.length) return;
    
    // Supprimer l'article
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Mettre à jour l'affichage
    updateCartCount();
    loadCartItems();
    
    // Afficher une notification
    showNotification('Article supprimé du panier.');
}

// Traiter la commande
function processCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        showNotification('Votre panier est vide.');
        return;
    }
    
    // Récupérer les informations du formulaire
    const customerName = document.getElementById('customer-name')?.value.trim();
    const customerPhone = document.getElementById('customer-phone')?.value.trim();
    const customerAddress = document.getElementById('customer-address')?.value.trim();
    const customerCity = document.getElementById('customer-city')?.value;
    const customerNotes = document.getElementById('customer-notes')?.value.trim() || '';
    
    if (!customerName || !customerPhone || !customerAddress || !customerCity) {
        showNotification('Veuillez remplir tous les champs obligatoires.');
        return;
    }
    
    // Vérifier le stock pour tous les articles
    const products = getProducts();
    let stockIssue = false;
    let issueMessage = '';
    
    for (const item of cart) {
        const product = products.find(p => p.id == item.id);
        
        if (!product) {
            stockIssue = true;
            issueMessage = `Le produit "${item.name}" n'est plus disponible.`;
            break;
        }
        
        if (product.stock[item.size] < item.quantity) {
            stockIssue = true;
            issueMessage = `Stock insuffisant pour "${item.name}" (Taille: ${item.size}). Il ne reste que ${product.stock[item.size]} unité(s).`;
            break;
        }
    }
    
    if (stockIssue) {
        showNotification(issueMessage);
        return;
    }
    
    // Calculer le total
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = 30;
    const total = subtotal + delivery;
    
    // Construire le message WhatsApp
    let message = `Bonjour, je souhaite passer une commande :\n\n`;
    message += `👤 *Informations client :*\n`;
    message += `Nom : ${customerName}\n`;
    message += `Téléphone : ${customerPhone}\n`;
    message += `Adresse : ${customerAddress}\n`;
    message += `Ville : ${customerCity}\n`;
    if (customerNotes) {
        message += `Notes : ${customerNotes}\n`;
    }
    message += `\n🛍️ *Commande :*\n`;
    
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - Taille: ${item.size} - Qté: ${item.quantity} - ${(item.price * item.quantity).toFixed(2)} DH\n`;
    });
    
    message += `\n💰 *Total :*\n`;
    message += `Sous-total : ${subtotal.toFixed(2)} DH\n`;
    message += `Livraison : ${delivery} DH\n`;
    message += `*Total : ${total.toFixed(2)} DH*\n`;
    
    // Numéro WhatsApp
    const whatsappNumber = '21266428600'; // Format international sans + ni espaces
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Ouvrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Mettre à jour les stocks
    for (const item of cart) {
        const productIndex = products.findIndex(p => p.id == item.id);
        if (productIndex !== -1) {
            products[productIndex].stock[item.size] -= item.quantity;
        }
    }
    
    saveProducts(products);
    
    // Vider le panier
    localStorage.setItem('cart', JSON.stringify([]));
    
    // Mettre à jour l'affichage
    updateCartCount();
    
    // Recharger la page panier si on y est
    if (document.getElementById('cart-items-container')) {
        loadCartPage();
    } else {
        loadCartItems();
    }
    
    // Recharger les produits sur les autres pages
    if (document.getElementById('shop-products')) {
        loadShopProducts();
    }
    
    if (document.getElementById('home-products')) {
        loadFeaturedProducts();
    }
    
    showNotification('Commande envoyée ! Vous allez être redirigé vers WhatsApp.');
}

// ============================================
// SECTION 4: GESTION ADMINISTRATIVE
// ============================================

// Configurer les événements de l'admin
function setupAdminEvents() {
    // Gestionnaire d'événements pour le bouton d'ajout de produit
    const addProductBtn = document.getElementById('add-product-btn');
    if (addProductBtn) {
        addProductBtn.addEventListener('click', addNewProduct);
    }
    
    // Gestionnaire d'événements pour le bouton de réinitialisation des stocks
    const resetStockBtn = document.getElementById('reset-stock');
    if (resetStockBtn) {
        resetStockBtn.addEventListener('click', resetStock);
    }
    
    // Gestionnaire d'événements pour le bouton d'exportation des données
    const exportDataBtn = document.getElementById('export-data');
    if (exportDataBtn) {
        exportDataBtn.addEventListener('click', exportData);
    }
    
    // Gestionnaire pour sauvegarder les modifications
    const saveEditBtn = document.getElementById('save-edit-btn');
    if (saveEditBtn) {
        saveEditBtn.addEventListener('click', saveProductEdit);
    }
}

// Charger les statistiques
function loadStats() {
    const products = getProducts();
    
    // Total des produits
    const totalProductsElement = document.getElementById('total-products');
    if (totalProductsElement) {
        totalProductsElement.textContent = products.length;
    }
    
    // Produits en stock faible
    const lowStockElement = document.getElementById('low-stock');
    if (lowStockElement) {
        const lowStockCount = products.filter(product => {
            return product.stock.S < 5 || product.stock.M < 5 || 
                   product.stock.L < 5 || product.stock.XL < 5;
        }).length;
        lowStockElement.textContent = lowStockCount;
    }
    
    // Valeur totale du stock
    const totalValueElement = document.getElementById('total-value');
    if (totalValueElement) {
        const totalValue = products.reduce((sum, product) => {
            const totalStock = product.stock.S + product.stock.M + product.stock.L + product.stock.XL;
            return sum + (product.price * totalStock);
        }, 0);
        totalValueElement.textContent = `${totalValue.toFixed(2)}€`;
    }
}

// Charger les produits dans le tableau d'administration
function loadAdminProducts() {
    const tableBody = document.getElementById('admin-products-table');
    const loader = document.getElementById('admin-loader');
    
    if (!tableBody) return;
    
    // Simuler un chargement
    if (loader) loader.style.display = 'block';
    
    setTimeout(() => {
        const products = getProducts();
        
        tableBody.innerHTML = '';
        
        if (products.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="8" style="text-align: center; padding: 40px;">
                        <i class="fas fa-box-open" style="font-size: 3rem; color: #ccc; margin-bottom: 20px;"></i>
                        <h3>Aucun produit en stock</h3>
                        <p>Utilisez le formulaire ci-dessus pour ajouter des pyjamas</p>
                    </td>
                </tr>
            `;
        } else {
            products.forEach(product => {
                const row = document.createElement('tr');
                row.dataset.id = product.id;
                
                // Utiliser une image par défaut si aucune URL n'est fournie
                const imageUrl = product.image || `https://via.placeholder.com/60x60/F8BBD0/FFFFFF?text=Pyjama+${product.id}`;
                
                row.innerHTML = `
                    <td><img src="${imageUrl}" alt="${product.name}"></td>
                    <td>${product.name}</td>
                    <td>${product.price.toFixed(2)}€</td>
                    <td>
                        <span class="stock-value" data-id="${product.id}" data-size="S">${product.stock.S}</span>
                    </td>
                    <td>
                        <span class="stock-value" data-id="${product.id}" data-size="M">${product.stock.M}</span>
                    </td>
                    <td>
                        <span class="stock-value" data-id="${product.id}" data-size="L">${product.stock.L}</span>
                    </td>
                    <td>
                        <span class="stock-value" data-id="${product.id}" data-size="XL">${product.stock.XL}</span>
                    </td>
                    <td>
                        <button class="action-btn edit-btn" data-id="${product.id}">
                            <i class="fas fa-edit"></i> Modifier
                        </button>
                        <button class="action-btn delete-btn" data-id="${product.id}">
                            <i class="fas fa-trash"></i> Supprimer
                        </button>
                    </td>
                `;
                
                tableBody.appendChild(row);
            });
            
            // Ajouter des gestionnaires d'événements pour les boutons
            const editButtons = document.querySelectorAll('.edit-btn');
            const deleteButtons = document.querySelectorAll('.delete-btn');
            
            editButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = parseInt(this.dataset.id);
                    openEditModal(productId);
                });
            });
            
            deleteButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = parseInt(this.dataset.id);
                    deleteProduct(productId);
                });
            });
        }
        
        if (loader) loader.style.display = 'none';
    }, 500);
}

// Ajouter un nouveau produit
function addNewProduct() {
    // Récupérer les valeurs du formulaire
    const name = document.getElementById('product-name').value.trim();
    const price = parseFloat(document.getElementById('product-price').value);
    const image = document.getElementById('product-image').value.trim();
    const description = document.getElementById('product-description').value.trim();
    
    const stockS = parseInt(document.getElementById('stock-s').value) || 0;
    const stockM = parseInt(document.getElementById('stock-m').value) || 0;
    const stockL = parseInt(document.getElementById('stock-l').value) || 0;
    const stockXL = parseInt(document.getElementById('stock-xl').value) || 0;
    
    // Validation
    if (!name || isNaN(price) || price <= 0) {
        showAdminNotification('Veuillez remplir tous les champs obligatoires (nom et prix valide).', 'error');
        return;
    }
    
    // Récupérer l'ID suivant
    let nextId = parseInt(localStorage.getItem('nextProductId')) || 1;
    
    // Créer le nouvel objet produit
    const newProduct = {
        id: nextId,
        name: name,
        price: price,
        image: image || `https://via.placeholder.com/300x300/F8BBD0/FFFFFF?text=Pyjama+${nextId}`,
        description: description || 'Pyjama doux et confortable pour filles.',
        stock: {
            S: stockS,
            M: stockM,
            L: stockL,
            XL: stockXL
        }
    };
    
    // Récupérer les produits existants
    const products = getProducts();
    
    // Ajouter le nouveau produit
    products.push(newProduct);
    
    // Sauvegarder
    saveProducts(products);
    
    // Mettre à jour l'ID suivant
    localStorage.setItem('nextProductId', (nextId + 1).toString());
    
    // Réinitialiser le formulaire
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-image').value = '';
    document.getElementById('product-description').value = '';
    document.getElementById('stock-s').value = '10';
    document.getElementById('stock-m').value = '10';
    document.getElementById('stock-l').value = '10';
    document.getElementById('stock-xl').value = '10';
    
    // Mettre à jour l'affichage
    loadStats();
    loadAdminProducts();
    
    // Afficher une notification
    showAdminNotification(`Produit "${name}" ajouté avec succès !`);
}

// Ouvrir le modal de modification
function openEditModal(productId) {
    const products = getProducts();
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        showAdminNotification('Produit non trouvé.', 'error');
        return;
    }
    
    // Remplir le formulaire modal
    document.getElementById('edit-name').value = product.name;
    document.getElementById('edit-price').value = product.price;
    document.getElementById('edit-stock-s').value = product.stock.S;
    document.getElementById('edit-stock-m').value = product.stock.M;
    document.getElementById('edit-stock-l').value = product.stock.L;
    document.getElementById('edit-stock-xl').value = product.stock.XL;
    document.getElementById('edit-id').value = product.id;
    
    // Ouvrir le modal
    const modal = document.getElementById('edit-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (modal && modalOverlay) {
        modal.classList.add('active');
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Fermer le modal
function closeModal() {
    const modal = document.getElementById('edit-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (modal && modalOverlay) {
        modal.classList.remove('active');
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Sauvegarder les modifications d'un produit
function saveProductEdit() {
    const productId = parseInt(document.getElementById('edit-id').value);
    const name = document.getElementById('edit-name').value.trim();
    const price = parseFloat(document.getElementById('edit-price').value);
    
    const stockS = parseInt(document.getElementById('edit-stock-s').value) || 0;
    const stockM = parseInt(document.getElementById('edit-stock-m').value) || 0;
    const stockL = parseInt(document.getElementById('edit-stock-l').value) || 0;
    const stockXL = parseInt(document.getElementById('edit-stock-xl').value) || 0;
    
    // Validation
    if (!name || isNaN(price) || price <= 0) {
        showAdminNotification('Veuillez remplir tous les champs obligatoires.', 'error');
        return;
    }
    
    // Récupérer les produits
    const products = getProducts();
    const productIndex = products.findIndex(p => p.id === productId);
    
    if (productIndex === -1) {
        showAdminNotification('Produit non trouvé.', 'error');
        return;
    }
    
    // Mettre à jour le produit
    products[productIndex].name = name;
    products[productIndex].price = price;
    products[productIndex].stock.S = stockS;
    products[productIndex].stock.M = stockM;
    products[productIndex].stock.L = stockL;
    products[productIndex].stock.XL = stockXL;
    
    // Sauvegarder
    saveProducts(products);
    
    // Fermer le modal
    closeModal();
    
    // Mettre à jour l'affichage
    loadStats();
    loadAdminProducts();
    
    // Afficher une notification
    showAdminNotification(`Produit "${name}" modifié avec succès !`);
}

// Supprimer un produit
function deleteProduct(productId) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce produit ? Cette action est irréversible.')) {
        return;
    }
    
    // Récupérer les produits
    const products = getProducts();
    const productIndex = products.findIndex(p => p.id === productId);
    
    if (productIndex === -1) {
        showAdminNotification('Produit non trouvé.', 'error');
        return;
    }
    
    const productName = products[productIndex].name;
    
    // Supprimer le produit
    products.splice(productIndex, 1);
    
    // Sauvegarder
    saveProducts(products);
    
    // Mettre à jour l'affichage
    loadStats();
    loadAdminProducts();
    
    // Afficher une notification
    showAdminNotification(`Produit "${productName}" supprimé avec succès.`);
}

// Réinitialiser les stocks
function resetStock() {
    if (!confirm('Cette action réinitialisera tous les stocks à 10 unités par taille. Continuer ?')) {
        return;
    }
    
    // Récupérer les produits
    const products = getProducts();
    
    // Réinitialiser les stocks
    products.forEach(product => {
        product.stock.S = 10;
        product.stock.M = 10;
        product.stock.L = 10;
        product.stock.XL = 10;
    });
    
    // Sauvegarder
    saveProducts(products);
    
    // Mettre à jour l'affichage
    loadStats();
    loadAdminProducts();
    
    // Afficher une notification
    showAdminNotification('Tous les stocks ont été réinitialisés à 10 unités par taille.');
}

// Exporter les données
function exportData() {
    const products = getProducts();
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const data = {
        exportDate: new Date().toISOString(),
        totalProducts: products.length,
        products: products,
        currentCart: cart
    };
    
    // Créer un fichier JSON téléchargeable
    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `sweetdreams_data_${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    // Afficher une notification
    showAdminNotification('Données exportées avec succès !');
}

// ============================================
// SECTION 5: FONCTIONS D'AFFICHAGE ET NOTIFICATIONS
// ============================================

// Afficher une notification
function showNotification(message) {
    const notification = document.getElementById('add-to-cart-notification');
    if (!notification) {
        // Créer la notification si elle n'existe pas
        const newNotification = document.createElement('div');
        newNotification.className = 'notification';
        newNotification.id = 'add-to-cart-notification';
        newNotification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;
        document.body.appendChild(newNotification);
        setTimeout(() => {
            newNotification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            newNotification.classList.remove('show');
            setTimeout(() => newNotification.remove(), 300);
        }, 3000);
        return;
    }
    
    // Mettre à jour le message
    const notificationText = notification.querySelector('span');
    if (notificationText) {
        notificationText.textContent = message;
    }
    
    // Afficher la notification
    notification.classList.add('show');
    
    // Masquer après 3 secondes
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Afficher une notification pour le panier
function showCartNotification(message) {
    showNotification(message);
}

// Afficher une notification dans l'admin
function showAdminNotification(message, type = 'success') {
    const notification = document.getElementById('admin-notification');
    const notificationText = document.getElementById('admin-notification-text');
    
    if (!notification || !notificationText) return;
    
    // Mettre à jour le message
    notificationText.textContent = message;
    
    // Changer la couleur selon le type
    if (type === 'error') {
        notification.style.backgroundColor = '#ff6b6b';
    } else {
        notification.style.backgroundColor = '#51cf66';
    }
    
    // Afficher la notification
    notification.classList.add('active');
    
    // Masquer après 3 secondes
    setTimeout(() => {
        notification.classList.remove('active');
    }, 3000);
}

// ============================================
// SECTION 6: FONCTIONS UTILITAIRES SUPPLÉMENTAIRES
// ============================================

// Vider complètement le localStorage (pour le débogage)
function clearAllData() {
    if (confirm('ATTENTION: Cette action supprimera TOUTES les données. Continuer ?')) {
        localStorage.clear();
        location.reload();
    }
}

// Générer des données de test
function generateTestData() {
    // Ajouter 5 produits de test supplémentaires
    const products = getProducts();
    let nextId = parseInt(localStorage.getItem('nextProductId')) || 9;
    
    const testProducts = [
        {
            id: nextId++,
            name: "Pyjama Fée des Neiges",
            price: 32.99,
            image: "",
            description: "Pyjama blanc et argenté avec motif flocon, pour les nuits d'hiver.",
            stock: { S: 6, M: 8, L: 10, XL: 4 }
        },
        {
            id: nextId++,
            name: "Pyjama Papillon Coloré",
            price: 28.50,
            image: "",
            description: "Pyjama multicolore avec motifs papillons, joyeux et lumineux.",
            stock: { S: 9, M: 7, L: 5, XL: 3 }
        }
    ];
    
    products.push(...testProducts);
    saveProducts(products);
    localStorage.setItem('nextProductId', nextId.toString());
    
    // Recharger l'affichage
    if (document.querySelector('.products-grid')) {
        loadAllProducts();
    }
    if (document.querySelector('#admin-products-table')) {
        loadAdminProducts();
    }
    
    showNotification('Données de test ajoutées avec succès !');
}

// ============================================
// EXPOSITION DES FONCTIONS GLOBALES
// ============================================
// Ces fonctions sont exposées pour pouvoir être appelées depuis les boutons HTML
// ou depuis la console du navigateur pour le débogage
