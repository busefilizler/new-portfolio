<template>
  <div>
    <AppSection>
      <ParagraphDecoration />
      <div class="mt-8">
        <AppParagraph
          look="heading"
          class="mt-4"
          tag="h1"
        >
          My Experience
        </AppParagraph>
        <div class="grid md:grid-cols-2 gap-8 mt-12">
          <LazyExperienceApp
            project-name="Digitastic"
            job="Frontend Developer"
            width="w-[30%]"
            website-link="https://digitastic.de/"
            image-link="/img/logo/dp-logo.svg"
          >
            <h3 class="font-medium pb-3">
              {{ $t("experiencePage.digitastic.titleTechnology") }}
            </h3>
            <p class="pb-3">
              {{ $t("experiencePage.digitastic.technology") }}
            </p>
            <h3 class="font-medium py-3">
              {{ $t("experiencePage.digitastic.titleResponsibilities") }}
            </h3>

            <p>
              {{ $t("experiencePage.digitastic.responsibilities") }}
            </p>
          </LazyExperienceApp>
          <LazyExperienceApp
            project-name="Urla Digital Agriculture"
            width="w-[53%]"
            job="Head of R&D"
            website-link="https://www.urla.ag/"
            image-link="/img/testimonials/uda.webp"
          >
            <h3 class="font-medium py-3">
              {{ $t("experiencePage.digitastic.titleResponsibilities") }}
            </h3>

            <p>
              {{ $t("experiencePage.uda.responsibilities") }}
            </p>
          </LazyExperienceApp>
        </div>
      </div>
    </AppSection>

    <AppSection>
      <ParagraphDecoration />
      <div class="mt-8">
        <AppParagraph
          look="heading"
          class="mt-4"
          tag="h1"
        >
          {{ $t('educationPage.title') }}
        </AppParagraph>
        <div class="grid md:grid-cols-2 gap-8 mt-12">
          <div class="flex flex-col bg-zinc-900 py-8 px-7">
            <h2 class="font-bold">
              {{ $t('educationPage.sections[0].title') }}
            </h2>
            <p>{{ $t('educationPage.sections[0].description') }}</p>
          </div>
          <div class="flex flex-col bg-zinc-900 py-8 px-7">
            <h2 class="font-bold">
              {{ $t('educationPage.sections[1].title') }}
            </h2>
            <p>
              {{ $t('educationPage.sections[1].description') }}
            </p>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-8 mt-8">
          <div class="flex flex-col bg-zinc-900 py-8 px-7">
            <h2 class="font-bold">
              {{ $t('educationPage.sections[2].title') }}
            </h2>
            <p>
              {{ $t('educationPage.sections[2].description') }}
            </p>
          </div>
          <div class="flex flex-col bg-zinc-900 py-8 px-7">
            <h2 class="font-bold">
              {{ $t('educationPage.sections[3].title') }}
            </h2>
            <p>
              {{ $t('educationPage.sections[3].description') }}
            </p>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-8 mt-8">
          <div class="flex flex-col bg-zinc-900 py-8 px-7">
            <h2 class="font-bold">
              {{ $t('educationPage.sections[4].title') }}
            </h2>
            <p>
              {{ $t('educationPage.sections[4].description') }}
            </p>
          </div>
        </div>
      </div>
    </AppSection>
  </div>
</template>
