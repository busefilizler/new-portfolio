<template>
  <div>
    <AppSection>
      <ParagraphDecoration />
      <AppParagraph
        look="heading"
        class="mt-4"
        tag="h1"
      >
        Contact
      </AppParagraph>
      <AppParagraph class="mt-16 text-lg max-w-prose">
        <b>Hey there!</b> I'm always happy to hear from you. If you have any
        questions, or feedback or just want to say hi, feel free to reach out to
        me on any of the platforms linked in the footer or via email.
      </AppParagraph>
      <AppButton class="mr-4 mt-20">
        <a href="mailto:filizlerbuse@gmail.com">Send email</a>
      </AppButton>
      <AppButton
        class="mr-4 mt-6"
        look="secondary"
      >
        <a
          href="/files/buseDurudoganCv.pdf"
          download="buseDurudoganCv.pdf"
        >Download Resume</a>
      </AppButton>

      <AppParagraph class="mt-20 text-lg max-w-prose">
        I usually respond within 24 to 48 hours.
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
