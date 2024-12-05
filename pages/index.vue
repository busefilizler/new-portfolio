<script setup lang="ts">
import { ref } from 'vue'

const currentImage = ref('/img/me.webp')
const showMail = ref(false)
function handleHover(hover: boolean) {
  currentImage.value = hover ? '/img/meOrj.webp' : '/img/me.webp'
}
</script>

<template>
  <div>
    <AppSection>
      <div class="md:flex md:flex-row items-center">
        <div class="mt-10 md:mt-0 md:w-3/5 md:flex-1">
          <div class="flex gap-8 -mx-4 md:mx-0">
            <div class="flex w-1/2 md:w-full items-center">
              <AppParagraph
                tag="h1"
                look="superHeading"
                class="flex flex-col sm:justify-start font-mono mt-8 md:mt-0 ml-4 md:ml-0"
              >
                <span>Buse</span>
                <span>Filizler Durudoğan</span>
                <span class="-mt-2">-</span>
              </AppParagraph>
            </div>
            <div
              class="md:hidden w-1/2"
              @mouseenter="handleHover(true)"
              @mouseleave="handleHover(false)"
            >
              <img
                format="avif,webp"
                width="308"
                height="438"
                densities="x1 x2"
                class="z-20 relative"
                :src="currentImage"
                alt="Photo of Buse Durudoğan"
              >
            </div>
          </div>
          <AppParagraph
            look="subParagraph"
            class="pt-8"
          >
            Hi! I am a front-end developer who tries to become a better version
            of herself. I love teamwork, interacting with people, and creating
            nice stuff I am willing to learn new technologies. I am ready to
            take action become part of a team and push my limits.
          </AppParagraph>
          <AppParagraph
            look="subParagraph"
            class="pt-6"
          >
            I have experience with Vue, TailwindCSS, ElementUI, PrimeVue,
            Vuetify, Pinia, DevExtreme, Vuex, TypeScript, JSX, TSX, socket.io,
            tanstack/vue-query, Nuxt.js, and React.
          </AppParagraph>
          <div class="pt-8 flex">
            <AppButton
              class="mr-4"
              @mouseenter="showMail = true"
              @mouseleave="showMail = false"
            >
              <a href="mailto:filizlerbuse@gmail.com">Send email</a>
            </AppButton>
            <AppButton
              to="/about/"
              look="secondary"
            >
              About <span class="hidden sm:inline">me</span>
            </AppButton>
          </div>
          <div
            v-if="showMail"
            class="pt-1 text-green-700 absolute"
          >
            filizlerbuse@gmail.com
          </div>
          <div class="hidden md:flex mt-16 filter text-4xl gap-8 !z-50">
            <Icon
              class="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
              name="logos:nuxt-icon"
            />
            <Icon
              class="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
              name="logos:react"
            />
            <Icon
              class="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
              name="logos:pinia"
            />
            <Icon
              class="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
              name="logos:vue"
            />

            <Icon
              class="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
              name="logos:typescript-icon"
            />

            <Icon
              class="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
              name="logos:tailwindcss-icon"
            />
          </div>
        </div>
        <div
          class="w-1/2 md:w-2/5 md:flex-1 h-full hidden md:flex justify-end items-center md:ml-32 md:mt-3"
          @mouseenter="handleHover(true)"
          @mouseleave="handleHover(false)"
        >
          <img
            format="avif,webp"
            width="370"
            height="590"
            densities="x1 x2"
            class="z-20 relative"
            :src="currentImage"
            alt="Photo of Buse Durudoğan"
          >
        </div>
      </div>
    </AppSection>
  </div>
</template>
