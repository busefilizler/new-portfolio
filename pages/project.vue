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
            project-name="Fevkinde Advertising Agency"
            job="Advertising agency"
            website-link="https://fevkinde.com.tr"
            image-link="/img/testimonials/fevkinde.webp"
          >
            <p>
              The website I developed for Fevkinde Advertising Agency was
              designed to reflect the brand's creative vision and professional
              approach. Collaborating with industry-leading brands such as
              Hepsiburada, Lotus, Tabasco, and Annas, Fevkinde needed a platform
              to showcase its strong portfolio. I aimed to create a
              user-friendly interface with a modern design and details that
              capture the brand's dynamic spirit, contributing to its digital
              presence.
            </p>
          </LazyTestimonialApp>
          <LazyTestimonialApp
            project-name="Demirfit Work Clothes"
            job="Work clothes firm"
            website-link="https://demirfit.com"
            image-link="/img/testimonials/demirfit.webp"
          >
            <p>
              The website I created for DEMİRFİT was designed to bring the
              company's innovative vision and customer-centric approach to the
              digital world. Under the leadership of Dilay Demirbaş, a female
              entrepreneur and Fine Arts graduate, DEMİRFİT offers original and
              modern solutions in the workwear sector. My goal was to develop a
              user-friendly, aesthetic, and functional platform that effectively
              showcases the company's values, products, and services while
              highlighting DEMİRFİT as a trusted business partner.
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
          Side Projects
        </AppParagraph>
        <div class="grid md:grid-cols-2 gap-8 mt-12">
          <LazyTestimonialApp
            project-name="Movie App"
            job="Movie review platform"
            website-link="https://moviebusapp.netlify.app/"
            image-link="/img/testimonials/movieApp.webp"
          >
            <p>
              Movie App is a side project I developed for movie enthusiasts,
              providing a platform to discover and review films. Built using
              Vue, Tailwind CSS, and the TMDb API, this app delivers a modern
              design and user-friendly experience. This project was created to
              refine my technical skills while offering an enjoyable and
              functional platform for cinema lovers. It is designed to provide
              both entertaining and educational experiences.
            </p>
          </LazyTestimonialApp>
          <LazyTestimonialApp
            project-name="Movie Chat App"
            job="Chat application"
            website-link="https://github.com/busefilizler/movie-chat-app"
            image-link="/img/testimonials/movieChatApp.webp"
          >
            <p>
              Movie Chat App is a side project that combines real-time
              communication with a passion for movies. Developed with Vue,
              Express, and Socket.io, this app allows users to join chat rooms,
              discuss movies in real-time, and share reviews about their
              favorite films. This project was created to improve my technical
              expertise while providing a fun and engaging platform for movie
              enthusiasts.
            </p>
          </LazyTestimonialApp>
        </div>
      </div>
      <div class="mt-8">
        <div class="grid md:grid-cols-2 gap-8 mt-16">
          <LazyTestimonialApp
            project-name="Widget Dashboard"
            job="Create custom dashboard"
            website-link="https://github.com/busefilizler/widgetDashboardForVue"
            image-link="/img/testimonials/dashboard.webp"
          >
            <p>
              Dashboard App is a side project that allows users to create a
              customizable dashboard tailored to their needs. The app supports
              widgets such as a calculator, motivational quotes, weather
              updates, a clock, and live currency exchange rates. This project
              helped me enhance my skills in drag-and-drop functionality, widget
              management, and interface design, while delivering a personalized
              user experience.
            </p>
          </LazyTestimonialApp>
          <LazyTestimonialApp
            project-name="My portfolio"
            job="Online CV"
            website-link="https://busedurudogan.com"
            image-link="/img/testimonials/myPortfolio.webp"
          >
            <p>
              This portfolio site was designed to both advance my skills and
              represent my professional identity in the best possible way. Built
              with modern technologies such as Nuxt 3, Tailwind CSS, and
              TypeScript, it functions as an online CV and a platform showcasing
              my projects. With SEO optimization, fast performance, and Nuxt
              Content integration, the site provides a seamless user experience.
              Prioritizing elegance and simplicity in its design, the
              flexibility of Tailwind CSS was utilized in typography and layout
              arrangements. This project not only demonstrates my technical
              expertise but also serves as a professional digital representation
              of my work.
            </p>
          </LazyTestimonialApp>
        </div>
      </div>
    </AppSection>
  </div>
</template>
