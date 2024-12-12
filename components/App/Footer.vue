<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const navigation = {
  general: [
    {
      name: 'menu.home',
      to: '/',
      activeRoutes: ['/', '/about/', '/project/', '/contact/'],
    },
    { name: 'menu.about', to: '/about/' },
  ],
  contact: [{ name: 'menu.contact', to: '/contact/' }],
  experience: [
    { name: 'menu.experience', to: '/experience/' },
    { name: 'menu.projects', to: '/project/' },
  ],
  social: [
    {
      name: 'GitHub',
      href: SOCIALS.github,
      icon: 'mdi:github',
      hoverClass: 'hover:text-gray-200',
    },
    {
      name: 'LinkedIn',
      href: SOCIALS.linkedin,
      icon: 'mdi:linkedin',
      hoverClass: 'hover:text-blue-500',
    },
    {
      name: 'Linktree',
      href: SOCIALS.linktree,
      icon: 'mdi:link',
      hoverClass: 'hover:text-gray-200',
    },
  ],
}
</script>

<template>
  <footer
    class="bg-zinc-900"
    aria-labelledby="footer-heading"
  >
    <h2
      id="footer-heading"
      class="sr-only"
    >
      Footer
    </h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-8 sm:pt-10 lg:px-8 xl:pt-22">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="flex justify-center items-center xl:col-span-1">
          <img
            loading="lazy"
            width="256"
            height="183"
            class="hidden xl:block"
            src="/img/logo/logo2.svg"
            alt=""
          >
          <img
            loading="lazy"
            width="256"
            height="96"
            class="md:mx-auto xl:hidden"
            src="/img/logo/logo2.svg"
            alt=""
          >
        </div>

        <div class="grid grid-cols-2 gap-8 xl:col-span-3 pt-10 pb-5 xl:pt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">
                {{ $t("footer.general") }}
              </h3>
              <ul
                role="list"
                class="mt-6 space-y-4"
              >
                <li
                  v-for="item in navigation.general"
                  :key="item.name"
                >
                  <AppLink
                    :href="item.to"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                  >
                    {{ t(item.name) }}
                  </AppLink>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">
                {{ $t("footer.contact") }}
              </h3>
              <ul
                role="list"
                class="mt-6 space-y-4"
              >
                <li
                  v-for="item in navigation.contact"
                  :key="item.name"
                >
                  <AppLink
                    :to="item.to"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                  >
                    {{ t(item.name) }}
                  </AppLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">
                {{ $t("footer.experience") }}
              </h3>
              <ul
                role="list"
                class="mt-6 space-y-4"
              >
                <li
                  v-for="item in navigation.experience"
                  :key="item.name"
                >
                  <AppLink
                    :to="item.to"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                  >
                    {{ t(item.name) }}
                  </AppLink>
                </li>
              </ul>
            </div>

            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">
                <a href="mailto:filizlerbuse@gmail.com">
                  {{ $t("footer.sendEmail") }}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between"
      >
        <div class="flex space-x-6 md:order-2">
          <a
            v-for="item in navigation.social"
            :key="item.name"
            target="_blank"
            :href="item.href"
            class="text-gray-400"
            :class="item.hoverClass"
          >
            <span class="sr-only">{{ t(item.name) }}</span>
            <Icon
              :name="item.icon"
              class="h-6 w-6"
              aria-hidden="true"
            />
          </a>
          <a
            class="text-gray-400 hover:text-gray-200"
            href="mailto:filizlerbuse@gmail.com"
          >
            <Icon
              name="mdi:email"
              class="h-6 w-6"
              aria-hidden="true"
            />
          </a>
        </div>
        <p class="mt-6 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
          &copy; {{ new Date().getFullYear() }} {{ $t("footer.copyRight") }}
          <br>
          <span class="text-[8px] leading-5 text-gray-400">
            {{ $t("footer.logoCredit") }}
            <a href="https://linktr.ee/muratyilmazdesign">Murat Yılmaz</a></span>
        </p>
      </div>
    </div>
  </footer>
</template>
