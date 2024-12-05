<template>
  <div>
    <AppSection>
      <ParagraphDecoration />
      <AppParagraph
        look="heading"
        class="mt-4"
        tag="h1"
      >
        About me
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
          <div class="prose lg:prose-lg lg:mt-8">
            <h2>Hey!</h2>
            <p>
              I’m a passionate <b>front-end developer</b> based in İzmir,
              Turkey, always striving to become a better version of myself. I
              excel in collaborative environments, enjoy connecting with people,
              and take pride in creating meaningful and visually appealing
              projects. I am eager to explore new technologies, push my
              boundaries, and make a lasting impact as part of a dynamic team.
            </p>

            <h2>Tech Stack</h2>

            <p>
              Working with various frameworks and libraries is always a joy! If
              I were to choose my dream tech stack, it would include the
              following:
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
              Additionally, my technical expertise encompasses a wide array of
              tools and frameworks essential for modern web development. I
              specialize in Vue.js (2/3), TypeScript, and design systems like
              Tailwind CSS, ElementUI, and Vuetify. I am proficient in Nuxt.js,
              Pinia, DevExtreme, and socket.io for creating seamless,
              interactive web applications. With a solid foundation in Git,
              Jira, and design tools like Figma and Adobe XD, I seamlessly
              combine functionality and design in every project.
            </p>
          </div>
        </div>
        <div class="hidden sticky bottom-0 lg:block">
          <img
            width="388"
            height="531"
            format="avif,webp"
            densities="x1 x2"
            class="z-20 ml-36 -mb-24 opacity-70 flex justify-end"
            src="/img/me2.webp"
            alt=""
            aria-hidden
          >
        </div>
      </div>
    </AppSection>
  </div>
</template>
