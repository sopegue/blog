<template>
  <div class="min-w-90">
    <div v-show="loading"></div>
    <div v-show="!loading" class="sopegue max-w-460 mx-auto w-full h-full">
      <Header />
      <Afterheader v-if="$route.path === '/'" />
      <Home v-if="$route.path === '/'" />
      <div class="px-5">
        <nuxt-child />
      </div>
      <button
        v-show="scrollpos > 728"
        class="button bg-transparent border-sombre pos-right sombre-text rounded-full sticky bottom-16.5 mr-4"
        @click="scrolltop"
      >
        <svg
          class="w-5 h-5 transform rotate-180 relative"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="clear-both"></div>
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollpos: 0,
    }
  },
  computed: {
    loading() {
      return this.$store.state.domloading === true
    },
    scroll() {
      return this.$store.state.scroll
    },
  },
  watch: {
    loading(nv, ov) {
      if (!nv) {
        this.checkDarkMode()
      }
    },
  },
  beforeMount() {
    // this.checkDarkMode()
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('DOMContentLoaded', this.domload, false)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('DOMContentLoaded', this.domload, false)
  },
  methods: {
    scrolltop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
    handleScroll() {
      this.scrollpos =
        Math.abs(window.scrollY) ||
        Math.abs(window.scrollTop) ||
        Math.abs(document.getElementsByTagName('html')[0].scrollTop)
      this.$store.commit('set_Scroll', this.scrollpos)
    },
    domload() {
      this.$store.commit('set_Domload', false)
    },
    async checkDarkMode() {
      if (localStorage.mode) {
        const data = await localStorage.getItem('mode')
        if (data === 'light') {
          this.$store.commit('set_theme', false)
          document.body.style.background = '#fff'
          document.getElementsByTagName('html')[0].style.backgroundColor =
            '#fff'
          setTimeout(() => {
            let sel = document.querySelectorAll('.header')
            sel.forEach((element) => {
              element.classList.add('header-light')
            })
            let sel1 = document.querySelectorAll('.sub-menu')
            sel1.forEach((element) => {
              element.classList.add('sub-menu-light')
            })
            let sel2 = document.querySelectorAll('.col-white')
            sel2.forEach((element) => {
              element.classList.add('col-gray')
            })
            let sel3 = document.querySelectorAll('.sombre-btn')
            sel3.forEach((element) => {
              element.classList.add('light-btn')
            })
            let sel4 = document.querySelectorAll('.sombre-fa')
            sel4.forEach((element) => {
              element.classList.add('light-fa')
            })
            let sel5 = document.querySelectorAll('.sombre-text')
            sel5.forEach((element) => {
              element.classList.add('light-text')
            })
            sel5 = document.querySelectorAll('.border-sombre')
            sel5.forEach((element) => {
              element.classList.add('border-lights')
            })
            sel5 = document.querySelectorAll('.sombre-fas')
            sel5.forEach((element) => {
              element.classList.add('light-fas')
            })

            setTimeout(() => {
              sel = document.querySelectorAll('.header')
              sel.forEach((element) => {
                element.classList.remove('header')
              })
              sel1 = document.querySelectorAll('.sub-menu')
              sel1.forEach((element) => {
                element.classList.remove('sub-menu')
              })
              sel2 = document.querySelectorAll('.col-white')
              sel2.forEach((element) => {
                element.classList.remove('col-white')
              })
              sel3 = document.querySelectorAll('.sombre-btn')
              sel3.forEach((element) => {
                element.classList.remove('sombre-btn')
              })
              sel4 = document.querySelectorAll('.sombre-fa')
              sel4.forEach((element) => {
                element.classList.remove('sombre-fa')
              })
              sel5 = document.querySelectorAll('.sombre-text')
              sel5.forEach((element) => {
                element.classList.remove('sombre-text')
              })
              sel5 = document.querySelectorAll('.border-sombre')
              sel5.forEach((element) => {
                element.classList.remove('border-sombre')
              })
              sel5 = document.querySelectorAll('.sombre-fas')
              sel5.forEach((element) => {
                element.classList.remove('sombre-fas')
              })
            }, 100)
          }, 10)
        }
      } else {
        this.$store.commit('set_theme', true)
        localStorage.setItem('mode', 'dark')
      }
    },
  },
}
</script>

