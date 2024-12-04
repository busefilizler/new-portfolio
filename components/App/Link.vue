<script setup lang="ts">
import type { RouteLocationRaw } from "#vue-router";
import { hasProtocol } from "ufo";
type NuxtLinkProps = {
  to?: RouteLocationRaw;
  href?: RouteLocationRaw;
  external?: boolean;
  replace?: boolean;
  target?: "_blank" | "_parent" | "_self" | "_top";
  rel?: string;
  prefetch?: boolean;
};
const props = defineProps<NuxtLinkProps>();
const NuxtLink = defineNuxtLink({
  trailingSlash: "append",
});

const path = computed(() => props.to || props.href || "");

const isExternal = computed<boolean>(() => {
  if (props.external) {
    return true;
  }

  if (props.target && props.target !== "_self") {
    return true;
  }

  if (typeof path.value === "object") {
    return false;
  }

  return hasProtocol(path.value, { acceptRelative: true });
});

const propsWithoutRelAndTarget = computed(() => {
  const { rel, target, ...rest } = props;
  return rest;
});
const defaultTarget = computed(() => (isExternal.value ? "_blank" : ""));
const targetValue = computed(() => props.target ?? defaultTarget.value);
</script>

<template>
  <component
    :is="NuxtLink"
    v-bind="propsWithoutRelAndTarget"
    :target="targetValue"
  >
    <slot />
  </component>
</template>
