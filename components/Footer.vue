<template>
  <div class="px-5 border-t py-2">
    <div class="w-fit mx-auto">
      <span class="col-white font-semibold text-sm">©</span>
      <span class="col-white font-semibold text-sm">{{ toyear }}</span>
      <span class="col-white font-semibold text-sm">-</span>
      <a href="/">
        <span class="col-white font-semibold indie text-base">
          Sopegue Y. SORO</span
        >
      </a>
      <div class="pt-2 pb-2">
        <a href="https://nuxtjs.org/" target="_blank">
          <Nuxtdark v-show="darked" />
          <Nuxtlight v-show="!darked" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    toyear() {
      return new Date().getFullYear().toString()
    },
    darked() {
      return this.$store.state.darked === true
    },
  },
}
</script>

<style scoped></style>
