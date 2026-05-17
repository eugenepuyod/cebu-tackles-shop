import { reactive } from 'vue'

export const store = reactive({
  cart: [],
  addToCart(product) {
    const item = this.cart.find(i => i.id === product.id)
    if (item) {
      item.quantity++
    } else {
      this.cart.push({ ...product, quantity: 1 })
    }
  },
  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId)
  },
  updateQuantity(productId, quantity) {
    const item = this.cart.find(i => i.id === productId)
    if (item) {
      item.quantity = quantity
    }
  },
  get cartTotal() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0)
  },
  get cartCount() {
    return this.cart.reduce((total, item) => total + item.quantity, 0)
  }
})
