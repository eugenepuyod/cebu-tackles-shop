<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { ArrowRight, Star, StarHalf, Quote, ChevronRight, ChevronLeft, Heart, ShoppingBag, Users, Award } from 'lucide-vue-next'
import { useCartStore, bundleCatalogs } from '../stores/cart'
import { bundleMarketing, bundleProducts } from '../data/products'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';

const cartStore = useCartStore()
const swiperModules = [Autoplay, EffectFade, Navigation, Pagination]

const products = ref([
  { id: 1, name: 'iPhone 15 Pro Max', category: 'Cellphones', price: 1199, image: '/iphone.png' },
  { id: 2, name: 'Samsung Galaxy S24 Ultra', category: 'Cellphones', price: 1299, image: '/samsung.png' },
  { id: 3, name: 'AirPods Pro 2', category: 'Accessories', price: 249, image: '/iphone.png' },
  { id: 4, name: 'Galaxy Watch 6', category: 'Gadgets', price: 299, image: '/samsung.png' },
  { id: 5, name: 'Google Pixel 8 Pro', category: 'Cellphones', price: 999, image: '/samsung.png' },
  { id: 6, name: 'Sony WH-1000XM5', category: 'Accessories', price: 398, image: '/iphone.png' },
  { id: 7, name: 'OnePlus 12', category: 'Cellphones', price: 799, image: '/samsung.png' },
  { id: 8, name: 'Apple iPad Pro', category: 'Gadgets', price: 1099, image: '/iphone.png' },
])

const featuredSlider = ref(null)

const scrollFeatured = (dir) => {
  if (featuredSlider.value) {
    const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.8 : 340;
    featuredSlider.value.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' })
  }
}

const categoriesSlider = ref(null)

const scrollCategories = (dir) => {
  if (categoriesSlider.value) {
    const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.8 : 340;
    categoriesSlider.value.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' })
  }
}

const videosArticlesSlider = ref(null)

const scrollvideosArticles = (dir) => {
  if (videosArticlesSlider.value) {
    const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.8 : 340;
    videosArticlesSlider.value.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' })
  }
}

const categories = [
  { name: 'Reels', image: '/images/cat-reels-4.jpg', shortDesc: 'Spinning, overhead & electric', link: '/shop?tag=Reels' },
  { name: 'Rods', image: '/images/cat-rod-bend.jpg', shortDesc: 'Spinning, overhead & Surf', link: '/shop?tag=Rods' },
  { name: 'Combos', image: '/images/cat-combos.jpg', shortDesc: 'Spinning & overhead', link: '/shop?tag=Combos' },
  { name: 'Lines', image: '/images/cat-lines-braided-2.jpg', shortDesc: 'Braid, monofilament & leader', link: '/shop?tag=Lines' },
  { name: 'Accessories', image: '/images/cat-accessories-2.jpg', shortDesc: 'Rod & reel care', link: '/shop?tag=Accessories' },
]

const featured = [
  { id: 101, name: 'Shimano Stella SW', rating: 5, totalRating: 200, price: 999.00, category: 'Fishing Reels', tags: ['Saltwater', 'Premium', 'New', 'BestSeller'], image: '/images/shimano-fishing-stella-sw-xgc-spinning-reel.webp', shortDesc: 'Spinning, overhead & electric' },
  { id: 102, name: 'Daiwa Saltiga', rating: 3.5, totalRating: 200, price: 1100.00, category: 'Fishing Reels', tags: ['Saltwater', 'Heavy Duty', 'New'], image: '/images/daiwa-saltiga-g-2023-jigging-reel.webp', shortDesc: 'Spinning, overhead & Surf' },
  { id: 103, name: 'Okuma Makaira', rating: 4.5, totalRating: 30, stock: 10, brand: 'Okuma', price: 1100.00, category: 'Trolling Reels', tags: ['Trolling', 'Heavy'], image: '/images/okuma-makaira-trolling-reel.webp', shortDesc: 'Spinning & overhead' },
  { id: 104, name: 'Penn Authority', price: 550.00, category: 'Fishing Reels', tags: ['Saltwater', 'Durable', 'New'], image: '/images/penn-authority-spinning-reel.webp', shortDesc: 'Braid, monofilament & leader' },
  { id: 202, name: 'Daiwa Proteus', rating: 3.5, totalRating: 200, price: 180.00, category: 'Fishing Rods', tags: ['Boat', 'Heavy Duty'], image: '/images/daiwa-proteus.webp', shortDesc: 'Rod & reel care' },
]

const videosArticles = [
  { name: 'Reels', image: '/images/cat-reels-4.jpg', shortDesc: 'Spinning, overhead & electric' },
  { name: 'Rods', image: '/images/cat-rod-bend.jpg', shortDesc: 'Spinning, overhead & Surf' },
  { name: 'Combos', image: '/images/cat-combos.jpg', shortDesc: 'Spinning & overhead' },
  { name: 'Lines', image: '/images/cat-lines-braided-2.jpg', shortDesc: 'Braid, monofilament & leader' },
  { name: 'Accessories', image: '/images/cat-accessories-2.jpg', shortDesc: 'Rod & reel care' },
]




const testimonials = [
  { id: 1, text: "Fastest delivery ever! My new iPhone arrived in perfect condition. Highly recommended.", author: "Jane Doe" },
  { id: 2, text: "The parallax design of this store is amazing, buying my Galaxy S24 was a breeze.", author: "John Smith" },
  { id: 3, text: "Great customer service and amazing prices on gadgets.", author: "Emily Chen" }
]

// Duplicate brands to make the infinite marquee smooth
const brands = ['Shimano', 'Daiwa', 'Penn', 'Okuma', 'Rapala', 'Yozuri', 'Mustad',]

