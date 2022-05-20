<template>
  <div class="after-header relative w-full">
    <div
      class="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-85"
    ></div>
    <div class="relative z-20 sm:py-20 py-10">
      <div
        class="flex md:flex-row flex-col items-center md:px-30 px-10 lg:space-x-20 sm:space-x-10 md:space-y-0 space-y-10"
      >
        <figure class="image w-70 h-70 min-h-70 min-w-70 rounded-full">
          <img class="rounded-full w-full border-4 h-full" src="/pic/mypic.jpg" />
        </figure>
        <div class="h-fit">
          <p>
            <span class="text-2xl text-gray-300"
              >Hi, I'm
              <span class="text-white font-semibold indie text-2xl">
                SOPEGUE YAYA SORO</span
              >
            </span>
          </p>
          <p>
            <span class="text-2xl text-gray-300">
              Ivorian, Student, Coder, Problem solver, Lover of web development
              and I express myself by doing.
            </span>
          </p>
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

<style scoped>
.after-header {
  background-image: url('https://i.ibb.co/YPPmQ14/2.jpg');
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
}
</style>
