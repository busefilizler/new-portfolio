<script setup lang="ts">
defineProps<{
  projectName: string
  job: string
  imageLink: string
  websiteLink: string
}>()
</script>

<template>
  <div class="bg-zinc-900 p-8 text-zinc-200 flex flex-col justify-start">
    <div class="mb-8 pb-8 flex gap-x-2 items-center border-b border-b-zinc-400">
      <NuxtPicture
        format="avif,webp"
        densities="1x 2x"
        width="280"
        height="170"
        :img-attrs="{ class: 'mr-4 mt-2 opacity-50 hover:opacity-100' }"
        :src="imageLink"
        :alt="`Headshot of ${projectName}`"
      />
      <div>
        <p class="font-bold">
          {{ projectName }}
        </p>
        <p>{{ job }}</p>
        <p class="text-xs pt-2 hover:text-green-600">
          <a
            class="flex items-center"
            :href="websiteLink"
            target="_blank"
          >
            Visit website
            <Icon
              name="heroicons:arrow-small-right-solid"
              class="w-4 h-4"
            />
          </a>
        </p>
      </div>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
