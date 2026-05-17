<script setup>
import { computed } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import FloatingChatbot from './components/FloatingChatbot.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
    <Header />
    <main class="flex-grow">
      <router-view></router-view>
    </main>
    <Footer />
    <FloatingChatbot />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
