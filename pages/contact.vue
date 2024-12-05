<template>
  <div>
    <AppSection>
      <ParagraphDecoration />
      <AppParagraph
        look="heading"
        class="mt-4"
        tag="h1"
      >
        {{ $t('menu.contact') }}
      </AppParagraph>
      <AppParagraph class="mt-16 text-lg max-w-prose">
        <b>{{ $t('contactPage.hiThere') }}</b> {{ $t('contactPage.intro') }}
      </AppParagraph>
      <AppButton class="mr-4 mt-20">
        <a href="mailto:filizlerbuse@gmail.com">
          {{ $t('sendMail') }}
        </a>
      </AppButton>
      <AppButton
        class="mr-4 mt-6"
        look="secondary"
      >
        <a
          href="/files/buseDurudoganCv.pdf"
          download="buseDurudoganCv.pdf"
        >
          {{ $t('downloadResume') }}
        </a>
      </AppButton>

      <AppParagraph class="mt-20 text-lg max-w-prose">
        {{ $t('contactPage.intro2') }}
      </AppParagraph>
    </AppSection>
    <AppSection />
    <AppSection />
  </div>
</template>

<style>
.__nuxt, html {
  background-color: black !important;
  height: 100vh !important;
}
</style>
