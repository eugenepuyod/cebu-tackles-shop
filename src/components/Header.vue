<script setup>
import { ShoppingCart, Menu, X, User, ShieldCheck, Truck, Award, Tag } from 'lucide-vue-next'
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import { useCartStore } from '../stores/cart'
import { useRoute } from 'vue-router'

const cartStore = useCartStore()
const isMobileMenuOpen = ref(false)
const openMobileMenus = ref({
  reels: false,
  rods: false,
  combos: false,
  lines: false
})
const toggleMenu = (menu) => {
  openMobileMenus.value[menu] = !openMobileMenus.value[menu]
}
const route = useRoute()

// Close mobile menu on route change implicitly via watch
watch(route, () => {
  isMobileMenuOpen.value = false
})

const Reels = ['Spinning', 'Overhead', 'Electric']
const Rods = ['Spinning', 'Overhead', 'Surf']
const Combos = ['Spinning', 'Overhead']
const Lines = ['Braid', 'Monofilament', 'Leader']

</script>

<template>
  <header class="sticky top-0 z-50 bg-white/100 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
    <div class="w-full px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        
        <!-- Mobile Menu Hamburger -->
        <div class="flex items-center md:hidden">
          <button @click="isMobileMenuOpen = true" class="text-gray-700 hover:text-blue-900 focus:outline-none focus:text-blue-900 p-2">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center justify-center md:justify-start flex-grow md:flex-grow-0">
          <router-link to="/" class="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-purple-600">
            <img src="/images/cts-logo.png" alt="" class="h-[70px] w-auto">
          </router-link>


          <!-- Desktop Navigation Menu -->
          <nav class="hidden md:flex space-x-8 items-center uppercase md:ml-[40px]">
            <!-- <router-link to="/" class="text-blue-950 hover:text-blue-600 font-medium transition-colors duration-200">Home</router-link> -->
            
            <!-- Reels Dropdown -->
            <div class="relative group py-6">
              <a href="/#reels" class="text-blue-950 group-hover:text-blue-900 font-medium transition-colors duration-200 flex items-center">
                Reels
                <svg class="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </a>
              <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pt-3">
                <!-- Triangle CSS Caret -->
                <div class="absolute top-[4px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-transparent border-b-gray-200 z-10"></div>
                <div class="absolute top-[5px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-transparent border-b-white z-20"></div>
                
                <div class="bg-white rounded-none shadow-xl border border-gray-100 py-2 relative text-left z-10 transform scale-95 group-hover:scale-100 transition-transform origin-top">
                  <a v-for="reel in Reels" :key="reel" href="/#categories" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors font-medium">
                    {{ reel }}
                  </a>
                </div>
              </div>
            </div>

            <!-- Rods Dropdown -->
            <div class="relative group py-6">
              <a href="/#rods" class="text-blue-950 group-hover:text-blue-900 font-medium transition-colors duration-200 flex items-center">
                Rods
                <svg class="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </a>
              <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pt-3">
                <!-- Triangle CSS Caret -->
                <div class="absolute top-[4px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-transparent border-b-gray-200 z-10"></div>
                <div class="absolute top-[5px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-transparent border-b-white z-20"></div>
                
                <div class="bg-white rounded-none shadow-xl border border-gray-100 py-2 relative text-left z-10 transform scale-95 group-hover:scale-100 transition-transform origin-top">
                  <a v-for="rod in Rods" :key="rod" href="/#featured" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors font-medium">
                    {{ rod }}
                  </a>
                </div>
              </div>
            </div>

            <!-- Combos Dropdown -->
            <div class="relative group py-6">
              <a href="/#brands" class="text-blue-950 group-hover:text-blue-900 font-medium transition-colors duration-200 flex items-center">
                Combos
                <svg class="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </a>
              <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pt-3">
                <!-- Triangle CSS Caret -->
                <div class="absolute top-[4px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-transparent border-b-gray-200 z-10"></div>
                <div class="absolute top-[5px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-transparent border-b-white z-20"></div>
                
                <div class="bg-white rounded-none shadow-xl border border-gray-100 py-2 relative text-left z-10 transform scale-95 group-hover:scale-100 transition-transform origin-top">
                  <a v-for="brand in Combos" :key="brand" href="/#brands" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors font-medium">
                    {{ brand }}
                  </a>
                </div>
              </div>
            </div>

            <!-- Lines Dropdown -->
            <div class="relative group py-6">
              <a href="/#brands" class="text-blue-950 group-hover:text-blue-900 font-medium transition-colors duration-200 flex items-center">
                Lines
                <svg class="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </a>
              <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pt-3">
                <!-- Triangle CSS Caret -->
                <div class="absolute top-[4px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-transparent border-b-gray-200 z-10"></div>
                <div class="absolute top-[5px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-transparent border-b-white z-20"></div>
                
                <div class="bg-white rounded-none shadow-xl border border-gray-100 py-2 relative text-left z-10 transform scale-95 group-hover:scale-100 transition-transform origin-top">
                  <a v-for="line in Lines" :key="line" href="/#brands" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors font-medium">
                    {{ line }}
                  </a>
                </div>
              </div>
            </div>

            <router-link to="/" class="text-blue-950 hover:text-blue-900 font-medium transition-colors duration-200">Contact</router-link>
          </nav>
        </div>

        

        <!-- Cart Icon -->
        <div class="flex items-center space-x-6">
          <router-link to="/login" class="text-blue-950 hover:text-blue-500 relative group transition-colors">
            <User class="w-6 h-6" />
          </router-link>

          <router-link to="/cart" class="text-blue-950 hover:text-blue-500 relative group transition-colors">
            <ShoppingCart class="w-6 h-6" />
            <span 
              v-if="cartStore.totalItemsCount > 0"
              class="absolute -top-2 -right-2 bg-blue-500 text-white text-[10px] font-bold rounded-full min-w-[20px] h-5 px-1 flex items-center justify-center animate-bounce shadow-md"
            >
              {{ cartStore.totalItemsCount }}
            </span>
          </router-link>

          <!-- Mobile Menu Button -->
          <!-- <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="lg:hidden text-blue-950 hover:text-blue-500 focus:outline-none transition-colors">
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button> -->
        </div>
        
      </div>
    </div>
  </header>

  <!-- Mobile Drawer Overlay -->
  <div v-show="isMobileMenuOpen" @click="isMobileMenuOpen = false" class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden" :class="isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"></div>

  <!-- Mobile Menu Drawer (Slide from Left) -->
  <div class="fixed inset-y-0 left-0 w-72 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out flex flex-col md:hidden" :class="isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'">
    <div class="p-6 border-b border-gray-100 flex items-center justify-between">
      <router-link to="/" class="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" @click="isMobileMenuOpen = false">
        <img src="/images/cts-logo.jpg" alt="" class="h-20 w-20">
      </router-link>
      <button @click="isMobileMenuOpen = false" class="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-100">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>
    
    <div class="overflow-y-auto flex-grow py-4 px-4 space-y-6">
      <div class="hidden">
         <router-link to="/" class="block text-lg font-bold text-blue-950 mb-2 py-2" @click="isMobileMenuOpen = false">Home</router-link>
      </div>

      <div class="border-t border-gray-100 pt-4">
        <button @click="toggleMenu('reels')" class="w-full flex items-center justify-between text-lg font-bold text-blue-950 mb-2 focus:outline-none">
          <span>Reels</span>
          <svg class="w-5 h-5 transition-transform duration-300 text-gray-400" :class="openMobileMenus.reels ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div class="grid transition-[grid-template-rows] duration-300 ease-in-out" :class="openMobileMenus.reels ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
          <div class="overflow-hidden">
            <div class="pl-4 space-y-3 border-l-2 border-gray-100 ml-2 mt-2 mb-2">
              <a v-for="reel in Reels" :key="reel" href="/#reels" class="block pl-4 text-blue-950 font-medium hover:text-blue-900" @click="isMobileMenuOpen = false">{{ reel }}</a>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-100 pt-4">
        <button @click="toggleMenu('rods')" class="w-full flex items-center justify-between text-lg font-bold text-blue-950 mb-2 focus:outline-none">
          <span>Rods</span>
          <svg class="w-5 h-5 transition-transform duration-300 text-gray-400" :class="openMobileMenus.rods ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div class="grid transition-[grid-template-rows] duration-300 ease-in-out" :class="openMobileMenus.rods ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
          <div class="overflow-hidden">
            <div class="pl-4 space-y-3 border-l-2 border-gray-100 ml-2 mt-2 mb-2">
              <a v-for="rod in Rods" :key="rod" href="/#rods" class="block pl-4 text-blue-950 font-medium hover:text-blue-900" @click="isMobileMenuOpen = false">{{ rod }}</a>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-100 pt-4">
        <button @click="toggleMenu('combos')" class="w-full flex items-center justify-between text-lg font-bold text-blue-950 mb-2 focus:outline-none">
          <span>Combos</span>
          <svg class="w-5 h-5 transition-transform duration-300 text-gray-400" :class="openMobileMenus.combos ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div class="grid transition-[grid-template-rows] duration-300 ease-in-out" :class="openMobileMenus.combos ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
          <div class="overflow-hidden">
             <div class="pl-4 space-y-3 border-l-2 border-gray-100 ml-2 mt-2 mb-2">
              <a v-for="combo in Combos" :key="combo" href="/#combos" class="block pl-4 text-blue-950 font-medium hover:text-blue-900" @click="isMobileMenuOpen = false">{{ combo }}</a>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-100 pt-4">
        <button @click="toggleMenu('lines')" class="w-full flex items-center justify-between text-lg font-bold text-blue-950 mb-2 focus:outline-none">
          <span>Lines</span>
          <svg class="w-5 h-5 transition-transform duration-300 text-gray-400" :class="openMobileMenus.lines ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div class="grid transition-[grid-template-rows] duration-300 ease-in-out" :class="openMobileMenus.lines ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
          <div class="overflow-hidden">
             <div class="pl-4 space-y-3 border-l-2 border-gray-100 ml-2 mt-2 mb-2">
              <a v-for="line in Lines" :key="line" href="/#lines" class="block pl-4 text-blue-950 font-medium hover:text-blue-900" @click="isMobileMenuOpen = false">{{ line }}</a>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>
