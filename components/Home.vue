<template>
  <div class="relative w-full py-10">
    <div class="flex flex-col space-y-5">
      <div class="flex h-fit">
        <div class="flex flex-col">
          <span></span>
          <div></div>
          <span></span>
        </div>
        <div></div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
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
