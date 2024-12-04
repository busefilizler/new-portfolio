<template>
  <div
    class="bg-black text-gray-300"
    antialiased
    min-h-screen
    text-white
  >
    <AppNavbar />
    <div class="mt-10">
      <NuxtPage />
    </div>
    <LazyAppFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

useAppSeo()

function useAppSeo() {
  const favicon = computed(() => `/img/logo/favicon.ico`)

  useServerHead({
    bodyAttrs: {
      class: 'bg-black antialiased min-h-screen text-white',
    },
  })

  useHead({
    titleTemplate: c =>
      c ? `${c} - Buse Durudoğan` : 'Buse Durudoğan - Frontend Developer',
    link: [{ rel: 'icon', href: favicon, type: 'image/svg+xml' }],
  })

  useServerSeoMeta({
    author: 'Buse Durudoğan',
    ogSiteName: 'https://www.busedurudogan.netlify.com/',
  })
}
</script>
