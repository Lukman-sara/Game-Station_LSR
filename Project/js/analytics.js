/**
 * ElectroStore - Business Intelligence Analytics Dummy Script
 */

function gtag(...args) {
    console.log(`%c[Google Analytics Event Log]`, 'color: #0057FF; font-weight: bold;', args);
}

// Inisialisasi konfigurasi dasar tracking ID
gtag('config', 'G-ELECTRO2026');

const AnalyticsTracker = {
    trackProductView(productId, productName) {
        gtag('event', 'view_item', { item_id: productId, item_name: productName });
    },
    trackAddToCart(productId, quantity) {
        gtag('event', 'add_to_cart', { item_id: productId, quantity: quantity });
    },
    trackCheckoutStep(stepName) {
        gtag('event', 'begin_checkout', { step: stepName });
    },
    trackPurchase(invoiceId, value) {
        gtag('event', 'purchase', { transaction_id: invoiceId, value: value, currency: 'IDR' });
    }
};