const slides = ref([
  {
    id: 1,
    type: 'video',
    src: '/video/banner-video.mp4',
    titlePrefix: 'Cast Far.',
    titleAccent: 'Reel Big.',
    titleAccent2: 'Conquer the Ocean.',
    text: 'Engineered for distance, strength, and saltwater durability.'
  },
  {
    id: 2,
    type: 'image',
    src: '/images/cat-combos.jpg',
    titlePrefix: 'Ready for',
    titleAccent: 'Your Next',
    titleAccent2: 'Big Catch?',
    text: 'Upgrade your gear with high-quality rods, reels, and tackle.'
  },
  {
    id: 3,
    type: 'video',
    src: '/video/middle-in-ocean.mp4',
    titlePrefix: 'Take Your',
    titleAccent: 'Fishing',
    titleAccent2: 'Further',
    text: 'Gear up for serious fishing wherever the ocean takes you.'
  }
])


const partners = [
  { name: 'Shimano', logo: '/images/shimano-logo.png' },
  { name: 'Daiwa', logo: '/images/daiwa-logo.png' },
  { name: 'Penn', logo: '/images/penn-logo.png' },
  { name: 'Okuma', logo: '/images/okuma-logo.png' },
  { name: 'Mustad', logo: '/images/mustad-logo.png' },
  { name: 'Rapala', logo: '/images/rapala-logo.png' },
  { name: 'Yo-Zuri', logo: '/images/yo-zuri-logo.png' }
]

const activeSlide = ref(0)
const isPaused = ref(false)
let interval = null
let sliderInterval = null

