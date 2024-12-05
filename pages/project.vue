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
          Freelance
        </AppParagraph>
        <div class="grid md:grid-cols-2 gap-8 mt-12">
          <LazyTestimonialApp
            :project-name="$t('projectsPage.fevkinde.title')"
            :job="$t('projectsPage.fevkinde.job')"
            website-link="https://fevkinde.com.tr"
            image-link="/img/testimonials/fevkinde.webp"
          >
            <p>
              {{ $t('projectsPage.fevkinde.description') }}
            </p>
          </LazyTestimonialApp>
          <LazyTestimonialApp
            :project-name="$t('projectsPage.demirfit.title')"
            :job="$t('projectsPage.demirfit.job')"
            website-link="https://demirfit.com"
            image-link="/img/testimonials/demirfit.webp"
          >
            <p>
              {{ $t('projectsPage.demirfit.description') }}
            </p>
          </LazyTestimonialApp>
        </div>
      </div>
      <div class="mt-8">
        <AppParagraph
          look="heading"
          class="mt-24"
          tag="h1"
        >
          {{ $t('projectsPage.sideProjects') }}
        </AppParagraph>
        <div class="grid md:grid-cols-2 gap-8 mt-12">
          <LazyTestimonialApp
            :project-name="$t('projectsPage.movieApp.title')"
            :job="$t('projectsPage.movieApp.job')"
            website-link="https://moviebusapp.netlify.app/"
            image-link="/img/testimonials/movieApp.webp"
          >
            <p>
              {{ $t('projectsPage.movieApp.description') }}
            </p>
          </LazyTestimonialApp>
          <LazyTestimonialApp
            :project-name="$t('projectsPage.movieChatApp.title')"
            :job="$t('projectsPage.movieChatApp.job')"
            website-link="https://github.com/busefilizler/movie-chat-app"
            image-link="/img/testimonials/movieChatApp.webp"
          >
            <p>
              {{ $t('projectsPage.movieChatApp.description') }}
            </p>
          </LazyTestimonialApp>
        </div>
      </div>
      <div class="mt-8">
        <div class="grid md:grid-cols-2 gap-8 mt-16">
          <LazyTestimonialApp
            :project-name="$t('projectsPage.widgetDashboard.title')"
            :job="$t('projectsPage.widgetDashboard.job')"
            website-link="https://github.com/busefilizler/widgetDashboardForVue"
            image-link="/img/testimonials/dashboard.webp"
          >
            <p>
              {{ $t('projectsPage.widgetDashboard.description') }}
            </p>
          </LazyTestimonialApp>
          <LazyTestimonialApp
            :project-name="$t('projectsPage.portfolio.title')"
            :job="$t('projectsPage.portfolio.job')"
            website-link="https://busedurudogan.com"
            image-link="/img/testimonials/myPortfolio.webp"
          >
            <p>
              {{ $t('projectsPage.portfolio.description') }}
            </p>
          </LazyTestimonialApp>
        </div>
      </div>
    </AppSection>
  </div>
</template>
