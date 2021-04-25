<template>
  <div
    class="after-header relative w-full h-128"
    :class="{ darked: isdarked, light: !isdarked }"
  >
    <div
      class="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75"
    ></div>
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
.darked {
  background-image: url('https://i.ibb.co/YPPmQ14/2.jpg');
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
}
</style>
