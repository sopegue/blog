<template>
  <div class="relative px-4.5 sm:px-15.5 w-full py-10">
    <div class="flex flex-col space-y-10">
      <Part :id="'aboutme'" :nb="3" :contents="about" />
      <Part :id="'hobbies'" title="Hobbies" :objects="hobbies" />
    </div>
  </div>
</template>

<script>
import about from '@/aboutme/about.js'
import hobbies from '@/hobbies/hobbies.js'
export default {
  data() {
    return {
      dark: true,
      about,
      hobbies,
    }
  },
  computed: {
    isdarked() {
      return this.dark === true
    },
  },
  mounted() {
    this.checkDarkMode()
    console.log(typeof this.hobbies)
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
