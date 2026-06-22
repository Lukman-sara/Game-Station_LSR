/**
 * ElectroStore - Modular LocalStorage Shopping Cart Logic
 */

const Cart = {
    getStorage() {
        const stored = localStorage.getItem('electro_store_cart');
        return stored ? JSON.parse(stored) : [];
    },

    setStorage(cartData) {
        localStorage.setItem('electro_store_cart', JSON.stringify(cartData));
        window.dispatchEvent(new Event('cartUpdated'));
    },

    addItem(productId, quantity = 1) {
        const cart = this.getStorage();
        const existingIndex = cart.findIndex(item => item.id === productId);
        
        if (existingIndex > -1) {
            cart[existingIndex].qty += quantity;
        } else {
            cart.push({ id: productId, qty: quantity });
        }
        
        this.setStorage(cart);
        this.triggerToast("Produk berhasil ditambahkan ke keranjang!");
    },

    removeItem(productId) {
        let cart = this.getStorage();
        cart = cart.filter(item => item.id !== productId);
        this.setStorage(cart);
    },

    updateQuantity(productId, newQty) {
        if (newQty <= 0) {
            this.removeItem(productId);
            return;
        }
        const cart = this.getStorage();
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.qty = parseInt(newQty);
            this.setStorage(cart);
        }
    },

    clear() {
        localStorage.removeItem('electro_store_cart');
        window.dispatchEvent(new Event('cartUpdated'));
    },

    getCalculations() {
        const cart = this.getStorage();
        let subtotal = 0;
        let totalItems = 0;

        cart.forEach(item => {
            const prod = products.find(p => p.id === item.id);
            if (prod) {
                subtotal += prod.price * item.qty;
                totalItems += item.qty;
            }
        });

        const tax = Math.round(subtotal * 0.11);
        const grandTotal = subtotal + tax;

        return { subtotal, tax, grandTotal, totalItems };
    },

    triggerToast(message) {
        const toast = document.createElement('div');
        toast.style.position = 'fixed';
        toast.style.bottom = '2rem';
        toast.style.left = '2rem';
        toast.style.backgroundColor = '#0B0F19';
        toast.style.color = '#FFFFFF';
        toast.style.padding = '1rem 2rem';
        toast.style.borderRadius = '8px';
        toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
        toast.style.zIndex = '9999';
        toast.style.fontWeight = '500';
        toast.innerText = message;
        
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
};