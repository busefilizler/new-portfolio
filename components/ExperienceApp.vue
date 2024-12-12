<script setup lang="ts">
defineProps<{
  projectName: string
  job: string
  imageLink: string
  websiteLink: string
  width?: string
}>()
</script>

<template>
  <div class="bg-zinc-900 p-8 text-zinc-200 flex flex-col justify-start">
    <div class="mb-8 pb-8 flex gap-x-2 items-center border-b border-b-zinc-400">
      <img
        format="avif,webp"
        densities="1x 2x"
        class="mr-4 mt-2 opacity-50 hover:opacity-100 w-[30%] h-[95%] object-cover"
        :class="width"
        :src="imageLink"
        :alt="`Headshot of ${projectName}`"
      >
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