const nextSlide = () => {
  activeSlide.value =
    (activeSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
  activeSlide.value =
    (activeSlide.value - 1 + slides.value.length) % slides.value.length
}

const setSlide = (i) => {
  activeSlide.value = i
  isPaused.value = true // keep paused after user interaction
}

const resetInterval = () => {
  if (sliderInterval) clearInterval(sliderInterval)
  sliderInterval = setInterval(nextSlide, 7000)
}

const startAutoSlide = () => {
  clearInterval(interval)

  interval = setInterval(() => {
    if (!isPaused.value) {
      nextSlide()
    }
  }, 7000)
}

const pauseAutoSlide = () => {
  isPaused.value = true
}

const resumeAutoSlide = () => {
  isPaused.value = false
}

// const addToCart = (product) => {
//   store.addToCart(product)
// }

// onMounted(() => {
//   sliderInterval = setInterval(nextSlide, 7000)
// })
onMounted(() => {
  startAutoSlide()
})

onBeforeUnmount(() => {
  clearInterval(interval)
})


// import { onUnmounted } from 'vue'

// onUnmounted(() => {
//   if (sliderInterval) clearInterval(sliderInterval)
// })
</script>

<template>
  <div class="w-full">
    <!-- Hero Slider Segment (Images and Video) -->
    <section class="relative h-[50vh] md:h-[85vh] flex items-center justify-center group overflow-hidden bg-gray-900"
      @mouseenter="pauseAutoSlide"
      @mouseleave="resumeAutoSlide"
    >
      <transition name="fade" mode="out-in">
        <div
          v-if="slides[activeSlide]"
          :key="slides[activeSlide].id"
          class="absolute inset-0 w-full h-full"
        >

          <video
            v-if="slides[activeSlide].type === 'video'"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
            class="absolute inset-0 w-full h-full object-cover object-center z-0"
          >
            <source :src="slides[activeSlide].src" type="video/mp4" />
          </video>

          <img
            v-else
            :src="slides[activeSlide].src"
            class="absolute inset-0 w-full h-full object-cover object-center z-0"
            :class="slides[activeSlide].type === 'image' ? 'zoom-image' : ''"
          />

          
          <div class="absolute inset-0 bg-black/40 z-10"></div>

          <div class="z-20 absolute text-left left-none md:left-[20%] bottom-[20%] md:max-w-xs px-4 md:px-0">
            <h2 class="text-3xl md:text-6xl font-bold text-white tracking-tight leading-tight uppercase">
              {{ slides[activeSlide].titlePrefix }}
              <span class=""><br>
                {{ slides[activeSlide].titleAccent }}
              </span>
              <span class=""><br>
                {{ slides[activeSlide].titleAccent2 }}
              </span>
            </h2>

            <p class="mt-4 text-md md:text-2xl text-white uppercase">
              {{ slides[activeSlide].text }}
            </p>
          </div>

        </div>
      </transition>

      <!-- Slider Nav Controls -->
      <button @click="prevSlide" class="hidden absolute left-4 md:left-10 z-20 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur transition-all border border-white/20 hover:scale-110">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <button @click="nextSlide" class="hidden absolute right-4 md:right-10 z-20 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur transition-all border border-white/20 hover:scale-110">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      </button>

      <!-- Pagination Indicators -->
      <div class="absolute bottom-10 z-20 flex space-x-4">
        <button v-for="(slide, i) in slides" :key="'dot-'+i" @click="setSlide(i)" 
          class="w-3 h-3 rounded-full transition-all duration-300" :class="activeSlide === i ? 'bg-white scale-150 w-6' : 'bg-white/50 hover:bg-white'"></button>
      </div>
    </section>

    <!-- Categories Section -->
    <section id="categories" class="py-5 md:py-10 md:pt-20 bg-white relative">
      <div class="w-full px-4 sm:px-6 lg:px-8 relative z-10 
                  grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
        
        <!-- Left Sidebar -->
        <div class="lg:col-span-1 flex flex-col justify-start" v-intersect>
          <div>
            <h2 class="text-3xl lg:text-5xl font-extrabold text-left mb-3 md:mb-6 text-blue-950 tracking-tight leading-tight capitalize">
              TOP<br/>
              <span>CATEGORIES</span>
            </h2>

            <p class="text-md md:text-2xl text-blue-950 mb-0 md:mb-10 font-medium leading-relaxed uppercase">
              Everything you need for the perfect catch from reels, rods, and combos to lines and essential accessories, all built for performance and reliability.
            </p>
          </div>
        </div>

        <!-- Right Container -->
        <div class="lg:col-span-3">
          <!-- Swiper -->
          <Swiper
            :modules="swiperModules"
            :slidesPerView="1"
            :spaceBetween="20"
            :breakpoints="{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 3, spaceBetween: 30 }
            }"
            :loop="true"
            :navigation="{ prevEl: '.prevElCat', nextEl: '.nextElCat' }"

            :speed="600"
            :grabCursor="true"
            :freeMode="true"
            :freeModeMomentum="true"
            :freeModeMomentumRatio="0.5"
            :freeModeMomentumVelocityRatio="0.8"
            :touchRatio="1"
            :touchAngle="45"
            
            class="pb-5 md:pb-12 pt-4 w-full"
          >
            <SwiperSlide
              v-for="(cat, index) in categories"
              :key="cat.name"
              class="
                flex-none w-[85vw] sm:w-[50vw] md:w-[320px] 
                text-left cursor-pointer 
                transition-all duration-500 
                group transform snap-start flex flex-col items-start justify-center 
                min-h-[250px]
              "
            >
              <div
                v-intersect
                :style="`transition-delay: ${index * 100}ms`"
                class="
                  text-left cursor-pointer 
                  transition-all duration-500 
                  group transform hover:-translate-y-2
                  flex flex-col items-start justify-center
                "
              >
                <router-link :to="cat.link">
                  <img :src="cat.image" alt="" class="w-full aspect-square object-cover">
                </router-link>

                <h3 class="uppercase mt-[15px] text-xl md:text-2xl font-bold text-blue-950 group-hover:text-blue-900 transition-colors">
                  {{ cat.name }}
                </h3>

                <p class="text-blue-950 text-md md:text-xl">{{ cat.shortDesc }}</p>
              </div>
            </SwiperSlide>
          </Swiper>

          <div class="flex space-x-4 mt-4 lg:mt-7 lg:px-0 w-full justify-start">
              <button aria-label="Previous Category" 
                class="prevElCat p-4 bg-white border border-gray-200 text-gray-800 hover:text-blue-900 hover:bg-blue-50 hover:border-blue-300 
                shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] transition-all transform hover:-translate-x-1 
                outline-none
                ">
                <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button aria-label="Next Category" class="nextElCat p-4 bg-white border border-gray-200 text-gray-800 hover:text-blue-900 hover:bg-blue-50 hover:border-blue-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] transition-all transform hover:translate-x-1 outline-none">
                <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
          </div>

        </div>
      </div>
    </section>

    <!-- First Parallax  Section -->
    <section 
      class="py-32 relative flex items-center justify-center overflow-hidden min-h-150  lg:min-h-175 
        bg-fixed bg-no-repeat bg-cover bg-[position:center_-10px] md:bg-[position:center_27%]" 
        style="background-image: url('/images/cts-team-2.jpg');
    ">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-blue-400/20"></div>

      <div v-intersect class="absolute lg:left-[20%] bottom-[5%] sm:bottom-[10%] md:max-w-2xl lg:max-w-3xl mx-4 lg:mx-auto bg-white/40 sm:bg-white p-5 lg:p-10 z-10">
        <div class="grid sm:grid-cols-[65%_35%] md:grid-cols-[75%_25%] items-center justify-between gap-none md:gap-2 pb-5 lg:pb-10">
          <!-- Center Content -->
          <div class="text-left">
            <span class="text-blue-950 font-extrabold text-sm md:text-lg tracking-widest uppercase mb-4 block">
              TRUSTED TACKLE. PROVEN PERFORMANCE.
            </span>

            <h2 class="text-2xl md:text-5xl font-black text-blue-950 mb-4 md:mb-6 tracking-tight leading-tight uppercase">
              Cebu Tackle Shop
            </h2>

            <p class="text-sm text-blue-950 font-medium uppercase">
              We offer premium-quality rods, reels, tackle, and accessories from trusted brands known for performance and durability.
            </p>
          </div>

          <!-- Right Logo -->
          <div class="hidden sm:flex">
            <div class="w-[100px] h-[100px] pt-2 sm:w-[150px] sm:h-[150px] sm:pt-0 overflow-hidden flex items-center justify-center">
            <img
              src="/images/cts-logo-6.png"
              alt=""
              class="w-full h-full object-contain"
            />
          </div>
          </div>

        </div>
        <div class="flex grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-10">
          <router-link
            to="/shop"
            class="bg-blue-950 text-white font-extrabold py-4 px-12 text-center justify-center
            shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(59,130,246,0.4)] transition-all duration-300 
            transform hover:-translate-y-1 hover:scale-105 active:scale-95 flex uppercase
            ">
            Shop Now
          </router-link>
        </div>
      </div>

    </section>



    <!-- Auto Play Full Video -->
    <!-- Horizontan devider -->
    <section><div class="h-7 bg-white"></div></section>
    <section 
      class="py-32 relative flex items-center justify-center overflow-hidden
        bg-white sticky top-0 h-[70vh] lg:h-[100vh]
      ">
       <div class="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-blue-400/20"></div>
       <video
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          class="absolute inset-0 w-full h-full object-cover object-center bg-fixed bg-no-repeat bg-cover z-0"
        >
          <source src="/video/banner-video.mp4" type="video/mp4" />
        </video>

       <div v-intersect class="absolute lg:left-[20%] bottom-[5%] sm:bottom-[20%] lg:bottom-[25%] md:max-w-2xl lg:max-w-3xl mx-4 lg:mx-auto bg-white/20 p-5 lg:p-10 z-10">
        <div class="grid sm:grid-cols-[65%_35%] md:grid-cols-[75%_25%] items-center justify-between gap-none md:gap-2 pb-5 lg:pb-10">
          <!-- Center Content -->
          <div class="text-left">
            <span class="text-white font-extrabold text-sm md:text-lg tracking-widest uppercase mb-4 block">
              Performance you can trust. Power you can feel.
            </span>

            <h2 class="text-2xl md:text-2xl font-black text-white mb-4 md:mb-6 uppercase">
              Fishing gear built to handle every cast, strike, and battle.
            </h2>

            <p class="text-md text-white font-medium uppercase">
              We offer top-tier fishing tackle engineered for serious anglers. Every rod, reel, and accessory is selected for maximum durability, precision control, and real-world reliability because every catch counts.
            </p>
          </div>

          <!-- Right Logo -->
          <div class="w-[150px] h-[150px] overflow-hidden relative hidden md:inline">
              <img
                src="/images/online-shipping-design.png"
                alt=""
                class="absolute max-w-none w-[590%] h-[220%] object-none bottom-0 right-0"
              >
            </div>

        </div>

        <div class="flex grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-10">
          <router-link 
            to="/shop"
            class="bg-blue-950 text-white font-extrabold py-4 px-12 
            shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(59,130,246,0.4)] transition-all duration-300 
            transform hover:-translate-y-1 hover:scale-105 active:scale-95 flex uppercase items-center justify-center
            ">
            Shop Now
          </router-link>

          <router-link 
            to="/about"
            class="bg-white text-blue-900 font-extrabold py-4 px-12 
            shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(59,130,246,0.4)] transition-all duration-300 
            transform hover:-translate-y-1 hover:scale-105 active:scale-95 flex uppercase items-center justify-center opacity-85
            ">
            Learn More
          </router-link>
        </div>

       </div>
    </section>





    <!-- Two images full -->
    <section>
  <div class="relative w-full bg-white pt-[30px]">
    <div class="mx-3 grid grid-cols-1 md:grid-cols-2 gap-5">

      <!-- IMAGE 1 -->
      <div class="relative w-full h-[50vh] sm:h-[60vh] lg:h-[80vh] overflow-hidden">
        <img 
          src="/images/shimano-stella.jpg" 
          alt="" 
          class="w-full h-full object-cover"
        >

        <!-- Overlay Text -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30">
          <h2 class="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
            Premium Fishing Gear
          </h2>

          <p class="mt-3 text-white text-sm sm:text-base lg:text-lg max-w-md">
            Experience unmatched performance and precision on every cast.
          </p>
        </div>
      </div>

      <!-- IMAGE 2 -->
      <div class="relative w-full h-[50vh] sm:h-[60vh] lg:h-[80vh] overflow-hidden">
        <img 
          src="/images/shimano-stella-2.jpg" 
          alt="" 
          class="w-full h-full object-cover"
        >

        <!-- Overlay Text -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30">
          <h2 class="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
            Shimano Stella
          </h2>

          <p class="mt-3 text-white text-sm sm:text-base lg:text-lg max-w-md">
            Built for anglers who demand excellence and durability.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>





    <!-- Featured Products Section -->
    <section id="featured" class="py-5 md:py-10 md:pt-20 bg-white relative">
      <div class="w-full px-4 sm:px-6 lg:px-8 relative z-10 
                  grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
        <!-- Right Container -->
        <div class="lg:col-span-3 order-2 lg:order-1 flex-col h-full">
          <!-- Swiper -->
          <Swiper
            :modules="swiperModules"
            :slidesPerView="1"
            :spaceBetween="20"

            :breakpoints="{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 3, spaceBetween: 30 }
            }"

            :loop="true"
            :navigation="{ prevEl: '.prevElFeatured', nextEl: '.nextElFeatured' }"

            :speed="600"
            :grabCursor="true"
            :freeMode="true"
            :freeModeMomentum="true"
            :freeModeMomentumRatio="0.5"
            :freeModeMomentumVelocityRatio="0.8"
            :touchRatio="1"
            :touchAngle="45"

            class="pb-5 md:pb-12 pt-4 w-full"
          >
            <SwiperSlide
              v-for="(feature, index) in featured"
              :key="feature.name"
              class="
                flex-none w-[85vw] sm:w-[50vw] md:w-[320px] 
                text-left cursor-pointer 
                transition-all duration-500 
                group transform snap-start flex flex-col items-start justify-center 
                min-h-[250px]
              "
            >
              <div
                v-intersect
                :style="`transition-delay: ${index * 100}ms`"
                class="
                  text-left cursor-pointer 
                  transition-all duration-500 
                  group transform hover:-translate-y-2
                  flex flex-col items-start justify-center
                "
              >
                <router-link
                  :to="`/product/${feature.id}`"
                >
                <img :src="feature.image" alt="" class="w-full aspect-square object-cover" />
                </router-link>
                
                <div class="grid grid-cols-1 items-center justify-between gap-4 w-full p-2">
                  <div class="w-full">
                    <h3 class="uppercase mt-[15px] text-3xl font-bold text-blue-950">
                      ₱{{ feature.price.toFixed(2) }}
                    </h3>
                    <p class="text-blue-950 text-lg">
                      {{ feature.name }}
                    </p>
                  </div>
                  <div class="">
                    <button 
                      @click.prevent="cartStore.addItem(feature, 1)"
                      class="bg-blue-950 text-white font-extrabold py-4 text-center items-center justify-center
                        shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(59,130,246,0.4)] transition-all duration-300 
                        transform hover:-translate-y-1 hover:scale-105 active:scale-95 flex uppercase mb-5 w-full lg:w-3/4
                      "
                    >
                      <ShoppingBag class="w-4 h-4 mr-2" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          </Swiper>

          <div class="mt-4 lg:mt-7 lg:px-0 w-full">
            <div class="relative overflow-hidden h-16 w-full">
              <div id="leftButtons" class="flex space-x-4 absolute top-0 left-0 block lg:hidden">
                <button aria-label="Previous Featured" 
                  class="prevElFeatured p-4 bg-white border border-gray-200 text-gray-800 hover:text-blue-900 hover:bg-blue-50 hover:border-blue-300 
                  shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] transition-all transform hover:-translate-x-1 
                  outline-none
                  ">
                  <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button aria-label="Next Featured" class="nextElFeatured p-4 bg-white border border-gray-200 text-gray-800 hover:text-blue-900 hover:bg-blue-50 hover:border-blue-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] transition-all transform hover:translate-x-1 outline-none">
                  <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </div>

              <div id="rightButtons" class="flex space-x-4 absolute top-0 right-2 hidden lg:block">
                <button aria-label="Previous Featured" 
                  class="prevElFeatured p-4 bg-white border border-gray-200 text-gray-800 hover:text-blue-900 hover:bg-blue-50 hover:border-blue-300 
                  shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] transition-all transform hover:-translate-x-1 
                  outline-none
                  ">
                  <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button aria-label="Next Featured" class="nextElFeatured p-4 bg-white border border-gray-200 text-gray-800 hover:text-blue-900 hover:bg-blue-50 hover:border-blue-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] transition-all transform hover:translate-x-1 outline-none">
                  <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </div>
            </div>
          </div>

        </div>

        <!-- Left Sidebar -->
        <div class="lg:col-span-1 order-1 lg:order-2 flex flex-col justify-start" v-intersect>
          <div>
            <h2 class="text-3xl lg:text-5xl font-extrabold text-left mb-3 md:mb-6 text-blue-950 tracking-tight leading-tight uppercase">
              Featured<br/>
              <span>Products</span>
            </h2>

            <p class="text-md md:text-2xl text-blue-950 mb-0 md:mb-10 font-medium leading-relaxed uppercase">
              Explore our featured fishing gear handpicked rods, reels, tackle, and accessories trusted by anglers for performance, durability, and every kind of catch.
            </p>
          </div>
        </div>

      </div>
    </section>



    <!-- Two images full -->
    <section 
    class="py-32 relative flex items-center justify-center overflow-hidden min-h-150  lg:min-h-175 
    bg-fixed bg-no-repeat bg-cover bg-[position:center_10px] md:bg-[position:center_27%]" 
    style="background-image: url('/images/oj-fcustom.jpg');
    ">
      <div class="absolute inset-0 bg-gradient-to-br from-black/20 to-blue-400/20"></div>
      <!-- DARK OVERLAY -->
      <div class="absolute inset-0 bg-black/35"></div>

      <!-- CENTER TEXT -->
      <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

        <!-- HEADER -->
        <h1 class="text-white text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide">
          OCEA JIGGER F CUSTOM
        </h1>

        <!-- SUB HEADER -->
        <p class="mt-4 text-white text-sm sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
          Precision engineering and unmatched durability designed for serious anglers.
        </p>
      </div>

    </section>



    <!-- VIDEOS, ARTICLES & ADVICE 1 -->
    <section id="videosArticle" class="py-5 md:py-10 md:pt-20 bg-white relative">
      <div class="w-full px-4 sm:px-6 lg:px-8 relative z-10 
                  grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
        
        <!-- Left Sidebar -->
        <div class="lg:col-span-1 flex flex-col justify-start" v-intersect>
          <div>
            <h2 class="text-3xl lg:text-5xl font-extrabold text-left mb-3 md:mb-6 text-blue-950 tracking-tight leading-tight uppercase">
              Videos<br/>
              <span>ARTICLES & ADVICE</span>
            </h2>

            <p class="text-md md:text-2xl text-blue-950 mb-0 md:mb-10 font-medium leading-relaxed uppercase">
              Explore our featured fishing gear handpicked rods, reels, tackle, and accessories trusted by anglers for performance, durability, and every kind of catch.
            </p>
          </div>
        </div>

        <!-- Right Container -->
        <div class="lg:col-span-3">
          <!-- Swiper -->
          <Swiper
            :modules="swiperModules"
            :slidesPerView="1"
            :spaceBetween="20"
            :breakpoints="{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 3, spaceBetween: 30 }
            }"
            :loop="true"
            :navigation="{ prevEl: '.prevElvideosArticles', nextEl: '.nextElvideosArticles' }"

            :speed="600"
            :grabCursor="true"
            :freeMode="true"
            :freeModeMomentum="true"
            :freeModeMomentumRatio="0.5"
            :freeModeMomentumVelocityRatio="0.8"
            :touchRatio="1"
            :touchAngle="45"
            
            class="pb-5 md:pb-12 pt-4 w-full"
          >
            <SwiperSlide
              v-for="(videosArticle, index) in videosArticles"
              :key="videosArticle.name"
              class="
                flex-none w-[85vw] sm:w-[50vw] md:w-[320px] 
                text-left cursor-pointer 
                transition-all duration-500 
                group transform snap-start flex flex-col items-start justify-center 
                min-h-[250px]
              "
            >
              <div
                v-intersect
                :style="`transition-delay: ${index * 100}ms`"
                class="
                  text-left cursor-pointer 
                  transition-all duration-500 
                  group transform hover:-translate-y-2
                  flex flex-col items-start justify-center
                "
              >
                <img :src="videosArticle.image" alt="" class="w-full aspect-square object-cover">

                <h3 class="uppercase mt-[15px] text-xl md:text-2xl font-bold text-blue-950 group-hover:text-blue-900 transition-colors">
                  {{ videosArticle.name }}
                </h3>

                <p class="text-blue-950 text-md md:text-xl">{{ videosArticle.shortDesc }}</p>
              </div>
            </SwiperSlide>
          </Swiper>

          <div class="flex space-x-4 mt-4 lg:mt-7 lg:px-0 w-full justify-start">
              <button aria-label="Previous Videos" 
                class="prevElvideosArticles p-4 bg-white border border-gray-200 text-gray-800 hover:text-blue-900 hover:bg-blue-50 hover:border-blue-300 
                shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] transition-all transform hover:-translate-x-1 
                outline-none
                ">
                <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button aria-label="Next Videos" class="nextElvideosArticles p-4 bg-white border border-gray-200 text-gray-800 hover:text-blue-900 hover:bg-blue-50 hover:border-blue-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] transition-all transform hover:translate-x-1 outline-none">
                <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
          </div>

        </div>
      </div>
    </section>









    <!-- Second Parallax Section -->
    <section 
      class="py-32 relative flex items-center justify-center overflow-hidden min-h-150  lg:min-h-175 
        bg-fixed bg-no-repeat bg-cover bg-[position:center_-10px] md:bg-[position:center_27%]" 
        style="background-image: url('/images/cts-banner-1.jpg');
    ">
       <div class="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-blue-400/20"></div>

       <div v-intersect class="absolute lg:left-[20%] bottom-[5%] sm:bottom-[10%] md:max-w-2xl lg:max-w-3xl mx-4 lg:mx-auto bg-white/40 sm:bg-white p-5 lg:p-10 z-10">
        <div class="grid sm:grid-cols-[65%_35%] md:grid-cols-[75%_25%] items-center justify-between gap-none md:gap-2 pb-5 lg:pb-10">
          <!-- Center Content -->
          <div class="text-left">
            <span class="text-blue-950 font-extrabold text-sm md:text-lg tracking-widest uppercase mb-4 block">
              FISH HARD. FISH CONFIDENT.
            </span>

            <h2 class="text-2xl md:text-4xl font-black text-blue-950 mb-4 md:mb-6 uppercase">
              Premium tackle built for anglers who expect more.
            </h2>

            <p class="text-sm text-blue-950 font-medium uppercase">
              We bring you high-performance fishing equipment from the industry's most trusted brands tested for durability, precision, and reliability in real-world fishing conditions.
            </p>
          </div>

          <!-- Right Logo -->
          <div class="hidden sm:flex">
            <div class="w-[150px] h-[160px] overflow-hidden relative">
              <img
                src="/images/online-shipping-design.jpg"
                alt=""
                class="absolute max-w-none w-[590%] h-[219%] object-none top-0 right-0"
              >
            </div>
          </div>

        </div>

        <div class="flex grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-10">
          <router-link 
            to="/shop"
            class="bg-blue-950 text-white font-extrabold py-4 px-12 text-center justify-center
            shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(59,130,246,0.4)] transition-all duration-300 
            transform hover:-translate-y-1 hover:scale-105 active:scale-95 flex uppercase
            ">
            Shop Now
          </router-link>
        </div>
       </div>
    </section>











    

    <!-- VIDEOS, ARTICLES & ADVICE 2 -->
    <section id="featured" class="py-5 md:py-10 md:pt-20 bg-white relative">
      <div class="w-full px-4 sm:px-6 lg:px-8 relative z-10 
                  grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
        
        <!-- Left Sidebar -->
        <div class="lg:col-span-1 flex flex-col justify-start" v-intersect>
          <div>
            <h2 class="text-3xl lg:text-5xl font-extrabold text-left mb-3 md:mb-6 text-blue-950 tracking-tight leading-tight uppercase">
              Videos<br/>
              <span>ARTICLES & ADVICE</span>
            </h2>

            <p class="text-md md:text-2xl text-blue-950 mb-0 md:mb-10 font-medium leading-relaxed uppercase">
              Explore our featured fishing gear handpicked rods, reels, tackle, and accessories trusted by anglers for performance, durability, and every kind of catch.
            </p>
          </div>
        </div>

        <!-- Right Container -->
        <div class="lg:col-span-3">
          <!-- Swiper -->
          <Swiper
            :modules="swiperModules"
            :slidesPerView="1"
            :spaceBetween="20"
            :breakpoints="{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 3, spaceBetween: 30 }
            }"
            :loop="true"
            :navigation="{ prevEl: '.prevElvideosArticles', nextEl: '.nextElvideosArticles' }"

            :speed="600"
            :grabCursor="true"
            :freeMode="true"
            :freeModeMomentum="true"
            :freeModeMomentumRatio="0.5"
            :freeModeMomentumVelocityRatio="0.8"
            :touchRatio="1"
            :touchAngle="45"
            
            class="pb-5 md:pb-12 pt-4 w-full"
          >
            <SwiperSlide
              v-for="(videosArticle, index) in videosArticles"
              :key="videosArticle.name"
              class="
                flex-none w-[85vw] sm:w-[50vw] md:w-[320px] 
                text-left cursor-pointer 
                transition-all duration-500 
                group transform snap-start flex flex-col items-start justify-center 
                min-h-[250px]
              "
            >
              <div
                v-intersect
                :style="`transition-delay: ${index * 100}ms`"
                class="
                  text-left cursor-pointer 
                  transition-all duration-500 
                  group transform hover:-translate-y-2
                  flex flex-col items-start justify-center
                "
              >
                <img :src="videosArticle.image" alt="" class="w-full aspect-square object-cover">

                <h3 class="uppercase mt-[15px] text-xl md:text-2xl font-bold text-blue-950 group-hover:text-blue-900 transition-colors">
                  {{ videosArticle.name }}
                </h3>

                <p class="text-blue-950 text-md md:text-xl">{{ videosArticle.shortDesc }}</p>
              </div>
            </SwiperSlide>
          </Swiper>

          <div class="flex space-x-4 mt-4 lg:mt-7 lg:px-0 w-full justify-start">
              <button aria-label="Previous Videos" 
                class="prevElvideosArticles p-4 bg-white border border-gray-200 text-gray-800 hover:text-blue-900 hover:bg-blue-50 hover:border-blue-300 
                shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] transition-all transform hover:-translate-x-1 
                outline-none
                ">
                <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button aria-label="Next Videos" class="nextElvideosArticles p-4 bg-white border border-gray-200 text-gray-800 hover:text-blue-900 hover:bg-blue-50 hover:border-blue-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] transition-all transform hover:translate-x-1 outline-none">
                <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
          </div>

        </div>
      </div>
    </section>










    <section id="featured" class="py-5 md:py-10 md:pt-20 bg-white relative">
      <div class="w-full px-4 sm:px-6 lg:px-8 relative z-10 
                  grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
        <!-- Right Container -->
        <div class="lg:col-span-3 order-2 lg:order-1 flex-col h-full">
          <!-- Swiper -->
          <Swiper
            :modules="swiperModules"
            :slidesPerView="1"
            :spaceBetween="20"

            :breakpoints="{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 3, spaceBetween: 30 }
            }"

            :loop="true"
            :navigation="{ prevEl: '.prevElFeatured', nextEl: '.nextElFeatured' }"

            :speed="600"
            :grabCursor="true"
            :freeMode="true"
            :freeModeMomentum="true"
            :freeModeMomentumRatio="0.5"
            :freeModeMomentumVelocityRatio="0.8"
            :touchRatio="1"
            :touchAngle="45"

            class="pb-5 md:pb-12 pt-4 w-full"
          >
            <SwiperSlide
              v-for="(feature, index) in featured"
              :key="feature.name"
              class="
                flex-none w-[85vw] sm:w-[50vw] md:w-[320px] 
                text-left cursor-pointer 
                transition-all duration-500 
                group transform snap-start flex flex-col items-start justify-center 
                min-h-[250px]
              "
            >
              <div
                v-intersect
                :style="`transition-delay: ${index * 100}ms`"
                class="
                  text-left cursor-pointer 
                  transition-all duration-500 
                  group transform hover:-translate-y-2
                  flex flex-col items-start justify-center
                "
              >
                <router-link
                  :to="`/product/${feature.id}`"
                >
                <img :src="feature.image" alt="" class="w-full aspect-square object-cover" />
                </router-link>
                
                <div class="grid grid-cols-1 items-center justify-between gap-4 w-full p-2">
                  <div class="w-full">
                    <h3 class="uppercase mt-[15px] text-3xl font-bold text-blue-950">
                      ₱{{ feature.price.toFixed(2) }}
                    </h3>
                    <p class="text-blue-950 text-lg">
                      {{ feature.name }}
                    </p>
                  </div>
                  <div class="">
                    <button 
                      @click.prevent="cartStore.addItem(feature, 1)"
                      class="bg-blue-950 text-white font-extrabold py-4 text-center items-center justify-center
                        shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(59,130,246,0.4)] transition-all duration-300 
                        transform hover:-translate-y-1 hover:scale-105 active:scale-95 flex uppercase mb-5 w-full lg:w-3/4
                      "
                    >
                      <ShoppingBag class="w-4 h-4 mr-2" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          </Swiper>

          <div class="mt-4 lg:mt-7 lg:px-0 w-full">
            <div class="relative overflow-hidden h-16 w-full">
              <div id="leftButtons" class="flex space-x-4 absolute top-0 left-0 block lg:hidden">
                <button aria-label="Previous Featured" 
                  class="prevElFeatured p-4 bg-white border border-gray-200 text-gray-800 hover:text-blue-900 hover:bg-blue-50 hover:border-blue-300 
                  shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] transition-all transform hover:-translate-x-1 
                  outline-none
                  ">
                  <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button aria-label="Next Featured" class="nextElFeatured p-4 bg-white border border-gray-200 text-gray-800 hover:text-blue-900 hover:bg-blue-50 hover:border-blue-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] transition-all transform hover:translate-x-1 outline-none">
                  <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </div>

              <div id="rightButtons" class="flex space-x-4 absolute top-0 right-2 hidden lg:block">
                <button aria-label="Previous Featured" 
                  class="prevElFeatured p-4 bg-white border border-gray-200 text-gray-800 hover:text-blue-900 hover:bg-blue-50 hover:border-blue-300 
                  shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] transition-all transform hover:-translate-x-1 
                  outline-none
                  ">
                  <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button aria-label="Next Featured" class="nextElFeatured p-4 bg-white border border-gray-200 text-gray-800 hover:text-blue-900 hover:bg-blue-50 hover:border-blue-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] transition-all transform hover:translate-x-1 outline-none">
                  <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </div>
            </div>
          </div>

        </div>

        <!-- Left Sidebar -->
        <div class="lg:col-span-1 order-1 lg:order-2 flex flex-col justify-start" v-intersect>
          <div>
            <h2 class="text-3xl lg:text-5xl font-extrabold text-left mb-3 md:mb-6 text-blue-950 tracking-tight leading-tight uppercase">
              Featured<br/>
              <span>Products</span>
            </h2>

            <p class="text-md md:text-2xl text-blue-950 mb-0 md:mb-10 font-medium leading-relaxed uppercase">
              Explore our featured fishing gear handpicked rods, reels, tackle, and accessories trusted by anglers for performance, durability, and every kind of catch.
            </p>
          </div>
        </div>

      </div>
    </section>














    <!-- Third Parallax Section -->
    <section 
      class="py-32 relative flex items-center justify-center overflow-hidden min-h-150  lg:min-h-175 
        bg-fixed bg-no-repeat bg-cover bg-[position:center_-10px] md:bg-[position:center_45px]" 
        style="background-image: url('/images/cts-banner-2.jpg');
    ">
       <div class="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-blue-400/20"></div>

       <div v-intersect class="absolute lg:left-[20%] bottom-[5%] sm:bottom-[10%] md:max-w-2xl lg:max-w-3xl mx-4 lg:mx-auto bg-white/40 sm:bg-white p-5 lg:p-10 z-10">
        <div class="grid sm:grid-cols-[65%_35%] md:grid-cols-[75%_25%] items-center justify-between gap-none md:gap-2 pb-5 lg:pb-10">
          <!-- Center Content -->
          <div class="text-left">
            <span class="text-blue-950 font-extrabold text-sm md:text-lg tracking-widest uppercase mb-4 block">
              QUALITY TACKLE FOR EVERY ANGLER
            </span>

            <h2 class="text-2xl md:text-4xl font-black text-blue-950 mb-4 md:mb-6 uppercase">
              Dependable gear made for serious fishing adventures.
            </h2>

            <p class="text-sm text-blue-950 font-medium uppercase">
              From offshore battles to weekend shore casting, our featured fishing gear is chosen for strength, reliability, and long-lasting performance.
            </p>
          </div>

          <!-- Right Logo -->
          <div class="hidden sm:flex">
            <div class="w-[150px] h-[160px] overflow-hidden relative">
              <img
                src="/images/online-shipping-design.jpg"
                alt=""
                class="absolute max-w-none w-[500%] h-[209%] object-none bottom-0 left-1/2 -translate-x-1/2"
              >
            </div>
          </div>

        </div>

        <div class="flex grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-10">
          <router-link 
            to="/shop"
            class="bg-blue-950 text-white font-extrabold py-4 px-12 text-center justify-center
            shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(59,130,246,0.4)] transition-all duration-300 
            transform hover:-translate-y-1 hover:scale-105 active:scale-95 flex uppercase
            ">
            Shop Now
          </router-link>
        </div>
       </div>
    </section>












    















    <!-- Testimonial Section -->
    <section class="hidden py-24 bg-white overflow-hidden border-t border-gray-100">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <h2 v-intersect class="text-4xl font-extrabold text-center mb-16 text-gray-900 tracking-tight">What Our Customers Say</h2>
        <div class="flex overflow-x-auto space-x-6 pb-12 pt-4 no-scrollbar snap-x px-4">
          <div v-for="(t, index) in testimonials" :key="t.id" v-intersect :style="`transition-delay: ${index * 200}ms`" class="flex-none w-80 md:w-96 bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-xl snap-center border border-gray-100 hover:border-blue-100 transition-all duration-500 transform hover:-translate-y-2 relative group">
            <!-- Quote Icon Background -->
            <div class="absolute top-4 right-4 text-gray-200 opacity-50 group-hover:text-blue-100 transition-colors">
               <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h4V8h-4zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h4V8h-4z"></path></svg>
            </div>
            
            <div class="text-yellow-400 mb-6 flex space-x-1 relative z-10">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 fill-current transform hover:scale-125 transition-transform" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </div>
            <p class="text-gray-700 mb-8 font-medium leading-relaxed relative z-10">"{{ t.text }}"</p>
            <div class="flex items-center relative z-10">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-black text-xl mr-4 shadow-md group-hover:scale-110 transition-transform">
                {{ t.author.charAt(0) }}
              </div>
              <span class="font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors">{{ t.author }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Brands Section with Marquee Animation -->
    <section id="brands" class="hidden relative py-16 border-t border-b border-gray-100 bg-gray-50 overflow-hidden z-10">
      <div class="w-full px-4">
        <p class="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Trusted by the best in the industry</p>
        <!-- Marquee Container -->
        <div class="relative w-full overflow-hidden flex feature-brands">
          <!-- Gradient Mask for smooth fade edge -->
          <div class="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-gray-50 via-transparent to-gray-50"></div>
          
          <div class="animate-marquee flex items-center">
            <div v-for="(brand, i) in brands" :key="`${brand}-${i}`" class="text-3xl md:text-5xl font-black tracking-tighter text-gray-800 mx-10 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default hover:text-blue-600">
              {{ brand }}
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="py-5 bg-white border-t border-gray-100 overflow-hidden relative">
      <div class="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="text-center text-sm font-semibold text-blue-950 uppercase tracking-widest mb-10">Trusted Brands We Carry</h3>
        <div class="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-gray-50 via-transparent to-gray-50"></div>
        
        <div class="mt-8 relative group">
          <swiper 
            :modules="swiperModules"
            :slidesPerView="2"
            :spaceBetween="30"
            :breakpoints="{ 640: { slidesPerView: 3 }, 768: { slidesPerView: 4 }, 1024: { slidesPerView: 5 } }"
            :autoplay="{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }"
            :speed="2000"
            :loop="true"
            :freeMode="true"
            :allowTouchMove="false"
            class="brands-swiper pb-4"
          >
            <swiper-slide v-for="(partner, i) in partners" :key="i" class="flex items-center justify-center py-4">
              <div class="w-40 mx-auto mix-blend-multiply flex items-center justify-center filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer">
                <img :src="partner.logo" :alt="partner.name" class="w-full h-auto object-contain px-4">
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>






  </div>
</template>

<style scoped>
@keyframes kenburns {
  0% {
    transform: scale(1) translate(0, 0);
  }
  100% {
    transform: scale(1.15) translate(-2%, -2%);
  }
}

.zoom-image {
  animation: kenburns 12s ease-in-out infinite alternate;
}
</style>
