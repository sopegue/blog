<template>
  <div class="relative w-full py-10">
    <div class="flex flex-col space-y-10">
      <div
        v-for="i in 3"
        :key="i"
        class="flex h-fit px-4.5 sm:px-15.5 sm:space-x-8 space-x-6"
      >
        <div
          class="flex items-center sm:flex-row sm:space-y-0 space-y-3 flex-col"
        >
          <span v-if="i === 1" class="whitespace-nowrap transform col-white"
            >Who I am</span
          >
          <span v-if="i === 2" class="whitespace-nowrap transform col-white"
            >Where I am from</span
          >
          <span v-if="i === 3" class="whitespace-nowrap transform col-white"
            >What I do</span
          >
          <div class="h-fulls flex flex-col items-center space-y-2">
            <span class="sombre-fas"
              ><i
                class="fas fa-circle col-white border-4 border-sombre rounded-full p-0.5"
              ></i
            ></span>
            <div class="h-fulls w-1 border-l-4 border-sombre"></div>
            <span class="sombre-fas"
              ><i
                class="fas fa-circle col-white border-4 border-sombre rounded-full p-0.5"
              ></i
            ></span>
          </div>
        </div>
        <div class="sombre-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum
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
    }
  },
  computed: {
    isdarked() {
      return this.dark === true
    },
  },
  mounted() {
    this.checkDarkMode()
  },
  methods: {
    checkDarkMode() {
      if (localStorage.mode) {
        const data = localStorage.getItem('mode')
        if (data === 'dark') this.dark = true
        else this.dark = false
      }
    },
  },
}
</script>

<style scoped></style>
