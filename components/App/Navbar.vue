<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { useI18n } from 'vue-i18n'

const { t, locale, setLocale } = useI18n()
const MENU_ITEMS = [
  { textKey: 'menu.home', to: '/' },
  { textKey: 'menu.about', to: '/about/' },
  { textKey: 'menu.projects', to: '/project' },
  { textKey: 'menu.experience', to: '/experience/' },
  { textKey: 'menu.contact', to: '/contact/' },
] as const
const changeLanguage = () => {
  const lang = locale.value === 'en' ? 'tr' : 'en'
  setLocale(lang)
}
</script>

<template>
  <Disclosure
    v-slot="{ open }"
    as="nav"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex items-center mr-3">
          <AppLink
            to="/"
            class="flex-shrink-0 flex items-center"
          >
            <img
              width="140"
              height="36"
              class="mr-3"
              src="/img/logo/logo1.svg"
              alt="Buse Durudoğan Lightbulb"
            >
          </AppLink>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex gap-x-3 items-center">
            <AppLink
              v-for="item in MENU_ITEMS"
              :key="item.textKey"
              :to="item.to"
              class="transition-all duration-200 border-b-2 border-transparent pt-1 py-1 px-2 md:px-3 md:py-2 text-base font-medium text-gray-300 hover:text-green-500"
            >
              {{ t(item.textKey) }}
            </AppLink>
            <div
              class="transition-all cursor-pointer uppercase duration-200 border-b-2 border-transparent pt-1 py-1 px-2 md:px-3 md:py-2 text-base font-medium text-gray-300 hover:text-green-500 flex items-center gap-2"
              @click="changeLanguage"
            >
              <div>{{ locale }}</div>
              <Icon name="oui:globe" />
            </div>
          </div>
        </div>
        <div class="flex sm:hidden items-center gap-4">
          <div class="-mr-2 flex sm:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Icon
                :name="open ? 'heroicons:x-mark' : 'heroicons:bars-3'"
                class="block h-6 w-6"
                aria-hidden="true"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel
      v-slot="{ close }"
      class="sm:hidden"
    >
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="item in MENU_ITEMS"
          :key="item.textKey"
          as="span"
        >
          <AppLink
            active-class="text-green-500"
            :to="item.to"
            class="transition-all block duration-200 rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-green-500"
            @click="close"
          >
            {{ t(item.textKey) }}
          </AppLink>
        </DisclosureButton>
        <div
          class="transition-all cursor-pointer uppercase duration-200 border-b-2 border-transparent pt-1 py-1 md:px-3 md:py-2 text-base font-medium text-gray-300 hover:text-green-500 flex items-center justify-end gap-2 px-10"
          @click="changeLanguage"
        >
          <div>{{ locale }}</div>
          <Icon name="oui:globe" />
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
