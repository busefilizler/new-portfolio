export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      visitWebsite: 'Visit Website',
      part1: 'Hi! I am a front-end developer who tries to become a better version of herself. I love teamwork, interacting with people, and creating nice stuff I am willing to learn new technologies. I am ready to take action become part of a team and push my limits.',
      part2: 'I have experience with Vue, TailwindCSS, ElementUI, PrimeVue, Vuetify, Pinia, DevExtreme, Vuex, TypeScript, JSX, TSX, socket.io, tanstack/vue-query, Nuxt.js, and React.',
      sendMail: 'Send Email',
      downloadResume: 'Download Resume',
      about: 'About Me',
      menu: {
        home: 'Home',
        about: 'About Me',
        projects: 'My Projects',
        contact: 'Contact Me',
        experience: 'My Experiences',
      },
      footer: {
        general: 'General',
        contact: 'Contact',
        sendEmail: 'Send Email',
        copyright: 'Buse Durudoğan - Frontend Developer',
        logoCredit: 'Logo designed by',
        experience: 'Experiences',
      },
      aboutPage: {
        intro: 'I’m a passionate front-end developer based in İzmir,Turkey, always striving to become a better version of myself. I excel in collaborative environments, enjoy connecting with people, and take pride in creating meaningful and visually appealing projects. I am eager to explore new technologies, push my boundaries, and make a lasting impact as part of a dynamic team.',
        techStack: 'Tech Stack',
        intro2: 'Working with various frameworks and libraries is always a joy! If I were to choose my dream tech stack, it would include the following:',
        also: 'Additionally, my technical expertise encompasses a wide array of tools and frameworks essential for modern web development. I specialize in Vue.js (2/3), TypeScript, and design systems like Tailwind CSS, ElementUI, and Vuetify. I am proficient in Nuxt.js, Pinia, DevExtreme, and socket.io for creating seamless, interactive web applications. With a solid foundation in Git, Jira, and design tools like Figma and Adobe XD, I seamlessly combine functionality and design in every project.',
      },
      contactPage: {
        hiThere: 'Hey there!',
        intro: 'I am always happy to hear from you. If you have any questions, or feedback or just want to say hi, feel free to reach out to me on any of the platforms linked in the footer or via email.',
        intro2: 'I usually respond within 24 to 48 hours.',
      },
      projectsPage: {
        sideProjects: 'Side Projects',
        fevkinde: {
          title: 'Fevkinde Advertising Agency',
          job: 'Advertising agency',
          description: 'The website I developed for Fevkinde Advertising Agency was designed to reflect the brand creative vision and professional approach. Collaborating with industry leading brands such as Hepsiburada, Lotus, Tabasco, and Annas, Fevkinde needed a platform to showcase its strong portfolio. I aimed to create a user friendly interface with a modern design and details that capture the brand dynamic spirit, contributing to its digital presence.',
        },
        demirfit: {
          title: 'Demirfit Work Clothes',
          job: 'Work clothes',
          description: 'The website I created for DEMİRFİT was designed to bring the company\'s innovative vision and customer-centric approach to the digital world. Under the leadership of Dilay Demirbaş, a female entrepreneur and Fine Arts graduate, DEMİRFİT offers original and modern solutions in the workwear sector. My goal was to develop a user-friendly, aesthetic, and functional platform that effectively showcases the company\'s values, products, and services while highlighting DEMİRFİT as a trusted business partner.',
        },
        movieApp: {
          title: 'Movie App',
          job: 'Movie review platform',
          description:
            'Movie App is a side project I developed for movie enthusiasts, providing a platform to discover and review films. Built using Vue, Tailwind CSS, and the TMDb API, this app delivers a modern design and user-friendly experience. This project was created to refine my technical skills while offering an enjoyable and functional platform for cinema lovers. It is designed to provide both entertaining and educational experiences.',
        },
        movieChatApp: {
          title: 'Movie Chat App',
          job: 'Chat application',
          description:
            'Movie Chat App is a side project that combines real-time communication with a passion for movies. Developed with Vue, Express, and Socket.io, this app allows users to join chat rooms, discuss movies in real-time, and share reviews about their favorite films. This project was created to improve my technical expertise while providing a fun and engaging platform for movie enthusiasts.',
        },
        sudokuApp: {
          title: 'Sudoku Game',
          job: 'Interactive Sudoku game',
          description: 'Sudoku Game is an interactive web-based Sudoku application built with Vue.js and Node.js. It features multiple difficulty levels, real-time scoring, hints, leaderboard, undo/redo, and multi-language support. Technologies: Vue 3, TypeScript, Vuetify, Tailwind CSS, Node.js, Express, MongoDB.',
        },
        paymentUi: {
          title: 'Payment UI',
          job: 'React payment UI',
          description: 'A fully responsive, mobile-friendly payment screen UI built with React. Includes order details, delivery info, credit card payment, QR payment, shopping credit, split payment, and installment card payment screens. Pure UI, ready to be customized for any project.',
        },
        widgetDashboard: {
          title: 'Widget Dashboard',
          job: 'Create custom dashboard',
          description:
            'Dashboard App is a side project that allows users to create a customizable dashboard tailored to their needs. The app supports widgets such as a calculator, motivational quotes, weather updates, a clock, and live currency exchange rates. This project helped me enhance my skills in drag-and-drop functionality, widget management, and interface design, while delivering a personalized user experience.',
        },
        portfolio: {
          title: 'My portfolio',
          job: 'Online CV',
          description:
            'This portfolio site was designed to both advance my skills and represent my professional identity in the best possible way. Built with modern technologies such as Nuxt 3, Tailwind CSS, and TypeScript, it functions as an online CV and a platform showcasing my projects. With SEO optimization, fast performance, and Nuxt Content integration, the site provides a seamless user experience. Prioritizing elegance and simplicity in its design, the flexibility of Tailwind CSS was utilized in typography and layout arrangements. This project not only demonstrates my technical expertise but also serves as a professional digital representation of my work.',
        },
      },
      experiencePage: {
        digitastic: {
          titleTechnology: 'Technology',
          technology: 'Vue, Tailwind, ElementUI, PrimeVue, Vuetify, Pinia, DevExtreme, Vuex, TypeScript, JSX, TSX, socket.io, tanstack/vue-query, Nuxt',
          titleResponsibilities: 'Responsibilities',
          responsibilities: 'Develop and maintain the B2B module of an application design for German-based accounting companies. Collaborate closely with the UI/UX team to ensure a seamless and user-friendly client experience. Conduct thorough testing and debugging to ensure the B2B module functions properly and meets client needs. Provide technical support and troubleshooting assistance to clients as needed. Work with cross-functional teams to integrate the B2B module with other application parts and ensure overall functionality. Maintain clear and detailed documentation of all code changes and updates.',
        },
        uda: {
          responsibilities: 'Led a team of 4 people. Production of artificial intelligence-supported automation required for plant cultivation in soilless agriculture. Research of plants that have not been cultivated indoors but have high economic value.',
        },
      },
      educationPage: {
        title: 'Education',
        sections: [
          {
            title: 'Bachelor of Science',
            description: 'Ege University - Biology (2011 - 2016)',
          },
          {
            title: 'Master of Science',
            description: 'Ege University - Botany (2016 - 2019)',
          },
          {
            title: 'Pedagogic Formation',
            description: 'Dokuz Eylül University - Pedagogic Formation (2017 - 2018)',
          },
          {
            title: 'Bachelor of Art',
            description: 'Anadolu University - Public Relations and Advertising (2019 - 2022)',
          },
          {
            title: 'Associate Degree',
            description: 'Istanbul University - Management Information Systems (2023 - present)',
          },
        ],
      },

    },
    tr: {
      visitWebsite: 'Web Sitesini Ziyaret Et',
      part1: 'Merhaba! Kendini sürekli geliştirmeye odaklanmış bir front-end geliştiricisiyim. Takım çalışmasının gücüne inanıyor ve insanlarla etkileşimde bulunmaktan büyük keyif alıyorum. Yaratıcı projeler üzerinde çalışmak benim için bir tutku, her zaman estetik ve fonksiyonellik arasında mükemmel bir denge yakalamayı hedefliyorum. Teknolojilere olan ilgim ise her geçen gün artıyor; yeni araçlar ve teknikler öğrenmek, sınırlarımı zorlamak beni motive ediyor. Bir ekip içinde yer alarak, birlikte anlamlı projelere imza atmayı ve kendimi daha da geliştirmeyi büyük bir heyecanla bekliyorum.',
      part2: 'Vue, TailwindCSS, ElementUI, PrimeVue, Vuetify, Pinia, DevExtreme, Vuex, TypeScript, JSX, TSX, socket.io, tanstack/vue-query, Nuxt.js ve React.js ile deneyimim var.',
      sendMail: 'E-posta Gönder',
      downloadResume: 'Özgeçmiş İndir',
      about: 'Hakkımda',
      menu: {
        home: 'Ana Sayfa',
        about: 'Hakkımda',
        projects: 'Projelerim',
        contact: 'İletişim',
        experience: 'Deneyimlerim',
      },
      footer: {
        general: 'Genel',
        contact: 'İletişim',
        sendEmail: 'E-posta Gönder',
        copyright: 'Buse Durudoğan - Frontend Developer',
        logoCredit: 'Logo tasarımı',
        experience: 'Deneyimler',
      },
      aboutPage: {
        intro: 'İzmir\'de yaşayan tutkulu bir front-end geliştiriciyim. Takım çalışmasına yatkınım, insanlarla etkileşim kurmaktan keyif alıyorum ve anlamlı, görsel açıdan etkileyici projeler üretmekten gurur duyuyorum. Yeni teknolojiler keşfetmeye, sınırlarımı zorlamaya ve dinamik bir ekibin parçası olarak kalıcı bir etki yaratmaya istekliyim.',
        techStack: 'Kullandığım Teknolojiler',
        intro2: 'Çeşitli kütüphanelerle çalışmayı seviyorum. Eğer hayalimdeki teknolojileri seçecek olsaydım, aşağıdaki teknolojileri seçerdim:',
        also: 'Ayrıca, teknik uzmanlığım modern web geliştirme için temel teşkil eden geniş framework yelpazesinde derinleşmiştir. Vue.js (2/3), TypeScript, Tailwind CSS, ElementUI ve Vuetify gibi tasarım sistemlerinde uzmanım. Etkileşimli web uygulamaları geliştirme konusunda Nuxt.js, Pinia, DevExtreme ve socket.io ile yetkinim. Ayrıca, Git, Jira ve Figma gibi işbirliği araçlarının yanı sıra Adobe XD gibi tasarım platformlarında da güçlü bir altyapıya sahibim. Her projede işlevselliği ve tasarımı mükemmel bir uyum içinde birleştirme yeteneğine sahibim.',
      },
      contactPage: {
        hiThere: 'Merhaba!',
        intro: 'Sizden haber almak beni her zaman mutlu eder. Herhangi bir sorunuz, geri bildiriminiz varsa veya sadece merhaba demek istiyorsanız, alt bilgide bağlantısı verilen platformlardan veya e-posta yoluyla bana ulaşmaktan çekinmeyin.',
        intro2: 'Genellikle 24 ila 48 saat içinde yanıt veriyorum.',
      },
      projectsPage: {
        sideProjects: 'Portfolyo',
        fevkinde: {
          title: 'Fevkinde Reklam Ajansı',
          job: 'Reklam ajansı',
          description: 'Fevkinde Reklam Ajansı için hazırladığım bu web sitesi, markanın yaratıcı vizyonunu ve profesyonel yaklaşımını yansıtmak üzere tasarlandı. Hepsiburada, Lotus, Tabasco ve Annas gibi sektör lideri markalarla işbirliği yapan Fevkinde\'nin güçlü portföyünü sergileyen bir platform oluşturmayı hedefledim. Modern tasarım, kullanıcı dostu arayüz ve markanın dinamik ruhunu yansıtan detaylarla, Fevkinde\'nin dijital varlığına katkı sağladım. ',
        },
        demirfit: {
          title: 'Demirfit İş Kıyafetleri',
          job: 'İş giyim',
          description: 'DEMİRFİT için hazırladığım web sitesi, firmanın yenilikçi vizyonunu ve müşteri odaklı yaklaşımını yansıtacak şekilde tasarlandı. Güzel sanatlar fakültesi mezunu bir kadın girişimci olan Dilay Demirbaş’ın liderliğindeki DEMİRFİT, iş kıyafetleri alanında özgün ve modern çözümler sunuyor. Bu anlayışı dijital dünyaya taşımak için kullanıcı dostu, estetik ve işlevsel bir platform oluşturdum.',
        },
        movieApp: {
          title: 'Film Uygulaması',
          job: 'Film inceleme platformu',
          description:
            'Film Uygulaması, sinemaseverler için geliştirdiğim bir yan projedir ve filmleri keşfetmek ve incelemek için bir platform sunar. Vue, Tailwind CSS ve TMDb API kullanılarak oluşturulan bu uygulama, modern bir tasarım ve kullanıcı dostu bir deneyim sağlar. Teknik becerilerimi geliştirmek ve aynı zamanda eğlenceli ve işlevsel bir platform sunmak amacıyla bu projeyi geliştirdim. Hem eğitici hem de eğlenceli bir deneyim sunmak için tasarlanmıştır.',
        },
        movieChatApp: {
          title: 'Film Sohbet Uygulaması',
          job: 'Sohbet uygulaması',
          description:
            'Film Sohbet Uygulaması, gerçek zamanlı iletişimi sinema tutkusu ile birleştiren bir yan projedir. Vue, Express ve Socket.io kullanılarak geliştirilen bu uygulama, kullanıcıların sohbet odalarına katılmalarını, filmleri gerçek zamanlı olarak tartışmalarını ve favori filmleri hakkında yorum paylaşmalarını sağlar. Teknik uzmanlığımı geliştirmek ve sinemaseverler için eğlenceli ve etkileşimli bir platform sunmak amacıyla bu projeyi yarattım.',
        },
        sudokuApp: {
          title: 'Sudoku Game',
          job: 'Etkileşimli Sudoku oyunu',
          description: 'Sudoku Game, Vue.js ve Node.js ile geliştirilmiş etkileşimli bir web tabanlı Sudoku oyunudur. Birden fazla zorluk seviyesi, gerçek zamanlı puanlama, ipucu sistemi, liderlik tablosu, geri alma/yeniden yapma ve çoklu dil desteği sunar. Kullanılan teknolojiler: Vue 3, TypeScript, Vuetify, Tailwind CSS, Node.js, Express, MongoDB.',
        },
        paymentUi: {
          title: 'Payment UI',
          job: 'React ödeme arayüzü',
          description: 'React ile geliştirilmiş, tamamen responsive ve mobil uyumlu bir ödeme ekranı arayüzü. Sipariş bilgileri, teslimat bilgileri, kredi kartı ile ödeme, QR ile ödeme, alışveriş kredisi, parçalı ödeme ve taksitli kredi kartı ile ödeme ekranlarını içerir. Sadece arayüzdür, isteyen kendi projesine entegre edebilir.',
        },
        widgetDashboard: {
          title: 'Widget Kontrol Paneli',
          job: 'Özelleştirilebilir kontrol paneli oluşturma',
          description:
            'Kontrol Paneli Uygulaması, kullanıcıların ihtiyaçlarına göre özelleştirilebilen bir kontrol paneli oluşturmasını sağlayan bir yan projedir. Uygulama; hesap makinesi, motivasyonel sözler, hava durumu güncellemeleri, saat ve canlı döviz kuru gibi widgetları destekler. Bu proje, sürükle bırak işlevselliği, widget yönetimi ve arayüz tasarımı konularında becerilerimi geliştirmeme yardımcı olurken, kişiselleştirilmiş bir kullanıcı deneyimi sunmayı amaçladı.',
        },
        portfolio: {
          title: 'Portföyüm',
          job: 'Online CV',
          description:
            'Bu portföy sitesi, hem becerilerimi geliştirmek hem de profesyonel kimliğimi en iyi şekilde temsil etmek amacıyla tasarlandı. Nuxt 3, Tailwind CSS ve TypeScript gibi modern teknolojilerle oluşturulan bu site, projelerimi sergileyen bir platform ve çevrimiçi bir CV işlevi görür. SEO optimizasyonu, hızlı performans ve Nuxt Content entegrasyonu ile site, kesintisiz bir kullanıcı deneyimi sunar. Tasarımında zarafet ve sadelik öncelikli olarak, Tailwind CSS\'in esnekliği tipografi ve düzen düzenlemelerinde kullanıldı. Bu proje, teknik uzmanlığımı gösterirken aynı zamanda çalışmalarımın profesyonel bir dijital temsili olarak hizmet ediyor.',
        },
      },
      experiencePage: {
        digitastic: {
          titleTechnology: 'Teknolojiler',
          technology: 'Vue, Tailwind, ElementUI, PrimeVue, Vuetify, Pinia, DevExtreme, Vuex, TypeScript, JSX, TSX, socket.io, tanstack/vue-query, Nuxt',
          titleResponsibilities: 'Sorumluluklar',
          responsibilities: 'Almanya merkezli muhasebe şirketleri için tasarlanmış bir uygulamanın B2B modülünü geliştirmek ve sürdürmek. Kullanıcı dostu ve sorunsuz bir müşteri deneyimi sağlamak için UI/UX ekibiyle yakın iş birliği yapmak. B2B modülünün düzgün çalışmasını ve müşteri ihtiyaçlarını karşılamasını sağlamak için kapsamlı testler ve hata ayıklama yapmak. Gerekli durumlarda müşterilere teknik destek ve sorun giderme desteği sağlamak. B2B modülünü diğer uygulama parçalarıyla entegre etmek ve genel işlevselliği sağlamak için çapraz fonksiyonel ekiplerle çalışmak. Tüm kod değişiklikleri ve güncellemelerin net ve ayrıntılı belgelerini tutmak.',
        },
        uda: {
          responsibilities: '4 kişilik bir ekibi yönetti. Topraksız tarımda bitki yetiştirilmesi için gerekli olan yapay zeka destekli otomasyon üretimi. Kapalı alanda yetiştirilmeyen ancak yüksek ekonomik değere sahip bitkilerin araştırılması.',
        },
      },
      educationPage: {
        title: 'Eğitim',
        sections: [
          {
            title: 'Fen Bilimleri Lisansı',
            description: 'Ege Üniversitesi - Biyoloji (2011 - 2016)',
          },
          {
            title: 'Fen Bilimleri Yüksek Lisansı',
            description: 'Ege Üniversitesi - Botanik (2016 - 2019)',
          },
          {
            title: 'Pedagojik Formasyon',
            description: 'Dokuz Eylül Üniversitesi - Pedagojik Formasyon (2017 - 2018)',
          },
          {
            title: 'İletişim Bilimleri Lisansı',
            description: 'Anadolu Üniversitesi - Halkla İlişkiler ve Reklamcılık (2019 - 2022)',
          },
          {
            title: 'Önlisans',
            description: 'İstanbul Üniversitesi - Yönetim Bilişim Sistemleri (2023 - halen)',
          },
        ],
      },
    },
  },
}))
