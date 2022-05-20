<template>
  <div v-click-outside="hide" class="header z-50 w-full">
    <nav
      class="flex items-center bg-inherit border-b pb-1 px-5 py-1.2 justify-between relative z-50"
    >
      <div>
        <a href="/">
          <span class="col-white font-semibold indie text-xl">
            Yaya S. SORO</span
          >
        </a>
      </div>
      <div class="flex items-center space-x-6">
        <ul class="flex items-center bar1">
          <li>
            <a
              href="/#aboutme"
              class="text-sm button border-none bg-transparent no-outlines sombre-btn"
              >About</a
            >
          </li>
          <li>
            <a
              href="/#hobbies"
              class="text-sm button border-none bg-transparent no-outlines sombre-btn"
              >Hobbies</a
            >
          </li>
          <li>
            <a
              href="/#achievements"
              class="text-sm button border-none bg-transparent no-outlines sombre-btn"
              >Achievements</a
            >
          </li>
          <li>
            <a
              href="/#works"
              class="text-sm button border-none bg-transparent no-outlines sombre-btn"
              >Projects</a
            >
          </li>
        </ul>
        <ul class="flex items-center bar2">
          <li>
            <a
              href="https://github.com/sopegue"
              target="_blank"
              class="sombre-fa rounded-full border-none no-outlines button bg-transparent"
            >
              <i class="fab fa-github text-xl"></i
            ></a>
          </li>
          <li>
            <a
              href="https://twitter.com/SYSopegue"
              target="_blank"
              class="sombre-fa rounded-full border-none no-outlines button bg-transparent"
              ><i class="fab fa-twitter text-xl"></i
            ></a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sopoude/"
              target="_blank"
              class="sombre-fa rounded-full border-none no-outlines button bg-transparent"
            >
              <i class="fab fa-linkedin-in text-xl"></i
            ></a>
          </li>
        </ul>
        <div class="flex items-center space-x-5">
          <div class="hireme bar4">
            <a
              href="/hireme"
              class="text-sm button no-outlines bg-transparent sombre-text"
            >
              Hire me
            </a>
          </div>
          <button
            class="text-sm bar4 button bg-transparent sombre-text"
            @click="setDarkMode"
          >
            <svg
              v-if="isdarked"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
            <svg
              v-else
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
          </button>
          <button
            class="text-sm hidden bar3 button bg-transparent sombre-text"
            @click="openMenu"
          >
            <svg
              v-if="menuing"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            <svg
              v-else
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
    <div
      v-show="menuing"
      id="menu"
      class="sub-menu absolute z-40 w-full top-10 pt-4.5 pb-5 right-0 left-0 border-b"
    >
      <div class="flex flex-col items-center pt-3 space-y-4.5">
        <ul class="flex flex-col items-center">
          <li>
            <a
              href="/#aboutme"
              class="text-sm px-15 button border-none bg-transparent no-outlines sombre-btn"
              >About</a
            >
          </li>
          <li>
            <a
              href="/#hobbies"
              class="text-sm px-15 button border-none bg-transparent no-outlines sombre-btn"
              >Hobbies</a
            >
          </li>
          <li>
            <a
              href="/#achievements"
              class="text-sm button border-none bg-transparent no-outlines sombre-btn"
              >Achievements</a
            >
          </li>
          <li>
            <a
              href="/#works"
              class="text-sm px-15 button border-none bg-transparent no-outlines sombre-btn"
              >Projects</a
            >
          </li>
        </ul>
        <ul class="flex items-center bar2i bar2s">
          <li>
            <a
              href="https://github.com/sopegue"
              target="_blank"
              class="sombre-fa rounded-full border-none no-outlines button bg-transparent"
            >
              <i class="fab fa-github text-xl"></i
            ></a>
          </li>
          <li>
            <a
              href="https://twitter.com/SYSopegue"
              target="_blank"
              class="sombre-fa rounded-full border-none no-outlines button bg-transparent"
              ><i class="fab fa-twitter text-xl"></i
            ></a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sopoude/"
              target="_blank"
              class="sombre-fa rounded-full border-none no-outlines button bg-transparent"
            >
              <i class="fab fa-linkedin-in text-xl"></i
            ></a>
          </li>
        </ul>
        <div class="flex flex-col items-center space-y-5 bar4i bar4s">
          <div class="hireme">
            <a
              href="/hireme"
              class="text-sm button px-10 no-outlines bg-transparent sombre-text"
            >
              Hire me
            </a>
          </div>
          <button
            class="text-sm w-fit button bg-transparent sombre-text"
            @click="setDarkMode"
          >
            <svg
              v-if="isdarked"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
            <svg
              v-else
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dark: true,
      busy: false,
      menu: false,
    }
  },
  computed: {
    isdarked() {
      return this.dark === true
    },
    notbusy() {
      return this.busy === false
    },
    menuing() {
      return this.menu === true
    },
  },
  mounted() {
    this.checkDarkMode()
  },
  methods: {
    hide() {
      this.menu = false
    },
    checkDarkMode() {
      if (localStorage.mode) {
        const data = localStorage.getItem('mode')
        if (data === 'dark') this.dark = true
        else this.dark = false
      }
    },
    openMenu() {
      this.menu = !this.menu
      const el = document.getElementById('menu')
      if (this.menu) {
        el.style = 'display: block !important'
      } else {
        el.style = 'display: hidden !important'
      }
    },
    setDarkMode() {
      if (this.notbusy) {
        this.busy = true
        if (localStorage.mode) {
          const data = localStorage.getItem('mode')
          if (data === 'dark') {
            this.$store.commit('set_theme', false)
            document.body.style.animation = 'none'
            setTimeout(() => {
              this.dark = false
              document.body.style.background = '#fff'
              document.getElementsByTagName('html')[0].style.backgroundColor =
                '#fff'
              document.body.style.animation = 'appear 0.3s'
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
              }, 10)
            }, 300)
            if (localStorage.mode) localStorage.removeItem('mode')
            localStorage.setItem('mode', 'light')
            this.busy = false
          } else {
            this.$store.commit('set_theme', true)
            document.body.style.animation = 'none'
            setTimeout(() => {
              this.dark = true
              document.body.style.animation = 'appear 0.3s'
              document.body.style.background = '#1f2937'
              document.getElementsByTagName('html')[0].style.backgroundColor =
                '#1f2937'
              let sel = document.querySelectorAll('.header-light')
              sel.forEach((element) => {
                element.classList.add('header')
              })
              let sel1 = document.querySelectorAll('.sub-menu-light')
              sel1.forEach((element) => {
                element.classList.add('sub-menu')
              })
              let sel2 = document.querySelectorAll('.col-gray')
              sel2.forEach((element) => {
                element.classList.add('col-white')
              })
              let sel3 = document.querySelectorAll('.light-btn')
              sel3.forEach((element) => {
                element.classList.add('sombre-btn')
              })
              let sel4 = document.querySelectorAll('.light-fa')
              sel4.forEach((element) => {
                element.classList.add('sombre-fa')
              })
              let sel5 = document.querySelectorAll('.light-text')
              sel5.forEach((element) => {
                element.classList.add('sombre-text')
              })

              sel5 = document.querySelectorAll('.border-lights')
              sel5.forEach((element) => {
                element.classList.add('border-sombre')
              })
              sel5 = document.querySelectorAll('.light-fas')
              sel5.forEach((element) => {
                element.classList.add('sombre-fas')
              })

              setTimeout(() => {
                sel = document.querySelectorAll('.header-light')
                sel.forEach((element) => {
                  element.classList.remove('header-light')
                })
                sel1 = document.querySelectorAll('.sub-menu-light')
                sel1.forEach((element) => {
                  element.classList.remove('sub-menu-light')
                })
                sel2 = document.querySelectorAll('.col-gray')
                sel2.forEach((element) => {
                  element.classList.remove('col-gray')
                })
                sel3 = document.querySelectorAll('.light-btn')
                sel3.forEach((element) => {
                  element.classList.remove('light-btn')
                })
                sel4 = document.querySelectorAll('.light-fa')
                sel4.forEach((element) => {
                  element.classList.remove('light-fa')
                })
                sel5 = document.querySelectorAll('.light-text')
                sel5.forEach((element) => {
                  element.classList.remove('light-text')
                })

                sel5 = document.querySelectorAll('.border-lights')
                sel5.forEach((element) => {
                  element.classList.remove('border-lights')
                })
                sel5 = document.querySelectorAll('.light-fas')
                sel5.forEach((element) => {
                  element.classList.remove('light-fas')
                })
              }, 10)
              if (localStorage.mode) localStorage.removeItem('mode')
              localStorage.setItem('mode', 'dark')
              this.busy = false
            }, 300)
          }
        }
      }
      this.menu = false
    },
  },
}
</script>

<style scoped></style>
