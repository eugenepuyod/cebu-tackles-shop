import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.directive('intersect', {
  mounted(el) {
    el.classList.add('opacity-0', 'translate-y-12', 'transition-all', 'duration-[1200ms]', 'ease-out')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.remove('opacity-0', 'translate-y-12')
          el.classList.add('opacity-100', 'translate-y-0')
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.15 })
    observer.observe(el)
  }
})

app.directive('video-parallax', {
  mounted(el) {
    const applyParallax = () => {
      const parent = el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        // Move the video down as you scroll down
        const offset = rect.top * 0.4;
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
    };
    window.addEventListener('scroll', applyParallax, { passive: true });
    el._parallaxHandler = applyParallax;
    requestAnimationFrame(applyParallax);
  },
  unmounted(el) {
    window.removeEventListener('scroll', el._parallaxHandler);
  }
})


app.use(createPinia())
app.use(router)
app.mount('#app')
