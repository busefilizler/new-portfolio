<template>
  <div>
    <AppSection>
      <ParagraphDecoration />
      <AppParagraph
        look="heading"
        class="mt-4"
        tag="h1"
      >
        {{ $t('menu.about') }}
      </AppParagraph>
      <div class="lg:grid grid-cols-2 lg:items-start mt-16 lg:mt-0">
        <div class="lg:hidden">
          <img
            class="w-40 rounded-full mx-auto pb-18 opacity-50"
            width="192"
            height="192"
            placeholder="blur"
            src="/img/me2.webp"
            alt="Photo of Buse Durudoğan"
          >
        </div>
        <div class="-mt-16 lg:mt-0 text-justify">
          <div class="mt-14 lg:mt-8">
            <h2 class=" text-2xl sm:text-2xl md:text-3xl lg:text-3xl pb-3 font-semibold">
              Hey!
            </h2>
            <p>
              {{ $t('aboutPage.intro') }}
            </p>

            <h2 class=" text-2xl sm:text-2xl md:text-3xl lg:text-3xl pb-3 pt-16 font-semibold">
              {{ $t('aboutPage.techStack') }}
            </h2>

            <p>
              {{ $t('aboutPage.intro2') }}
            </p>

            <ul
              class="ml-auto not-prose flex my-8  md:filter text-3xl md:text-4xl gap-4 md:gap-8 justify-center"
            >
              <li>
                <AppLink
                  to="https://nuxt.com/"
                  class="flex flex-col items-center group"
                >
                  <Icon
                    class="md:grayscale md:opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                    name="logos:nuxt-icon"
                  />
                  <p
                    class="text-sm md:text-base mt-2 text-zinc-200 md:text-gray-200/50 group-hover:text-white transition-all text-center"
                  >
                    Nuxt.js
                  </p>
                </AppLink>
              </li>
              <li>
                <AppLink
                  to="https://vuejs.org/"
                  class="flex flex-col items-center group"
                >
                  <Icon
                    class="md:grayscale md:opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                    name="logos:vue"
                  />
                  <p
                    class="text-sm md:text-base mt-2 text-zinc-200 md:text-gray-200/50 group-hover:text-white transition-all text-center"
                  >
                    Vue.js
                  </p>
                </AppLink>
              </li>
              <li>
                <AppLink
                  to="https://www.typescriptlang.org/"
                  class="flex flex-col items-center group"
                >
                  <Icon
                    class="md:grayscale md:opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                    name="logos:typescript-icon"
                  />
                  <p
                    class="text-sm md:text-base mt-2 text-zinc-200 md:text-gray-200/50 group-hover:text-white transition-all text-center"
                  >
                    TypeScript
                  </p>
                </AppLink>
              </li>
              <li>
                <AppLink
                  to="https://tailwindcss.com/"
                  class="flex flex-col items-center group"
                >
                  <Icon
                    class="md:grayscale md:opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                    name="logos:tailwindcss-icon"
                  />
                  <p
                    class="text-sm md:text-base mt-2 text-zinc-200 md:text-gray-200/50 group-hover:text-white transition-all text-center"
                  >
                    Tailwind CSS
                  </p>
                </AppLink>
              </li>
              <li>
                <AppLink
                  to="https://react.dev/"
                  class="flex flex-col items-center group"
                >
                  <Icon
                    class="md:grayscale md:opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                    name="logos:react"
                  />
                  <p
                    class="text-sm md:text-base mt-2 text-zinc-200 md:text-gray-200/50 group-hover:text-white transition-all text-center"
                  >
                    React JS
                  </p>
                </AppLink>
              </li>
              <li>
                <AppLink
                  to="https://pinia.vuejs.org/"
                  class="flex flex-col items-center group"
                >
                  <Icon
                    class="md:grayscale md:opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                    name="logos:pinia"
                  />
                  <p
                    class="text-sm md:text-base mt-2 text-zinc-200 md:text-gray-200/50 group-hover:text-white transition-all text-center"
                  >
                    Pinia
                  </p>
                </AppLink>
              </li>
            </ul>

            <p>
              {{ $t('aboutPage.also') }}
            </p>
          </div>
        </div>
        <div class="hidden sticky bottom-0 lg:block">
          <img
            width="388"
            height="531"
            format="avif,webp"
            densities="x1 x2"
            class="z-20 ml-32 -mb-24 opacity-70 flex justify-end"
            src="/img/me2.webp"
            alt=""
            aria-hidden
          >
        </div>
      </div>
    </AppSection>
  </div>
</template>
