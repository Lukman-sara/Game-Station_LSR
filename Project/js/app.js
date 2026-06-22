/**
 * ElectroStore - Core Modular Main Orchestrator Interface Handler
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initHamburgerMenu();
    initBackToTop();
    updateCartBadgeGlobal();

    // Dengarkan perubahan data pada state management keranjang belanja
    window.addEventListener('cartUpdated', updateCartBadgeGlobal);
});

function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function initHamburgerMenu() {
    const burger = document.querySelector('.hamburger');
    const menu = document.querySelector('.nav-menu');
    if(burger) {
        burger.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }
}

function initBackToTop() {
    const btt = document.querySelector('.back-to-top');
    if(btt) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                btt.classList.add('visible');
            } else {
                btt.classList.remove('visible');
            }
        });
        btt.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

function updateCartBadgeGlobal() {
    const badge = document.querySelector('.cart-badge');
    if(badge) {
        const calcs = Cart.getCalculations();
        badge.innerText = calcs.totalItems;
    }
}

function formatRupiahGlobal(num) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(num);
}

// MANAGEMENT GENERATOR MODAL DETAIL PRODUK
function openProductDetailModal(productId) {
    const prod = products.find(p => p.id === productId);
    if (!prod) return;

    AnalyticsTracker.trackProductView(prod.id, prod.name);

    const overlay = document.createElement('div');
    overlay.className = 'modal-detail-overlay';
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(11, 15, 25, 0.6); backdrop-filter: blur(8px);
        z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 2rem;
    `;

    overlay.innerHTML = `
        <div class="modal-detail-card" style="background: #FFF; width: 100%; max-width: 850px; border-radius: 24px; padding: 2.5rem; display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; position: relative; box-shadow: 0 30px 60px rgba(0,0,0,0.15);">
            <button class="close-modal-btn" style="position: absolute; top: 1.5rem; right: 1.5rem; background: #F4F6FA; width: 40px; height: 40px; border-radius: 50%; font-size: 1.2rem; font-weight: bold;">✕</button>
            <div>
                <img src="${prod.image}" alt="${prod.name}" style="width: 100%; height: 350px; object-fit: cover; border-radius: 16px;">
            </div>
            <div style="display: flex; flex-direction: column; justify-content: center;">
                <span style="color: #0057FF; font-weight: 600; font-size: 0.85rem; text-transform: uppercase;">${prod.category} • ${prod.brand}</span>
                <h2 style="font-size: 1.8rem; font-weight: 700; margin: 0.5rem 0 1rem 0; line-height: 1.2;">${prod.name}</h2>
                <div style="color: #F59E0B; margin-bottom: 1rem;"><i class="fa-solid fa-star"></i> ${prod.rating}</div>
                <p style="color: #6C7A93; font-size: 0.95rem; margin-bottom: 1.5rem;">${prod.description}</p>
                <div style="font-size: 0.9rem; margin-bottom: 1.5rem; font-weight: 500;">Sisa Stok Tersedia: <span style="color: #10B981; font-weight: bold;">${prod.stock} Unit</span></div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 1.5rem; border-top: 1px solid #E2E8F0;">
                    <div style="font-size: 1.6rem; font-weight: 700;">${formatRupiahGlobal(prod.price)}</div>
                    <button class="btn-modal-add" style="background: #0057FF; color:#FFF; padding: 1rem 2rem; border-radius: 12px; font-weight: 600;">Add To Cart</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector('.close-modal-btn').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => { if(e.target === overlay) overlay.remove(); });
    overlay.querySelector('.btn-modal-add').addEventListener('click', () => {
        Cart.addItem(prod.id, 1);
        AnalyticsTracker.trackAddToCart(prod.id, 1);
        overlay.remove();
    });
}