<style>
.indie {
  font-family: Indie Flower;
}
body,
html {
  width: 100%;
  height: 100%;
  background-color: #1f2937;
  scroll-behavior: smooth !important;
}
.bg-sombre {
  background-color: #fff !important;
}
.bg-light {
  background-color: #1f2937 !important;
}
.header {
  background-color: #1f2937 !important;
  border-color: white !important;
}
.header-light {
  background-color: white !important;
  border-color: #e2e8f0 !important;
}
.sub-menu {
  background-color: #1f2937 !important;
  animation: 0.2s appearx !important;
  border-color: white !important;
}
.sub-menu-light {
  background-color: #fff !important;
  animation: 0.2s appearx !important;
  border-color: #e2e8f0 !important;
}
.border-sombre {
  border-color: #e2e8f0 !important;
}
.border-light {
  border-color: #e2e8f0 !important;
}
.border-lights {
  border-color: #1f2937 !important;
}
button:focus,
button:active,
.button:focus,
.button:active {
  outline: 0px solid transparent !important;
  outline-offset: 0px !important;
  border-color: inherit !important;
  box-shadow: none !important;
}
.bg-inherit {
  background-color: inherit !important;
}
.pos-right {
  float: right;
}
.col-white {
  color: white !important;
}
.col-gray {
  color: #1f2937 !important;
}
.sombre-btn,
.sombre-text {
  color: #fff !important;
}
.light-btn,
.light-text {
  color: #1f2937 !important;
}

.sombre-fa .fab,
.sombre-fas .fas {
  color: #fff !important;
}
.light-fa .fab,
.light-fas .fas {
  color: #1f2937 !important;
}

.sombre-btn:hover {
  color: #1f2937 !important;
  background-color: rgb(255, 255, 255) !important;
  animation: 0.2s appear !important;
}
.sombre-fa:hover {
  background-color: rgb(255, 255, 255) !important;
  animation: 0.2s appear !important;
}
.sombre-fa:hover .fab {
  color: #1f2937 !important;
}

.light-btn:hover {
  color: #fff !important;
  background-color: #1f2937 !important;
  animation: 0.2s appear !important;
}
.light-fa:hover {
  background-color: #1f2937 !important;
  animation: 0.2s appear !important;
}
.light-fa:hover .fab {
  color: #fff !important;
}
.w-fulls {
  width: 100% !important;
}
.h-fulls {
  height: 100% !important;
}
.sombre-text:hover,
.sombre-text:focus {
  color: white !important;
}
.light-text:hover,
.light-text:focus {
  color: #1f2937 !important;
}
.w-fit {
  width: intrinsic !important; /* Safari/WebKit utilisent un nom non-standard */
  width: -moz-max-content !important; /* Firefox/Gecko */
  width: -webkit-max-content !important;
}
.h-fit {
  height: -moz-max-content !important;
  height: -webkit-max-content !important;
  height: intrinsic !important;
}
@media screen and (max-width: 947px) {
  .gaming {
    min-width: 280px !important;
    /* max-width: 360px !important; */
  }
  .gamelist {
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 930px) {
  .bar1 {
    display: none;
  }
  .bar2i {
    display: none;
  }
  .bar4i {
    display: none;
  }
  .bar3 {
    display: block;
  }
}
@media screen and (min-width: 931px) {
  .sub-menu {
    display: none;
  }
  .sub-menu-light {
    display: none;
  }
}
@media screen and (max-width: 640px) {
  .bar2 {
    display: none !important;
  }
  .bar2s {
    display: flex !important;
  }
}
@media screen and (max-width: 470px) {
  .bar4 {
    display: none !important;
  }
  .bar4s {
    display: flex !important;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
@keyframes appearx {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>
