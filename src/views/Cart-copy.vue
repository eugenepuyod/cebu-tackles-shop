<script setup>
import { computed } from 'vue'
import { store } from '../store'

const cartItems = computed(() => store.cart)
const cartTotal = computed(() => store.cartTotal)

const increaseQty = (item) => store.updateQuantity(item.id, item.quantity + 1)
const decreaseQty = (item) => {
  if (item.quantity > 1) {
    store.updateQuantity(item.id, item.quantity - 1)
  } else {
    store.removeFromCart(item.id)
  }
}
const removeItem = (item) => store.removeFromCart(item.id)
</script>

<template>
  <div class="py-16 bg-gray-50 min-h-[70vh]">
    <div class="w-full px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold mb-8 text-gray-900 border-b pb-4">Your Shopping Cart</h1>
      
      <div v-if="cartItems.length === 0" class="text-center py-20 bg-white rounded-xl shadow-sm">
        <div class="text-gray-400 mb-4">
          <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        </div>
        <h2 class="text-xl font-medium text-gray-900 mb-2">Your cart is empty</h2>
        <p class="text-gray-500 mb-6">Looks like you haven't added any gadgets yet.</p>
        <router-link to="/" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors duration-200">Start Shopping</router-link>
      </div>

      <div v-else class="flex flex-col lg:flex-row gap-8">
        <!-- Cart Items List -->
        <div class="lg:w-2/3 space-y-4">
          <div v-for="item in cartItems" :key="item.id" class="flex flex-col sm:flex-row items-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <img :src="item.image" :alt="item.name" class="w-24 h-24 object-contain mb-4 sm:mb-0 sm:mr-6 rounded-md bg-gray-50 p-2">
            <div class="flex-grow text-center sm:text-left">
              <h3 class="text-lg font-semibold text-gray-900">{{ item.name }}</h3>
              <p class="text-gray-500 text-sm mb-2">{{ item.category }}</p>
              <p class="text-blue-600 font-bold">${{ item.price.toLocaleString() }}</p>
            </div>
            
            <div class="flex items-center space-x-4 mt-4 sm:mt-0">
              <div class="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                <button @click="decreaseQty(item)" class="px-3 py-1 hover:bg-gray-200 text-gray-600 font-bold transition-colors">-</button>
                <div class="px-3 py-1 bg-white font-medium text-gray-900 w-12 text-center">{{ item.quantity }}</div>
                <button @click="increaseQty(item)" class="px-3 py-1 hover:bg-gray-200 text-gray-600 font-bold transition-colors">+</button>
              </div>
              <button @click="removeItem(item)" class="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="lg:w-1/3">
          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 sticky top-28">
            <h3 class="text-xl font-bold mb-6 text-gray-900">Order Summary</h3>
            <div class="space-y-4 mb-6 text-gray-600">
              <div class="flex justify-between">
                <span>Subtotal</span>
                <span>${{ cartTotal.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between">
                <span>Shipping</span>
                <span class="text-green-500 font-medium">Free</span>
              </div>
              <div class="flex justify-between">
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            <div class="border-t pt-4 mb-8">
              <div class="flex justify-between font-bold text-xl text-gray-900">
                <span>Total</span>
                <span class="text-blue-600">${{ cartTotal.toLocaleString() }}</span>
              </div>
            </div>
            <button class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-lg shadow-md transition-all transform active:scale-[0.98]">
              Proceed to Checkout
            </button>
            
            <div class="mt-6 flex justify-center space-x-2 opacity-60">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" class="h-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" class="h-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" class="h-6">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
